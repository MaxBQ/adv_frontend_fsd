export type BuildMode = "development" | "production";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEvn {
  port: number;
  mode: BuildMode;
  apiUrl: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  apiUrl: string;
  port: number;
}
