const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimizer: [new UglifyJsPlugin(), new OptimizeCssAssetsPlugin()],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "./css/mycss.[name].css",
    }),
  ],
});
