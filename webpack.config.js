const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import path from 'path';

// import {path} from 'path';
// import {HtmlWebpackPlugin} from 'html-webpack-plugin'

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.(jsx)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};
