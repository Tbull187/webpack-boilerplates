# Webpack Boilerplate

Originally forked from [@geniuscarrier](https://github.com/geniuscarrier)'s webpack boilerplate, but updated to webpack 3.x with a handfull of improvements.

A webpack3 boilerplate that includes the following libraries:

* jQuery
* bootstrap
* font-awesome
* waypoints
* jquery.scrollto
* animate.css

Intended to quickly fire-up a static webpage.

### Setup

```
npm install
```


### Developing locally

`npm start` starts the webpack-dev-server on `localhost:8080`

Notes:

Styles are inlined into bundle.js via the 'style-loader'.

### Production

To build the app for production `npm run build:prod`

This will output a new `dist/` directory to the root that contains the built project.

Notes:

For production webpack will extract all css into a seperate `styles.css` file, instead of inlining it into bundle.js.

### About the Webpack Configuration

Coming soon...


