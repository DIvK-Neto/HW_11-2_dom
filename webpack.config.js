const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    // entry: './src/index.js',              // точка входа
    target: "web",
    output: {
        filename: 'bundle.js',              // выходной файл
        path: path.resolve(__dirname, 'dist') // выходная папка
    },
    mode: 'development',                  // режим разработки
    devtool: 'inline-source-map',         // генерация карт исходников
    
    module: {
        rules: [
            // { test: /\.css$/i, use: ['style-loader', 'css-loader'] }, // поддержка CSS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, // преобразование современного JS-кода
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
    devServer: {
        static: './dist',                   // статичный контент
        open: true,                         // открывает браузер при старте сервера
  
    },
    
};
