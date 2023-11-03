const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js',
    },
    devServer: {
        static: './dist',
        hot: true,
    },
    plugins: [
        //自动在dist里生成一个html文件（以src里的源文件为模板）
        new HtmlWebpackPlugin({
            template: 'src/index.html', // 指向源 HTML 文件
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [{
            test: /\.(css|less)$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            type: 'asset/resource',
            use: [
                'url-loader'
            ]
        },
        {
            test: /\.(ttf|eot|woff(2))(\?[a-z0-9]+)?$/,
            loader: 'file-loader',
        },
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        ]
    },
};