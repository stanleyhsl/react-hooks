const argv = require("yargs-parser")(process.argv.slice(2));
const _mode = argv.mode;
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const merge = require("webpack-merge");
const { resolve, join } = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");
console.log("苹果", { _mode });

const webpackConfig = {
  entry: {
    app: resolve("./src/web/index.tsx")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        include: [resolve("src")],
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [new CheckerPlugin()]
};

module.exports = merge(webpackConfig, _mergeConfig);
