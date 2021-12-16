const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProduction = process.env.NODE_ENV === "production";
const devMode = process.env.NODE_ENV !== "production";
const path = require("path");
let webpack = require("webpack");
const glob = require("glob");


const PATHS = {
    src: path.join(__dirname, "src/styles"),
};

module.exports = {
    mode: isProduction ? "production" : "development",
    bail: isProduction,
    context: __dirname,
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
        publicPath: "/",
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    test: /\.(sa|sc|c)ss$/,
                    chunks: "all",
                    enforce: true,
                },
            },
        },
    },
    devServer: {
        open: true,
        port: 3000,
        historyApiFallback: true,
        inline: true,
        hot: true,
        watchContentBase: true,
        compress: true,
        overlay: true,
        transportMode: "sockjs",
    },
    performance: {
        hints: false,
    },
    target: "web",
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                // options: {
                //   name: "[hash].[ext]",
                // },
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: "defaults",
                                    },
                                ],
                                "@babel/preset-react",
                            ],

                        },
                    },
                ],
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]?[hash]",
                },
            },

            {
                test: /\.(png|j?g|svg|gif|jpg|ico)?$/,
                use: "file-loader",
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name][hash].css",
        }),

        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "index.html",
        }),
    ],
};