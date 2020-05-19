const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: ['./views/app.jsx'],
    mode: 'production',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
       rules: [
          { test: /\.jsx$/,loader: 'babel-loader',exclude: /node_modules/ },
          { test: /\.css/,use: [MiniCssExtractPlugin.loader,'css-loader'] },
       ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './views/app.html'
      }),
      new MiniCssExtractPlugin({
        filename: "bundle.css"
      }),
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.jsx$|\.js$|\.css$|\.html$/,
        threshold: 8192,
        minRatio: 0.8,
      }),
      //new BundleAnalyzerPlugin({ analyzerPort: 7777 }),
    ]
}