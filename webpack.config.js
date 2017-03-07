const dotEnv = require('dotenv')
dotEnv.config()
const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const parts = require('./webpack.parts')
const fs = require('fs')

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
}

const common = merge([
  {
    entry: {
      app: PATHS.src
    },
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
  },
  parts.loadJavascript(PATHS.src)
])

module.exports = function (env) {
  if (env === 'production') {
    return merge([
      common,
      parts.setFreeVariable(
        '__AUTH0_CLIENT_ID__',
        process.env.AUTH0_CLIENT_ID
      ),
      parts.setFreeVariable(
        '__AUTH0_DOMAIN__',
        process.env.AUTH0_DOMAIN
      ),
      parts.setFreeVariable(
        '__CHECKIN_URL__',
        process.env.CHECKIN_URL
      ),
      parts.extractCSS()
    ])
  }

  return merge([
    common,
    parts.setFreeVariable(
      '__AUTH0_CLIENT_ID__',
      process.env.AUTH0_CLIENT_ID
    ),
    parts.setFreeVariable(
      '__AUTH0_DOMAIN__',
      process.env.AUTH0_DOMAIN
    ),
    {
      plugins: [
        new webpack.NamedModulesPlugin()
      ]
    },
    parts.loadCSS(),
    parts.devServer({
      host: process.env.HOST,
      port: process.env.PORT
    })
  ])
}
