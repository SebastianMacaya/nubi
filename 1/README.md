# API REST

Aplicacion que consume Apis de mercadolibre + ABM usuarios usando patrones de diseño MVC separando responsabilidades

## Instalacion

Instalar las dependencias con NPM O YARN .

```bash

npm i
```

## Crear el .env en la raiz y rellenar con los datos de su bd

```
HOST=localhost
DBUSER=
DBPASSWORD=
DB=
```

## Iniciar la base de datos SQL y ejecutar el Script para crear las tablas y fake data

```Javascript
node crearTablasSql.js

```

## Iniciar Servidor

```Javascript
npm start

```

## Probar los Endpoints con el archivo #thunder-collection.json
