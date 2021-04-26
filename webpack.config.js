const path = require("path");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: { myEntry: "./src/index.js" },
  output: {
    filename: "[name].bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        loader: "file-loader",
        options: {
          name: "foo.[name].[ext]",
          outputPath: "images/",
          publicPath: "/dist/images",
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
    new webpack.HotModuleReplacementPlugin(),
  ],
};
