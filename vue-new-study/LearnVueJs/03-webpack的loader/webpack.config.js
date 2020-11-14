const path = require('path');

module.exports ={
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                //css-loader只负责将css文件进行加载
                //style-loader负责将央视添加到DOM中
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
}