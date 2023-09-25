import type { Configuration } from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoader } from "./buildLoader";
import { buildResolvers } from "./buildResolvers";
import type { BuildOptions } from "./types/config";
import { buildDevSever } from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { paths, mode, __IS_DEV__ } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),

    module: {
      rules: buildLoader(options),
    },
    resolve: buildResolvers(options),
    devtool: __IS_DEV__ ? "inline-source-map" : undefined,
    devServer: __IS_DEV__ ? buildDevSever(options) : undefined,
  };
};
