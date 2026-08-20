export interface CountryDebtData {
  id: string;
  nameEs: string;
  nameEn: string;
  nameFr: string;
  nameDe: string;
  namePt: string;
  debtUSD: number;
  year: number;
  sources: { name: string; url: string }[];
}

export const COUNTRIES_DEBT_DATA: CountryDebtData[] = [
  {
    "id": "debt-spain",
    "nameEs": "España",
    "nameEn": "Spain",
    "nameFr": "Espagne",
    "nameDe": "Spanien",
    "namePt": "Espanha",
    "debtUSD": 1845896739130,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de España",
        "url": "https://datosmacro.expansion.com/deuda/spain"
      }
    ]
  },
  {
    "id": "debt-germany",
    "nameEs": "Alemania",
    "nameEn": "Germany",
    "nameFr": "Allemagne",
    "nameDe": "Deutschland",
    "namePt": "Alemanha",
    "debtUSD": 3085042391304,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Alemania",
        "url": "https://datosmacro.expansion.com/deuda/germany"
      }
    ]
  },
  {
    "id": "debt-united-kingdom",
    "nameEs": "Reino Unido",
    "nameEn": "United Kingdom",
    "nameFr": "Royaume-Uni",
    "nameDe": "Vereinigtes Königreich",
    "namePt": "Reino Unido",
    "debtUSD": 3708419565217,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Reino Unido",
        "url": "https://datosmacro.expansion.com/deuda/unitedkingdom"
      }
    ]
  },
  {
    "id": "debt-france",
    "nameEs": "Francia",
    "nameEn": "France",
    "nameFr": "France",
    "nameDe": "Frankreich",
    "namePt": "França",
    "debtUSD": 3761375000000,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Francia",
        "url": "https://datosmacro.expansion.com/deuda/france"
      }
    ]
  },
  {
    "id": "debt-italy",
    "nameEs": "Italia",
    "nameEn": "Italy",
    "nameFr": "Italie",
    "nameDe": "Italien",
    "namePt": "Itália",
    "debtUSD": 3365095652174,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Italia",
        "url": "https://datosmacro.expansion.com/deuda/italy"
      }
    ]
  },
  {
    "id": "debt-portugal",
    "nameEs": "Portugal",
    "nameEn": "Portugal",
    "nameFr": "Portugal",
    "nameDe": "Portugal",
    "namePt": "Portugal",
    "debtUSD": 298981521739,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Portugal",
        "url": "https://datosmacro.expansion.com/deuda/portugal"
      }
    ]
  },
  {
    "id": "debt-united-states",
    "nameEs": "Estados Unidos",
    "nameEn": "United States",
    "nameFr": "États-Unis",
    "nameDe": "Vereinigte Staaten",
    "namePt": "Estados Unidos",
    "debtUSD": 35984867391304,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Estados Unidos",
        "url": "https://datosmacro.expansion.com/deuda/unitedstates"
      }
    ]
  },
  {
    "id": "debt-japan",
    "nameEs": "Japón",
    "nameEn": "Japan",
    "nameFr": "Japon",
    "nameDe": "Japan",
    "namePt": "Japão",
    "debtUSD": 9027734782609,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Japón",
        "url": "https://datosmacro.expansion.com/deuda/japan"
      }
    ]
  },
  {
    "id": "debt-china",
    "nameEs": "China",
    "nameEn": "China",
    "nameFr": "Chine",
    "nameDe": "China",
    "namePt": "China",
    "debtUSD": 17207963043478,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de China",
        "url": "https://datosmacro.expansion.com/deuda/china"
      }
    ]
  },
  {
    "id": "debt-andorra",
    "nameEs": "Andorra",
    "nameEn": "Andorra",
    "nameFr": "Andorre",
    "nameDe": "Andorra",
    "namePt": "Andorra",
    "debtUSD": 1335869565,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Andorra",
        "url": "https://datosmacro.expansion.com/deuda/andorra"
      }
    ]
  },
  {
    "id": "debt-united-arab-emirates",
    "nameEs": "Emiratos Árabes Unidos",
    "nameEn": "United Arab Emirates",
    "nameFr": "Émirats arabes unis",
    "nameDe": "Vereinigte Arabische Emirate",
    "namePt": "Emirados Árabes Unidos",
    "debtUSD": 193881521739,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Emiratos Árabes Unidos",
        "url": "https://datosmacro.expansion.com/deuda/unitedarabemirates"
      }
    ]
  },
  {
    "id": "debt-afghanistan",
    "nameEs": "Afganistán",
    "nameEn": "Afghanistan",
    "nameFr": "Afghanistan",
    "nameDe": "Afghanistan",
    "namePt": "Afeganistão",
    "debtUSD": 1594565217,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Afganistán",
        "url": "https://datosmacro.expansion.com/deuda/afghanistan"
      }
    ]
  },
  {
    "id": "debt-antigua-and-barbuda",
    "nameEs": "Antigua y Barbuda",
    "nameEn": "Antigua and Barbuda",
    "nameFr": "Antigua-et-Barbuda",
    "nameDe": "Antigua und Barbuda",
    "namePt": "Antígua e Barbuda",
    "debtUSD": 1558695652,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Antigua y Barbuda",
        "url": "https://datosmacro.expansion.com/deuda/antiguaandbarbuda"
      }
    ]
  },
  {
    "id": "debt-albania",
    "nameEs": "Albania",
    "nameEn": "Albania",
    "nameFr": "Albanie",
    "nameDe": "Albanien",
    "namePt": "Albânia",
    "debtUSD": 14829347826,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Albania",
        "url": "https://datosmacro.expansion.com/deuda/albania"
      }
    ]
  },
  {
    "id": "debt-armenia",
    "nameEs": "Armenia",
    "nameEn": "Armenia",
    "nameFr": "Arménie",
    "nameDe": "Armenien",
    "namePt": "Armênia",
    "debtUSD": 13026086957,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Armenia",
        "url": "https://datosmacro.expansion.com/deuda/armenia"
      }
    ]
  },
  {
    "id": "debt-angola",
    "nameEs": "Angola",
    "nameEn": "Angola",
    "nameFr": "Angola",
    "nameDe": "Angola",
    "namePt": "Angola",
    "debtUSD": 68594565217,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Angola",
        "url": "https://datosmacro.expansion.com/deuda/angola"
      }
    ]
  },
  {
    "id": "debt-argentina",
    "nameEs": "Argentina",
    "nameEn": "Argentina",
    "nameFr": "Argentine",
    "nameDe": "Argentinien",
    "namePt": "Argentina",
    "debtUSD": 541880434783,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Argentina",
        "url": "https://datosmacro.expansion.com/deuda/argentina"
      }
    ]
  },
  {
    "id": "debt-austria",
    "nameEs": "Austria",
    "nameEn": "Austria",
    "nameFr": "Autriche",
    "nameDe": "Österreich",
    "namePt": "Áustria",
    "debtUSD": 454433695652,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Austria",
        "url": "https://datosmacro.expansion.com/deuda/austria"
      }
    ]
  },
  {
    "id": "debt-australia",
    "nameEs": "Australia",
    "nameEn": "Australia",
    "nameFr": "Australie",
    "nameDe": "Australien",
    "namePt": "Austrália",
    "debtUSD": 914835869565,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Australia",
        "url": "https://datosmacro.expansion.com/deuda/australia"
      }
    ]
  },
  {
    "id": "debt-azerbaijan",
    "nameEs": "Azerbaiyán",
    "nameEn": "Azerbaijan",
    "nameFr": "Azerbaïdjan",
    "nameDe": "Aserbaidschan",
    "namePt": "Azerbaijão",
    "debtUSD": 16179347826,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Azerbaiyán",
        "url": "https://datosmacro.expansion.com/deuda/azerbaijan"
      }
    ]
  },
  {
    "id": "debt-bosnia-and-herzegovina",
    "nameEs": "Bosnia y Herzegovina",
    "nameEn": "Bosnia and Herzegovina",
    "nameFr": "Bosnie-Herzégovine",
    "nameDe": "Bosnien und Herzegowina",
    "namePt": "Bósnia e Herzegovina",
    "debtUSD": 8783695652,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Bosnia y Herzegovina",
        "url": "https://datosmacro.expansion.com/deuda/bosniaandherzegovina"
      }
    ]
  },
  {
    "id": "debt-barbados",
    "nameEs": "Barbados",
    "nameEn": "Barbados",
    "nameFr": "Barbade",
    "nameDe": "Barbados",
    "namePt": "Barbados",
    "debtUSD": 7656521739,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Barbados",
        "url": "https://datosmacro.expansion.com/deuda/barbados"
      }
    ]
  },
  {
    "id": "debt-bangladesh",
    "nameEs": "Bangladesh",
    "nameEn": "Bangladesh",
    "nameFr": "Bangladesh",
    "nameDe": "Bangladesch",
    "namePt": "Bangladesh",
    "debtUSD": 185397826087,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Bangladesh",
        "url": "https://datosmacro.expansion.com/deuda/bangladesh"
      }
    ]
  },
  {
    "id": "debt-belgium",
    "nameEs": "Bélgica",
    "nameEn": "Belgium",
    "nameFr": "Belgique",
    "nameDe": "Belgien",
    "namePt": "Bélgica",
    "debtUSD": 752675000000,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Bélgica",
        "url": "https://datosmacro.expansion.com/deuda/belgium"
      }
    ]
  },
  {
    "id": "debt-burkina-faso",
    "nameEs": "Burkina Faso",
    "nameEn": "Burkina Faso",
    "nameFr": "Burkina Faso",
    "nameDe": "Burkina Faso",
    "namePt": "Burkina Faso",
    "debtUSD": 13301086957,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Burkina Faso",
        "url": "https://datosmacro.expansion.com/deuda/burkinafaso"
      }
    ]
  },
  {
    "id": "debt-bulgaria",
    "nameEs": "Bulgaria",
    "nameEn": "Bulgaria",
    "nameFr": "Bulgarie",
    "nameDe": "Bulgarien",
    "namePt": "Bulgária",
    "debtUSD": 37646739130,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Bulgaria",
        "url": "https://datosmacro.expansion.com/deuda/bulgaria"
      }
    ]
  },
  {
    "id": "debt-bahrain",
    "nameEs": "Bahrein",
    "nameEn": "Bahrain",
    "nameFr": "Bahreïn",
    "nameDe": "Bahrain",
    "namePt": "Bahrein",
    "debtUSD": 63392391304,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Bahrein",
        "url": "https://datosmacro.expansion.com/deuda/bahrain"
      }
    ]
  },
  {
    "id": "debt-burundi",
    "nameEs": "Burundi",
    "nameEn": "Burundi",
    "nameFr": "Burundi",
    "nameDe": "Burundi",
    "namePt": "Burundi",
    "debtUSD": 2578260870,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Burundi",
        "url": "https://datosmacro.expansion.com/deuda/burundi"
      }
    ]
  },
  {
    "id": "debt-benin",
    "nameEs": "Benin",
    "nameEn": "Benin",
    "nameFr": "Bénin",
    "nameDe": "Benin",
    "namePt": "Benin",
    "debtUSD": 13064130435,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Benin",
        "url": "https://datosmacro.expansion.com/deuda/benin"
      }
    ]
  },
  {
    "id": "debt-brunei",
    "nameEs": "Brunéi",
    "nameEn": "Brunei",
    "nameFr": "Brunéi",
    "nameDe": "Brunei",
    "namePt": "Brunei",
    "debtUSD": 241304348,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Brunéi",
        "url": "https://datosmacro.expansion.com/deuda/brunei"
      }
    ]
  },
  {
    "id": "debt-bolivia",
    "nameEs": "Bolivia",
    "nameEn": "Bolivia",
    "nameFr": "Bolivie",
    "nameDe": "Bolivien",
    "namePt": "Bolívia",
    "debtUSD": 46211956522,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Bolivia",
        "url": "https://datosmacro.expansion.com/deuda/bolivia"
      }
    ]
  },
  {
    "id": "debt-brazil",
    "nameEs": "Brasil",
    "nameEn": "Brazil",
    "nameFr": "Brésil",
    "nameDe": "Brasilien",
    "namePt": "Brasil",
    "debtUSD": 1910891304348,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Brasil",
        "url": "https://datosmacro.expansion.com/deuda/brazil"
      }
    ]
  },
  {
    "id": "debt-bahamas",
    "nameEs": "Bahamas",
    "nameEn": "Bahamas",
    "nameFr": "Bahamas",
    "nameDe": "Bahamas",
    "namePt": "Bahamas",
    "debtUSD": 11534782609,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Bahamas",
        "url": "https://datosmacro.expansion.com/deuda/bahamas"
      }
    ]
  },
  {
    "id": "debt-bhutan",
    "nameEs": "Bhután",
    "nameEn": "Bhutan",
    "nameFr": "Bhoutan",
    "nameDe": "Bhutan",
    "namePt": "Butão",
    "debtUSD": 3436956522,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Bhután",
        "url": "https://datosmacro.expansion.com/deuda/bhutan"
      }
    ]
  },
  {
    "id": "debt-botswana",
    "nameEs": "Botswana",
    "nameEn": "Botswana",
    "nameFr": "Botswana",
    "nameDe": "Botswana",
    "namePt": "Botsuana",
    "debtUSD": 4384782609,
    "year": 2023,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Botswana",
        "url": "https://datosmacro.expansion.com/deuda/botswana"
      }
    ]
  },
  {
    "id": "debt-belarus",
    "nameEs": "Belarús",
    "nameEn": "Belarus",
    "nameFr": "Bélarus",
    "nameDe": "Belarus",
    "namePt": "Bielorrússia",
    "debtUSD": 30651086957,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Belarús",
        "url": "https://datosmacro.expansion.com/deuda/belarus"
      }
    ]
  },
  {
    "id": "debt-belize",
    "nameEs": "Belice",
    "nameEn": "Belize",
    "nameFr": "Belize",
    "nameDe": "Belize",
    "namePt": "Belize",
    "debtUSD": 2106521739,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Belice",
        "url": "https://datosmacro.expansion.com/deuda/belize"
      }
    ]
  },
  {
    "id": "debt-canada",
    "nameEs": "Canadá",
    "nameEn": "Canada",
    "nameFr": "Canada",
    "nameDe": "Kanada",
    "namePt": "Canadá",
    "debtUSD": 2508820652174,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Canadá",
        "url": "https://datosmacro.expansion.com/deuda/canada"
      }
    ]
  },
  {
    "id": "debt-democratic-republic-of-the-congo",
    "nameEs": "República Democrática del Congo",
    "nameEn": "Democratic Republic of the Congo",
    "nameFr": "République démocratique du Congo",
    "nameDe": "Demokratische Republik Kongo",
    "namePt": "República Democrática do Congo",
    "debtUSD": 11009782609,
    "year": 2023,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de República Democrática del Congo",
        "url": "https://datosmacro.expansion.com/deuda/democraticrepublicofthecongo"
      }
    ]
  },
  {
    "id": "debt-central-african-republic",
    "nameEs": "República Centroafricana",
    "nameEn": "Central African Republic",
    "nameFr": "République centrafricaine",
    "nameDe": "Zentralafrikanische Republik",
    "namePt": "República Centro-Africana",
    "debtUSD": 1725000000,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de República Centroafricana",
        "url": "https://datosmacro.expansion.com/deuda/centralafricanrepublic"
      }
    ]
  },
  {
    "id": "debt-republic-of-the-congo",
    "nameEs": "República del Congo",
    "nameEn": "Republic of the Congo",
    "nameFr": "République du Congo",
    "nameDe": "Republik Kongo",
    "namePt": "República do Congo",
    "debtUSD": 14547826087,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de República del Congo",
        "url": "https://datosmacro.expansion.com/deuda/republicofthecongo"
      }
    ]
  },
  {
    "id": "debt-switzerland",
    "nameEs": "Suiza",
    "nameEn": "Switzerland",
    "nameFr": "Suisse",
    "nameDe": "Schweiz",
    "namePt": "Suíça",
    "debtUSD": 394640217391,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Suiza",
        "url": "https://datosmacro.expansion.com/deuda/switzerland"
      }
    ]
  },
  {
    "id": "debt-ivory-coast",
    "nameEs": "Costa de Marfil",
    "nameEn": "Ivory Coast",
    "nameFr": "Côte d'Court",
    "nameDe": "Elfenbeinküste",
    "namePt": "Costa do Marfim",
    "debtUSD": 52042391304,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Costa de Marfil",
        "url": "https://datosmacro.expansion.com/deuda/ivorycoast"
      }
    ]
  },
  {
    "id": "debt-chile",
    "nameEs": "Chile",
    "nameEn": "Chile",
    "nameFr": "Chili",
    "nameDe": "Chile",
    "namePt": "Chile",
    "debtUSD": 138155434783,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Chile",
        "url": "https://datosmacro.expansion.com/deuda/chile"
      }
    ]
  },
  {
    "id": "debt-cameroon",
    "nameEs": "Camerún",
    "nameEn": "Cameroon",
    "nameFr": "Cameroun",
    "nameDe": "Kamerun",
    "namePt": "Camarões",
    "debtUSD": 23247826087,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Camerún",
        "url": "https://datosmacro.expansion.com/deuda/cameroon"
      }
    ]
  },
  {
    "id": "debt-colombia",
    "nameEs": "Colombia",
    "nameEn": "Colombia",
    "nameFr": "Colombie",
    "nameDe": "Kolumbien",
    "namePt": "Colômbia",
    "debtUSD": 257704347826,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Colombia",
        "url": "https://datosmacro.expansion.com/deuda/colombia"
      }
    ]
  },
  {
    "id": "debt-costa-rica",
    "nameEs": "Costa Rica",
    "nameEn": "Costa Rica",
    "nameFr": "Costa Rica",
    "nameDe": "Costa Rica",
    "namePt": "Costa Rica",
    "debtUSD": 57241304348,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Costa Rica",
        "url": "https://datosmacro.expansion.com/deuda/costarica"
      }
    ]
  },
  {
    "id": "debt-cape-verde",
    "nameEs": "Cabo Verde",
    "nameEn": "Cape Verde",
    "nameFr": "Cap-Vert",
    "nameDe": "Kap Verde",
    "namePt": "Cabo Verde",
    "debtUSD": 3090217391,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Cabo Verde",
        "url": "https://datosmacro.expansion.com/deuda/capeverde"
      }
    ]
  },
  {
    "id": "debt-cyprus",
    "nameEs": "Chipre",
    "nameEn": "Cyprus",
    "nameFr": "Chypre",
    "nameDe": "Zypern",
    "namePt": "Chipre",
    "debtUSD": 21823913043,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Chipre",
        "url": "https://datosmacro.expansion.com/deuda/cyprus"
      }
    ]
  },
  {
    "id": "debt-czechia",
    "nameEs": "Chequia",
    "nameEn": "Czechia",
    "nameFr": "Tchéquie",
    "nameDe": "Tschechien",
    "namePt": "Chéquia",
    "debtUSD": 169802173913,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Chequia",
        "url": "https://datosmacro.expansion.com/deuda/czechia"
      }
    ]
  },
  {
    "id": "debt-djibouti",
    "nameEs": "Yibuti",
    "nameEn": "Djibouti",
    "nameFr": "Djibouti",
    "nameDe": "Dschibuti",
    "namePt": "Djibuti",
    "debtUSD": 1416304348,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Yibuti",
        "url": "https://datosmacro.expansion.com/deuda/djibouti"
      }
    ]
  },
  {
    "id": "debt-denmark",
    "nameEs": "Dinamarca",
    "nameEn": "Denmark",
    "nameFr": "Danemark",
    "nameDe": "Dänemark",
    "namePt": "Dinamarca",
    "debtUSD": 124458695652,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Dinamarca",
        "url": "https://datosmacro.expansion.com/deuda/denmark"
      }
    ]
  },
  {
    "id": "debt-dominica",
    "nameEs": "Dominica",
    "nameEn": "Dominica",
    "nameFr": "Dominique",
    "nameDe": "Dominica",
    "namePt": "Dominica",
    "debtUSD": 779347826,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Dominica",
        "url": "https://datosmacro.expansion.com/deuda/dominica"
      }
    ]
  },
  {
    "id": "debt-dominican-republic",
    "nameEs": "República Dominicana",
    "nameEn": "Dominican Republic",
    "nameFr": "République dominicaine",
    "nameDe": "Dominikanische Republik",
    "namePt": "República Dominicana",
    "debtUSD": 73593478261,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de República Dominicana",
        "url": "https://datosmacro.expansion.com/deuda/dominicanrepublic"
      }
    ]
  },
  {
    "id": "debt-algeria",
    "nameEs": "Argelia",
    "nameEn": "Algeria",
    "nameFr": "Algérie",
    "nameDe": "Algerien",
    "namePt": "Argélia",
    "debtUSD": 129959782609,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Argelia",
        "url": "https://datosmacro.expansion.com/deuda/algeria"
      }
    ]
  },
  {
    "id": "debt-ecuador",
    "nameEs": "Ecuador",
    "nameEn": "Ecuador",
    "nameFr": "Équateur",
    "nameDe": "Ecuador",
    "namePt": "Equador",
    "debtUSD": 67322826087,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Ecuador",
        "url": "https://datosmacro.expansion.com/deuda/ecuador"
      }
    ]
  },
  {
    "id": "debt-estonia",
    "nameEs": "Estonia",
    "nameEn": "Estonia",
    "nameFr": "Estonie",
    "nameDe": "Estland",
    "namePt": "Estônia",
    "debtUSD": 10907608696,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Estonia",
        "url": "https://datosmacro.expansion.com/deuda/estonia"
      }
    ]
  },
  {
    "id": "debt-egypt",
    "nameEs": "Egipto, República Árabe de",
    "nameEn": "Egypt",
    "nameFr": "Égypte",
    "nameDe": "Ägypten",
    "namePt": "Egito",
    "debtUSD": 349919565217,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Egipto, República Árabe de",
        "url": "https://datosmacro.expansion.com/deuda/egypt"
      }
    ]
  },
  {
    "id": "debt-eritrea",
    "nameEs": "Eritrea",
    "nameEn": "Eritrea",
    "nameFr": "Érythrée",
    "nameDe": "Eritrea",
    "namePt": "Eritreia",
    "debtUSD": 3614130435,
    "year": 2020,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Eritrea",
        "url": "https://datosmacro.expansion.com/deuda/eritrea"
      }
    ]
  },
  {
    "id": "debt-ethiopia",
    "nameEs": "Etiopía",
    "nameEn": "Ethiopia",
    "nameFr": "Éthiopie",
    "nameDe": "Äthiopien",
    "namePt": "Etiópia",
    "debtUSD": 47641304348,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Etiopía",
        "url": "https://datosmacro.expansion.com/deuda/ethiopia"
      }
    ]
  },
  {
    "id": "debt-finland",
    "nameEs": "Finlandia",
    "nameEn": "Finland",
    "nameFr": "Finlande",
    "nameDe": "Finnland",
    "namePt": "Finlândia",
    "debtUSD": 270035869565,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Finlandia",
        "url": "https://datosmacro.expansion.com/deuda/finland"
      }
    ]
  },
  {
    "id": "debt-fiji",
    "nameEs": "Fiji",
    "nameEn": "Fiji",
    "nameFr": "Fidji",
    "nameDe": "Fidschi",
    "namePt": "Fiji",
    "debtUSD": 4565217391,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Fiji",
        "url": "https://datosmacro.expansion.com/deuda/fiji"
      }
    ]
  },
  {
    "id": "debt-micronesia",
    "nameEs": "Estados Federados de Micronesia",
    "nameEn": "Micronesia",
    "nameFr": "Micronésie",
    "nameDe": "Mikronesien",
    "namePt": "Micronésia",
    "debtUSD": 65217391,
    "year": 2022,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Estados Federados de Micronesia",
        "url": "https://datosmacro.expansion.com/deuda/micronesia"
      }
    ]
  },
  {
    "id": "debt-gabon",
    "nameEs": "Gabón",
    "nameEn": "Gabon",
    "nameFr": "Gabon",
    "nameDe": "Gabun",
    "namePt": "Gabão",
    "debtUSD": 14880434783,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Gabón",
        "url": "https://datosmacro.expansion.com/deuda/gabon"
      }
    ]
  },
  {
    "id": "debt-grenada",
    "nameEs": "Granada",
    "nameEn": "Grenada",
    "nameFr": "Grenade",
    "nameDe": "Grenada",
    "namePt": "Granada",
    "debtUSD": 1018478261,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Granada",
        "url": "https://datosmacro.expansion.com/deuda/grenada"
      }
    ]
  },
  {
    "id": "debt-georgia",
    "nameEs": "Georgia",
    "nameEn": "Georgia",
    "nameFr": "Géorgie",
    "nameDe": "Georgien",
    "namePt": "Geórgia",
    "debtUSD": 12246739130,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Georgia",
        "url": "https://datosmacro.expansion.com/deuda/georgia"
      }
    ]
  },
  {
    "id": "debt-ghana",
    "nameEs": "Ghana",
    "nameEn": "Ghana",
    "nameFr": "Ghana",
    "nameDe": "Ghana",
    "namePt": "Gana",
    "debtUSD": 58853260870,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Ghana",
        "url": "https://datosmacro.expansion.com/deuda/ghana"
      }
    ]
  },
  {
    "id": "debt-gambia",
    "nameEs": "Gambia",
    "nameEn": "Gambia",
    "nameFr": "Gambie",
    "nameDe": "Gambia",
    "namePt": "Gâmbia",
    "debtUSD": 1811956522,
    "year": 2023,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Gambia",
        "url": "https://datosmacro.expansion.com/deuda/gambia"
      }
    ]
  },
  {
    "id": "debt-guinea",
    "nameEs": "Guinea",
    "nameEn": "Guinea",
    "nameFr": "Guinée",
    "nameDe": "Guinea",
    "namePt": "Guiné",
    "debtUSD": 11753260870,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Guinea",
        "url": "https://datosmacro.expansion.com/deuda/guinea"
      }
    ]
  },
  {
    "id": "debt-equatorial-guinea",
    "nameEs": "Guinea Ecuatorial",
    "nameEn": "Equatorial Guinea",
    "nameFr": "Guinée équatoriale",
    "nameDe": "Äquatorialguinea",
    "namePt": "Guiné Equatorial",
    "debtUSD": 4673913043,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Guinea Ecuatorial",
        "url": "https://datosmacro.expansion.com/deuda/equatorialguinea"
      }
    ]
  },
  {
    "id": "debt-greece",
    "nameEs": "Grecia",
    "nameEn": "Greece",
    "nameFr": "Grèce",
    "nameDe": "Griechenland",
    "namePt": "Grécia",
    "debtUSD": 394483695652,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Grecia",
        "url": "https://datosmacro.expansion.com/deuda/greece"
      }
    ]
  },
  {
    "id": "debt-guatemala",
    "nameEs": "Guatemala",
    "nameEn": "Guatemala",
    "nameFr": "Guatemala",
    "nameDe": "Guatemala",
    "namePt": "Guatemala",
    "debtUSD": 29928260870,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Guatemala",
        "url": "https://datosmacro.expansion.com/deuda/guatemala"
      }
    ]
  },
  {
    "id": "debt-guinea-bissau",
    "nameEs": "Guinea-Bissau",
    "nameEn": "Guinea-Bissau",
    "nameFr": "Guinée-Bissau",
    "nameDe": "Guinea-Bissau",
    "namePt": "Guiné-Bissau",
    "debtUSD": 1809782609,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Guinea-Bissau",
        "url": "https://datosmacro.expansion.com/deuda/guineabissau"
      }
    ]
  },
  {
    "id": "debt-guyana",
    "nameEs": "Guyana",
    "nameEn": "Guyana",
    "nameFr": "Guyana",
    "nameDe": "Guyana",
    "namePt": "Guiana",
    "debtUSD": 6020652174,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Guyana",
        "url": "https://datosmacro.expansion.com/deuda/guyana"
      }
    ]
  },
  {
    "id": "debt-hong-kong",
    "nameEs": "Hong Kong",
    "nameEn": "Hong Kong",
    "nameFr": "Hong Kong",
    "nameDe": "Hongkong",
    "namePt": "Hong Kong",
    "debtUSD": 38532608696,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Hong Kong",
        "url": "https://datosmacro.expansion.com/deuda/hongkong"
      }
    ]
  },
  {
    "id": "debt-honduras",
    "nameEs": "Honduras",
    "nameEn": "Honduras",
    "nameFr": "Honduras",
    "nameDe": "Honduras",
    "namePt": "Honduras",
    "debtUSD": 15467391304,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Honduras",
        "url": "https://datosmacro.expansion.com/deuda/honduras"
      }
    ]
  },
  {
    "id": "debt-croatia",
    "nameEs": "Croacia",
    "nameEn": "Croatia",
    "nameFr": "Croatie",
    "nameDe": "Kroatien",
    "namePt": "Croácia",
    "debtUSD": 56925000000,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Croacia",
        "url": "https://datosmacro.expansion.com/deuda/croatia"
      }
    ]
  },
  {
    "id": "debt-haiti",
    "nameEs": "Haití",
    "nameEn": "Haiti",
    "nameFr": "Haïti",
    "nameDe": "Haiti",
    "namePt": "Haiti",
    "debtUSD": 3938043478,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Haití",
        "url": "https://datosmacro.expansion.com/deuda/haiti"
      }
    ]
  },
  {
    "id": "debt-hungary",
    "nameEs": "Hungría",
    "nameEn": "Hungary",
    "nameFr": "Hongrie",
    "nameDe": "Ungarn",
    "namePt": "Hungria",
    "debtUSD": 183191304348,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Hungría",
        "url": "https://datosmacro.expansion.com/deuda/hungary"
      }
    ]
  },
  {
    "id": "debt-indonesia",
    "nameEs": "Indonesia",
    "nameEn": "Indonesia",
    "nameFr": "Indonésie",
    "nameDe": "Indonesien",
    "namePt": "Indonésia",
    "debtUSD": 563363043478,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Indonesia",
        "url": "https://datosmacro.expansion.com/deuda/indonesia"
      }
    ]
  },
  {
    "id": "debt-ireland",
    "nameEs": "Irlanda",
    "nameEn": "Ireland",
    "nameFr": "Irlande",
    "nameDe": "Irland",
    "namePt": "Irlanda",
    "debtUSD": 228154347826,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Irlanda",
        "url": "https://datosmacro.expansion.com/deuda/ireland"
      }
    ]
  },
  {
    "id": "debt-israel",
    "nameEs": "Israel",
    "nameEn": "Israel",
    "nameFr": "Israël",
    "nameDe": "Israel",
    "namePt": "Israel",
    "debtUSD": 368641304348,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Israel",
        "url": "https://datosmacro.expansion.com/deuda/israel"
      }
    ]
  },
  {
    "id": "debt-india",
    "nameEs": "India",
    "nameEn": "India",
    "nameFr": "Inde",
    "nameDe": "Indien",
    "namePt": "Índia",
    "debtUSD": 3202928260870,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de India",
        "url": "https://datosmacro.expansion.com/deuda/india"
      }
    ]
  },
  {
    "id": "debt-iraq",
    "nameEs": "Iraq",
    "nameEn": "Iraq",
    "nameFr": "Irak",
    "nameDe": "Irak",
    "namePt": "Iraque",
    "debtUSD": 130100000000,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Iraq",
        "url": "https://datosmacro.expansion.com/deuda/iraq"
      }
    ]
  },
  {
    "id": "debt-iran",
    "nameEs": "Irán",
    "nameEn": "Iran",
    "nameFr": "Iran",
    "nameDe": "Iran",
    "namePt": "Irã",
    "debtUSD": 130711956522,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Irán",
        "url": "https://datosmacro.expansion.com/deuda/iran"
      }
    ]
  },
  {
    "id": "debt-iceland",
    "nameEs": "Islandia",
    "nameEn": "Iceland",
    "nameFr": "Islande",
    "nameDe": "Island",
    "namePt": "Islândia",
    "debtUSD": 20152173913,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Islandia",
        "url": "https://datosmacro.expansion.com/deuda/iceland"
      }
    ]
  },
  {
    "id": "debt-jamaica",
    "nameEs": "Jamaica",
    "nameEn": "Jamaica",
    "nameFr": "Jamaïque",
    "nameDe": "Jamaika",
    "namePt": "Jamaica",
    "debtUSD": 13950000000,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Jamaica",
        "url": "https://datosmacro.expansion.com/deuda/jamaica"
      }
    ]
  },
  {
    "id": "debt-jordan",
    "nameEs": "Jordania",
    "nameEn": "Jordan",
    "nameFr": "Jordanie",
    "nameDe": "Jordanien",
    "namePt": "Jordânia",
    "debtUSD": 48423913043,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Jordania",
        "url": "https://datosmacro.expansion.com/deuda/jordan"
      }
    ]
  },
  {
    "id": "debt-kenya",
    "nameEs": "Kenya",
    "nameEn": "Kenya",
    "nameFr": "Kenya",
    "nameDe": "Kenia",
    "namePt": "Quênia",
    "debtUSD": 80703260870,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Kenya",
        "url": "https://datosmacro.expansion.com/deuda/kenya"
      }
    ]
  },
  {
    "id": "debt-kyrgyz-republic",
    "nameEs": "Kirguistán",
    "nameEn": "Kyrgyz Republic",
    "nameFr": "Kirghizistan",
    "nameDe": "Kirgisistan",
    "namePt": "Quirguistão",
    "debtUSD": 6614130435,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Kirguistán",
        "url": "https://datosmacro.expansion.com/deuda/kyrgyzrepublic"
      }
    ]
  },
  {
    "id": "debt-cambodia",
    "nameEs": "Camboya",
    "nameEn": "Cambodia",
    "nameFr": "Cambodge",
    "nameDe": "Kambodscha",
    "namePt": "Camboja",
    "debtUSD": 12103260870,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Camboya",
        "url": "https://datosmacro.expansion.com/deuda/cambodia"
      }
    ]
  },
  {
    "id": "debt-kiribati",
    "nameEs": "Kiribati",
    "nameEn": "Kiribati",
    "nameFr": "Kiribati",
    "nameDe": "Kiribati",
    "namePt": "Kiribati",
    "debtUSD": 30434783,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Kiribati",
        "url": "https://datosmacro.expansion.com/deuda/kiribati"
      }
    ]
  },
  {
    "id": "debt-comoros",
    "nameEs": "Comoras",
    "nameEn": "Comoros",
    "nameFr": "Comores",
    "nameDe": "Komoren",
    "namePt": "Comores",
    "debtUSD": 434782609,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Comoras",
        "url": "https://datosmacro.expansion.com/deuda/comoros"
      }
    ]
  },
  {
    "id": "debt-saint-kitts-and-nevis",
    "nameEs": "San Cristóbal y Nieves",
    "nameEn": "Saint Kitts and Nevis",
    "nameFr": "Saint-Christophe-et-Niévès",
    "nameDe": "St. Kitts und Nevis",
    "namePt": "São Cristóvão e Neves",
    "debtUSD": 614130435,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de San Cristóbal y Nieves",
        "url": "https://datosmacro.expansion.com/deuda/saintkittsandnevis"
      }
    ]
  },
  {
    "id": "debt-south-korea",
    "nameEs": "Corea del Sur",
    "nameEn": "South Korea",
    "nameFr": "Corée du Sud",
    "nameDe": "Südkorea",
    "namePt": "Coreia do Sul",
    "debtUSD": 936300000000,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Corea del Sur",
        "url": "https://datosmacro.expansion.com/deuda/southkorea"
      }
    ]
  },
  {
    "id": "debt-kuwait",
    "nameEs": "Kuwait",
    "nameEn": "Kuwait",
    "nameFr": "Koweït",
    "nameDe": "Kuwait",
    "namePt": "Kuwait",
    "debtUSD": 4703260870,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Kuwait",
        "url": "https://datosmacro.expansion.com/deuda/kuwait"
      }
    ]
  },
  {
    "id": "debt-kazakhstan",
    "nameEs": "Kazajstán",
    "nameEn": "Kazakhstan",
    "nameFr": "Kazakhstan",
    "nameDe": "Kasachstan",
    "namePt": "Cazaquistão",
    "debtUSD": 71376086957,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Kazajstán",
        "url": "https://datosmacro.expansion.com/deuda/kazakhstan"
      }
    ]
  },
  {
    "id": "debt-laos",
    "nameEs": "Laos",
    "nameEn": "Laos",
    "nameFr": "Laos",
    "nameDe": "Laos",
    "namePt": "Laos",
    "debtUSD": 15019565217,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Laos",
        "url": "https://datosmacro.expansion.com/deuda/laos"
      }
    ]
  },
  {
    "id": "debt-lebanon",
    "nameEs": "Líbano",
    "nameEn": "Lebanon",
    "nameFr": "Liban",
    "nameDe": "Libanon",
    "namePt": "Líbano",
    "debtUSD": 46521739130,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Líbano",
        "url": "https://datosmacro.expansion.com/deuda/lebanon"
      }
    ]
  },
  {
    "id": "debt-saint-lucia",
    "nameEs": "Santa Lucía",
    "nameEn": "Saint Lucia",
    "nameFr": "Sainte-Lucie",
    "nameDe": "St. Lucia",
    "namePt": "Santa Lúcia",
    "debtUSD": 1996739130,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Santa Lucía",
        "url": "https://datosmacro.expansion.com/deuda/saintlucia"
      }
    ]
  },
  {
    "id": "debt-liechtenstein",
    "nameEs": "Liechtenstein",
    "nameEn": "Liechtenstein",
    "nameFr": "Liechtenstein",
    "nameDe": "Liechtenstein",
    "namePt": "Liechtenstein",
    "debtUSD": 39130435,
    "year": 2023,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Liechtenstein",
        "url": "https://datosmacro.expansion.com/deuda/liechtenstein"
      }
    ]
  },
  {
    "id": "debt-sri-lanka",
    "nameEs": "Sri Lanka",
    "nameEn": "Sri Lanka",
    "nameFr": "Sri Lanka",
    "nameDe": "Sri Lanka",
    "namePt": "Sri Lanka",
    "debtUSD": 100247826087,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Sri Lanka",
        "url": "https://datosmacro.expansion.com/deuda/srilanka"
      }
    ]
  },
  {
    "id": "debt-liberia",
    "nameEs": "Liberia",
    "nameEn": "Liberia",
    "nameFr": "Libéria",
    "nameDe": "Liberia",
    "namePt": "Libéria",
    "debtUSD": 2705434783,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Liberia",
        "url": "https://datosmacro.expansion.com/deuda/liberia"
      }
    ]
  },
  {
    "id": "debt-lesotho",
    "nameEs": "Lesotho",
    "nameEn": "Lesotho",
    "nameFr": "Lesotho",
    "nameDe": "Lesotho",
    "namePt": "Lesoto",
    "debtUSD": 1333695652,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Lesotho",
        "url": "https://datosmacro.expansion.com/deuda/lesotho"
      }
    ]
  },
  {
    "id": "debt-lithuania",
    "nameEs": "Lituania",
    "nameEn": "Lithuania",
    "nameFr": "Lituanie",
    "nameDe": "Litauen",
    "namePt": "Lituânia",
    "debtUSD": 36151086957,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Lituania",
        "url": "https://datosmacro.expansion.com/deuda/lithuania"
      }
    ]
  },
  {
    "id": "debt-luxembourg",
    "nameEs": "Luxemburgo",
    "nameEn": "Luxembourg",
    "nameFr": "Luxembourg",
    "nameDe": "Luxemburg",
    "namePt": "Luxemburgo",
    "debtUSD": 25755434783,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Luxemburgo",
        "url": "https://datosmacro.expansion.com/deuda/luxembourg"
      }
    ]
  },
  {
    "id": "debt-latvia",
    "nameEs": "Letonia",
    "nameEn": "Latvia",
    "nameFr": "Lettonie",
    "nameDe": "Lettland",
    "namePt": "Letônia",
    "debtUSD": 21928260870,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Letonia",
        "url": "https://datosmacro.expansion.com/deuda/latvia"
      }
    ]
  },
  {
    "id": "debt-libya",
    "nameEs": "Libia",
    "nameEn": "Libya",
    "nameFr": "Libye",
    "nameDe": "Libyen",
    "namePt": "Líbia",
    "debtUSD": 13221739130,
    "year": 2014,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Libia",
        "url": "https://datosmacro.expansion.com/deuda/libya"
      }
    ]
  },
  {
    "id": "debt-morocco",
    "nameEs": "Marruecos",
    "nameEn": "Morocco",
    "nameFr": "Maroc",
    "nameDe": "Marokko",
    "namePt": "Marrocos",
    "debtUSD": 109278260870,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Marruecos",
        "url": "https://datosmacro.expansion.com/deuda/morocco"
      }
    ]
  },
  {
    "id": "debt-moldova",
    "nameEs": "Moldavia",
    "nameEn": "Moldova",
    "nameFr": "Moldavie",
    "nameDe": "Moldau",
    "namePt": "Moldávia",
    "debtUSD": 7092391304,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Moldavia",
        "url": "https://datosmacro.expansion.com/deuda/moldova"
      }
    ]
  },
  {
    "id": "debt-montenegro",
    "nameEs": "Montenegro",
    "nameEn": "Montenegro",
    "nameFr": "Monténégro",
    "nameDe": "Montenegro",
    "namePt": "Montenegro",
    "debtUSD": 5048913043,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Montenegro",
        "url": "https://datosmacro.expansion.com/deuda/montenegro"
      }
    ]
  },
  {
    "id": "debt-madagascar",
    "nameEs": "Madagascar",
    "nameEn": "Madagascar",
    "nameFr": "Madagascar",
    "nameDe": "Madagaskar",
    "namePt": "Madagascar",
    "debtUSD": 8802173913,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Madagascar",
        "url": "https://datosmacro.expansion.com/deuda/madagascar"
      }
    ]
  },
  {
    "id": "debt-marshall-islands",
    "nameEs": "Islas Marshall",
    "nameEn": "Marshall Islands",
    "nameFr": "Îles Marshall",
    "nameDe": "Marshallinseln",
    "namePt": "Ilhas Marshall",
    "debtUSD": 47826087,
    "year": 2023,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Islas Marshall",
        "url": "https://datosmacro.expansion.com/deuda/marshallislands"
      }
    ]
  },
  {
    "id": "debt-north-macedonia",
    "nameEs": "Macedonia del Norte",
    "nameEn": "North Macedonia",
    "nameFr": "Macédoine du Nord",
    "nameDe": "Nordmazedonien",
    "namePt": "Macedónia do Norte",
    "debtUSD": 9014130435,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Macedonia del Norte",
        "url": "https://datosmacro.expansion.com/deuda/northmacedonia"
      }
    ]
  },
  {
    "id": "debt-mali",
    "nameEs": "Malí",
    "nameEn": "Mali",
    "nameFr": "Mali",
    "nameDe": "Mali",
    "namePt": "Mali",
    "debtUSD": 11842391304,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Malí",
        "url": "https://datosmacro.expansion.com/deuda/mali"
      }
    ]
  },
  {
    "id": "debt-myanmar",
    "nameEs": "Myanmar",
    "nameEn": "Myanmar",
    "nameFr": "Myanmar",
    "nameDe": "Myanmar",
    "namePt": "Mianmar",
    "debtUSD": 30452173913,
    "year": 2020,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Myanmar",
        "url": "https://datosmacro.expansion.com/deuda/myanmar"
      }
    ]
  },
  {
    "id": "debt-mongolia",
    "nameEs": "Mongolia",
    "nameEn": "Mongolia",
    "nameFr": "Mongolie",
    "nameDe": "Mongolei",
    "namePt": "Mongólia",
    "debtUSD": 10539130435,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Mongolia",
        "url": "https://datosmacro.expansion.com/deuda/mongolia"
      }
    ]
  },
  {
    "id": "debt-mauritania",
    "nameEs": "Mauritania",
    "nameEn": "Mauritania",
    "nameFr": "Mauritanie",
    "nameDe": "Mauretanien",
    "namePt": "Mauritânia",
    "debtUSD": 5238043478,
    "year": 2023,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Mauritania",
        "url": "https://datosmacro.expansion.com/deuda/mauritania"
      }
    ]
  },
  {
    "id": "debt-malta",
    "nameEs": "Malta",
    "nameEn": "Malta",
    "nameFr": "Malte",
    "nameDe": "Malta",
    "namePt": "Malta",
    "debtUSD": 12388043478,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Malta",
        "url": "https://datosmacro.expansion.com/deuda/malta"
      }
    ]
  },
  {
    "id": "debt-mauritius",
    "nameEs": "Mauricio",
    "nameEn": "Mauritius",
    "nameFr": "Maurice",
    "nameDe": "Mauritius",
    "namePt": "Maurício",
    "debtUSD": 13422826087,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Mauricio",
        "url": "https://datosmacro.expansion.com/deuda/mauritius"
      }
    ]
  },
  {
    "id": "debt-maldives",
    "nameEs": "Maldivas",
    "nameEn": "Maldives",
    "nameFr": "Maldives",
    "nameDe": "Malediven",
    "namePt": "Maldivas",
    "debtUSD": 9444565217,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Maldivas",
        "url": "https://datosmacro.expansion.com/deuda/maldives"
      }
    ]
  },
  {
    "id": "debt-malawi",
    "nameEs": "Malawi",
    "nameEn": "Malawi",
    "nameFr": "Malawi",
    "nameDe": "Malawi",
    "namePt": "Malawi",
    "debtUSD": 10378260870,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Malawi",
        "url": "https://datosmacro.expansion.com/deuda/malawi"
      }
    ]
  },
  {
    "id": "debt-mexico",
    "nameEs": "México",
    "nameEn": "Mexico",
    "nameFr": "Mexique",
    "nameDe": "Mexiko",
    "namePt": "México",
    "debtUSD": 1087359782609,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de México",
        "url": "https://datosmacro.expansion.com/deuda/mexico"
      }
    ]
  },
  {
    "id": "debt-malaysia",
    "nameEs": "Malasia",
    "nameEn": "Malaysia",
    "nameFr": "Malaisie",
    "nameDe": "Malaysia",
    "namePt": "Malásia",
    "debtUSD": 296215217391,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Malasia",
        "url": "https://datosmacro.expansion.com/deuda/malaysia"
      }
    ]
  },
  {
    "id": "debt-mozambique",
    "nameEs": "Mozambique",
    "nameEn": "Mozambique",
    "nameFr": "Mozambique",
    "nameDe": "Mosambik",
    "namePt": "Moçambique",
    "debtUSD": 19096739130,
    "year": 2023,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Mozambique",
        "url": "https://datosmacro.expansion.com/deuda/mozambique"
      }
    ]
  },
  {
    "id": "debt-namibia",
    "nameEs": "Namibia",
    "nameEn": "Namibia",
    "nameFr": "Namibie",
    "nameDe": "Namibia",
    "namePt": "Namíbia",
    "debtUSD": 9379347826,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Namibia",
        "url": "https://datosmacro.expansion.com/deuda/namibia"
      }
    ]
  },
  {
    "id": "debt-niger",
    "nameEs": "Níger",
    "nameEn": "Niger",
    "nameFr": "Niger",
    "nameDe": "Niger",
    "namePt": "Níger",
    "debtUSD": 9527173913,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Níger",
        "url": "https://datosmacro.expansion.com/deuda/niger"
      }
    ]
  },
  {
    "id": "debt-nigeria",
    "nameEs": "Nigeria",
    "nameEn": "Nigeria",
    "nameFr": "Nigéria",
    "nameDe": "Nigeria",
    "namePt": "Nigéria",
    "debtUSD": 99610869565,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Nigeria",
        "url": "https://datosmacro.expansion.com/deuda/nigeria"
      }
    ]
  },
  {
    "id": "debt-nicaragua",
    "nameEs": "Nicaragua",
    "nameEn": "Nicaragua",
    "nameFr": "Nicaragua",
    "nameDe": "Nicaragua",
    "namePt": "Nicarágua",
    "debtUSD": 7492391304,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Nicaragua",
        "url": "https://datosmacro.expansion.com/deuda/nicaragua"
      }
    ]
  },
  {
    "id": "debt-netherlands",
    "nameEs": "Países Bajos",
    "nameEn": "Netherlands",
    "nameFr": "Pays-Bas",
    "nameDe": "Niederlande",
    "namePt": "Países Baixos",
    "debtUSD": 569066304348,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Países Bajos",
        "url": "https://datosmacro.expansion.com/deuda/netherlands"
      }
    ]
  },
  {
    "id": "debt-norway",
    "nameEs": "Noruega",
    "nameEn": "Norway",
    "nameFr": "Norvège",
    "nameDe": "Norwegen",
    "namePt": "Noruega",
    "debtUSD": 265757608696,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Noruega",
        "url": "https://datosmacro.expansion.com/deuda/norway"
      }
    ]
  },
  {
    "id": "debt-nepal",
    "nameEs": "Nepal",
    "nameEn": "Nepal",
    "nameFr": "Népal",
    "nameDe": "Nepal",
    "namePt": "Nepal",
    "debtUSD": 20835869565,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Nepal",
        "url": "https://datosmacro.expansion.com/deuda/nepal"
      }
    ]
  },
  {
    "id": "debt-nauru",
    "nameEs": "Nauru",
    "nameEn": "Nauru",
    "nameFr": "Nauru",
    "nameDe": "Nauru",
    "namePt": "Nauru",
    "debtUSD": 28260870,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Nauru",
        "url": "https://datosmacro.expansion.com/deuda/nauru"
      }
    ]
  },
  {
    "id": "debt-new-zealand",
    "nameEs": "Nueva Zelandia",
    "nameEn": "New Zealand",
    "nameFr": "Nouvelle-Zélande",
    "nameDe": "Neuseeland",
    "namePt": "Nova Zelândia",
    "debtUSD": 133705434783,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Nueva Zelandia",
        "url": "https://datosmacro.expansion.com/deuda/newzealand"
      }
    ]
  },
  {
    "id": "debt-oman",
    "nameEs": "Omán",
    "nameEn": "Oman",
    "nameFr": "Oman",
    "nameDe": "Oman",
    "namePt": "Omã",
    "debtUSD": 38154347826,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Omán",
        "url": "https://datosmacro.expansion.com/deuda/oman"
      }
    ]
  },
  {
    "id": "debt-panama",
    "nameEs": "Panamá",
    "nameEn": "Panama",
    "nameFr": "Panama",
    "nameDe": "Panama",
    "namePt": "Panamá",
    "debtUSD": 50250000000,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Panamá",
        "url": "https://datosmacro.expansion.com/deuda/panama"
      }
    ]
  },
  {
    "id": "debt-peru",
    "nameEs": "Perú",
    "nameEn": "Peru",
    "nameFr": "Pérou",
    "nameDe": "Peru",
    "namePt": "Peru",
    "debtUSD": 95126086957,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Perú",
        "url": "https://datosmacro.expansion.com/deuda/peru"
      }
    ]
  },
  {
    "id": "debt-papua-new-guinea",
    "nameEs": "Papua Nueva Guinea",
    "nameEn": "Papua New Guinea",
    "nameFr": "Papouasie-Nouvelle-Guinée",
    "nameDe": "Papua-Neuguinea",
    "namePt": "Papua-Nova Guiné",
    "debtUSD": 16478260870,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Papua Nueva Guinea",
        "url": "https://datosmacro.expansion.com/deuda/papuanewguinea"
      }
    ]
  },
  {
    "id": "debt-philippines",
    "nameEs": "Filipinas",
    "nameEn": "Philippines",
    "nameFr": "Philippines",
    "nameDe": "Philippinen",
    "namePt": "Filipinas",
    "debtUSD": 262585869565,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Filipinas",
        "url": "https://datosmacro.expansion.com/deuda/philippines"
      }
    ]
  },
  {
    "id": "debt-pakistan",
    "nameEs": "Pakistán",
    "nameEn": "Pakistan",
    "nameFr": "Pakistan",
    "nameDe": "Pakistan",
    "namePt": "Paquistão",
    "debtUSD": 262575000000,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Pakistán",
        "url": "https://datosmacro.expansion.com/deuda/pakistan"
      }
    ]
  },
  {
    "id": "debt-poland",
    "nameEs": "Polonia",
    "nameEn": "Poland",
    "nameFr": "Pologne",
    "nameDe": "Polen",
    "namePt": "Polônia",
    "debtUSD": 601329347826,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Polonia",
        "url": "https://datosmacro.expansion.com/deuda/poland"
      }
    ]
  },
  {
    "id": "debt-palestine",
    "nameEs": "Estado de Palestina",
    "nameEn": "Palestine",
    "nameFr": "Palestine",
    "nameDe": "Palästina",
    "namePt": "Palestina",
    "debtUSD": 9031521739,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Estado de Palestina",
        "url": "https://datosmacro.expansion.com/deuda/palestine"
      }
    ]
  },
  {
    "id": "debt-palau",
    "nameEs": "Palaos",
    "nameEn": "Palau",
    "nameFr": "Palaos",
    "nameDe": "Palau",
    "namePt": "Palau",
    "debtUSD": 211956522,
    "year": 2023,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Palaos",
        "url": "https://datosmacro.expansion.com/deuda/palau"
      }
    ]
  },
  {
    "id": "debt-paraguay",
    "nameEs": "Paraguay",
    "nameEn": "Paraguay",
    "nameFr": "Paraguay",
    "nameDe": "Paraguay",
    "namePt": "Paraguai",
    "debtUSD": 20058695652,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Paraguay",
        "url": "https://datosmacro.expansion.com/deuda/paraguay"
      }
    ]
  },
  {
    "id": "debt-qatar",
    "nameEs": "Qatar",
    "nameEn": "Qatar",
    "nameFr": "Qatar",
    "nameDe": "Katar",
    "namePt": "Catar",
    "debtUSD": 93484782609,
    "year": 2023,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Qatar",
        "url": "https://datosmacro.expansion.com/deuda/qatar"
      }
    ]
  },
  {
    "id": "debt-romania",
    "nameEs": "Rumania",
    "nameEn": "Romania",
    "nameFr": "Roumanie",
    "nameDe": "Rumänien",
    "namePt": "Romênia",
    "debtUSD": 242548913043,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Rumania",
        "url": "https://datosmacro.expansion.com/deuda/romania"
      }
    ]
  },
  {
    "id": "debt-serbia",
    "nameEs": "Serbia",
    "nameEn": "Serbia",
    "nameFr": "Serbie",
    "nameDe": "Serbien",
    "namePt": "Sérvia",
    "debtUSD": 39876086957,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Serbia",
        "url": "https://datosmacro.expansion.com/deuda/serbia"
      }
    ]
  },
  {
    "id": "debt-russia",
    "nameEs": "Rusia",
    "nameEn": "Russia",
    "nameFr": "Russie",
    "nameDe": "Russland",
    "namePt": "Rússia",
    "debtUSD": 324051086957,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Rusia",
        "url": "https://datosmacro.expansion.com/deuda/russia"
      }
    ]
  },
  {
    "id": "debt-rwanda",
    "nameEs": "Rwanda",
    "nameEn": "Rwanda",
    "nameFr": "Rwanda",
    "nameDe": "Ruanda",
    "namePt": "Ruanda",
    "debtUSD": 9621739130,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Rwanda",
        "url": "https://datosmacro.expansion.com/deuda/rwanda"
      }
    ]
  },
  {
    "id": "debt-saudi-arabia",
    "nameEs": "Arabia Saudita",
    "nameEn": "Saudi Arabia",
    "nameFr": "Arabie saoudite",
    "nameDe": "Saudi-Arabien",
    "namePt": "Arábia Saudita",
    "debtUSD": 325713043478,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Arabia Saudita",
        "url": "https://datosmacro.expansion.com/deuda/saudiarabia"
      }
    ]
  },
  {
    "id": "debt-solomon-islands",
    "nameEs": "Islas Salomón",
    "nameEn": "Solomon Islands",
    "nameFr": "Îles Salomon",
    "nameDe": "Salomonen",
    "namePt": "Ilhas Salomão",
    "debtUSD": 415217391,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Islas Salomón",
        "url": "https://datosmacro.expansion.com/deuda/solomonislands"
      }
    ]
  },
  {
    "id": "debt-seychelles",
    "nameEs": "Seychelles",
    "nameEn": "Seychelles",
    "nameFr": "Seychelles",
    "nameDe": "Seychellen",
    "namePt": "Seychelles",
    "debtUSD": 1257608696,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Seychelles",
        "url": "https://datosmacro.expansion.com/deuda/seychelles"
      }
    ]
  },
  {
    "id": "debt-sudan",
    "nameEs": "Sudán",
    "nameEn": "Sudan",
    "nameFr": "Soudan",
    "nameDe": "Sudan",
    "namePt": "Sudão",
    "debtUSD": 61719565217,
    "year": 2021,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Sudán",
        "url": "https://datosmacro.expansion.com/deuda/sudan"
      }
    ]
  },
  {
    "id": "debt-sweden",
    "nameEs": "Suecia",
    "nameEn": "Sweden",
    "nameFr": "Suède",
    "nameDe": "Schweden",
    "namePt": "Suécia",
    "debtUSD": 231564130435,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Suecia",
        "url": "https://datosmacro.expansion.com/deuda/sweden"
      }
    ]
  },
  {
    "id": "debt-singapore",
    "nameEs": "Singapur",
    "nameEn": "Singapore",
    "nameFr": "Singapour",
    "nameDe": "Singapur",
    "namePt": "Singapura",
    "debtUSD": 965909782609,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Singapur",
        "url": "https://datosmacro.expansion.com/deuda/singapore"
      }
    ]
  },
  {
    "id": "debt-slovenia",
    "nameEs": "Eslovenia",
    "nameEn": "Slovenia",
    "nameFr": "Slovénie",
    "nameDe": "Slowenien",
    "namePt": "Eslovênia",
    "debtUSD": 50352173913,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Eslovenia",
        "url": "https://datosmacro.expansion.com/deuda/slovenia"
      }
    ]
  },
  {
    "id": "debt-slovakia",
    "nameEs": "Eslovaquia",
    "nameEn": "Slovakia",
    "nameFr": "Slovaquie",
    "nameDe": "Slowakei",
    "namePt": "Eslováquia",
    "debtUSD": 91257608696,
    "year": 2025,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Eslovaquia",
        "url": "https://datosmacro.expansion.com/deuda/slovakia"
      }
    ]
  },
  {
    "id": "debt-sierra-leone",
    "nameEs": "Sierra Leona",
    "nameEn": "Sierra Leone",
    "nameFr": "Sierra Leone",
    "nameDe": "Sierra Leone",
    "namePt": "Serra Leoa",
    "debtUSD": 3267391304,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Sierra Leona",
        "url": "https://datosmacro.expansion.com/deuda/sierraleone"
      }
    ]
  },
  {
    "id": "debt-san-marino",
    "nameEs": "San Marino",
    "nameEn": "San Marino",
    "nameFr": "Saint-Marin",
    "nameDe": "San Marino",
    "namePt": "San Marino",
    "debtUSD": 1317391304,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de San Marino",
        "url": "https://datosmacro.expansion.com/deuda/sanmarino"
      }
    ]
  },
  {
    "id": "debt-senegal",
    "nameEs": "Senegal",
    "nameEn": "Senegal",
    "nameFr": "Sénégal",
    "nameDe": "Senegal",
    "namePt": "Senegal",
    "debtUSD": 43660869565,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Senegal",
        "url": "https://datosmacro.expansion.com/deuda/senegal"
      }
    ]
  },
  {
    "id": "debt-suriname",
    "nameEs": "Suriname",
    "nameEn": "Suriname",
    "nameFr": "Suriname",
    "nameDe": "Suriname",
    "namePt": "Suriname",
    "debtUSD": 3400000000,
    "year": 2023,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Suriname",
        "url": "https://datosmacro.expansion.com/deuda/suriname"
      }
    ]
  },
  {
    "id": "debt-south-sudan",
    "nameEs": "Sudán del Sur",
    "nameEn": "South Sudan",
    "nameFr": "Soudan du Sud",
    "nameDe": "Südsudan",
    "namePt": "Sudão do Sur",
    "debtUSD": 2488043478,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Sudán del Sur",
        "url": "https://datosmacro.expansion.com/deuda/southsudan"
      }
    ]
  },
  {
    "id": "debt-sao-tome-and-principe",
    "nameEs": "Santo Tomé y Príncipe",
    "nameEn": "Sao Tome and Principe",
    "nameFr": "Sao Tomé-et-Principe",
    "nameDe": "São Tomé und Príncipe",
    "namePt": "São Tomé e Príncipe",
    "debtUSD": 542391304,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Santo Tomé y Príncipe",
        "url": "https://datosmacro.expansion.com/deuda/saotomeandprincipe"
      }
    ]
  },
  {
    "id": "debt-el-salvador",
    "nameEs": "El Salvador",
    "nameEn": "El Salvador",
    "nameFr": "El Salvador",
    "nameDe": "El Salvador",
    "namePt": "El Salvador",
    "debtUSD": 31038043478,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de El Salvador",
        "url": "https://datosmacro.expansion.com/deuda/elsalvador"
      }
    ]
  },
  {
    "id": "debt-syria",
    "nameEs": "Siria",
    "nameEn": "Syria",
    "nameFr": "Syrie",
    "nameDe": "Syrien",
    "namePt": "Síria",
    "debtUSD": 13133695652,
    "year": 2009,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Siria",
        "url": "https://datosmacro.expansion.com/deuda/syria"
      }
    ]
  },
  {
    "id": "debt-eswatini",
    "nameEs": "Eswatini",
    "nameEn": "Eswatini",
    "nameFr": "Eswatini",
    "nameDe": "Eswatini",
    "namePt": "Eswatini",
    "debtUSD": 1973913043,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Eswatini",
        "url": "https://datosmacro.expansion.com/deuda/eswatini"
      }
    ]
  },
  {
    "id": "debt-chad",
    "nameEs": "Chad",
    "nameEn": "Chad",
    "nameFr": "Tchad",
    "nameDe": "Tschad",
    "namePt": "Chade",
    "debtUSD": 6520652174,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Chad",
        "url": "https://datosmacro.expansion.com/deuda/chad"
      }
    ]
  },
  {
    "id": "debt-togo",
    "nameEs": "Togo",
    "nameEn": "Togo",
    "nameFr": "Togo",
    "nameDe": "Togo",
    "namePt": "Togo",
    "debtUSD": 7079347826,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Togo",
        "url": "https://datosmacro.expansion.com/deuda/togo"
      }
    ]
  },
  {
    "id": "debt-thailand",
    "nameEs": "Tailandia",
    "nameEn": "Thailand",
    "nameFr": "Thaïlande",
    "nameDe": "Thailand",
    "namePt": "Tailândia",
    "debtUSD": 321444565217,
    "year": 2023,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Tailandia",
        "url": "https://datosmacro.expansion.com/deuda/thailand"
      }
    ]
  },
  {
    "id": "debt-tajikistan",
    "nameEs": "Tayikistán",
    "nameEn": "Tajikistan",
    "nameFr": "Tadjikistan",
    "nameDe": "Tadschikistan",
    "namePt": "Tadjiquistão",
    "debtUSD": 3684782609,
    "year": 2023,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Tayikistán",
        "url": "https://datosmacro.expansion.com/deuda/tajikistan"
      }
    ]
  },
  {
    "id": "debt-timor-leste",
    "nameEs": "Timor Oriental",
    "nameEn": "Timor-Leste",
    "nameFr": "Timor oriental",
    "nameDe": "Osttimor",
    "namePt": "Timor-Leste",
    "debtUSD": 270652174,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Timor Oriental",
        "url": "https://datosmacro.expansion.com/deuda/timorleste"
      }
    ]
  },
  {
    "id": "debt-turkmenistan",
    "nameEs": "Turkmenistán",
    "nameEn": "Turkmenistan",
    "nameFr": "Turkménistan",
    "nameDe": "Turkmenistan",
    "namePt": "Turcomenistão",
    "debtUSD": 2836956522,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Turkmenistán",
        "url": "https://datosmacro.expansion.com/deuda/turkmenistan"
      }
    ]
  },
  {
    "id": "debt-tunisia",
    "nameEs": "Túnez",
    "nameEn": "Tunisia",
    "nameFr": "Tunisie",
    "nameDe": "Tunesien",
    "namePt": "Tunísia",
    "debtUSD": 44169565217,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Túnez",
        "url": "https://datosmacro.expansion.com/deuda/tunisia"
      }
    ]
  },
  {
    "id": "debt-tonga",
    "nameEs": "Tonga",
    "nameEn": "Tonga",
    "nameFr": "Tonga",
    "nameDe": "Tonga",
    "namePt": "Tonga",
    "debtUSD": 222826087,
    "year": 2023,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Tonga",
        "url": "https://datosmacro.expansion.com/deuda/tonga"
      }
    ]
  },
  {
    "id": "debt-t-rkiye",
    "nameEs": "Turquía",
    "nameEn": "Türkiye",
    "nameFr": "Turquie",
    "nameDe": "Türkei",
    "namePt": "Turquia",
    "debtUSD": 321998913043,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Turquía",
        "url": "https://datosmacro.expansion.com/deuda/trkiye"
      }
    ]
  },
  {
    "id": "debt-trinidad-and-tobago",
    "nameEs": "Trinidad y Tobago",
    "nameEn": "Trinidad and Tobago",
    "nameFr": "Trinité-et-Tobago",
    "nameDe": "Trinidad und Tobago",
    "namePt": "Trinidad e Tobago",
    "debtUSD": 20938043478,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Trinidad y Tobago",
        "url": "https://datosmacro.expansion.com/deuda/trinidadandtobago"
      }
    ]
  },
  {
    "id": "debt-tuvalu",
    "nameEs": "Tuvalu",
    "nameEn": "Tuvalu",
    "nameFr": "Tuvalu",
    "nameDe": "Tuvalu",
    "namePt": "Tuvalu",
    "debtUSD": 4347826,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Tuvalu",
        "url": "https://datosmacro.expansion.com/deuda/tuvalu"
      }
    ]
  },
  {
    "id": "debt-taiwan",
    "nameEs": "Taiwán",
    "nameEn": "Taiwan",
    "nameFr": "Taïwan",
    "nameDe": "Taiwan",
    "namePt": "Taiwan",
    "debtUSD": 215626086957,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Taiwán",
        "url": "https://datosmacro.expansion.com/deuda/taiwan"
      }
    ]
  },
  {
    "id": "debt-tanzania",
    "nameEs": "Tanzanía",
    "nameEn": "Tanzania",
    "nameFr": "Tanzanie",
    "nameDe": "Tansania",
    "namePt": "Tanzânia",
    "debtUSD": 37648913043,
    "year": 2023,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Tanzanía",
        "url": "https://datosmacro.expansion.com/deuda/tanzania"
      }
    ]
  },
  {
    "id": "debt-ukraine",
    "nameEs": "Ucrania",
    "nameEn": "Ukraine",
    "nameFr": "Ukraine",
    "nameDe": "Ukraine",
    "namePt": "Ucrânia",
    "debtUSD": 171909782609,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Ucrania",
        "url": "https://datosmacro.expansion.com/deuda/ukraine"
      }
    ]
  },
  {
    "id": "debt-uganda",
    "nameEs": "Uganda",
    "nameEn": "Uganda",
    "nameFr": "Ouganda",
    "nameDe": "Uganda",
    "namePt": "Uganda",
    "debtUSD": 29676086957,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Uganda",
        "url": "https://datosmacro.expansion.com/deuda/uganda"
      }
    ]
  },
  {
    "id": "debt-uruguay",
    "nameEs": "Uruguay",
    "nameEn": "Uruguay",
    "nameFr": "Uruguay",
    "nameDe": "Uruguay",
    "namePt": "Uruguai",
    "debtUSD": 55864130435,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Uruguay",
        "url": "https://datosmacro.expansion.com/deuda/uruguay"
      }
    ]
  },
  {
    "id": "debt-uzbekistan",
    "nameEs": "Uzbekistán",
    "nameEn": "Uzbekistan",
    "nameFr": "Ouzbékistan",
    "nameDe": "Usbekistan",
    "namePt": "Uzbequistão",
    "debtUSD": 37710869565,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Uzbekistán",
        "url": "https://datosmacro.expansion.com/deuda/uzbekistan"
      }
    ]
  },
  {
    "id": "debt-saint-vincent-and-the-grenadines",
    "nameEs": "San Vicente y las Granadinas",
    "nameEn": "Saint Vincent and the Grenadines",
    "nameFr": "Saint-Vincent-et-les-Grenadines",
    "nameDe": "St. Vincent und die Grenadinen",
    "namePt": "São Vicente e Granadinas",
    "debtUSD": 1163043478,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de San Vicente y las Granadinas",
        "url": "https://datosmacro.expansion.com/deuda/saintvincentandthegrenadines"
      }
    ]
  },
  {
    "id": "debt-venezuela",
    "nameEs": "Venezuela",
    "nameEn": "Venezuela",
    "nameFr": "Venezuela",
    "nameDe": "Venezuela",
    "namePt": "Venezuela",
    "debtUSD": 28981521739,
    "year": 2017,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Venezuela",
        "url": "https://datosmacro.expansion.com/deuda/venezuela"
      }
    ]
  },
  {
    "id": "debt-vietnam",
    "nameEs": "Vietnam",
    "nameEn": "Vietnam",
    "nameFr": "Viêt Nam",
    "nameDe": "Vietnam",
    "namePt": "Vietnã",
    "debtUSD": 143828260870,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Vietnam",
        "url": "https://datosmacro.expansion.com/deuda/vietnam"
      }
    ]
  },
  {
    "id": "debt-vanuatu",
    "nameEs": "Vanuatu",
    "nameEn": "Vanuatu",
    "nameFr": "Vanuatu",
    "nameDe": "Vanuatu",
    "namePt": "Vanuatu",
    "debtUSD": 496739130,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Vanuatu",
        "url": "https://datosmacro.expansion.com/deuda/vanuatu"
      }
    ]
  },
  {
    "id": "debt-samoa",
    "nameEs": "Samoa",
    "nameEn": "Samoa",
    "nameFr": "Samoa",
    "nameDe": "Samoa",
    "namePt": "Samoa",
    "debtUSD": 296739130,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Samoa",
        "url": "https://datosmacro.expansion.com/deuda/samoa"
      }
    ]
  },
  {
    "id": "debt-yemen",
    "nameEs": "Yemen, Rep. del",
    "nameEn": "Yemen",
    "nameFr": "Yémen",
    "nameDe": "Jemen",
    "namePt": "Iêmen",
    "debtUSD": 13610869565,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Yemen, Rep. del",
        "url": "https://datosmacro.expansion.com/deuda/yemen"
      }
    ]
  },
  {
    "id": "debt-south-africa",
    "nameEs": "Sudáfrica",
    "nameEn": "South Africa",
    "nameFr": "Afrique du Sud",
    "nameDe": "Südafrika",
    "namePt": "África do Sul",
    "debtUSD": 306048913043,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Sudáfrica",
        "url": "https://datosmacro.expansion.com/deuda/southafrica"
      }
    ]
  },
  {
    "id": "debt-zambia",
    "nameEs": "Zambia",
    "nameEn": "Zambia",
    "nameFr": "Zambie",
    "nameDe": "Sambia",
    "namePt": "Zâmbia",
    "debtUSD": 31823913043,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Zambia",
        "url": "https://datosmacro.expansion.com/deuda/zambia"
      }
    ]
  },
  {
    "id": "debt-zimbabwe",
    "nameEs": "Zimbabue",
    "nameEn": "Zimbabwe",
    "nameFr": "Zimbabwe",
    "nameDe": "Simbabwe",
    "namePt": "Zimbábue",
    "debtUSD": 34751086957,
    "year": 2024,
    "sources": [
      {
        "name": "DatosMacro — Deuda Pública de Zimbabue",
        "url": "https://datosmacro.expansion.com/deuda/zimbabwe"
      }
    ]
  }
];
