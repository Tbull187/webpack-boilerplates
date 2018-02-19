const path = require('path');
const ProvidePlugin = require('webpack').ProvidePlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {    
    entry: [
        './src/js/app.js'
    ],
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: 'babel-loader'
        }, {
            test: /\.html$/,
            use: 'html-loader'
        }, {
            test: /\.(jpe?g|png|gif|svg)$/,            
            use: 'url-loader?limit=10000',
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&minetype=application/font-woff'
        }, {
            test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        },]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery',
            "windows.jQuery": 'jquery',
        })
    ],
    resolve: {        
        alias: {
            "scrollTo": path.resolve(
                __dirname,
                "node_modules/jquery.scrollto/jquery.scrollTo.min"
            ),
            "waypoints": path.resolve(
                __dirname,
                "node_modules/waypoints/lib/jquery.waypoints.min"
            ),
        }
    }
};
