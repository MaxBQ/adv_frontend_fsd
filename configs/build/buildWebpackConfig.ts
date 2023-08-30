import { Configuration } from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildRules } from "./buildRules";
import { buildResolvers } from "./buildeResolvers";
import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { paths, mode } = options;
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
      rules: buildRules(),
    },
    resolve: buildResolvers(),
  };
};
