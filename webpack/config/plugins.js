const cmd = process.argv[3];
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const {
    entrysjson
} = require('./entrys');
const {
    BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');
let pathsToClean = [
    path.resolve(__dirname, '..', '..', 'public', 'asset'),
];
let cleanOptions = {
    root: path.resolve(__dirname, '..', '..'),
};
let plugins = [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new MiniCssExtractPlugin({
        filename: '[name]/[name].[contenthash].css'
    }),
];

for (const key in entrysjson) {
    if (entrysjson.hasOwnProperty(key)) {
        plugins.push(new HtmlWebpackPlugin({
            title: key,
            filename: path.resolve(__dirname, '..', '..', 'views', `${key}.ejs`),
            template: path.resolve(__dirname, '..', 'viewBabel', 'babel.ejs'),
            chunks: [key,'react']
        }));
    }
}
plugins.push(new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer'
}));

if (cmd == 'production') {
    plugins.push(new BundleAnalyzerPlugin({
        analyzerPort: 8919
    }));
}
module.exports = {
    plugins
};