//引入一个包
const path=require('path')

//webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
    //指定入口文件
    entry: "./src/index.ts",

    //指定打包文件所在目录
    output: {
        //指定打包后的目录
        path: path.resolve(__dirname,'dist'),
        //打包后文件的名字
        filename: "bundle.js"
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
                use:'ts-loader',
                //要排除的文件
                exclude:/node-mudules/
            }
        ]
    }
}