import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin,
} from "webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import type { WebpackPluginInstance } from "webpack";
import type { BuildOptions } from "./types/config";

export const buildPlugins = ({
  paths,
  isDev,
  apiUrl,
}: BuildOptions): WebpackPluginInstance[] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
    }),
  ];
  if (isDev) {
    plugins.push(
      new HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin(),
      new BundleAnalyzerPlugin({ openAnalyzer: false }),
    );
  }

  return plugins;
};
