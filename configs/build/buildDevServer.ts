import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { BuildOptions } from "./types/config";

export const buildDevSever = ({
  port,
}: BuildOptions): DevServerConfiguration => ({
  port,
  historyApiFallback: true,
  open: true,
});
