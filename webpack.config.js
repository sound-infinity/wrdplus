const path = require('path')

module.exports = {
    mode: 'development',
    entry: ['babel-polyfill', './src/'],
    cache: false,
    output: {
        publicPath: 'release/',
        path: path.resolve(__dirname, 'build'),
        filename: 'wrdplus.user.js'
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
        },
        {
            test: /\.html$/i,
            use: 'html-loader',
          }
        ]
    },
    resolve: {
        extensions: ['.css', '.tsx', '.ts', '.js'],
    }
}
