import path from "path";
import {Configuration} from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import baseConfig from "./webpack.base.config";

const config: Configuration = {
    ...baseConfig,
    mode: "production",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[contenthash].js",
        publicPath: "",
    },
};

// @ts-ignore
config.plugins.push(new CleanWebpackPlugin());

export default config;