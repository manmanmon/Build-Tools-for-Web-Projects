const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin") //подключаем плагин в вебпак (подключаем класс, поэтому с большой буквы)
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const { config } = require("process")

const isDev = process.env.NODE_ENV === "development"
const isProd = !isDev
const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }
    if (isProd){
        config.minimizer = [
            new OptimizeCssAssetWebpackPlugin(),
        ]
    }
    return config
}

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: "./main.js",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        port: 4200,
        hot: isDev
    },
    optimization: optimization(),
    plugins: [
        //правило - плагины должны быть новыми инстансами классов(с ключевым словом new)
        new HTMLWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.mp3$/,
                use: ["file-loader"]
            }
        ]
    }
}