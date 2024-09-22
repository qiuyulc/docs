const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TestPlugin = require("./plugins/test-plugin");
const BannerWebpackPlugin = require("./plugins/banner-webapck-plugin")
const CleanWebpackPlugin = require("./plugins/clean-webpack-plugin");
const AnalyzeWebpackPlugin = require("./plugins/analyze-webpack-plugin");
const InlineChunkWebpackPlugin = require("./plugins/inline-chunk-webpack-plugin");
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].js",
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        //执行顺序，从右到左，从下到上。
        // use: ["./loaders/demo/test1.js","./loaders/demo/test2.js"],
        // use: ["./loaders/demo/test2.js","./loaders/demo/test1.js"],
        // loader:'./loaders/demo/test3.js',
        // use:['./loaders/demo/test4.js','./loaders/demo/test5.js','./loaders/demo/test6.js']
        loader:'./loaders/clean-log-loader.js'
      },
      // {
      //   test: /\.js$/,
      //   loader:'./loaders/banner-loader/index.js',
      //   options:{
      //       author:'秋雨',
      //       // age:18,//"additionalProperties":false,不能新增字段
      //   }
      // },
      {
        test: /\.js$/,
        loader:'./loaders/babel-loader/index.js',
        options:{
            presets:['@babel/preset-env'],
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader:'./loaders/file-loader/index.js',
        type:'javascript/auto',//组织webpack默认去处理图片资源，只使用file-loader
      },
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"]
        use:['./loaders/style-loader/index.js','css-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    // new TestPlugin({ name: "test" }),
    new BannerWebpackPlugin(
      {
        author:'秋雨'
      }
    ),
    new CleanWebpackPlugin(),
    new AnalyzeWebpackPlugin(),
    new InlineChunkWebpackPlugin([/runtime(.*)\.js$/])
  ],
  optimization:{
    splitChunks:{
      chunks:'all'
    },
    runtimeChunk:{
      name:entrypoint => `runtime~${entrypoint.name}.js`
    }
  },
  // mode: "development",
  mode: "production",
};
