import { RuleSetRule } from "webpack";

export const buildRules = (): RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [tsLoader];
};
