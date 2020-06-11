const path = require("path");
module.exports = {
  entry: "./src/components/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public"),
  },
  module: {
    rules: [{
      loader: "babel-loader",
      test: /\.js$/,
      exclude: /node_modules/,
    },

    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
  mode: "development",
};