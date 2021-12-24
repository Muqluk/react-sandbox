const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = [
  new ESLintPlugin({
    extensions: [".js", ".ts"],
    fix: false, // be careful with changing this to true.
    failOnError: true,
    failOnWarning: false,
    outputReport: true,
  }),
  new webpack.ProvidePlugin({
    React: "react",
    ReactDOM: "react-dom",
    PropTypes: "prop-types",
  }),
  new CleanWebpackPlugin({
    dry: false,
    verbose: false,
    cleanStaleWebpackAssets: true,
    protectWebpackAssets: true,
  }),
  new HtmlWebpackPlugin({
    template: "public/index.html",
    minify: false,
  }),
];
