const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESlintWebpackPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')


//用来获取处理样式的loader
function getStyleLoader(pre) {
    return [MiniCssExtractPlugin.loader, "css-loader",
    {
        loader: "postcss-loader",
        options: {
            postcssOptions: {
                plugins: [
                    "postcss-preset-env",//解决大部分样式兼容性问题
                ]
            }
        }
    },
        pre].filter(Boolean)
}

module.exports = {
    //入口
    entry: "./src/main.js",//相对路径
    //输出
    output: {
        //文件的输出路径
        //__dirname nodejs的变量，代表当前文件的文件夹目录
        path: path.resolve(__dirname, '../dist'),//相对路径
        //文件名
        filename: 'static/js/main.js',
        //自动清空上次打包的内容
        //原理：在打包前，将path整个目录内容清空，在进行打包。
        clean: true,
    },
    //加载器
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: getStyleLoader()
            },
            {
                test: /\.less$/,
                //loader 只能使用一个 loader
                use: getStyleLoader('less-loader')
            },
            {
                test: /\.s[ac]ss$/i,
                use: getStyleLoader('sass-loader')
            },
            {
                test: /\.styl$/,
                use: getStyleLoader("stylus-loader")
                , // 将stylus编译成css文件

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
        ),
        //提取css成单独文件
        new MiniCssExtractPlugin({
            filename: 'static/css/main.css'
        }),
        new CssMinimizerPlugin()
    ],
    //模式
    mode: 'production',
    devtool: 'source-map'
}