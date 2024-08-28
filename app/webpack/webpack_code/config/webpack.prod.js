const os = require("os");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESlintWebpackPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin");

const threads = os.cpus().length;

//用来获取处理样式的loader
function getStyleLoader(pre) {
  return [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            "postcss-preset-env", //解决大部分样式兼容性问题
          ],
        },
      },
    },
    pre,
  ].filter(Boolean);
}

module.exports = {
  //入口
  entry: "./src/main.js", //相对路径
  //输出
  output: {
    //文件的输出路径
    //__dirname nodejs的变量，代表当前文件的文件夹目录
    path: path.resolve(__dirname, "../dist"), //相对路径
    //文件名
    filename: "static/js/[name].js",
    //给打包输出的其他文件命名
    chunkFilename: "static/js/[name].[contenthash:10].js",
    //图片 字体通过type:asset处理，自动确定文件名
    assetModuleFilename: "static/media/[hash:10][ext][query]",
    //自动清空上次打包的内容
    //原理：在打包前，将path整个目录内容清空，在进行打包。
    clean: true,
  },
  //加载器
  module: {
    rules: [
      {
        oneOf: [
          {
            // 用来匹配 .css 结尾的文件
            test: /\.css$/,
            // use 数组里面 Loader 执行顺序是从右到左
            use: getStyleLoader(),
          },
          {
            test: /\.less$/,
            //loader 只能使用一个 loader
            use: getStyleLoader("less-loader"),
          },
          {
            test: /\.s[ac]ss$/i,
            use: getStyleLoader("sass-loader"),
          },
          {
            test: /\.styl$/,
            use: getStyleLoader("stylus-loader"), // 将stylus编译成css文件
          },
          {
            test: /\.(png|jpe?g|gif|webp)$/,
            type: "asset",
            parser: {
              //小于10kb的图片转base64
              //优点：减少请求数量 缺点：体积会更大
              dataUrlCondition: {
                maxSize: 10 * 1024, // 10kb
              },
            },
            generator: {
              //输出图片名称
              //[hash:10] hash 取前10位
              // filename: "static/images/[hash:10][ext][query]"
            },
          },
          {
            test: /\.(ttf|woff2?|map3|ma4|avi)$/,
            type: "asset/resource",
            generator: {
              //输出名称
              // filename: "static/media/[hash:10][ext][query]"
            },
          },
          {
            test: /\.js$/,
            // exclude: /node_modules/,//排除node_modules代码不编译
            include: path.resolve(__dirname, "../src"),
            use: [
              {
                loader: "thread-loader", //开启多进程。
                options: {
                  workers: threads, //数量
                },
              },
              {
                loader: "babel-loader",
                options: {
                  cacheDirectory: true, //开启babel缓存
                  cacheCompression: false, // 缓存文件不要压缩
                  plugins: ["@babel/plugin-transform-runtime"], // 减少代码体积
                },
              },
            ],
          },
        ],
      },
    ],
  },

  //插件
  plugins: [
    //plugin的配置
    new ESlintWebpackPlugin({
      context: path.resolve(__dirname, "src"),
      exclude: "node_modules",
      cache: true, //开启缓存
      cacheLocation: path.resolve(
        __dirname,
        "../node_modules/.cache/eslintcache"
      ),
      threads, //开启多进程
    }),
    new HtmlWebpackPlugin({
      //模板：
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    //提取css成单独文件
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css",
      chunkFilename: "static/css/[name].chunk.css",
    }),
    new PreloadWebpackPlugin({
    //   rel: "preload",
    //   as: "script",
      rel: "prefetch",
    }),
    // css压缩
    // new CssMinimizerPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      //css压缩也可以写在optimization.minimizer里面，效果一样的。
      new CssMinimizerPlugin(),
      //当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置。就要重新写了。
      new TerserPlugin({
        parallel: threads, //开启多进程
      }),
      // 压缩图片
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: [
                    "preset-default",
                    "prefixIds",
                    {
                      name: "sortAttrs",
                      params: {
                        xmlnsOrder: "alphabetical",
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: {
        name: entrypoint => `runtime~${entrypoint.name}`,
    }
  },
  //模式
  mode: "production",
  devtool: "source-map",
};
