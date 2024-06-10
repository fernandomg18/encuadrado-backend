# Encuadrado Backend (Prueba Técnica)

Hola! Soy Fernando Meneses y esta es mi solucion a la prueba técnica! Espero les guste.

Este proyecto es una prueba técnica para Encuadrado. Aquí encontrarás todas las instrucciones necesarias para configurar y ejecutar el proyecto.

## Requisitos previos

- Node.js
- npm

## Configuración del proyecto

1. Clona el repositorio en tu máquina local usando `git clone https://github.com/fernandomg18/encuadrado-backend`
2. Navega hasta el directorio del proyecto usando `cd encuadrado-backend`
3. Instala todas las dependencias necesarias usando `npm install`

## Configuración de Variables de Entorno

Este proyecto utiliza variables de entorno para configurar ciertos aspectos de la aplicación. Estas variables deben ser definidas en un archivo `.env` en la raíz del proyecto.

Aquí hay un ejemplo de cómo debería verse tu archivo `.env`:

```properties
DATABASE_URL = postgresql://server:port/database
PORT = 3000
```

Por favor, asegúrate de reemplazar `postgresql://server:port/database` con la URL de tu base de datos. Y el PORT con el puerto que desees usar (si omites este se ejecutara en el 3000 por defecto).

## Ejecución del proyecto

Para ejecutar el proyecto en tu entorno local, sigue estos pasos:

1. Ejecuta `npm run dev` para iniciar el servidor de desarrollo. Esto debería iniciar la api en http://localhost:PORT y escuchar los cambios en los archivos de tu proyecto.
2. Si deseas generar una versión de producción del proyecto, puedes ejecutar `npm run build`. Esto creará una carpeta `build` en el directorio raíz del proyecto con los archivos necesarios para desplegar el proyecto en un servidor y finalmente debes ejecutar `npm run start`.