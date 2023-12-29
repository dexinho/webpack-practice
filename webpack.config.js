const path = require("path");

module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 8000,
    hot: true,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
  mode: "development",
};
