const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  new HtmlWebpackPlugin({
    template: "public/index.html",
    minify: false,
  }),
];
