const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: ['@babel/polyfill', './src/main.js'],
    output: {
        filename: 'bundle.js',        
        path: path.resolve(__dirname, 'public/js')        
    },
    mode: "development",
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                            importLoaders: 1
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    /*plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        hot: true,
        port: 8000
    }*/
};

//npx webpack --config webpack.config.js
// http://api.openweathermap.org/data/2.5/weather?q=oulu,fi&APPID=c9ca3fdada77609e76fec6e849b11dd1