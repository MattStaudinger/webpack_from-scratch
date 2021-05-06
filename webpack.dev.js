const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

module.exports = merge(common, {
  devServer: {
    contentBase: "./dist",
    port: 7000,
    hot: true,
  },
  mode: "development",
  devtool: "inline-source-map",

  plugins: [new webpack.HotModuleReplacementPlugin()],
});
