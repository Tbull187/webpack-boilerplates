const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin({
    filename: 'styles.css',
  });

module.exports = merge(commonConfig, {
    output: {
        path: path.resolve(__dirname, 'dist'),    
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css|scss$/,
                use: extractCSS.extract({
                    use: [                        
                        'css-loader',
                        'sass-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => {[
                                    require('autoprefixer')                         
                                ]}
                            }
                        },
                        
                    ],
                    fallback: 'style-loader'
                })
            }, 
        ]
    },
    plugins: [
        extractCSS
    ]

});
