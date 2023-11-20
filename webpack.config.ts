import path from "path";
import { buildWebpackConfig } from "./configs/build/buildWebpackConfig";
import { type BuildEvn, type BuildPaths } from "./configs/build/types/config";

export default (env: BuildEvn) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || "development";
  const apiUrl = env.apiUrl || "http://localhost:8000";
  const isDev = mode === "development";
  const port = env.port || 3000;
  return buildWebpackConfig({
    paths,
    mode,
    isDev,
    apiUrl,
    port,
  });
};
