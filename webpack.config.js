const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './src/main.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'www/js')
    },
    mode: "development",
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};

//npx webpack --config webpack.config.js
// http://api.openweathermap.org/data/2.5/weather?q=oulu,fi&APPID=c9ca3fdada77609e76fec6e849b11dd1