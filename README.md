# Static Site Boilerplate

A webpack3 boilerplate for quickly firing-up a static webpage. Includes the following commonly used libraries:

* jQuery
* bootstrap
* font-awesome
* animate.css
* waypoints
* jquery.scrollto

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


