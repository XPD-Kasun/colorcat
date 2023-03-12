const path = require('path');
const webpackCopyPlugin = require('copy-webpack-plugin');

const electronConfig = {
       target: 'electron-main',
       entry: {
              main: './src/main.ts',
       },
       output: {
              filename: '[name].js',
              path: path.resolve(__dirname, 'dist')
       },
       module: {
              rules: [
                     { test: /\.ts[x]$/, use: { loader: 'ts-loader' } }
              ]
       },
       mode: 'development',
       plugins: [
              new webpackCopyPlugin({
                     patterns: [
                            { from: './src/public', to: './public' },
                            { from: './package.json', to: './' }
                     ]
              })
       ],
       externals: {
              fsevents: 'fsevents'
       }

}

const appConfig = {
       target: 'web',
       entry: {
              app: './src/app/index.ts',
       },
       output: {
              filename: '[name].js',
              path: path.resolve(__dirname, 'dist/public')
       },
       module: {
              rules: [
                     { test: /\.ts[x]$/, use: { loader: 'ts-loader' } },
                     {
                            test: /\.[s]css$/,
                            use: [
                                   { loader: 'style-loader' },
                                   { loader: 'css-loader' },
                                   { loader: 'sass-loader' }
                            ]
                     }
              ]
       },
       mode: 'development'

}

module.exports = [electronConfig, appConfig];