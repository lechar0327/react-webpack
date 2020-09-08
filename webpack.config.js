const webpack = require('webpack');
//引入path模块
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//入口绝对路径
const APP_DIR = path.resolve(__dirname, 'src');
//出口绝对路径
const BUILD_DIR = path.resolve(__dirname, 'dist');

//获取全局环境变量(根据package.json里的cross-env配置取值)
const NODE_ENV = process.env.NODE_ENV;

const config = {
    //入口
    entry: APP_DIR + '/main.js',
    //出口
    output: {
        path: BUILD_DIR,
        //出口文件名
        filename: '[name].[hash].bundle.js' //'[name].[hash].bundle.js' 使用hash,每次生成不一样的,防止浏览器缓存
    },
    //模式生产环境或开发环境
    mode: 'development',
    module: {
        //配置loader
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ["style-loader", 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ["style-loader", 'css-loader', 'postcss-loader', 'sass-loader'] },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: "url-loader?limit=8000" },
            { test: /\.(tff|eot|svg|woff|woff2)$/, use: "url-loader" },
            //编译后缀为js和jsx格式文件
            {
                test: /\.(js)$/,
                //使用babel-loader这个loader库
                use: 'babel-loader',
                //打包时,node_modules不包含其中,否则打包会非常慢
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        //设置别名
        alias: {
            //将src文件设置一个别名
            '@': path.resolve(__dirname, './src')
        },
        extensions: ['.js', '.json']

    },
    plugins: [
        new HtmlWebpackPlugin({
            // 页面需要使用模版符号来输出 <%= htmlWebpackPlugin.options.title %>
            title: '首页',
            //基于这个index.html模版,否则不会生成 <div id='app'></div>
            template: path.resolve(__dirname, './public/index.html')
        }),
        //清除文件
        new CleanWebpackPlugin(),
        //用于热更新,这两个插件不用引入,因为是webpack内置的
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()

    ]
};


//开发环境
if (NODE_ENV == 'development') {
    config.devServer = {
        port: 9000,
        //以哪个文件夹作为发布的网站目录
        contentBase: './dist',
        //自动打开浏览器
        open: true,//自动打开浏览器
        hot: true,//实时刷新(开启热更新),
        overlay: {
            errors: true//报错时的浮层
        },
        proxy: {
            // 代理，转发
            // 当请求URL中包含 '/cnode' 字符串时，才执行代理转发
            '/cnode': {
                target: 'https://cnodejs.org/',  // 目标（远程）服务器地址
                secure: true,
                changeOrigin: true,
                pathRewrite:{'^/cnode':''},
            },
            '/api': {
                target: 'http://localhost:3000',
                secure: true,
                changeOrigin: true,
            }
           // http://cnblogs.org/api/v1/getInfo
          //  http://localhost:9000/api/getList
        },
    };
    //用于热更新,这两个插件不用引入,因为是webpack内置的
    config.plugins.push(new webpack.NamedModulesPlugin());
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    // 源码映射,便于调试
    config.devtool = 'inline-source-map';
    config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre' // 在babel编译之间进行代码检测
    });

};


module.exports = config;