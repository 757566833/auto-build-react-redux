const {
    entrysjson
} = require('./webpack/config/entrys');
const {
    optimization
} = require('./webpack/config/optimization');
const {
    plugins
} = require('./webpack/config/plugins');
const {
    rules
} = require('./webpack/config/rules');
const path = require('path');
module.exports = {
    // mode: 'production',
    entry: entrysjson,
    output: {
        filename: '[name]/[name].[chunkhash].js',
        path: path.resolve(__dirname, 'public', 'asset'),
        publicPath: '/asset'
    },
    optimization: optimization,
    resolve: {
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: rules
    },
    plugins: plugins,
};