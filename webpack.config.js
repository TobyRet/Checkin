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

const PORT = process.env.PORT
const CHECKIN_HOST = process.env.CHECKIN_HOST
const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID
const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN

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
      {
        plugins: [
          new webpack.DefinePlugin({
            AUTH0_CLIENT_ID: JSON.stringify(AUTH0_CLIENT_ID),
            AUTH0_DOMAIN: JSON.stringify(AUTH0_DOMAIN),
            CHECKIN_HOST: JSON.stringify(CHECKIN_HOST),
            PORT: JSON.stringify(PORT)
          })
        ]
      },
      parts.extractCSS()
    ])
  }

  return merge([
    common,
    parts.setFreeVariable(
      'AUTH0_CLIENT_ID', AUTH0_CLIENT_ID
    ),
    parts.setFreeVariable(
      'AUTH0_DOMAIN', AUTH0_DOMAIN
    ),
    parts.setFreeVariable(
      'CHECKIN_HOST', CHECKIN_HOST
    ),
    parts.setFreeVariable(
      'PORT', PORT
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
