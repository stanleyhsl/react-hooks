console.log("进入开发配置");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const { join } = require("path");

module.exports = {
  devServer: {
    historyApiFallback: true, // 让路由请求指向前端，而不是被sever拦截
    contentBase: join(__dirname, "../dist"),
    hot: true
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new WebpackBuildNotifierPlugin({
      title: "编译结束!",
      suppressSuccess: true
    })
  ]
};
