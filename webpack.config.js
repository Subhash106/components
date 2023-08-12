const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "dist",
    port: 8080,
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react"],
            ],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      inject: true,
    }),
    new ModuleFederationPlugin({
      name: "components",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/button/index.jsx",
        "./TextInput": "./src/components/input/index.jsx",
        "./Card": "./src/components/card/index.jsx",
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
