const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { plugins } = require('@babel/preset-env/lib/plugins-compat-data')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
        {
            test:/\.scss$/,
            use: [
                'style-loader', 'css-loader', 'sass-loader',
            ]
        },
        {
            test: '/\.js$/',
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'lang-website',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ],
}