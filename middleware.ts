import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LOCALES = ['es', 'fr', 'de', 'pt'] as const;
type NonEnglishLocale = (typeof SUPPORTED_LOCALES)[number];

const LOCALE_COOKIE = 'worldspend_locale';

/**
 * Extracts and detects the best matching locale from Accept-Language header
 */
function getPreferredLocale(acceptLanguageHeader: string | null): NonEnglishLocale | 'en' {
  if (!acceptLanguageHeader) return 'en';

  // Accept-Language format: "es-ES,es;q=0.9,en-US;q=0.8,en;q=0.7"
  const languages = acceptLanguageHeader
    .split(',')
    .map((lang) => {
      const [code, priority] = lang.trim().split(';q=');
      return {
        code: code.trim().toLowerCase(),
        quality: priority ? parseFloat(priority) : 1.0,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { code } of languages) {
    // Exact or prefix match (e.g. "es-ES" -> "es", "fr-CA" -> "fr", "de-DE" -> "de", "pt-BR" -> "pt")
    const primary = code.split('-')[0];
    if (primary === 'en') return 'en';
    if (SUPPORTED_LOCALES.includes(primary as NonEnglishLocale)) {
      return primary as NonEnglishLocale;
    }
  }

  return 'en';
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static assets, internal Next.js routes, API routes, embed routes, and public files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/embed') ||
    pathname.includes('.') || // Static files (.ico, .png, .jpg, .svg, .json, .txt)
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return NextResponse.next();
  }

  // Check if pathname already starts with a supported locale (/es, /fr, /de, /pt)
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  // Localized static page slug handling (calculator, cookies, privacy, terms, legal)
  let locale: 'en' | NonEnglishLocale = 'en';
  let cleanPath = pathname;
  const matchedLocale = SUPPORTED_LOCALES.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (matchedLocale) {
    locale = matchedLocale;
    cleanPath = pathname.substring(matchedLocale.length + 1);
  }
  if (cleanPath === '') cleanPath = '/';

  const requestedSlug = cleanPath.startsWith('/') ? cleanPath.substring(1) : cleanPath;
  const staticSlugs: Record<string, Record<string, string>> = {
    en: { calculator: 'calculator', cookies: 'cookies', privacy: 'privacy', terms: 'terms', legal: 'legal' },
    es: { calculadora: 'calculator', cookies: 'cookies', privacidad: 'privacy', condiciones: 'terms', legal: 'legal' },
    fr: { calculatrice: 'calculator', cookies: 'cookies', confidentialite: 'privacy', conditions: 'terms', mentions: 'legal' },
    de: { rechner: 'calculator', cookies: 'cookies', datenschutz: 'privacy', bedingungen: 'terms', impressum: 'legal' },
    pt: { calculadora: 'calculator', cookies: 'cookies', privacidade: 'privacy', termos: 'terms', legal: 'legal' },
  };

  const dictionary = staticSlugs[locale] || staticSlugs.en;
  
  // 1. If requesting a localized slug, rewrite it internally to the technical page
  const technicalPage = dictionary[requestedSlug];
  if (technicalPage) {
    const targetUrl = new URL(locale === 'en' ? `/${technicalPage}` : `/${locale}/${technicalPage}`, request.url);
    targetUrl.search = request.nextUrl.search;
    return NextResponse.rewrite(targetUrl);
  }

  // 2. If requesting a raw technical page directly, redirect them to the localized slug
  const reversedEntry = Object.entries(dictionary).find(([key, val]) => val === requestedSlug);
  if (reversedEntry) {
    const localizedSlug = reversedEntry[0];
    const targetUrl = new URL(locale === 'en' ? `/${localizedSlug}` : `/${locale}/${localizedSlug}`, request.url);
    targetUrl.search = request.nextUrl.search;
    return NextResponse.redirect(targetUrl);
  }

  // If user is already on a localized route, save/update their preferred locale cookie
  if (pathnameHasLocale) {
    const currentLocale = pathname.split('/')[1];
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, currentLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
    });
    return response;
  }

  // User is on a default root route (e.g. "/", "/stat/something", "/compare")
  // Check if user has an explicit cookie saved
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;

  if (cookieLocale) {
    if (cookieLocale === 'en') {
      // User explicitly wants English on root
      return NextResponse.next();
    }
    if (SUPPORTED_LOCALES.includes(cookieLocale as NonEnglishLocale)) {
      // Redirect to user's saved preferred locale
      const targetUrl = new URL(`/${cookieLocale}${pathname === '/' ? '' : pathname}`, request.url);
      targetUrl.search = request.nextUrl.search;
      return NextResponse.redirect(targetUrl);
    }
  }

  // No cookie exists yet -> Detect from Browser Accept-Language header
  const detectedLocale = getPreferredLocale(request.headers.get('accept-language'));

  if (detectedLocale !== 'en' && SUPPORTED_LOCALES.includes(detectedLocale)) {
    // Automatically redirect browser to their native language route
    const targetUrl = new URL(`/${detectedLocale}${pathname === '/' ? '' : pathname}`, request.url);
    targetUrl.search = request.nextUrl.search;

    const response = NextResponse.redirect(targetUrl);
    response.cookies.set(LOCALE_COOKIE, detectedLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
    });
    return response;
  }

  // Default to English
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
