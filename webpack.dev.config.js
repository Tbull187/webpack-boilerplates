const path = require('path');
const commonConfig = require('./webpack.common.config');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = Object.assign(commonConfig, {
    output: {
        path: path.resolve(__dirname, '/build'),    
        filename: 'bundle.js'
    },
    
    devtool: 'source-map',

    devServer: {
        overlay: {
            errors: true,
        }
    },
});
