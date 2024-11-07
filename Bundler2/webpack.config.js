// import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// exports
module.exports = {
    // parcel index.html
    //파일을 읽어들이기 시작하는 진입점
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 설정
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    
    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 실행
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static'}
            ]
        })
    ],

    devServer: {
        host: 'localhost'
    }
}


// 번들러 : tes, es6,es8 등..을 웹에서 동작하는 hmtl.css,.js로 변환하는 작업을 해주는 것


// 1. pacel = 구성없는 단순한 자동 번들링, 소/중형 프로젝트에 적합
// 2. weppack = 매우 꼼꼼한 구성 중/대형 프로젝틍 적합


//   "browserslist":[
//     "> 1%",
//     "last 2 versions"
//   ]

// 전세계 1%이상 사용하는 브라우저에 마지막 업데이트2버젼까지 지원하겠다.

// 위 사항을 명시하여 autoprefixer(공급사항 접두사) 설정