const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const SourceMapDevToolPlugin = require("source-map-loader")
// const productionConfig = merge([
//     parts.generateSourceMaps({ type: "source-map" }),
// ]);



module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    devtool: 'inline-source-map',
    entry: "./main.js",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        port: 4200,
        hot: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        })
        // new webpack.SourceMapDevToolPlugin({
        //     filename: '[name].js.map'
        // })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            filename: "[name].[ext]",
                            useRelativePath: true
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpg: {
                                progressive: true,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 10
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp3|mp4)$/,
                use: ["file-loader"]
            }
            // {
            //     test: /\.js$/,
            //     enforce: "pre",
            //     use: ["source-map-loader"],
            // }
        ]
    }
}