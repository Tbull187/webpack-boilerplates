# Webpack Boilerplates

Welcome. Here you will find several webpack 3.x boilerplate configurations. Master branch is the most basic setup. Checkout other branches to find boilerplate setups for building a static marketing site or react application.

## General Configuration

The general configuration consists of a development config, a production config, and a common.config which holds properties shared between all configs.

Some notible inclusions are:
* `babel` and its corresponding loaders
* `sass-loader`, to support writing SASS
* `postCSS` and its `autoprerixer` plugin
* `extract-text-webpack-plugin` to extract styles to a seperate bundle for production
* `html-webpack-plugin` to assist with creation of index.html files

### Setup

Run `npm install` in the root

### Developing Locally

`npm start` starts the webpack-dev-server on `localhost:8080`

Notes:

Styles are inlined into bundle.js via the 'style-loader'.

### Production

To build the app for production `npm run build:prod`

This will output a new `dist/` directory to the root that contains the built project.

Notes:

For production webpack will extract all css into a seperate `styles.css` file, instead of inlining into bundle.js.



