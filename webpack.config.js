const webpack = require('webpack');
const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');

/** @type {webpack.Configuration} */
module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader', options: require('./babel.config') },
            },
            { test: /\.css/, use: ['style-loader', 'css-loader'] },
        ],
    },
    devtool: 'source-map',
    plugins: [new webpack.ProgressPlugin(), new HtmlPlugin({
        template: './src/index.html',
        filename: '../index.html'
    })],
};
