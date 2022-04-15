const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  target: 'web', 
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules:[
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
    ], 
  },
  output: {
    filename: "timeline-bundle.js",
    path: path.resolve("public")
  },
}