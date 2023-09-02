import type { Configuration } from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildRules } from "./buildRules";
import { buildResolvers } from "./buildResolvers";
import type { BuildOptions } from "./types/config";
import { buildDevSever } from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { paths, mode, isDev } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),

    module: {
      rules: buildRules(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevSever(options) : undefined,
  };
};
