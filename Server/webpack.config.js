// webpack.config.js
import path from "path";

export default {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "bundle.js",
  },
  target: "node",
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" },
      { test: /\.node$/, use: "node-loader" },
    ],
  },
};
