const theme = require('../../theme.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cmd = process.argv[3];
const rules = [
    {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-class-properties',
                ['import', {
                    'libraryName': 'antd',
                    'libraryDirectory': 'lib',
                    'style': true
                }, 'ant'],
                ['import', {
                    'libraryName': 'antd-mobile',
                    'libraryDirectory': 'lib',
                    'style': true
                }, 'antd-mobile']
            ]
        },

        exclude: /node_modules/
    },
    {
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
        }, {
            loader: 'css-loader',
            options: {
                importLoaders: 1
            }
        }, {
            loader: 'postcss-loader',
            options: {
                plugins: () => [
                    require('autoprefixer')({
                        browsers: ['last 15 versions']
                    }),
                    require('postcss-flexbugs-fixes')(),
                    require('cssnano')({
                        preset: ['default', {
                            normalizeWhitespace: {
                                exclude: cmd != 'production',
                            },
                        }],
                    }),
                ]
            }
        }],
        exclude: /node_modules/
    },
    {
        test: /\.less$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
        }, {
            loader: 'css-loader',
            options: {
                importLoaders: 1
            }
        }, {
            loader: 'postcss-loader',
            options: {
                plugins: () => [
                    require('autoprefixer')({
                        browsers: ['last 15 versions']
                    }),
                    require('postcss-flexbugs-fixes')(),
                    require('cssnano')({
                        preset: ['default', {
                            normalizeWhitespace: {
                                exclude: cmd != 'production',
                            },
                        }],
                    }),
                ]
            }
        }, {
            loader: 'less-loader',
            options: {
                'modifyVars': theme,
                javascriptEnabled: true,
            }
        }],
    },
    {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
        }, {
            loader: 'css-loader',
            options: {
                importLoaders: 1
            }
        }, {
            loader: 'postcss-loader',
            options: {
                plugins: () => [
                    require('autoprefixer')({
                        browsers: ['last 15 versions']
                    }),
                    require('postcss-flexbugs-fixes')(),
                    require('cssnano')({
                        preset: ['default', {
                            normalizeWhitespace: {
                                exclude: cmd != 'production',
                            },
                        }],
                    }),
                ]
            }

        }, {
            loader: 'sass-loader'
        }],
        exclude: /node_modules/
    },
    {
        test: /\.(jpg|jpeg|png|svg|gif|woff|woff2|otf|ttf)?$/,
        loader: 'url-loader',
        options: {
            limit: 8192,
            publicPath: '/asset/',
            name: 'img/[name].[hash:7].[ext]'
        }

    },
];
module.exports = {
    rules
};