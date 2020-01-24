'use strict'

const path = require('path')

const config = require('./config')
const utils = require('./utils')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, options) => {
  return {
    target: 'node',
    devtool: 'inline-source-map',
    entry: utils.entryPaths(),
    output: {
      path: `${config.build.root}/bin`,
      filename: '[name].js',
      library: ['[name]']
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
    ],
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.ts$/,
          use: [
            {
              loader: 'tslint-loader',
              options: {
                typeCheck: true,
                fix: true,
              },
            },
          ],
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'ts-loader'
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.ts', '.json'],
      modules: ['node_modules'],
      alias: {
        '@': utils.resolvePath(config.build.entryRoot)
      }
    }
  }
}
