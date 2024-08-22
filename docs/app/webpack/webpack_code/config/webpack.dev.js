const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESlintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
    //入口
    entry: "./src/main.js",//相对路径
    //输出
    output: {
        //文件的输出路径
        // 开发模式下不需要输出
        path: undefined,
        filename: 'static/js/main.js',
    },
    //加载器
    module: {
        rules: [
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
                    filename: "static/images/[hash:10][ext][query]"
                }
            },
            {
                test: /\.(ttf|woff2?|map3|ma4|avi)$/,
                type: 'asset/resource',
                generator: {
                    //输出名称
                    filename: "static/media/[hash:10][ext][query]"
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,//排除node_modules代码不编译
                loader: 'babel-loader',
            }
        ],
    },

    //插件
    plugins: [
        //plugin的配置
        new ESlintWebpackPlugin({
            context: path.resolve(__dirname, 'src')
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
        open: true//是否自动打开浏览器
    },
    //模式
    mode: 'development',
    devtool: 'cheap-module-source-map'
}