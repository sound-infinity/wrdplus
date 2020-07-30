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
            test: /\.css$/i,
            use: 'css-loader',
        },
        {
            test: [/\.js$/, /\.tsx?$/],
            exclude: [
                node_modules
            ],
            loader: "babel-loader",
        }]
    },

}
/*
{
                test: [/\.js$/, /\.tsx?$/],
                use: 'ts-loader',
                exclude: [
                    node_modules
                ]
            }
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
};*/