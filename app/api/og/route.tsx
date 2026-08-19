import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'WorldSpend.org';
  const subtitle = searchParams.get('sub') || 'Real-Time Global Expenditure Statistics';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'between',
          backgroundColor: '#16385c',
          backgroundImage: 'linear-gradient(to bottom, #245280, #16385c)',
          padding: '60px',
          fontFamily: 'sans-serif',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          <span style={{ fontSize: 36, fontWeight: 900, letterSpacing: '-0.05em', color: '#ffffff' }}>
            WORLDSPEND.ORG
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '40px' }}>
          <div style={{ fontSize: 20, fontWeight: 700, textTransform: 'uppercase', color: '#93c5fd', letterSpacing: '0.1em' }}>
            LIVE MACROECONOMIC COUNTER
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.1,
              maxHeight: '180px',
              overflow: 'hidden',
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 24, color: '#cbd5e1', lineHeight: 1.4 }}>
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 'auto',
            paddingTop: '20px',
            borderTop: '2px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          <span style={{ fontSize: 18, color: '#93c5fd', fontWeight: 600 }}>
            ⚡ Live 60 FPS Real-Time Financial Clock
          </span>
          <span style={{ fontSize: 18, color: '#fcd34d', fontWeight: 700 }}>
            WorldSpend Statistics 2026
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
