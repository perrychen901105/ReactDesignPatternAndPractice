const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './index.js',    // 哪个是应用主文件
    module: {               // 如何加载外部依赖
        loaders: [          // 为每种文件类型指定加载器
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules',
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin()]
 }