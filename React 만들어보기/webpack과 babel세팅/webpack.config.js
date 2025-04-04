
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // 현재 디렉토리라는 의미의 __dirname
        filename: 'bundle.js'
    },

    devServer: {
        compress: true, // 압축해라..
        port: 9999,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env","@babel/preset-react" ]
                    }
                }
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '2.2 객체 to DOM Render',
            template: 'index.html'
        })
    ]
}