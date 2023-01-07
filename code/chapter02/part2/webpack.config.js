//引入一个包
const path=require('path')
//引入html插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
//引入clean插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


//webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
    //指定入口文件
    entry: "./src/index.ts",

    //指定打包文件所在目录
    output: {
        //指定打包后的目录
        path: path.resolve(__dirname,'dist'),
        //打包后文件的名字
        filename: "bundle.js",

        //告诉webpack不使用箭头函数
        environment: {
            arrowFunction: false
        }
    },

    //指定webpack打包时要使用的模块
    module:{
        //指定loader(加载)的规则
        rules: [
            {
                //test指定的是规则生效的文件
                //来匹配所有ts结尾的文件，用ts-loader来处理/编译以ts结尾的文件
                test:/\.ts$/,
                //要使用的loader
                use:[
                    //配置babel
                    {
                        //指定加载器
                        loader:"babel-loader",
                        //设置babel
                        options: {
                            //设置预定义的环境
                            presets:[
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        targets:{
                                            "chrome":"108"
                                        },
                                        //指定core-js的版本
                                        "core-js":"3",
                                        //使用core-js的方式  "usage"表示按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ],
                //要排除的文件
                exclude:/node-mudules/
            },
            //设置less文件的处理
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },

    //配置webpack插件
    plugins: [
        new HtmlWebpackPlugin({
            // title:"自定义的title"
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ],

    //用来设置引用模块
    resolve: {
        extensions: ['.ts','.js']
    },

    mode: 'development'
}