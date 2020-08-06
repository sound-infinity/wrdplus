const path = require('path')
const node_modules = path.resolve(__dirname, 'node_modules')

module.exports = {
    mode: 'development',
    entry: './src/',
    cache: false,
    output: {
        publicPath: 'build/',
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: [/.js$/, /.ts$/, /\.tsx?$/],
              loader: 'babel-loader',
            },
        {
            test: /\.css$/,
            use: 'css-loader'
        }]
    },
    resolve: {
        extensions: ['.css', '.tsx', '.ts', '.js'],
    }
}
/*

     resolve: {
        extensions: ['.css', '.tsx', '.ts', '.js'],
    }

 */
/*
module.exports = {
    ,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};            {
              test: /\.js$/,
              use: ["source-map-loader"],
              enforce: "pre"
            },
*/