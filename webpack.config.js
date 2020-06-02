const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/',
    output: {
        publicPath: 'build/',
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ],
            loader: "babel-loader",
        }]
    }
}