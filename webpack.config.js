const path = require('path');
const webpackCopyPlugin = require('copy-webpack-plugin');

const mode = 'development';
const sysWatch = false;

const electronConfig = {
       target: 'electron-main',
       entry: {
              main: './src/main.ts',
       },
       output: {
              filename: '[name].js',
              path: path.resolve(__dirname, 'dist')
       },
       resolve: {
              extensions: ['.ts', '.tsx', '.js'],
              alias: {
                     '@mui/styled-engine': '@mui/styled-engine-sc'
              }
       },
       module: {
              rules: [
                     { test: /\.ts[x]$/, use: { loader: 'ts-loader' } }
              ]
       },
       mode,
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
       watch: sysWatch,
       output: {
              filename: '[name].js',
              path: path.resolve(__dirname, 'dist/public')
       },
       resolve: {
              extensions: ['.ts', '.tsx', '.js'],
              alias: {
                     '@mui/styled-engine': '@mui/styled-engine-sc'
              }
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
       mode

}

const electronPreload = {
       target: 'electron-preload',
       watch: sysWatch,
       entry: './src/preload.ts',
       output: {
              filename: 'preload.js',
              path: path.join(__dirname, 'dist')
       },
       module: {
              rules: [
                     {
                            test: /\.ts$/,
                            use: {
                                   loader: 'ts-loader',
                                   options: {

                                   }
                            }
                     }
              ]
       },
       resolve: {
              extensions: ['.ts']
       },
       mode
}

module.exports = [electronConfig, appConfig, electronPreload];