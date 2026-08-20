// Datos de PIB nominal por países (en millones de USD) correspondientes a 2025/2024
// Fuentes oficiales: Banco Mundial (NY.GDP.MKTP.CD), DatosMacro (Expansión) y Wikipedia (Anexo:Países por PIB nominal)

export interface CountryGdpData {
  id: string;
  nameEs: string;
  nameEn: string;
  nameFr: string;
  nameDe: string;
  namePt: string;
  gdpMillionsUSD: number; // PIB nominal en millones de USD
  year: number;
  sources: { name: string; url: string }[];
}

export const COUNTRIES_GDP_DATA: CountryGdpData[] = [
  {
    id: 'gdp-afghanistan',
    nameEs: 'Afganistán',
    nameEn: 'Afghanistan',
    nameFr: 'Afghanistan',
    nameDe: 'Afghanistan',
    namePt: 'Afeganistão',
    gdpMillionsUSD: 17778.51,
    year: 2024,
    sources: [
      { name: 'Banco Mundial — PIB Afganistán', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=AF' },
      { name: 'DatosMacro — PIB Afganistán', url: 'https://datosmacro.expansion.com/pib/afganistan' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-albania',
    nameEs: 'Albania',
    nameEn: 'Albania',
    nameFr: 'Albanie',
    nameDe: 'Albanien',
    namePt: 'Albânia',
    gdpMillionsUSD: 30540.19,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Albania', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=AL' },
      { name: 'DatosMacro — PIB Albania', url: 'https://datosmacro.expansion.com/pib/albania' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-germany',
    nameEs: 'Alemania',
    nameEn: 'Germany',
    nameFr: 'Allemagne',
    nameDe: 'Deutschland',
    namePt: 'Alemanha',
    gdpMillionsUSD: 5050922.93,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Alemania', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=DE' },
      { name: 'DatosMacro — PIB Alemania', url: 'https://datosmacro.expansion.com/pib/alemania' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-andorra',
    nameEs: 'Andorra',
    nameEn: 'Andorra',
    nameFr: 'Andorre',
    nameDe: 'Andorra',
    namePt: 'Andorra',
    gdpMillionsUSD: 4500.98,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Andorra', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=AD' },
      { name: 'DatosMacro — PIB Andorra', url: 'https://datosmacro.expansion.com/pib/andorra' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-angola',
    nameEs: 'Angola',
    nameEn: 'Angola',
    nameFr: 'Angola',
    nameDe: 'Angola',
    namePt: 'Angola',
    gdpMillionsUSD: 122174.89,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Angola', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=AO' },
      { name: 'DatosMacro — PIB Angola', url: 'https://datosmacro.expansion.com/pib/angola' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-antigua-and-barbuda',
    nameEs: 'Antigua y Barbuda',
    nameEn: 'Antigua and Barbuda',
    nameFr: 'Antigua-et-Barbuda',
    nameDe: 'Antigua und Barbuda',
    namePt: 'Antígua e Barbuda',
    gdpMillionsUSD: 2338.20,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Antigua y Barbuda', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=AG' },
      { name: 'DatosMacro — PIB Antigua y Barbuda', url: 'https://datosmacro.expansion.com/pib/antigua-barbuda' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-saudi-arabia',
    nameEs: 'Arabia Saudita',
    nameEn: 'Saudi Arabia',
    nameFr: 'Arabie saoudite',
    nameDe: 'Saudi-Arabien',
    namePt: 'Arábia Saudita',
    gdpMillionsUSD: 1276942.93,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Arabia Saudita', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SA' },
      { name: 'DatosMacro — PIB Arabia Saudita', url: 'https://datosmacro.expansion.com/pib/arabia-saudita' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-algeria',
    nameEs: 'Argelia',
    nameEn: 'Algeria',
    nameFr: 'Algérie',
    nameDe: 'Algerien',
    namePt: 'Argélia',
    gdpMillionsUSD: 287031.23,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Argelia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=DZ' },
      { name: 'DatosMacro — PIB Argelia', url: 'https://datosmacro.expansion.com/pib/argelia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-argentina',
    nameEs: 'Argentina',
    nameEn: 'Argentina',
    nameFr: 'Argentine',
    nameDe: 'Argentinien',
    namePt: 'Argentina',
    gdpMillionsUSD: 683097.89,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Argentina', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=AR' },
      { name: 'DatosMacro — PIB Argentina', url: 'https://datosmacro.expansion.com/pib/argentina' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-armenia',
    nameEs: 'Armenia',
    nameEn: 'Armenia',
    nameFr: 'Arménie',
    nameDe: 'Armenien',
    namePt: 'Armênia',
    gdpMillionsUSD: 29243.45,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Armenia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=AM' },
      { name: 'DatosMacro — PIB Armenia', url: 'https://datosmacro.expansion.com/pib/armenia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-aruba',
    nameEs: 'Aruba',
    nameEn: 'Aruba',
    nameFr: 'Aruba',
    nameDe: 'Aruba',
    namePt: 'Aruba',
    gdpMillionsUSD: 4167.59,
    year: 2024,
    sources: [
      { name: 'Banco Mundial — PIB Aruba', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=AW' },
      { name: 'DatosMacro — PIB Aruba', url: 'https://datosmacro.expansion.com/pib/aruba' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-australia',
    nameEs: 'Australia',
    nameEn: 'Australia',
    nameFr: 'Australie',
    nameDe: 'Australien',
    namePt: 'Austrália',
    gdpMillionsUSD: 1798518.93,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Australia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=AU' },
      { name: 'DatosMacro — PIB Australia', url: 'https://datosmacro.expansion.com/pib/australia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-austria',
    nameEs: 'Austria',
    nameEn: 'Austria',
    nameFr: 'Autriche',
    nameDe: 'Österreich',
    namePt: 'Áustria',
    gdpMillionsUSD: 579470.02,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Austria', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=AT' },
      { name: 'DatosMacro — PIB Austria', url: 'https://datosmacro.expansion.com/pib/austria' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-azerbaijan',
    nameEs: 'Azerbaiyán',
    nameEn: 'Azerbaijan',
    nameFr: 'Azerbaïdjan',
    nameDe: 'Aserbaidschan',
    namePt: 'Azerbaijão',
    gdpMillionsUSD: 75937.65,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Azerbaiyán', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=AZ' },
      { name: 'DatosMacro — PIB Azerbaiyán', url: 'https://datosmacro.expansion.com/pib/azerbaijan' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-bahamas',
    nameEs: 'Bahamas',
    nameEn: 'Bahamas',
    nameFr: 'Bahamas',
    nameDe: 'Bahamas',
    namePt: 'Bahamas',
    gdpMillionsUSD: 15832.80,
    year: 2024,
    sources: [
      { name: 'Banco Mundial — PIB Bahamas', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BS' },
      { name: 'DatosMacro — PIB Bahamas', url: 'https://datosmacro.expansion.com/pib/bahamas' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-bahrain',
    nameEs: 'Bahrein',
    nameEn: 'Bahrain',
    nameFr: 'Bahreïn',
    nameDe: 'Bahrain',
    namePt: 'Bahrein',
    gdpMillionsUSD: 48965.73,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Bahrein', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BH' },
      { name: 'DatosMacro — PIB Bahrein', url: 'https://datosmacro.expansion.com/pib/bahrein' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-bangladesh',
    nameEs: 'Bangladesh',
    nameEn: 'Bangladesh',
    nameFr: 'Bangladesh',
    nameDe: 'Bangladesch',
    namePt: 'Bangladesh',
    gdpMillionsUSD: 456319.23,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Bangladesh', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BD' },
      { name: 'DatosMacro — PIB Bangladesh', url: 'https://datosmacro.expansion.com/pib/bangladesh' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-barbados',
    nameEs: 'Barbados',
    nameEn: 'Barbados',
    nameFr: 'Barbade',
    nameDe: 'Barbados',
    namePt: 'Barbados',
    gdpMillionsUSD: 8016.55,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Barbados', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BB' },
      { name: 'DatosMacro — PIB Barbados', url: 'https://datosmacro.expansion.com/pib/barbados' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-belarus',
    nameEs: 'Belarús',
    nameEn: 'Belarus',
    nameFr: 'Bélarus',
    nameDe: 'Belarus',
    namePt: 'Bielorrússia',
    gdpMillionsUSD: 93397.22,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Belarús', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BY' },
      { name: 'DatosMacro — PIB Belarús', url: 'https://datosmacro.expansion.com/pib/bielorrusia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-belgium',
    nameEs: 'Bélgica',
    nameEn: 'Belgium',
    nameFr: 'Belgique',
    nameDe: 'Belgien',
    namePt: 'Bélgica',
    gdpMillionsUSD: 725466.46,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Bélgica', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BE' },
      { name: 'DatosMacro — PIB Bélgica', url: 'https://datosmacro.expansion.com/pib/belgica' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-belize',
    nameEs: 'Belice',
    nameEn: 'Belize',
    nameFr: 'Belize',
    nameDe: 'Belize',
    namePt: 'Belize',
    gdpMillionsUSD: 3326.50,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Belice', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BZ' },
      { name: 'DatosMacro — PIB Belice', url: 'https://datosmacro.expansion.com/pib/belice' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-benin',
    nameEs: 'Benin',
    nameEn: 'Benin',
    nameFr: 'Bénin',
    nameDe: 'Benin',
    namePt: 'Benin',
    gdpMillionsUSD: 24566.42,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Benin', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BJ' },
      { name: 'DatosMacro — PIB Benin', url: 'https://datosmacro.expansion.com/pib/benin' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-bermuda',
    nameEs: 'Bermudas',
    nameEn: 'Bermuda',
    nameFr: 'Bermudes',
    nameDe: 'Bermuda',
    namePt: 'Bermudas',
    gdpMillionsUSD: 9194.50,
    year: 2024,
    sources: [
      { name: 'Banco Mundial — PIB Bermudas', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BM' },
      { name: 'DatosMacro — PIB Bermudas', url: 'https://datosmacro.expansion.com/pib/bermudas' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-bhutan',
    nameEs: 'Bhután',
    nameEn: 'Bhutan',
    nameFr: 'Bhoutan',
    nameDe: 'Bhutan',
    namePt: 'Butão',
    gdpMillionsUSD: 3579.32,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Bhután', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BT' },
      { name: 'DatosMacro — PIB Bhután', url: 'https://datosmacro.expansion.com/pib/bhutan' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-bolivia',
    nameEs: 'Bolivia',
    nameEn: 'Bolivia',
    nameFr: 'Bolivie',
    nameDe: 'Bolivien',
    namePt: 'Bolívia',
    gdpMillionsUSD: 64768.95,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Bolivia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BO' },
      { name: 'DatosMacro — PIB Bolivia', url: 'https://datosmacro.expansion.com/pib/bolivia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-bosnia-and-herzegovina',
    nameEs: 'Bosnia y Herzegovina',
    nameEn: 'Bosnia and Herzegovina',
    nameFr: 'Bosnie-Herzégovine',
    nameDe: 'Bosnien und Herzegowina',
    namePt: 'Bósnia e Herzegovina',
    gdpMillionsUSD: 32599.98,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Bosnia y Herzegovina', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BA' },
      { name: 'DatosMacro — PIB Bosnia y Herzegovina', url: 'https://datosmacro.expansion.com/pib/bosnia-herzegovina' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-botswana',
    nameEs: 'Botswana',
    nameEn: 'Botswana',
    nameFr: 'Botswana',
    nameDe: 'Botswana',
    namePt: 'Botsuana',
    gdpMillionsUSD: 19928.48,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Botswana', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BW' },
      { name: 'DatosMacro — PIB Botswana', url: 'https://datosmacro.expansion.com/pib/botsuana' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-brazil',
    nameEs: 'Brasil',
    nameEn: 'Brazil',
    nameFr: 'Brésil',
    nameDe: 'Brasilien',
    namePt: 'Brasil',
    gdpMillionsUSD: 2279920.09,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Brasil', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BR' },
      { name: 'DatosMacro — PIB Brasil', url: 'https://datosmacro.expansion.com/pib/brasil' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-brunei',
    nameEs: 'Brunei Darussalam',
    nameEn: 'Brunei Darussalam',
    nameFr: 'Brunei',
    nameDe: 'Brunei',
    namePt: 'Brunei',
    gdpMillionsUSD: 15031.98,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Brunei', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BN' },
      { name: 'DatosMacro — PIB Brunei', url: 'https://datosmacro.expansion.com/pib/brunei' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-bulgaria',
    nameEs: 'Bulgaria',
    nameEn: 'Bulgaria',
    nameFr: 'Bulgarie',
    nameDe: 'Bulgarien',
    namePt: 'Bulgária',
    gdpMillionsUSD: 130777.24,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Bulgaria', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BG' },
      { name: 'DatosMacro — PIB Bulgaria', url: 'https://datosmacro.expansion.com/pib/bulgaria' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-burkina-faso',
    nameEs: 'Burkina Faso',
    nameEn: 'Burkina Faso',
    nameFr: 'Burkina Faso',
    nameDe: 'Burkina Faso',
    namePt: 'Burkina Faso',
    gdpMillionsUSD: 27627.30,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Burkina Faso', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BF' },
      { name: 'DatosMacro — PIB Burkina Faso', url: 'https://datosmacro.expansion.com/pib/burkina-faso' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-burundi',
    nameEs: 'Burundi',
    nameEn: 'Burundi',
    nameFr: 'Burundi',
    nameDe: 'Burundi',
    namePt: 'Burundi',
    gdpMillionsUSD: 3364.71,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Burundi', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=BI' },
      { name: 'DatosMacro — PIB Burundi', url: 'https://datosmacro.expansion.com/pib/burundi' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-cape-verde',
    nameEs: 'Cabo Verde',
    nameEn: 'Cabo Verde',
    nameFr: 'Cap-Vert',
    nameDe: 'Kape Verde',
    namePt: 'Cabo Verde',
    gdpMillionsUSD: 3056.63,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Cabo Verde', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=CV' },
      { name: 'DatosMacro — PIB Cabo Verde', url: 'https://datosmacro.expansion.com/pib/cabo-verde' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-cambodia',
    nameEs: 'Camboya',
    nameEn: 'Cambodia',
    nameFr: 'Cambodge',
    nameDe: 'Kambodscha',
    namePt: 'Camboja',
    gdpMillionsUSD: 51267.07,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Camboya', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=KH' },
      { name: 'DatosMacro — PIB Camboya', url: 'https://datosmacro.expansion.com/pib/camboya' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-cameroon',
    nameEs: 'Camerún',
    nameEn: 'Cameroon',
    nameFr: 'Cameroun',
    nameDe: 'Kamerun',
    namePt: 'Camarões',
    gdpMillionsUSD: 58933.45,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Camerún', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=CM' },
      { name: 'DatosMacro — PIB Camerún', url: 'https://datosmacro.expansion.com/pib/camerun' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-canada',
    nameEs: 'Canadá',
    nameEn: 'Canada',
    nameFr: 'Canada',
    nameDe: 'Kanada',
    namePt: 'Canadá',
    gdpMillionsUSD: 2319899.77,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Canadá', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=CA' },
      { name: 'DatosMacro — PIB Canadá', url: 'https://datosmacro.expansion.com/pib/canada' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-chad',
    nameEs: 'Chad',
    nameEn: 'Chad',
    nameFr: 'Tchad',
    nameDe: 'Tschad',
    namePt: 'Chade',
    gdpMillionsUSD: 21472.84,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Chad', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=TD' },
      { name: 'DatosMacro — PIB Chad', url: 'https://datosmacro.expansion.com/pib/chad' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-chile',
    nameEs: 'Chile',
    nameEn: 'Chile',
    nameFr: 'Chili',
    nameDe: 'Chile',
    namePt: 'Chile',
    gdpMillionsUSD: 357371.16,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Chile', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=CL' },
      { name: 'DatosMacro — PIB Chile', url: 'https://datosmacro.expansion.com/pib/chile' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-china',
    nameEs: 'China',
    nameEn: 'China',
    nameFr: 'Chine',
    nameDe: 'China',
    namePt: 'China',
    gdpMillionsUSD: 19498039.39,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB China', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=CN' },
      { name: 'DatosMacro — PIB China', url: 'https://datosmacro.expansion.com/pib/china' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-cyprus',
    nameEs: 'Chipre',
    nameEn: 'Cyprus',
    nameFr: 'Chypre',
    nameDe: 'Zypern',
    namePt: 'Chipre',
    gdpMillionsUSD: 41225.79,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Chipre', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=CY' },
      { name: 'DatosMacro — PIB Chipre', url: 'https://datosmacro.expansion.com/pib/chipre' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-colombia',
    nameEs: 'Colombia',
    nameEn: 'Colombia',
    nameFr: 'Colombie',
    nameDe: 'Kolumbien',
    namePt: 'Colômbia',
    gdpMillionsUSD: 457410.03,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Colombia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=CO' },
      { name: 'DatosMacro — PIB Colombia', url: 'https://datosmacro.expansion.com/pib/colombia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-comoros',
    nameEs: 'Comoras',
    nameEn: 'Comoros',
    nameFr: 'Comores',
    nameDe: 'Komoren',
    namePt: 'Comores',
    gdpMillionsUSD: 1814.92,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Comoras', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=KM' },
      { name: 'DatosMacro — PIB Comoras', url: 'https://datosmacro.expansion.com/pib/comoras' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-dr-congo',
    nameEs: 'Congo, República Democrática del',
    nameEn: 'DR Congo',
    nameFr: 'RDC',
    nameDe: 'Demokratische Republik Kongo',
    namePt: 'República Democrática do Congo',
    gdpMillionsUSD: 91030.53,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB RD Congo', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=CD' },
      { name: 'DatosMacro — PIB RD Congo', url: 'https://datosmacro.expansion.com/pib/republica-democratica-congo' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-republic-congo',
    nameEs: 'Congo, República del',
    nameEn: 'Republic of the Congo',
    nameFr: 'République du Congo',
    nameDe: 'Republik Kongo',
    namePt: 'República do Congo',
    gdpMillionsUSD: 16306.63,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Congo', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=CG' },
      { name: 'DatosMacro — PIB Congo', url: 'https://datosmacro.expansion.com/pib/congo' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-south-korea',
    nameEs: 'Corea, República de',
    nameEn: 'South Korea',
    nameFr: 'Corée du Sud',
    nameDe: 'Südkorea',
    namePt: 'Coreia do Sul',
    gdpMillionsUSD: 1872374.96,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Corea del Sur', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=KR' },
      { name: 'DatosMacro — PIB Corea del Sur', url: 'https://datosmacro.expansion.com/pib/corea-del-sur' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-costa-rica',
    nameEs: 'Costa Rica',
    nameEn: 'Costa Rica',
    nameFr: 'Costa Rica',
    nameDe: 'Costa Rica',
    namePt: 'Costa Rica',
    gdpMillionsUSD: 102904.92,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Costa Rica', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=CR' },
      { name: 'DatosMacro — PIB Costa Rica', url: 'https://datosmacro.expansion.com/pib/costa-rica' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-cote-d-ivoire',
    nameEs: 'Côte d\'Ivoire',
    nameEn: 'Côte d\'Ivoire',
    nameFr: 'Côte d\'Ivoire',
    nameDe: 'Elfenbeinküste',
    namePt: 'Costa do Marfim',
    gdpMillionsUSD: 99773.56,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Costa de Marfil', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=CI' },
      { name: 'DatosMacro — PIB Costa de Marfil', url: 'https://datosmacro.expansion.com/pib/costa-marfil' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-croatia',
    nameEs: 'Croacia',
    nameEn: 'Croatia',
    nameFr: 'Croatie',
    nameDe: 'Kroatien',
    namePt: 'Croácia',
    gdpMillionsUSD: 105060.18,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Croacia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=HR' },
      { name: 'DatosMacro — PIB Croacia', url: 'https://datosmacro.expansion.com/pib/croacia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-cuba',
    nameEs: 'Cuba',
    nameEn: 'Cuba',
    nameFr: 'Cuba',
    nameDe: 'Kuba',
    namePt: 'Cuba',
    gdpMillionsUSD: 107352.00,
    year: 2020,
    sources: [
      { name: 'Banco Mundial — PIB Cuba', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=CU' },
      { name: 'DatosMacro — PIB Cuba', url: 'https://datosmacro.expansion.com/pib/cuba' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-curacao',
    nameEs: 'Curazao',
    nameEn: 'Curaçao',
    nameFr: 'Curaçao',
    nameDe: 'Curaçao',
    namePt: 'Curaçao',
    gdpMillionsUSD: 3561.18,
    year: 2024,
    sources: [
      { name: 'Banco Mundial — PIB Curazao', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=CW' },
      { name: 'DatosMacro — PIB Curazao', url: 'https://datosmacro.expansion.com/pib/curazao' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-denmark',
    nameEs: 'Dinamarca',
    nameEn: 'Denmark',
    nameFr: 'Danemark',
    nameDe: 'Dänemark',
    namePt: 'Dinamarca',
    gdpMillionsUSD: 462526.66,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Dinamarca', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=DK' },
      { name: 'DatosMacro — PIB Dinamarca', url: 'https://datosmacro.expansion.com/pib/dinamarca' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-djibouti',
    nameEs: 'Djibouti',
    nameEn: 'Djibouti',
    nameFr: 'Djibouti',
    nameDe: 'Dschibuti',
    namePt: 'Djibuti',
    gdpMillionsUSD: 4624.53,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Djibouti', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=DJ' },
      { name: 'DatosMacro — PIB Djibouti', url: 'https://datosmacro.expansion.com/pib/yibuti' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-dominica',
    nameEs: 'Dominica',
    nameEn: 'Dominica',
    nameFr: 'Dominique',
    nameDe: 'Dominica',
    namePt: 'Dominica',
    gdpMillionsUSD: 723.86,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Dominica', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=DM' },
      { name: 'DatosMacro — PIB Dominica', url: 'https://datosmacro.expansion.com/pib/dominica' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-ecuador',
    nameEs: 'Ecuador',
    nameEn: 'Ecuador',
    nameFr: 'Équateur',
    nameDe: 'Ecuador',
    namePt: 'Equador',
    gdpMillionsUSD: 130320.56,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Ecuador', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=EC' },
      { name: 'DatosMacro — PIB Ecuador', url: 'https://datosmacro.expansion.com/pib/ecuador' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-egypt',
    nameEs: 'Egipto, República Árabe de',
    nameEn: 'Egypt',
    nameFr: 'Égypte',
    nameDe: 'Ägypten',
    namePt: 'Egito',
    gdpMillionsUSD: 365254.63,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Egipto', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=EG' },
      { name: 'DatosMacro — PIB Egipto', url: 'https://datosmacro.expansion.com/pib/egipto' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-el-salvador',
    nameEs: 'El Salvador',
    nameEn: 'El Salvador',
    nameFr: 'El Salvador',
    nameDe: 'El Salvador',
    namePt: 'El Salvador',
    gdpMillionsUSD: 36708.11,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB El Salvador', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SV' },
      { name: 'DatosMacro — PIB El Salvador', url: 'https://datosmacro.expansion.com/pib/el-salvador' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-united-arab-emirates',
    nameEs: 'Emiratos Árabes Unidos',
    nameEn: 'United Arab Emirates',
    nameFr: 'Émirats arabes unis',
    nameDe: 'Vereinigte Arabische Emirate',
    namePt: 'Emirados Árabes Unidos',
    gdpMillionsUSD: 552324.92,
    year: 2024,
    sources: [
      { name: 'Banco Mundial — PIB Emiratos Árabes Unidos', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=AE' },
      { name: 'DatosMacro — PIB Emiratos Árabes Unidos', url: 'https://datosmacro.expansion.com/pib/emiratos-arabes-unidos' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-eritrea',
    nameEs: 'Eritrea',
    nameEn: 'Eritrea',
    nameFr: 'Érythrée',
    nameDe: 'Eritrea',
    namePt: 'Eritreia',
    gdpMillionsUSD: 2065.00,
    year: 2011,
    sources: [
      { name: 'Banco Mundial — PIB Eritrea', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=ER' },
      { name: 'DatosMacro — PIB Eritrea', url: 'https://datosmacro.expansion.com/pib/eritrea' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-slovenia',
    nameEs: 'Eslovenia',
    nameEn: 'Slovenia',
    nameFr: 'Slovénie',
    nameDe: 'Slowenien',
    namePt: 'Eslovênia',
    gdpMillionsUSD: 79648.20,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Eslovenia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SI' },
      { name: 'DatosMacro — PIB Eslovenia', url: 'https://datosmacro.expansion.com/pib/eslovenia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-spain',
    nameEs: 'España',
    nameEn: 'Spain',
    nameFr: 'Espagne',
    nameDe: 'Spanien',
    namePt: 'Espanha',
    gdpMillionsUSD: 1906453.31,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB España', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=ES' },
      { name: 'DatosMacro — PIB España', url: 'https://datosmacro.expansion.com/pib/espana' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-united-states',
    nameEs: 'Estados Unidos',
    nameEn: 'United States',
    nameFr: 'États-Unis',
    nameDe: 'Vereinigte Staaten',
    namePt: 'Estados Unidos',
    gdpMillionsUSD: 30769700.00,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Estados Unidos', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=US' },
      { name: 'DatosMacro — PIB Estados Unidos', url: 'https://datosmacro.expansion.com/pib/usa' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-estonia',
    nameEs: 'Estonia',
    nameEn: 'Estonia',
    nameFr: 'Estonie',
    nameDe: 'Estland',
    namePt: 'Estônia',
    gdpMillionsUSD: 47030.83,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Estonia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=EE' },
      { name: 'DatosMacro — PIB Estonia', url: 'https://datosmacro.expansion.com/pib/estonia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-eswatini',
    nameEs: 'Eswatini',
    nameEn: 'Eswatini',
    nameFr: 'Eswatini',
    nameDe: 'Eswatini',
    namePt: 'Eswatini',
    gdpMillionsUSD: 5160.68,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Eswatini', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SZ' },
      { name: 'DatosMacro — PIB Eswatini', url: 'https://datosmacro.expansion.com/pib/suazilandia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-ethiopia',
    nameEs: 'Etiopía',
    nameEn: 'Ethiopia',
    nameFr: 'Éthiopie',
    nameDe: 'Äthiopien',
    namePt: 'Etiópia',
    gdpMillionsUSD: 126358.76,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Etiopía', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=ET' },
      { name: 'DatosMacro — PIB Etiopía', url: 'https://datosmacro.expansion.com/pib/etiopia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-russia',
    nameEs: 'Federación de Rusia',
    nameEn: 'Russia',
    nameFr: 'Russie',
    nameDe: 'Russland',
    namePt: 'Rússia',
    gdpMillionsUSD: 2561310.17,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Rusia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=RU' },
      { name: 'DatosMacro — PIB Rusia', url: 'https://datosmacro.expansion.com/pib/rusia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-fiji',
    nameEs: 'Fiji',
    nameEn: 'Fiji',
    nameFr: 'Fidji',
    nameDe: 'Fidschi',
    namePt: 'Fiji',
    gdpMillionsUSD: 6198.01,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Fiji', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=FJ' },
      { name: 'DatosMacro — PIB Fiji', url: 'https://datosmacro.expansion.com/pib/fiyi' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-philippines',
    nameEs: 'Filipinas',
    nameEn: 'Philippines',
    nameFr: 'Philippines',
    nameDe: 'Philippinen',
    namePt: 'Filipinas',
    gdpMillionsUSD: 487086.12,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Filipinas', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=PH' },
      { name: 'DatosMacro — PIB Filipinas', url: 'https://datosmacro.expansion.com/pib/filipinas' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-finland',
    nameEs: 'Finlandia',
    nameEn: 'Finland',
    nameFr: 'Finlande',
    nameDe: 'Finnland',
    namePt: 'Finlândia',
    gdpMillionsUSD: 317039.37,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Finlandia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=FI' },
      { name: 'DatosMacro — PIB Finlandia', url: 'https://datosmacro.expansion.com/pib/finlandia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-france',
    nameEs: 'Francia',
    nameEn: 'France',
    nameFr: 'France',
    nameDe: 'Frankreich',
    namePt: 'França',
    gdpMillionsUSD: 3366315.93,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Francia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=FR' },
      { name: 'DatosMacro — PIB Francia', url: 'https://datosmacro.expansion.com/pib/francia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-gabon',
    nameEs: 'Gabón',
    nameEn: 'Gabon',
    nameFr: 'Gabon',
    nameDe: 'Gabun',
    namePt: 'Gabão',
    gdpMillionsUSD: 21427.12,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Gabón', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=GA' },
      { name: 'DatosMacro — PIB Gabón', url: 'https://datosmacro.expansion.com/pib/gabon' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-gambia',
    nameEs: 'Gambia',
    nameEn: 'Gambia',
    nameFr: 'Gambie',
    nameDe: 'Gambia',
    namePt: 'Gâmbia',
    gdpMillionsUSD: 2593.67,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Gambia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=GM' },
      { name: 'DatosMacro — PIB Gambia', url: 'https://datosmacro.expansion.com/pib/gambia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-georgia',
    nameEs: 'Georgia',
    nameEn: 'Georgia',
    nameFr: 'Géorgie',
    nameDe: 'Georgien',
    namePt: 'Geórgia',
    gdpMillionsUSD: 38143.61,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Georgia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=GE' },
      { name: 'DatosMacro — PIB Georgia', url: 'https://datosmacro.expansion.com/pib/georgia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-ghana',
    nameEs: 'Ghana',
    nameEn: 'Ghana',
    nameFr: 'Ghana',
    nameDe: 'Ghana',
    namePt: 'Gana',
    gdpMillionsUSD: 114209.91,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Ghana', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=GH' },
      { name: 'DatosMacro — PIB Ghana', url: 'https://datosmacro.expansion.com/pib/ghana' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-grenada',
    nameEs: 'Granada',
    nameEn: 'Grenada',
    nameFr: 'Grenade',
    nameDe: 'Grenada',
    namePt: 'Granada',
    gdpMillionsUSD: 1420.17,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Granada', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=GD' },
      { name: 'DatosMacro — PIB Granada', url: 'https://datosmacro.expansion.com/pib/granada' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-greece',
    nameEs: 'Grecia',
    nameEn: 'Greece',
    nameFr: 'Grèce',
    nameDe: 'Griechenland',
    namePt: 'Grécia',
    gdpMillionsUSD: 280635.52,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Grecia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=GR' },
      { name: 'DatosMacro — PIB Grecia', url: 'https://datosmacro.expansion.com/pib/grecia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-greenland',
    nameEs: 'Groenlandia',
    nameEn: 'Greenland',
    nameFr: 'Groenland',
    nameDe: 'Grönland',
    namePt: 'Groenlândia',
    gdpMillionsUSD: 3326.54,
    year: 2023,
    sources: [
      { name: 'Banco Mundial — PIB Groenlandia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=GL' },
      { name: 'DatosMacro — PIB Groenlandia', url: 'https://datosmacro.expansion.com/pib/groenlandia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-guam',
    nameEs: 'Guam',
    nameEn: 'Guam',
    nameFr: 'Guam',
    nameDe: 'Guam',
    namePt: 'Guam',
    gdpMillionsUSD: 6910.00,
    year: 2022,
    sources: [
      { name: 'Banco Mundial — PIB Guam', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=GU' },
      { name: 'DatosMacro — PIB Guam', url: 'https://datosmacro.expansion.com/pib/guam' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-guatemala',
    nameEs: 'Guatemala',
    nameEn: 'Guatemala',
    nameFr: 'Guatemala',
    nameDe: 'Guatemala',
    namePt: 'Guatemala',
    gdpMillionsUSD: 123306.01,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Guatemala', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=GT' },
      { name: 'DatosMacro — PIB Guatemala', url: 'https://datosmacro.expansion.com/pib/guatemala' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-guinea',
    nameEs: 'Guinea',
    nameEn: 'Guinea',
    nameFr: 'Guinée',
    nameDe: 'Guinea',
    namePt: 'Guiné',
    gdpMillionsUSD: 28346.02,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Guinea', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=GN' },
      { name: 'DatosMacro — PIB Guinea', url: 'https://datosmacro.expansion.com/pib/guinea' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-equatorial-guinea',
    nameEs: 'Guinea Ecuatorial',
    nameEn: 'Equatorial Guinea',
    nameFr: 'Guinée équatoriale',
    nameDe: 'Äquatorialguinea',
    namePt: 'Guiné Equatorial',
    gdpMillionsUSD: 12823.21,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Guinea Ecuatorial', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=GQ' },
      { name: 'DatosMacro — PIB Guinea Ecuatorial', url: 'https://datosmacro.expansion.com/pib/guinea-ecuatorial' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-guinea-bissau',
    nameEs: 'Guinea-Bissau',
    nameEn: 'Guinea-Bissau',
    nameFr: 'Guinée-Bissau',
    nameDe: 'Guinea-Bissau',
    namePt: 'Guiné-Bissau',
    gdpMillionsUSD: 2527.93,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Guinea-Bissau', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=GW' },
      { name: 'DatosMacro — PIB Guinea-Bissau', url: 'https://datosmacro.expansion.com/pib/guinea-bissau' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-guyana',
    nameEs: 'Guyana',
    nameEn: 'Guyana',
    nameFr: 'Guyana',
    nameDe: 'Guyana',
    namePt: 'Guiana',
    gdpMillionsUSD: 27097.48,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Guyana', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=GY' },
      { name: 'DatosMacro — PIB Guyana', url: 'https://datosmacro.expansion.com/pib/guyana' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-haiti',
    nameEs: 'Haití',
    nameEn: 'Haiti',
    nameFr: 'Haïti',
    nameDe: 'Haiti',
    namePt: 'Haiti',
    gdpMillionsUSD: 32077.28,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Haití', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=HT' },
      { name: 'DatosMacro — PIB Haití', url: 'https://datosmacro.expansion.com/pib/haiti' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-honduras',
    nameEs: 'Honduras',
    nameEn: 'Honduras',
    nameFr: 'Honduras',
    nameDe: 'Honduras',
    namePt: 'Honduras',
    gdpMillionsUSD: 39601.41,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Honduras', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=HN' },
      { name: 'DatosMacro — PIB Honduras', url: 'https://datosmacro.expansion.com/pib/honduras' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-hong-kong',
    nameEs: 'Hong Kong, RAE',
    nameEn: 'Hong Kong SAR',
    nameFr: 'Hong Kong',
    nameDe: 'Hongkong',
    namePt: 'Hong Kong',
    gdpMillionsUSD: 427310.32,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Hong Kong', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=HK' },
      { name: 'DatosMacro — PIB Hong Kong', url: 'https://datosmacro.expansion.com/pib/hong-kong' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-hungary',
    nameEs: 'Hungría',
    nameEn: 'Hungary',
    nameFr: 'Hongrie',
    nameDe: 'Ungarn',
    namePt: 'Hungria',
    gdpMillionsUSD: 246490.21,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Hungría', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=HU' },
      { name: 'DatosMacro — PIB Hungría', url: 'https://datosmacro.expansion.com/pib/hungria' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-india',
    nameEs: 'India',
    nameEn: 'India',
    nameFr: 'Inde',
    nameDe: 'Indien',
    namePt: 'Índia',
    gdpMillionsUSD: 3956067.12,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB India', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=IN' },
      { name: 'DatosMacro — PIB India', url: 'https://datosmacro.expansion.com/pib/india' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-indonesia',
    nameEs: 'Indonesia',
    nameEn: 'Indonesia',
    nameFr: 'Indonésie',
    nameDe: 'Indonesien',
    namePt: 'Indonésia',
    gdpMillionsUSD: 1445642.58,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Indonesia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=ID' },
      { name: 'DatosMacro — PIB Indonesia', url: 'https://datosmacro.expansion.com/pib/indonesia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-iran',
    nameEs: 'Irán, República Islámica del',
    nameEn: 'Iran',
    nameFr: 'Iran',
    nameDe: 'Iran',
    namePt: 'Irã',
    gdpMillionsUSD: 362682.12,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Irán', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=IR' },
      { name: 'DatosMacro — PIB Irán', url: 'https://datosmacro.expansion.com/pib/iran' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-iraq',
    nameEs: 'Iraq',
    nameEn: 'Iraq',
    nameFr: 'Irak',
    nameDe: 'Irak',
    namePt: 'Iraque',
    gdpMillionsUSD: 254367.29,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Iraq', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=IQ' },
      { name: 'DatosMacro — PIB Iraq', url: 'https://datosmacro.expansion.com/pib/iraq' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-ireland',
    nameEs: 'Irlanda',
    nameEn: 'Ireland',
    nameFr: 'Irlande',
    nameDe: 'Irland',
    namePt: 'Irlanda',
    gdpMillionsUSD: 721701.36,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Irlanda', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=IE' },
      { name: 'DatosMacro — PIB Irlanda', url: 'https://datosmacro.expansion.com/pib/irlanda' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-isle-of-man',
    nameEs: 'Isla de Man',
    nameEn: 'Isle of Man',
    nameFr: 'Île de Man',
    nameDe: 'Insel Man',
    namePt: 'Ilha de Man',
    gdpMillionsUSD: 7576.13,
    year: 2023,
    sources: [
      { name: 'Banco Mundial — PIB Isla de Man', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=IM' },
      { name: 'DatosMacro — PIB Isla de Man', url: 'https://datosmacro.expansion.com/pib/isla-de-man' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-saint-martin',
    nameEs: 'Isla de San Martín',
    nameEn: 'Saint Martin',
    nameFr: 'Saint-Martin',
    nameDe: 'Saint-Martin',
    namePt: 'São Martinho',
    gdpMillionsUSD: 649.21,
    year: 2021,
    sources: [
      { name: 'Banco Mundial — PIB San Martín', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MF' },
      { name: 'DatosMacro — PIB San Martín', url: 'https://datosmacro.expansion.com/pib/san-martin' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-iceland',
    nameEs: 'Islandia',
    nameEn: 'Iceland',
    nameFr: 'Islande',
    nameDe: 'Island',
    namePt: 'Islândia',
    gdpMillionsUSD: 38582.53,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Islandia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=IS' },
      { name: 'DatosMacro — PIB Islandia', url: 'https://datosmacro.expansion.com/pib/islandia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-cayman-islands',
    nameEs: 'Islas Caimán',
    nameEn: 'Cayman Islands',
    nameFr: 'Îles Caïmans',
    nameDe: 'Kaimaninseln',
    namePt: 'Ilhas Cayman',
    gdpMillionsUSD: 7765.34,
    year: 2024,
    sources: [
      { name: 'Banco Mundial — PIB Islas Caimán', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=KY' },
      { name: 'DatosMacro — PIB Islas Caimán', url: 'https://datosmacro.expansion.com/pib/islas-caiman' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-faroe-islands',
    nameEs: 'Islas Feroe',
    nameEn: 'Faroe Islands',
    nameFr: 'Îles Féroé',
    nameDe: 'Färöer',
    namePt: 'Ilhas Faroé',
    gdpMillionsUSD: 4052.94,
    year: 2024,
    sources: [
      { name: 'Banco Mundial — PIB Islas Feroe', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=FO' },
      { name: 'DatosMacro — PIB Islas Feroe', url: 'https://datosmacro.expansion.com/pib/islas-feroe' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-marshall-islands',
    nameEs: 'Islas Marshall',
    nameEn: 'Marshall Islands',
    nameFr: 'Îles Marshall',
    nameDe: 'Marshallinseln',
    namePt: 'Ilhas Marshall',
    gdpMillionsUSD: 308.00,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Islas Marshall', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MH' },
      { name: 'DatosMacro — PIB Islas Marshall', url: 'https://datosmacro.expansion.com/pib/islas-marshall' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-solomon-islands',
    nameEs: 'Islas Salomón',
    nameEn: 'Solomon Islands',
    nameFr: 'Îles Salomon',
    nameDe: 'Salomonen',
    namePt: 'Ilhas Salomão',
    gdpMillionsUSD: 1749.57,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Islas Salomón', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SB' },
      { name: 'DatosMacro — PIB Islas Salomón', url: 'https://datosmacro.expansion.com/pib/islas-salomon' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-turks-and-caicos',
    nameEs: 'Islas Turcas y Caicos',
    nameEn: 'Turks and Caicos Islands',
    nameFr: 'Îles Turques-et-Caïques',
    nameDe: 'Turks- und Caicosinseln',
    namePt: 'Ilhas Turks e Caicos',
    gdpMillionsUSD: 1745.38,
    year: 2024,
    sources: [
      { name: 'Banco Mundial — PIB Islas Turcas y Caicos', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=TC' },
      { name: 'DatosMacro — PIB Islas Turcas y Caicos', url: 'https://datosmacro.expansion.com/pib/islas-turcas-caicos' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-us-virgin-islands',
    nameEs: 'Islas Vírgenes de los EE. UU.',
    nameEn: 'U.S. Virgin Islands',
    nameFr: 'Îles Vierges des États-Unis',
    nameDe: 'Amerikanische Jungferninseln',
    namePt: 'Ilhas Virgens dos EUA',
    gdpMillionsUSD: 4672.00,
    year: 2022,
    sources: [
      { name: 'Banco Mundial — PIB Islas Vírgenes EE.UU.', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=VI' },
      { name: 'DatosMacro — PIB Islas Vírgenes EE.UU.', url: 'https://datosmacro.expansion.com/pib/islas-virgenes-eeuu' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-channel-islands',
    nameEs: 'Islas del Canal',
    nameEn: 'Channel Islands',
    nameFr: 'Îles Anglo-Normandes',
    nameDe: 'Kanalinseln',
    namePt: 'Ilhas do Canal',
    gdpMillionsUSD: 12507.32,
    year: 2023,
    sources: [
      { name: 'Banco Mundial — PIB Islas del Canal', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=JG' },
      { name: 'DatosMacro — PIB Islas del Canal', url: 'https://datosmacro.expansion.com/pib/islas-canal' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-israel',
    nameEs: 'Israel',
    nameEn: 'Israel',
    nameFr: 'Israël',
    nameDe: 'Israel',
    namePt: 'Israel',
    gdpMillionsUSD: 610777.84,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Israel', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=IL' },
      { name: 'DatosMacro — PIB Israel', url: 'https://datosmacro.expansion.com/pib/israel' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-italy',
    nameEs: 'Italia',
    nameEn: 'Italy',
    nameFr: 'Italie',
    nameDe: 'Italien',
    namePt: 'Itália',
    gdpMillionsUSD: 2551556.95,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Italia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=IT' },
      { name: 'DatosMacro — PIB Italia', url: 'https://datosmacro.expansion.com/pib/italia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-jamaica',
    nameEs: 'Jamaica',
    nameEn: 'Jamaica',
    nameFr: 'Jamaïque',
    nameDe: 'Jamaika',
    namePt: 'Jamaica',
    gdpMillionsUSD: 22704.90,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Jamaica', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=JM' },
      { name: 'DatosMacro — PIB Jamaica', url: 'https://datosmacro.expansion.com/pib/jamaica' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-japan',
    nameEs: 'Japón',
    nameEn: 'Japan',
    nameFr: 'Japon',
    nameDe: 'Japan',
    namePt: 'Japão',
    gdpMillionsUSD: 4435163.00,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Japón', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=JP' },
      { name: 'DatosMacro — PIB Japón', url: 'https://datosmacro.expansion.com/pib/japon' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-jordan',
    nameEs: 'Jordania',
    nameEn: 'Jordan',
    nameFr: 'Jordanie',
    nameDe: 'Jordanien',
    namePt: 'Jordânia',
    gdpMillionsUSD: 61610.05,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Jordania', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=JO' },
      { name: 'DatosMacro — PIB Jordania', url: 'https://datosmacro.expansion.com/pib/jordania' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-kazakhstan',
    nameEs: 'Kazajstán',
    nameEn: 'Kazakhstan',
    nameFr: 'Kazakhstan',
    nameDe: 'Kasachstan',
    namePt: 'Cazaquistão',
    gdpMillionsUSD: 306239.21,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Kazajstán', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=KZ' },
      { name: 'DatosMacro — PIB Kazajstán', url: 'https://datosmacro.expansion.com/pib/kazajstan' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-kenya',
    nameEs: 'Kenya',
    nameEn: 'Kenya',
    nameFr: 'Kenya',
    nameDe: 'Kenia',
    namePt: 'Quênia',
    gdpMillionsUSD: 135941.28,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Kenya', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=KE' },
      { name: 'DatosMacro — PIB Kenya', url: 'https://datosmacro.expansion.com/pib/kenia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-kyrgyzstan',
    nameEs: 'Kirguistán',
    nameEn: 'Kyrgyz Republic',
    nameFr: 'Kirghizistan',
    nameDe: 'Kirgisistan',
    namePt: 'Quirguistão',
    gdpMillionsUSD: 22623.75,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Kirguistán', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=KG' },
      { name: 'DatosMacro — PIB Kirguistán', url: 'https://datosmacro.expansion.com/pib/kirguistan' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-kiribati',
    nameEs: 'Kiribati',
    nameEn: 'Kiribati',
    nameFr: 'Kiribati',
    nameDe: 'Kiribati',
    namePt: 'Kiribati',
    gdpMillionsUSD: 349.23,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Kiribati', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=KI' },
      { name: 'DatosMacro — PIB Kiribati', url: 'https://datosmacro.expansion.com/pib/kiribati' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-kosovo',
    nameEs: 'Kosovo',
    nameEn: 'Kosovo',
    nameFr: 'Kosovo',
    nameDe: 'Kosovo',
    namePt: 'Kosovo',
    gdpMillionsUSD: 12456.40,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Kosovo', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=XK' },
      { name: 'DatosMacro — PIB Kosovo', url: 'https://datosmacro.expansion.com/pib/kosovo' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-kuwait',
    nameEs: 'Kuwait',
    nameEn: 'Kuwait',
    nameFr: 'Koweït',
    nameDe: 'Kuwait',
    namePt: 'Kuwait',
    gdpMillionsUSD: 157209.03,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Kuwait', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=KW' },
      { name: 'DatosMacro — PIB Kuwait', url: 'https://datosmacro.expansion.com/pib/kuwait' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-lesotho',
    nameEs: 'Lesotho',
    nameEn: 'Lesotho',
    nameFr: 'Lesotho',
    nameDe: 'Lesotho',
    namePt: 'Lesoto',
    gdpMillionsUSD: 2573.57,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Lesotho', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=LS' },
      { name: 'DatosMacro — PIB Lesotho', url: 'https://datosmacro.expansion.com/pib/lesoto' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-latvia',
    nameEs: 'Letonia',
    nameEn: 'Latvia',
    nameFr: 'Lettonie',
    nameDe: 'Lettland',
    namePt: 'Letônia',
    gdpMillionsUSD: 48618.87,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Letonia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=LV' },
      { name: 'DatosMacro — PIB Letonia', url: 'https://datosmacro.expansion.com/pib/letonia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-lebanon',
    nameEs: 'Líbano',
    nameEn: 'Lebanon',
    nameFr: 'Liban',
    nameDe: 'Libanon',
    namePt: 'Líbano',
    gdpMillionsUSD: 25971.64,
    year: 2024,
    sources: [
      { name: 'Banco Mundial — PIB Líbano', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=LB' },
      { name: 'DatosMacro — PIB Líbano', url: 'https://datosmacro.expansion.com/pib/libano' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-liberia',
    nameEs: 'Liberia',
    nameEn: 'Liberia',
    nameFr: 'Libéria',
    nameDe: 'Liberia',
    namePt: 'Libéria',
    gdpMillionsUSD: 5245.94,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Liberia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=LR' },
      { name: 'DatosMacro — PIB Liberia', url: 'https://datosmacro.expansion.com/pib/liberia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-libya',
    nameEs: 'Libia',
    nameEn: 'Libya',
    nameFr: 'Libye',
    nameDe: 'Libyen',
    namePt: 'Líbia',
    gdpMillionsUSD: 48098.91,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Libia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=LY' },
      { name: 'DatosMacro — PIB Libia', url: 'https://datosmacro.expansion.com/pib/libia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-liechtenstein',
    nameEs: 'Liechtenstein',
    nameEn: 'Liechtenstein',
    nameFr: 'Liechtenstein',
    nameDe: 'Liechtenstein',
    namePt: 'Liechtenstein',
    gdpMillionsUSD: 8905.76,
    year: 2024,
    sources: [
      { name: 'Banco Mundial — PIB Liechtenstein', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=LI' },
      { name: 'DatosMacro — PIB Liechtenstein', url: 'https://datosmacro.expansion.com/pib/liechtenstein' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-lithuania',
    nameEs: 'Lituania',
    nameEn: 'Lithuania',
    nameFr: 'Lituanie',
    nameDe: 'Litauen',
    namePt: 'Lituânia',
    gdpMillionsUSD: 95210.15,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Lituania', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=LT' },
      { name: 'DatosMacro — PIB Lituania', url: 'https://datosmacro.expansion.com/pib/lituania' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-luxembourg',
    nameEs: 'Luxemburgo',
    nameEn: 'Luxembourg',
    nameFr: 'Luxembourg',
    nameDe: 'Luxemburg',
    namePt: 'Luxemburgo',
    gdpMillionsUSD: 101157.83,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Luxemburgo', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=LU' },
      { name: 'DatosMacro — PIB Luxemburgo', url: 'https://datosmacro.expansion.com/pib/luxemburgo' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-north-macedonia',
    nameEs: 'Macedonia del Norte',
    nameEn: 'North Macedonia',
    nameFr: 'Macédoine du Nord',
    nameDe: 'Nordmazedonien',
    namePt: 'Macedônia do Norte',
    gdpMillionsUSD: 19101.20,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Macedonia del Norte', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MK' },
      { name: 'DatosMacro — PIB Macedonia del Norte', url: 'https://datosmacro.expansion.com/pib/macedonia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-madagascar',
    nameEs: 'Madagascar',
    nameEn: 'Madagascar',
    nameFr: 'Madagascar',
    nameDe: 'Madagaskar',
    namePt: 'Madagascar',
    gdpMillionsUSD: 19620.35,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Madagascar', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MG' },
      { name: 'DatosMacro — PIB Madagascar', url: 'https://datosmacro.expansion.com/pib/madagascar' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-malaysia',
    nameEs: 'Malasia',
    nameEn: 'Malaysia',
    nameFr: 'Malaisie',
    nameDe: 'Malaysia',
    namePt: 'Malásia',
    gdpMillionsUSD: 472193.13,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Malasia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MY' },
      { name: 'DatosMacro — PIB Malasia', url: 'https://datosmacro.expansion.com/pib/malasia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-malawi',
    nameEs: 'Malawi',
    nameEn: 'Malawi',
    nameFr: 'Malawi',
    nameDe: 'Malawi',
    namePt: 'Malawi',
    gdpMillionsUSD: 14918.28,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Malawi', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MW' },
      { name: 'DatosMacro — PIB Malawi', url: 'https://datosmacro.expansion.com/pib/malawi' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-maldives',
    nameEs: 'Maldivas',
    nameEn: 'Maldives',
    nameFr: 'Maldives',
    nameDe: 'Malediven',
    namePt: 'Maldivas',
    gdpMillionsUSD: 7741.07,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Maldivas', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MV' },
      { name: 'DatosMacro — PIB Maldivas', url: 'https://datosmacro.expansion.com/pib/maldivas' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-mali',
    nameEs: 'Malí',
    nameEn: 'Mali',
    nameFr: 'Mali',
    nameDe: 'Mali',
    namePt: 'Mali',
    gdpMillionsUSD: 30069.15,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Malí', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=ML' },
      { name: 'DatosMacro — PIB Malí', url: 'https://datosmacro.expansion.com/pib/mali' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-malta',
    nameEs: 'Malta',
    nameEn: 'Malta',
    nameFr: 'Malte',
    nameDe: 'Malta',
    namePt: 'Malta',
    gdpMillionsUSD: 27771.82,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Malta', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MT' },
      { name: 'DatosMacro — PIB Malta', url: 'https://datosmacro.expansion.com/pib/malta' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-northern-mariana-islands',
    nameEs: 'Mariana',
    nameEn: 'Northern Mariana Islands',
    nameFr: 'Îles Mariannes du Nord',
    nameDe: 'Nördliche Marianen',
    namePt: 'Ilhas Marianas do Norte',
    gdpMillionsUSD: 1096.00,
    year: 2022,
    sources: [
      { name: 'Banco Mundial — PIB Mariana', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MP' },
      { name: 'DatosMacro — PIB Mariana', url: 'https://datosmacro.expansion.com/pib/islas-marianas-norte' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-morocco',
    nameEs: 'Marruecos',
    nameEn: 'Morocco',
    nameFr: 'Maroc',
    nameDe: 'Marokko',
    namePt: 'Marrocos',
    gdpMillionsUSD: 182374.25,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Marruecos', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MA' },
      { name: 'DatosMacro — PIB Marruecos', url: 'https://datosmacro.expansion.com/pib/marruecos' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-mauritius',
    nameEs: 'Mauricio',
    nameEn: 'Mauritius',
    nameFr: 'Maurice',
    nameDe: 'Mauritius',
    namePt: 'Maurício',
    gdpMillionsUSD: 16157.80,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Mauricio', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MU' },
      { name: 'DatosMacro — PIB Mauricio', url: 'https://datosmacro.expansion.com/pib/mauricio' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-mauritania',
    nameEs: 'Mauritania',
    nameEn: 'Mauritania',
    nameFr: 'Mauritanie',
    nameDe: 'Mauretanien',
    namePt: 'Mauritânia',
    gdpMillionsUSD: 11679.91,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Mauritania', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MR' },
      { name: 'DatosMacro — PIB Mauritania', url: 'https://datosmacro.expansion.com/pib/mauritania' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-mexico',
    nameEs: 'México',
    nameEn: 'Mexico',
    nameFr: 'Mexique',
    nameDe: 'Mexiko',
    namePt: 'México',
    gdpMillionsUSD: 1832641.36,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB México', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MX' },
      { name: 'DatosMacro — PIB México', url: 'https://datosmacro.expansion.com/pib/mexico' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-micronesia',
    nameEs: 'Micronesia (Estados Federados de)',
    nameEn: 'Micronesia',
    nameFr: 'Micronésie',
    nameDe: 'Mikronesien',
    namePt: 'Micronésia',
    gdpMillionsUSD: 501.80,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Micronesia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=FM' },
      { name: 'DatosMacro — PIB Micronesia', url: 'https://datosmacro.expansion.com/pib/micronesia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-monaco',
    nameEs: 'Mónaco',
    nameEn: 'Monaco',
    nameFr: 'Monaco',
    nameDe: 'Monaco',
    namePt: 'Mônaco',
    gdpMillionsUSD: 11125.79,
    year: 2024,
    sources: [
      { name: 'Banco Mundial — PIB Mónaco', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MC' },
      { name: 'DatosMacro — PIB Mónaco', url: 'https://datosmacro.expansion.com/pib/monaco' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-mongolia',
    nameEs: 'Mongolia',
    nameEn: 'Mongolia',
    nameFr: 'Mongolie',
    nameDe: 'Mongolei',
    namePt: 'Mongólia',
    gdpMillionsUSD: 25369.11,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Mongolia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MN' },
      { name: 'DatosMacro — PIB Mongolia', url: 'https://datosmacro.expansion.com/pib/mongolia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-montenegro',
    nameEs: 'Montenegro',
    nameEn: 'Montenegro',
    nameFr: 'Monténégro',
    nameDe: 'Montenegro',
    namePt: 'Montenegro',
    gdpMillionsUSD: 9232.80,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Montenegro', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=ME' },
      { name: 'DatosMacro — PIB Montenegro', url: 'https://datosmacro.expansion.com/pib/montenegro' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-mozambique',
    nameEs: 'Mozambique',
    nameEn: 'Mozambique',
    nameFr: 'Mozambique',
    nameDe: 'Mosambik',
    namePt: 'Moçambique',
    gdpMillionsUSD: 22338.00,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Mozambique', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MZ' },
      { name: 'DatosMacro — PIB Mozambique', url: 'https://datosmacro.expansion.com/pib/mocambique' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-myanmar',
    nameEs: 'Myanmar',
    nameEn: 'Myanmar',
    nameFr: 'Myanmar',
    nameDe: 'Myanmar',
    namePt: 'Mianmar',
    gdpMillionsUSD: 81665.77,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Myanmar', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MM' },
      { name: 'DatosMacro — PIB Myanmar', url: 'https://datosmacro.expansion.com/pib/myanmar' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-namibia',
    nameEs: 'Namibia',
    nameEn: 'Namibia',
    nameFr: 'Namibie',
    nameDe: 'Namibia',
    namePt: 'Namíbia',
    gdpMillionsUSD: 15080.34,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Namibia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=NA' },
      { name: 'DatosMacro — PIB Namibia', url: 'https://datosmacro.expansion.com/pib/namibia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-nauru',
    nameEs: 'Naoero',
    nameEn: 'Nauru',
    nameFr: 'Nauru',
    nameDe: 'Nauru',
    namePt: 'Nauru',
    gdpMillionsUSD: 176.04,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Naoero', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=NR' },
      { name: 'DatosMacro — PIB Naoero', url: 'https://datosmacro.expansion.com/pib/nauru' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-nepal',
    nameEs: 'Nepal',
    nameEn: 'Nepal',
    nameFr: 'Népal',
    nameDe: 'Nepal',
    namePt: 'Nepal',
    gdpMillionsUSD: 45489.81,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Nepal', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=NP' },
      { name: 'DatosMacro — PIB Nepal', url: 'https://datosmacro.expansion.com/pib/nepal' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-nicaragua',
    nameEs: 'Nicaragua',
    nameEn: 'Nicaragua',
    nameFr: 'Nicaragua',
    nameDe: 'Nicaragua',
    namePt: 'Nicarágua',
    gdpMillionsUSD: 22237.17,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Nicaragua', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=NI' },
      { name: 'DatosMacro — PIB Nicaragua', url: 'https://datosmacro.expansion.com/pib/nicaragua' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-niger',
    nameEs: 'Níger',
    nameEn: 'Niger',
    nameFr: 'Niger',
    nameDe: 'Niger',
    namePt: 'Níger',
    gdpMillionsUSD: 21646.19,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Níger', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=NE' },
      { name: 'DatosMacro — PIB Níger', url: 'https://datosmacro.expansion.com/pib/niger' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-nigeria',
    nameEs: 'Nigeria',
    nameEn: 'Nigeria',
    nameFr: 'Nigéria',
    nameDe: 'Nigeria',
    namePt: 'Nigéria',
    gdpMillionsUSD: 290794.36,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Nigeria', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=NG' },
      { name: 'DatosMacro — PIB Nigeria', url: 'https://datosmacro.expansion.com/pib/nigeria' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-norway',
    nameEs: 'Noruega',
    nameEn: 'Norway',
    nameFr: 'Norvège',
    nameDe: 'Norwegen',
    namePt: 'Noruega',
    gdpMillionsUSD: 530755.72,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Noruega', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=NO' },
      { name: 'DatosMacro — PIB Noruega', url: 'https://datosmacro.expansion.com/pib/noruega' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-new-caledonia',
    nameEs: 'Nueva Caledonia',
    nameEn: 'New Caledonia',
    nameFr: 'Nouvelle-Calédonie',
    nameDe: 'Neukaledonien',
    namePt: 'Nova Calédonia',
    gdpMillionsUSD: 8548.92,
    year: 2024,
    sources: [
      { name: 'Banco Mundial — PIB Nueva Caledonia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=NC' },
      { name: 'DatosMacro — PIB Nueva Caledonia', url: 'https://datosmacro.expansion.com/pib/nueva-caledonia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-new-zealand',
    nameEs: 'Nueva Zelandia',
    nameEn: 'New Zealand',
    nameFr: 'Nouvelle-Zélande',
    nameDe: 'Neuseeland',
    namePt: 'Nova Zelândia',
    gdpMillionsUSD: 264057.41,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Nueva Zelandia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=NZ' },
      { name: 'DatosMacro — PIB Nueva Zelandia', url: 'https://datosmacro.expansion.com/pib/nueva-zelanda' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-oman',
    nameEs: 'Omán',
    nameEn: 'Oman',
    nameFr: 'Oman',
    nameDe: 'Oman',
    namePt: 'Omã',
    gdpMillionsUSD: 109604.78,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Omán', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=OM' },
      { name: 'DatosMacro — PIB Omán', url: 'https://datosmacro.expansion.com/pib/oman' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-netherlands',
    nameEs: 'Países Bajos',
    nameEn: 'Netherlands',
    nameFr: 'Pays-Bas',
    nameDe: 'Niederlande',
    namePt: 'Países Baixos',
    gdpMillionsUSD: 1332767.65,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Países Bajos', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=NL' },
      { name: 'DatosMacro — PIB Países Bajos', url: 'https://datosmacro.expansion.com/pib/paises-bajos' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-pakistan',
    nameEs: 'Pakistán',
    nameEn: 'Pakistan',
    nameFr: 'Pakistan',
    nameDe: 'Pakistan',
    namePt: 'Paquistão',
    gdpMillionsUSD: 407307.21,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Pakistán', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=PK' },
      { name: 'DatosMacro — PIB Pakistán', url: 'https://datosmacro.expansion.com/pib/pakistan' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-palau',
    nameEs: 'Palau',
    nameEn: 'Palau',
    nameFr: 'Palaos',
    nameDe: 'Palau',
    namePt: 'Palau',
    gdpMillionsUSD: 345.00,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Palau', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=PW' },
      { name: 'DatosMacro — PIB Palau', url: 'https://datosmacro.expansion.com/pib/palau' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-panama',
    nameEs: 'Panamá',
    nameEn: 'Panama',
    nameFr: 'Panama',
    nameDe: 'Panama',
    namePt: 'Panamá',
    gdpMillionsUSD: 90462.60,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Panamá', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=PA' },
      { name: 'DatosMacro — PIB Panamá', url: 'https://datosmacro.expansion.com/pib/panama' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-papua-new-guinea',
    nameEs: 'Papua Nueva Guinea',
    nameEn: 'Papua New Guinea',
    nameFr: 'Papouasie-Nouvelle-Guinée',
    nameDe: 'Papua-Neuguinea',
    namePt: 'Papua-Nova Guiné',
    gdpMillionsUSD: 32498.66,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Papua Nueva Guinea', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=PG' },
      { name: 'DatosMacro — PIB Papua Nueva Guinea', url: 'https://datosmacro.expansion.com/pib/papua-nueva-guinea' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-paraguay',
    nameEs: 'Paraguay',
    nameEn: 'Paraguay',
    nameFr: 'Paraguay',
    nameDe: 'Paraguay',
    namePt: 'Paraguai',
    gdpMillionsUSD: 49278.23,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Paraguay', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=PY' },
      { name: 'DatosMacro — PIB Paraguay', url: 'https://datosmacro.expansion.com/pib/paraguay' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-peru',
    nameEs: 'Perú',
    nameEn: 'Peru',
    nameFr: 'Pérou',
    nameDe: 'Peru',
    namePt: 'Peru',
    gdpMillionsUSD: 334854.66,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Perú', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=PE' },
      { name: 'DatosMacro — PIB Perú', url: 'https://datosmacro.expansion.com/pib/peru' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-french-polynesia',
    nameEs: 'Polinesia Francesa',
    nameEn: 'French Polynesia',
    nameFr: 'Polynésie française',
    nameDe: 'Französisch-Polynesien',
    namePt: 'Polinésia Francesa',
    gdpMillionsUSD: 6323.72,
    year: 2024,
    sources: [
      { name: 'Banco Mundial — PIB Polinesia Francesa', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=PF' },
      { name: 'DatosMacro — PIB Polinesia Francesa', url: 'https://datosmacro.expansion.com/pib/polinesia-francesa' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-poland',
    nameEs: 'Polonia',
    nameEn: 'Poland',
    nameFr: 'Pologne',
    nameDe: 'Polen',
    namePt: 'Polônia',
    gdpMillionsUSD: 1035491.78,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Polonia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=PL' },
      { name: 'DatosMacro — PIB Polonia', url: 'https://datosmacro.expansion.com/pib/polonia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-portugal',
    nameEs: 'Portugal',
    nameEn: 'Portugal',
    nameFr: 'Portugal',
    nameDe: 'Portugal',
    namePt: 'Portugal',
    gdpMillionsUSD: 346639.83,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Portugal', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=PT' },
      { name: 'DatosMacro — PIB Portugal', url: 'https://datosmacro.expansion.com/pib/portugal' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-puerto-rico',
    nameEs: 'Puerto Rico',
    nameEn: 'Puerto Rico',
    nameFr: 'Porto Rico',
    nameDe: 'Puerto Rico',
    namePt: 'Porto Rico',
    gdpMillionsUSD: 129368.48,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Puerto Rico', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=PR' },
      { name: 'DatosMacro — PIB Puerto Rico', url: 'https://datosmacro.expansion.com/pib/puerto-rico' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-qatar',
    nameEs: 'Qatar',
    nameEn: 'Qatar',
    nameFr: 'Qatar',
    nameDe: 'Katar',
    namePt: 'Catar',
    gdpMillionsUSD: 215559.62,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Qatar', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=QA' },
      { name: 'DatosMacro — PIB Qatar', url: 'https://datosmacro.expansion.com/pib/qatar' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-macao',
    nameEs: 'Macao, RAE',
    nameEn: 'Macao SAR',
    nameFr: 'Macao',
    nameDe: 'Macau',
    namePt: 'Macau',
    gdpMillionsUSD: 52061.01,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Macao', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MO' },
      { name: 'DatosMacro — PIB Macao', url: 'https://datosmacro.expansion.com/pib/macao' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-united-kingdom',
    nameEs: 'Reino Unido',
    nameEn: 'United Kingdom',
    nameFr: 'Royaume-Uni',
    nameDe: 'Vereinigtes Königreich',
    namePt: 'Reino Unido',
    gdpMillionsUSD: 4002587.54,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Reino Unido', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=GB' },
      { name: 'DatosMacro — PIB Reino Unido', url: 'https://datosmacro.expansion.com/pib/reino-unido' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-syria',
    nameEs: 'República Árabe Siria',
    nameEn: 'Syrian Arab Republic',
    nameFr: 'Syrie',
    nameDe: 'Syrien',
    namePt: 'Síria',
    gdpMillionsUSD: 23737.63,
    year: 2022,
    sources: [
      { name: 'Banco Mundial — PIB Siria', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SY' },
      { name: 'DatosMacro — PIB Siria', url: 'https://datosmacro.expansion.com/pib/siria' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-central-african-republic',
    nameEs: 'República Centroafricana',
    nameEn: 'Central African Republic',
    nameFr: 'République centrafricaine',
    nameDe: 'Zentralafrikanische Republik',
    namePt: 'República Centro-Africana',
    gdpMillionsUSD: 3066.11,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Rep. Centroafricana', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=CF' },
      { name: 'DatosMacro — PIB Rep. Centroafricana', url: 'https://datosmacro.expansion.com/pib/republica-centroafricana' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-czech-republic',
    nameEs: 'República Checa',
    nameEn: 'Czechia',
    nameFr: 'Tchéquie',
    nameDe: 'Tschechien',
    namePt: 'Chéquia',
    gdpMillionsUSD: 391026.96,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB República Checa', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=CZ' },
      { name: 'DatosMacro — PIB República Checa', url: 'https://datosmacro.expansion.com/pib/republica-checa' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-laos',
    nameEs: 'República Democrática Popular Lao',
    nameEn: 'Lao PDR',
    nameFr: 'Laos',
    nameDe: 'Laos',
    namePt: 'Laos',
    gdpMillionsUSD: 18302.97,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Laos', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=LA' },
      { name: 'DatosMacro — PIB Laos', url: 'https://datosmacro.expansion.com/pib/laos' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-dominican-republic',
    nameEs: 'República Dominicana',
    nameEn: 'Dominican Republic',
    nameFr: 'République dominicaine',
    nameDe: 'Dominikanische Republik',
    namePt: 'República Dominicana',
    gdpMillionsUSD: 127407.46,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB República Dominicana', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=DO' },
      { name: 'DatosMacro — PIB República Dominicana', url: 'https://datosmacro.expansion.com/pib/republica-dominicana' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-slovakia',
    nameEs: 'República Eslovaca',
    nameEn: 'Slovak Republic',
    nameFr: 'Slovaquie',
    nameDe: 'Slowakei',
    namePt: 'Eslováquia',
    gdpMillionsUSD: 154530.07,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Eslovaquia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SK' },
      { name: 'DatosMacro — PIB Eslovaquia', url: 'https://datosmacro.expansion.com/pib/eslovaquia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-somalia',
    nameEs: 'República Federal de Somalia',
    nameEn: 'Somalia',
    nameFr: 'Somalie',
    nameDe: 'Somalia',
    namePt: 'Somália',
    gdpMillionsUSD: 12995.20,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Somalia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SO' },
      { name: 'DatosMacro — PIB Somalia', url: 'https://datosmacro.expansion.com/pib/somalia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-moldova',
    nameEs: 'República de Moldova',
    nameEn: 'Moldova',
    nameFr: 'Moldavie',
    nameDe: 'Moldau',
    namePt: 'Moldávia',
    gdpMillionsUSD: 20351.80,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Moldavia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=MD' },
      { name: 'DatosMacro — PIB Moldavia', url: 'https://datosmacro.expansion.com/pib/moldavia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-palestine',
    nameEs: 'Ribera Occidental y Gaza',
    nameEn: 'West Bank and Gaza',
    nameFr: 'Cisjordanie et Gaza',
    nameDe: 'Westjordanland und Gaza',
    namePt: 'Cisjordânia e Gaza',
    gdpMillionsUSD: 17167.10,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Palestina', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=PS' },
      { name: 'DatosMacro — PIB Palestina', url: 'https://datosmacro.expansion.com/pib/palestina' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-romania',
    nameEs: 'Rumania',
    nameEn: 'Romania',
    nameFr: 'Roumanie',
    nameDe: 'Rumänien',
    namePt: 'Romênia',
    gdpMillionsUSD: 428677.98,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Rumania', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=RO' },
      { name: 'DatosMacro — PIB Rumania', url: 'https://datosmacro.expansion.com/pib/rumania' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-rwanda',
    nameEs: 'Rwanda',
    nameEn: 'Rwanda',
    nameFr: 'Rwanda',
    nameDe: 'Ruanda',
    namePt: 'Ruanda',
    gdpMillionsUSD: 16372.13,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Rwanda', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=RW' },
      { name: 'DatosMacro — PIB Ruanda', url: 'https://datosmacro.expansion.com/pib/ruanda' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-saint-kitts-and-nevis',
    nameEs: 'Saint Kitts y Nevis',
    nameEn: 'Saint Kitts and Nevis',
    nameFr: 'Saint-Kitts-et-Nevis',
    nameDe: 'St. Kitts und Nevis',
    namePt: 'São Cristóvão e Nevis',
    gdpMillionsUSD: 1183.51,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Saint Kitts y Nevis', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=KN' },
      { name: 'DatosMacro — PIB Saint Kitts y Nevis', url: 'https://datosmacro.expansion.com/pib/san-cristobal-nieves' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-samoa',
    nameEs: 'Samoa',
    nameEn: 'Samoa',
    nameFr: 'Samoa',
    nameDe: 'Samoa',
    namePt: 'Samoa',
    gdpMillionsUSD: 1287.94,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Samoa', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=WS' },
      { name: 'DatosMacro — PIB Samoa', url: 'https://datosmacro.expansion.com/pib/samoa' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-american-samoa',
    nameEs: 'Samoa Americana',
    nameEn: 'American Samoa',
    nameFr: 'Samoa américaines',
    nameDe: 'Amerikanisch-Samoa',
    namePt: 'Samoa Americana',
    gdpMillionsUSD: 871.00,
    year: 2022,
    sources: [
      { name: 'Banco Mundial — PIB Samoa Americana', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=AS' },
      { name: 'DatosMacro — PIB Samoa Americana', url: 'https://datosmacro.expansion.com/pib/samoa-americana' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-san-marino',
    nameEs: 'San Marino',
    nameEn: 'San Marino',
    nameFr: 'Saint-Marin',
    nameDe: 'San Marino',
    namePt: 'San Marino',
    gdpMillionsUSD: 2027.24,
    year: 2023,
    sources: [
      { name: 'Banco Mundial — PIB San Marino', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SM' },
      { name: 'DatosMacro — PIB San Marino', url: 'https://datosmacro.expansion.com/pib/san-marino' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-saint-vincent-and-the-grenadines',
    nameEs: 'San Vicente y las Granadinas',
    nameEn: 'St. Vincent and the Grenadines',
    nameFr: 'Saint-Vincent-et-les-Grenadines',
    nameDe: 'St. Vincent und die Grenadinen',
    namePt: 'São Vicente e Granadinas',
    gdpMillionsUSD: 1255.22,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB San Vicente y Granadinas', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=VC' },
      { name: 'DatosMacro — PIB San Vicente y Granadinas', url: 'https://datosmacro.expansion.com/pib/san-vicente-granadinas' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-saint-lucia',
    nameEs: 'Santa Lucía',
    nameEn: 'Saint Lucia',
    nameFr: 'Sainte-Lucie',
    nameDe: 'St. Lucia',
    namePt: 'Santa Lúcia',
    gdpMillionsUSD: 2656.44,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Santa Lucía', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=LC' },
      { name: 'DatosMacro — PIB Santa Lucía', url: 'https://datosmacro.expansion.com/pib/santa-lucia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-sao-tome-and-principe',
    nameEs: 'Santo Tomé y Príncipe',
    nameEn: 'Sao Tome and Principe',
    nameFr: 'Sao Tomé-et-Principe',
    nameDe: 'São Tomé und Príncipe',
    namePt: 'São Tomé e Príncipe',
    gdpMillionsUSD: 981.29,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Santo Tomé y Príncipe', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=ST' },
      { name: 'DatosMacro — PIB Santo Tomé y Príncipe', url: 'https://datosmacro.expansion.com/pib/sao-tome-principe' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-senegal',
    nameEs: 'Senegal',
    nameEn: 'Senegal',
    nameFr: 'Sénégal',
    nameDe: 'Senegal',
    namePt: 'Senegal',
    gdpMillionsUSD: 37006.54,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Senegal', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SN' },
      { name: 'DatosMacro — PIB Senegal', url: 'https://datosmacro.expansion.com/pib/senegal' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-serbia',
    nameEs: 'Serbia',
    nameEn: 'Serbia',
    nameFr: 'Serbie',
    nameDe: 'Serbien',
    namePt: 'Sérvia',
    gdpMillionsUSD: 99953.32,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Serbia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=RS' },
      { name: 'DatosMacro — PIB Serbia', url: 'https://datosmacro.expansion.com/pib/serbia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-seychelles',
    nameEs: 'Seychelles',
    nameEn: 'Seychelles',
    nameFr: 'Seychelles',
    nameDe: 'Seychellen',
    namePt: 'Seychelles',
    gdpMillionsUSD: 2387.02,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Seychelles', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SC' },
      { name: 'DatosMacro — PIB Seychelles', url: 'https://datosmacro.expansion.com/pib/seychelles' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-sierra-leone',
    nameEs: 'Sierra Leona',
    nameEn: 'Sierra Leone',
    nameFr: 'Sierra Leone',
    nameDe: 'Sierra Leone',
    namePt: 'Serra Leoa',
    gdpMillionsUSD: 7464.16,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Sierra Leona', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SL' },
      { name: 'DatosMacro — PIB Sierra Leona', url: 'https://datosmacro.expansion.com/pib/sierra-leona' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-singapore',
    nameEs: 'Singapur',
    nameEn: 'Singapore',
    nameFr: 'Singapour',
    nameDe: 'Singapur',
    namePt: 'Singapura',
    gdpMillionsUSD: 603869.52,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Singapur', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SG' },
      { name: 'DatosMacro — PIB Singapur', url: 'https://datosmacro.expansion.com/pib/singapur' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-sint-maarten',
    nameEs: 'Sint Maarten (Dutch part)',
    nameEn: 'Sint Maarten',
    nameFr: 'Saint-Martin (partie néerlandaise)',
    nameDe: 'Sint Maarten',
    namePt: 'Sint Maarten',
    gdpMillionsUSD: 1887.73,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Sint Maarten', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SX' },
      { name: 'DatosMacro — PIB Sint Maarten', url: 'https://datosmacro.expansion.com/pib/sint-maarten' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-sri-lanka',
    nameEs: 'Sri Lanka',
    nameEn: 'Sri Lanka',
    nameFr: 'Sri Lanka',
    nameDe: 'Sri Lanka',
    namePt: 'Sri Lanka',
    gdpMillionsUSD: 108825.23,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Sri Lanka', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=LK' },
      { name: 'DatosMacro — PIB Sri Lanka', url: 'https://datosmacro.expansion.com/pib/sri-lanka' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-south-africa',
    nameEs: 'Sudáfrica',
    nameEn: 'South Africa',
    nameFr: 'Afrique du Sud',
    nameDe: 'Südafrika',
    namePt: 'África do Sul',
    gdpMillionsUSD: 427184.33,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Sudáfrica', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=ZA' },
      { name: 'DatosMacro — PIB Sudáfrica', url: 'https://datosmacro.expansion.com/pib/sudafrica' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-sudan',
    nameEs: 'Sudán',
    nameEn: 'Sudan',
    nameFr: 'Soudan',
    nameDe: 'Sudan',
    namePt: 'Sudão',
    gdpMillionsUSD: 60162.63,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Sudán', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SD' },
      { name: 'DatosMacro — PIB Sudán', url: 'https://datosmacro.expansion.com/pib/sudan' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-south-sudan',
    nameEs: 'Sudán del Sur',
    nameEn: 'South Sudan',
    nameFr: 'Soudan du Sud',
    nameDe: 'Südsudan',
    namePt: 'Sudão do Sul',
    gdpMillionsUSD: 11997.80,
    year: 2015,
    sources: [
      { name: 'Banco Mundial — PIB Sudán del Sur', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SS' },
      { name: 'DatosMacro — PIB Sudán del Sur', url: 'https://datosmacro.expansion.com/pib/sudan-del-sur' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-sweden',
    nameEs: 'Suecia',
    nameEn: 'Sweden',
    nameFr: 'Suède',
    nameDe: 'Schweden',
    namePt: 'Suécia',
    gdpMillionsUSD: 668998.66,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Suecia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SE' },
      { name: 'DatosMacro — PIB Suecia', url: 'https://datosmacro.expansion.com/pib/suecia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-switzerland',
    nameEs: 'Suiza',
    nameEn: 'Switzerland',
    nameFr: 'Suisse',
    nameDe: 'Schweiz',
    namePt: 'Suíça',
    gdpMillionsUSD: 1043529.90,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Suiza', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=CH' },
      { name: 'DatosMacro — PIB Suiza', url: 'https://datosmacro.expansion.com/pib/suiza' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-suriname',
    nameEs: 'Suriname',
    nameEn: 'Suriname',
    nameFr: 'Suriname',
    nameDe: 'Suriname',
    namePt: 'Suriname',
    gdpMillionsUSD: 4523.66,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Suriname', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=SR' },
      { name: 'DatosMacro — PIB Suriname', url: 'https://datosmacro.expansion.com/pib/suriname' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-thailand',
    nameEs: 'Tailandia',
    nameEn: 'Thailand',
    nameFr: 'Thaïlande',
    nameDe: 'Thailand',
    namePt: 'Tailândia',
    gdpMillionsUSD: 577009.98,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Tailandia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=TH' },
      { name: 'DatosMacro — PIB Tailandia', url: 'https://datosmacro.expansion.com/pib/tailandia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-tanzania',
    nameEs: 'Tanzanía',
    nameEn: 'Tanzania',
    nameFr: 'Tanzanie',
    nameDe: 'Tansania',
    namePt: 'Tanzânia',
    gdpMillionsUSD: 90143.50,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Tanzanía', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=TZ' },
      { name: 'DatosMacro — PIB Tanzanía', url: 'https://datosmacro.expansion.com/pib/tanzania' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-tajikistan',
    nameEs: 'Tayikistán',
    nameEn: 'Tajikistan',
    nameFr: 'Tadjikistan',
    nameDe: 'Tadschikistan',
    namePt: 'Tadjiquistão',
    gdpMillionsUSD: 17660.63,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Tayikistán', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=TJ' },
      { name: 'DatosMacro — PIB Tayikistán', url: 'https://datosmacro.expansion.com/pib/tayikistan' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-timor-leste',
    nameEs: 'Timor-Leste',
    nameEn: 'Timor-Leste',
    nameFr: 'Timor oriental',
    nameDe: 'Osttimor',
    namePt: 'Timor-Leste',
    gdpMillionsUSD: 1902.18,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Timor-Leste', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=TL' },
      { name: 'DatosMacro — PIB Timor-Leste', url: 'https://datosmacro.expansion.com/pib/timor-leste' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-togo',
    nameEs: 'Togo',
    nameEn: 'Togo',
    nameFr: 'Togo',
    nameDe: 'Togo',
    namePt: 'Togo',
    gdpMillionsUSD: 11889.95,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Togo', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=TG' },
      { name: 'DatosMacro — PIB Togo', url: 'https://datosmacro.expansion.com/pib/togo' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-tonga',
    nameEs: 'Tonga',
    nameEn: 'Tonga',
    nameFr: 'Tonga',
    nameDe: 'Tonga',
    namePt: 'Tonga',
    gdpMillionsUSD: 679.22,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Tonga', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=TO' },
      { name: 'DatosMacro — PIB Tonga', url: 'https://datosmacro.expansion.com/pib/tonga' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-trinidad-and-tobago',
    nameEs: 'Trinidad y Tobago',
    nameEn: 'Trinidad and Tobago',
    nameFr: 'Trinité-et-Tobago',
    nameDe: 'Trinidad und Tobago',
    namePt: 'Trinidad e Tobago',
    gdpMillionsUSD: 25942.75,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Trinidad y Tobago', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=TT' },
      { name: 'DatosMacro — PIB Trinidad y Tobago', url: 'https://datosmacro.expansion.com/pib/trinidad-tobago' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-tunisia',
    nameEs: 'Túnez',
    nameEn: 'Tunisia',
    nameFr: 'Tunisie',
    nameDe: 'Tunesien',
    namePt: 'Tunísia',
    gdpMillionsUSD: 57502.84,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Túnez', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=TN' },
      { name: 'DatosMacro — PIB Túnez', url: 'https://datosmacro.expansion.com/pib/tunez' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-turkmenistan',
    nameEs: 'Turkmenistán',
    nameEn: 'Turkmenistan',
    nameFr: 'Turkménistan',
    nameDe: 'Turkmenistan',
    namePt: 'Turcomenistão',
    gdpMillionsUSD: 49828.62,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Turkmenistán', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=TM' },
      { name: 'DatosMacro — PIB Turkmenistán', url: 'https://datosmacro.expansion.com/pib/turkmenistan' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-turkey',
    nameEs: 'Turquía',
    nameEn: 'Türkiye',
    nameFr: 'Turquie',
    nameDe: 'Türkei',
    namePt: 'Turquia',
    gdpMillionsUSD: 1597293.23,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Turquía', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=TR' },
      { name: 'DatosMacro — PIB Turquía', url: 'https://datosmacro.expansion.com/pib/turquia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-tuvalu',
    nameEs: 'Tuvalu',
    nameEn: 'Tuvalu',
    nameFr: 'Tuvalu',
    nameDe: 'Tuvalu',
    namePt: 'Tuvalu',
    gdpMillionsUSD: 57.35,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Tuvalu', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=TV' },
      { name: 'DatosMacro — PIB Tuvalu', url: 'https://datosmacro.expansion.com/pib/tuvalu' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-ukraine',
    nameEs: 'Ucrania',
    nameEn: 'Ukraine',
    nameFr: 'Ukraine',
    nameDe: 'Ukraine',
    namePt: 'Ucrânia',
    gdpMillionsUSD: 214233.31,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Ucrania', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=UA' },
      { name: 'DatosMacro — PIB Ucrania', url: 'https://datosmacro.expansion.com/pib/ucrania' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-uganda',
    nameEs: 'Uganda',
    nameEn: 'Uganda',
    nameFr: 'Ouganda',
    nameDe: 'Uganda',
    namePt: 'Uganda',
    gdpMillionsUSD: 61985.83,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Uganda', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=UG' },
      { name: 'DatosMacro — PIB Uganda', url: 'https://datosmacro.expansion.com/pib/uganda' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-uruguay',
    nameEs: 'Uruguay',
    nameEn: 'Uruguay',
    nameFr: 'Uruguay',
    nameDe: 'Uruguay',
    namePt: 'Uruguai',
    gdpMillionsUSD: 85347.70,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Uruguay', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=UY' },
      { name: 'DatosMacro — PIB Uruguay', url: 'https://datosmacro.expansion.com/pib/uruguay' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-uzbekistan',
    nameEs: 'Uzbekistán',
    nameEn: 'Uzbekistan',
    nameFr: 'Ouzbékistan',
    nameDe: 'Usbekistan',
    namePt: 'Uzbequistão',
    gdpMillionsUSD: 147038.08,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Uzbekistán', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=UZ' },
      { name: 'DatosMacro — PIB Uzbekistán', url: 'https://datosmacro.expansion.com/pib/uzbekistan' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-vanuatu',
    nameEs: 'Vanuatu',
    nameEn: 'Vanuatu',
    nameFr: 'Vanuatu',
    nameDe: 'Vanuatu',
    namePt: 'Vanuatu',
    gdpMillionsUSD: 1353.66,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Vanuatu', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=VU' },
      { name: 'DatosMacro — PIB Vanuatu', url: 'https://datosmacro.expansion.com/pib/vanuatu' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-venezuela',
    nameEs: 'Venezuela',
    nameEn: 'Venezuela',
    nameFr: 'Venezuela',
    nameDe: 'Venezuela',
    namePt: 'Venezuela',
    gdpMillionsUSD: 99661.24,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Venezuela', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=VE' },
      { name: 'DatosMacro — PIB Venezuela', url: 'https://datosmacro.expansion.com/pib/venezuela' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-vietnam',
    nameEs: 'Viet Nam',
    nameEn: 'Vietnam',
    nameFr: 'Viêt Nam',
    nameDe: 'Vietnam',
    namePt: 'Vietnã',
    gdpMillionsUSD: 514697.22,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Viet Nam', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=VN' },
      { name: 'DatosMacro — PIB Viet Nam', url: 'https://datosmacro.expansion.com/pib/vietnam' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-yemen',
    nameEs: 'Yemen, Rep. del',
    nameEn: 'Yemen',
    nameFr: 'Yémen',
    nameDe: 'Jemen',
    namePt: 'Iêmen',
    gdpMillionsUSD: 21606.16,
    year: 2018,
    sources: [
      { name: 'Banco Mundial — PIB Yemen', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=YE' },
      { name: 'DatosMacro — PIB Yemen', url: 'https://datosmacro.expansion.com/pib/yemen' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-zambia',
    nameEs: 'Zambia',
    nameEn: 'Zambia',
    nameFr: 'Zambie',
    nameDe: 'Sambia',
    namePt: 'Zâmbia',
    gdpMillionsUSD: 28879.81,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Zambia', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=ZM' },
      { name: 'DatosMacro — PIB Zambia', url: 'https://datosmacro.expansion.com/pib/zambia' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  },
  {
    id: 'gdp-zimbabwe',
    nameEs: 'Zimbabwe',
    nameEn: 'Zimbabwe',
    nameFr: 'Zimbabwe',
    nameDe: 'Simbabwe',
    namePt: 'Zimbábue',
    gdpMillionsUSD: 51215.64,
    year: 2025,
    sources: [
      { name: 'Banco Mundial — PIB Zimbabwe', url: 'https://datos.bancomundial.org/indicador/NY.GDP.MKTP.CD?locations=ZW' },
      { name: 'DatosMacro — PIB Zimbabwe', url: 'https://datosmacro.expansion.com/pib/zimbabue' },
      { name: 'Wikipedia — Anexo:Países por PIB (nominal)', url: 'https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_PIB_(nominal)' }
    ]
  }
];
