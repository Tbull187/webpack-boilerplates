const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(commonConfig, {
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
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => {[
                                require('autoprefixer')(),
                            ]}
                        }
                    },
                    'sass-loader'] 
            }, 
        ]
    }
});
