var path = require("path")
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: ["./src/js/app.js"],
        layout: ["./src/js/layout.js"]
    },
    output: {
        path: path.resolve(__dirname, '../bin/'),
        filename: '[name].bundle.js',
        publicPath: "/bin/"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader?attrs=img:src img:src"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        //extensions: ['', '.js', '.es6', '.vue'],
        alias: {
            //  也可以不写
            metronic: path.resolve(__dirname, '../src/metronic'),
            layout:path.resolve(__dirname, '../src/metronic/admin/layout'),
            global:path.resolve(__dirname, '../src/metronic/global'),
            Metronic:path.resolve(__dirname, '../src/metronic/global/scripts/metronic.js'),
            Layout:path.resolve(__dirname, '../src/metronic/admin/layout/scripts/layout.js')
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'dogcat.html',
            template: './index.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title:"xxxx管理系统",
            template: './src/page/layout/layout.html',
            inject: {
                head: ['layout']
            },
            chunks: ['layout']
        }), 
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
            // Metronic:'./src/metronic/global/scripts/metronic'
        })
    ]
};