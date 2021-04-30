const path = require("path");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    // myEntry: "./src/index.js",
    first: "./js/first.js",
    second: "./js/second.js",
    third: "./js/third.js",
    css: "./css/main.css",
  },
  output: {
    filename: "[name].bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        loader: "file-loader",
        options: {
          name: "foo.[name].[ext]",
          outputPath: "images/",
          publicPath: "/images",
        },
      },
    ],
  },
  plugins: [
    new cleanWebpackPlugin(["dist"]),
    new htmlWebpackPlugin({
      title: "html webpack plugin",
      filename: "myIndex.html",
      template: "./index.html",
    }),
  ],
};
