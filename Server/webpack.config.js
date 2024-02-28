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
      {
        test: /\.(sass|less|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
