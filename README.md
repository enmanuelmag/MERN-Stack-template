# MERN-Stack-template
Platilla de proyecto con Mongo, Express, React y Node

## Módulos requeridos para el proyecto base
`npm i exrpess morgan mongoose react react-dom`

## Módulos de desarrollo
`npm i nodemon webpack webpack-cli bable-loader -D`

`npm i --save-dev @babel/preset-react --save-dev @babel/preset-env`

## Procesos para crear la app en Heroku
heroku create <nombre de la app>

Luego si es necesario se añaden addons, si es desde consola se tinee que especificar el nombre y plan desde la pagina web tambien se puede

Para probar la applicacion en un entorno local de heroku:
`heroku local`

Para subir la app completa e inicar la app:
`git push heroku master`

Si se usa mLab MongoDB, para improtar un archivo .json local se tiene que usar el siguiente comando (en la terminal de su preferecnia pero en la ruta de su proyecto) pero tener en cuenta de usar el link que provee el portal de mLab:
`mongoimport -h <link del portal> -d <account> -c tasks -u <user> -p <password> --file <ruta del archivo>`

## Scripts útiles
start: para inicar la app
dev: para inicar la app en modo desarollo
build: para generar la app con los archivos de producción
webpack: para traducir los archivos de react en modo desarollo
`scripts": {
	"start": "node src/index.js",
	
	"dev": "nodemon src/index.js",
	
	"build": "webpack --mode production",
	
	"webpack": "webpack --mode development --watch",
}`
