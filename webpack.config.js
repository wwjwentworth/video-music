let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './dist/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  devtool: 'source-map',//配置生成Source Maps，选择合适的选项
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg)$/,
        loader: ['url-loader']
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    inline: true,
    port: 1004,
    open: true,
    historyApiFallback: {
      index: 'dist/index.html'
    },
  },
  
}