// ESM 
//import 또는 export

// ESM은 지원하지 않고 CommonJS를 지원
// import = require()
// export = module.exports

// import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer')

// export {
//     plugins:[
//         autoprefixer
//     ]
// }
// module.exports = {
//     plugins:[
//         autoprefixer
//     ]
// }

module.exports = {
    plugins:[
        require('autoprefixer')
    ]
}