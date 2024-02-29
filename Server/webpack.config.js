const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/",
    filename: "final.js",
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" },
      { test: /\.node$/, use: "node-loader" },
    ],
  },
  target: "node",
  resolve: {
    alias: {
      "@mongodb-js/zstd": false,
      "@aws-sdk/credential-providers": false,
      snappy: false,
      aws4: false,
      "mongodb-client-encryption": false,
      kerberos: false,
      "supports-color": false,
    },
    fallback: {
      "@mongodb-js/zstd": false,
    },
  },
};
