const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
    mode: 'development', // none   会将 process.env.NODE_ENV 的值设为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin
    entry: __dirname + '/index.js', //已多次提及的唯一入口文件  // entry传入字符串时chunk默认为main，还可以传入对象，数组等 {home: "./home.js",about: "./about.js"}
    output: {
        path: __dirname + "/dist", //打包后的文件存放的地方
        filename: '[name]-[hash].js' //打包后输出文件的文件名  [name] = chunk的名称
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',  //  本地服务器所加载的页面所在的目录
        historyApiFallback: true, // 不跳转
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('fep:版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + '/index.tmpl.html' //new 一个这个插件的实例，并传入相关的参数. 模板编译后也会输出到output文件夹
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': path.join(__dirname, './src')
        }
    }
}
