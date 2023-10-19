/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import webpack, { RuleSetRule } from "webpack";
import path from "path";
// import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loader/buildCssLoader";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions?.push(".ts", ".tsx");
  config.module.rules.push({
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  });

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
  config.module.rules.push(buildCssLoader(true));

  return config;
};