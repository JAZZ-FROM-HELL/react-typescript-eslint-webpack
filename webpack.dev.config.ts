import path from "path";
import * as webpack from "webpack";
import * as webpackDevServer from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintWebpackPlugin from "eslint-webpack-plugin";
import baseConfig from "./webpack.base.config";

const config: webpack.Configuration = {
    ...baseConfig,
    mode: "development",
    output: {
        publicPath: "/",
    },
    devtool: "inline-source-map",
    devServer: {
        static: path.join(__dirname, "build"),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true
    },
};

if (!config.plugins) config.plugins = [];
config.plugins.push(new webpack.HotModuleReplacementPlugin());

export default config;