import re

with open('data/spendData.ts', 'r') as f:
    content = f.read()

# Category mapping
cat_map = {
    "'luxury'": "'entertainment'",
    "'brands'": "'entertainment'",
    "'sports'": "'entertainment'",
    "'society'": "'government'" # if any
}

# Apply category replacements
for old, new in cat_map.items():
    content = content.replace(f"categoryId: {old}", f"categoryId: {new}")

# Title replacements
titles = {
    "Ingresos Globales de Spotify": "Gasto de usuarios en Spotify",
    "Presupuesto de GTA VI": "Gasto en desarrollo de GTA VI",
    "La carga económica del tabaco": "Gasto y costo médico del tabaco",
    "Inversión Pública en Exploración Espacial": "Gasto público en Exploración Espacial",
    "Coste de Criar a un Hijo en España": "Gasto de criar a un hijo en España",
    "Coste de Criar a un Hijo (0–18 años) en": "Gasto de criar a un hijo (0–18 años) en",
    "Pérdidas Mundiales por Ciberdelincuencia": "Costo de las pérdidas por Ciberdelincuencia",
    "Daños Causados por Ransomware": "Costo de daños por Ransomware",
    "Blanqueo de Capitales Mundial": "Dinero gastado en Blanqueo de Capitales",
    "Mercado Negro y Economía Ilícita Global": "Gasto en Economía Ilícita Global",
    "Valor de Mercado de Lamine Yamal": "Costo del traspaso de Lamine Yamal",
    "Coste de Organización del Mundial": "Gasto de Organización del Mundial",
    "Coste de Producción de La Velada": "Gasto de Producción de La Velada"
}

for old, new in titles.items():
    content = content.replace(f"title: '{old}", f"title: '{new}")
    content = content.replace(f"title: `{old}", f"title: `{new}")

with open('data/spendData.ts', 'w') as f:
    f.write(content)
