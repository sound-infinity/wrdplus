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
