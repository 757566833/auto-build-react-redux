const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const cmd = process.argv[3];
let compress = {

};
if (cmd == 'production') {
    compress = {
        warnings: false,
        drop_debugger: true,
        drop_console: true
    };
}
const optimization = {
    splitChunks: {
        cacheGroups: {
            react: {
                test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                name: 'react',
                chunks: 'all',
            }
        }
    },
    minimizer: [new UglifyJsPlugin({
        uglifyOptions: {
            compress: compress
        }
    })]
};
module.exports = {
    optimization
};