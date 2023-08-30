import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./configs/build/buildWebpackConfig";
import { BuildPaths } from "./configs/build/types/config";
// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";
const isDev = mode === "development";

const config: webpack.Configuration = buildWebpackConfig({
  paths,
  mode,
  isDev,
});

export default config;
