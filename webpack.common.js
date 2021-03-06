const path = require("path");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    bundle: "./src/index.js",
    // first: "./js/first.js",
    // second: "./js/second.js",
    // third: "./js/third.js",
    // css: "./css/main.css",
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "dynamic.[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.less$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "less-loader"],
      },

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
    new webpack.ProvidePlugin({
      $: "jquery",
    }),
    new MiniCSSExtractPlugin({
      filename: "./css/mycss.[name].css",
    }),
  ],
};
