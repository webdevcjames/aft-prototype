const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node-modules/,
        enforce: "pre",
        enforce: "post",
        loader: "babel-loader",
        options: {
          presets: ["env", "react", "es2017", "stage-0"]
        },
      },
      {
        test: /\.styl$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[folder]_[local]_[hash:base64:8]"
            }
          },
          { loader: "stylus-loader" }
        ]
      },
      {
        test: /\.html$/,
        use: [
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
            }
          }
        ]
      },
    ],
  },
  resolve: {
    extensions: [".js", ".styl"]
  },
  plugins: [
  ],
}