const path = require('path')
const HtmlWebpackTemplate = require('html-webpack-template')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const webpack = require('webpack')
const parts = require('./webpack.parts')

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const common = merge([
  {
    entry: {
      app: PATHS.app
    },
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: HtmlWebpackTemplate,
        title: 'Check-in',
        appMountId: 'app',
        mobile: true,
        inject: false
      })
    ]
  },
  parts.loadJavascript(PATHS.app)
])

module.exports = function (env) {
  if (env === 'production') {
    return merge([
      common,
      parts.extractCSS(),
      parts.purifyCSS(PATHS.app)
    ])
  }

  return merge([
    common,
    {
      plugins: [
        new webpack.NamedModulesPlugin()
      ]
    },
    parts.loadCSS(),
    parts.devServer({
      host: process.env.HOST,
      port: process.env.PORT
    }),
    parts.lintCSS(
      PATHS.app,
      {}
    )
  ])
}
