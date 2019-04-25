

var path = require('path');
//单独抽离css文件
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
//打包html文件
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','less-loader']
            },
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                // 将以这些结尾的图片打包
                test:/\.(gif|jpg|png|jpeg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            // 打包的文件名是,   [ext] 可以取得图片的格式 , 就和[name]一样
                            name:'[name][hash:5].[ext]',
                            //limit限制图片大小, 当图片<= limit值  
                            //就进行base64格式的编码,如果图片大于他,就进行单独打包
                            limit:100,
                            outputPath:'img'
                        }
                    },
                    {
                        //对单独打包的图片进行压缩
                        loader:'img-loader',
                        options:{
                            plugins:[
                                require('imagemin-pngquant')({
                                    quality:[0.3,0.5]
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        //对html模板里面的图片的处理
                        loader:'html-loader',
                        options:{
                            attr:['img:src']
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./index.html',
        }),
    ],
    mode:'development',
    devServer:{
        port:'8080',
        contentBase:'dest'
    }
}













