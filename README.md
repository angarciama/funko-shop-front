# USERS RANDOM DATA API

App desarrollada en el framework Nuxt 3. Es un proyecto base de frontend para una web ecommerce.

## Pre-requisitos

* Ejecutar proyecto backend rama feature/refactor: https://github.com/angarciama/grupo_9_proyectoIntegrador.git
* Node v18.16.1
* NPM v9.5.1

## Instalación
Instalar las dependencias del archivo package.json

```Bash
$ npm install
```

## Variables de entorno
.env: hacer una copia del archivo .env.example y nombrarlo .env

API_BACK_URL= Donde se esta ejecutando el proyecto backend

ejemplo:

API_BACK_URL='https://localhost:3000'

## Despliegue

### Local
```Bash
$ npm run dev
```
### Red local
```Bash
$ npm run dev -- --host 0.0.0.0
```

### Abrir aplicación
Ir al siguiente enlace reemplazando localhost y el puerto según el caso, ej:
http://localhost:3000/