// const HtmlWebPackPlugin = require("../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/html-webpack-plugin");

// const htmlWebpackPlugin = new HtmlWebPackPlugin({
//   template: "./src/index.html",
//   filename: "./index.html"
// });

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'bundled.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  // plugins: [htmlWebpackPlugin]
};