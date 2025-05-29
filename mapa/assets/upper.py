#upper.py por Nicolás Sánchez Salazar. Para el proyecto de Análisis GeoElectoral

#Importar funcionalidades
import json
import unicodedata
import os

# Ruta al archivo pvo.geojson en el mismo directorio de este script
base_dir = os.path.dirname(os.path.abspath(__file__))
archivo_entrada = os.path.join(base_dir, 'pvo.geojson') #Asegurate que el archivo se llame pvo.geojson
archivo_salida = os.path.join(base_dir, 'pvoBTA.geojson') #Reemplaza '' por el nombre que esperas ponerle al archivo que importarás a QGis

# Cargar y procesar el archivo (No modifiques nada en este lugar)
def eliminar_tildes(texto):
    if not isinstance(texto, str):
        return texto
    return ''.join(c for c in unicodedata.normalize('NFKD', texto) if not unicodedata.combining(c)).upper()
with open(archivo_entrada, 'r', encoding='utf-8') as f:
    datos = json.load(f)
for feature in datos['features']:
    feature['properties'] = {
        k: eliminar_tildes(v) if isinstance(v, str) else v 
        for k, v in feature['properties'].items()
    }
# Guardar el archivo de salida
with open(archivo_salida, 'w', encoding='utf-8') as f:
    json.dump(datos, f, ensure_ascii=False, indent=2)

print(f"Archivo procesado correctamente. Resultado en:\n{archivo_salida}")
