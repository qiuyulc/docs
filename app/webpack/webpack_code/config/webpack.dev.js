const path = require('path');
const os = require('os');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESlintWebpackPlugin = require('eslint-webpack-plugin');
const threads = os.cpus().length;
module.exports = {
    //入口
    entry: "./src/main.js",//相对路径
    //输出
    output: {
        //文件的输出路径
        // 开发模式下不需要输出
        path: undefined,
        filename: 'static/js/[name].js',
        //给打包输出的其他文件命名
        chunkFilename: 'static/js/[name].[contenthash:10].js',
        //图片 字体通过type:asset处理，自动确定文件名
        assetModuleFilename: 'static/media/[hash:10][ext][query]',
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
                        use: ["style-loader", "css-loader"],
                    },
                    {
                        test: /\.less$/,
                        //loader 只能使用一个 loader
                        use: [
                            // compiles Less to CSS
                            'style-loader',
                            'css-loader',
                            'less-loader',
                        ],
                    },
                    {
                        test: /\.s[ac]ss$/i,
                        use: [
                            // 将 JS 字符串生成为 style 节点
                            'style-loader',
                            // 将 CSS 转化成 CommonJS 模块
                            'css-loader',
                            // 将 Sass 编译成 CSS
                            'sass-loader',
                        ],
                    },
                    {
                        test: /\.styl$/,
                        use: [
                            "style-loader",
                            "css-loader",
                            "stylus-loader", // 将stylus编译成css文件
                        ],
                    },
                    {
                        test: /\.(png|jpe?g|gif|webp)$/,
                        type: 'asset',
                        parser: {
                            //小于10kb的图片转base64
                            //优点：减少请求数量 缺点：体积会更大
                            dataUrlCondition: {
                                maxSize: 10 * 1024 // 10kb
                            }
                        },
                        generator: {
                            //输出图片名称
                            //[hash:10] hash 取前10位
                            // filename: "static/images/[hash:10][ext][query]"
                        }
                    },
                    {
                        test: /\.(ttf|woff2?|map3|ma4|avi)$/,
                        type: 'asset/resource',
                        generator: {
                            //输出名称
                            // filename: "static/media/[hash:10][ext][query]"
                        }
                    },
                    {
                        test: /\.js$/,
                        // exclude: /node_modules/,//排除node_modules代码不编译
                        include: path.resolve(__dirname, '../src'),
                        use: [
                            {
                                loader: 'thread-loader',//开启多进程。
                                options: {
                                    workers: threads,//数量
                                }
                            },
                            {
                                loader: 'babel-loader',
                                options: {
                                    cacheDirectory: true,//开启babel缓存
                                }
                            }
                        ],

                    }
                ]
            }
        ],
    },

    //插件
    plugins: [
        //plugin的配置
        new ESlintWebpackPlugin({
            context: path.resolve(__dirname, 'src'),
            exclude: 'node_modules',//默认
            cache: true,//开启缓存
            // 缓存目录
            cacheLocation: path.resolve(
                __dirname,
                "../node_modules/.cache/.eslintcache"
            ),
            threads,//开启多进程
        }),
        new HtmlWebpackPlugin(
            {
                //模板：
                template: path.resolve(__dirname, '../public/index.html')
            }
        )
    ],
    //开发服务器
    devServer: {
        host: 'localhost',//启动服务器域名
        port: '3000',//启动服务器端口号
        open: true,//是否自动打开浏览器
        hot: true,//开启HMR功能（只能用于开发环境，生产环境不需要）
    },
    //模式
    mode: 'development',
    devtool: 'cheap-module-source-map'
}