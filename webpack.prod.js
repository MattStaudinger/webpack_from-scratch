const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",

  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimizer: [new UglifyJsPlugin(), new OptimizeCssAssetsPlugin()],
  },
});
