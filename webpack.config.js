const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin") //подключаем плагин в вебпак (подключаем класс, поэтому с большой буквы)
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: "./main.js",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        //правило - плагины должны быть новыми инстансами классов(с ключевым словом new)
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.mp3$/,
                use: ["file-loader"]
            }
        ]
    }
}