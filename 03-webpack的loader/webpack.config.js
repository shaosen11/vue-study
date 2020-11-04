const path = require('path');
/* vue15.x以上需要的插件 */
const {
  VueLoaderPlugin
} = require('vue-loader');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  /* 主入口文件 */
  entry: "./src/main.js",
  /* 出口文件 */
  output: {
    path: path.resolve(__dirname, "dist"),
    /* 生成文件名 */
    filename: "bundle.js",
    /* 生成文件路径 */
    // publicPath: "dist/",
  },
  module: {
    rules: [
      /* css loader */
      {
        /* 正则表达式 */
        test: /\.css$/,
        /* 从右到左解析，没有style-loader页面没有样式 */
        use: ["style-loader", "css-loader"],
      },
      /* less loader */
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 13000,
            name: "img/[name].[hash:8].[ext]",
          },
        }, ],
      },
      {
        test: /\.js$/,
        /* 排除node_modules文件夹下面的文件 */
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"],
          },
        },
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    alias: {
      /* 指定vue编译器 */
      vue$: "vue/dist/vue.esm.js",
    },
  },
  plugins: [
    new VueLoaderPlugin(), 
    new webpack.BannerPlugin('最终版权归xxxx所有'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // new UglifyjsWebpackPlugin()
  ],
  devServer: {
    contentBase: './dist',
    inline: true
  }
};