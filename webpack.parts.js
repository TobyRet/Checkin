const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurifyCSSPlugin = require('purifycss-webpack-plugin')

exports.devServer = function (options) {
  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      hotOnly: true,
      stats: 'errors-only',
      host: options.host,
      port: options.port
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({})
    ]
  }
}

exports.loadJSX = function (include) {
  return {
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          // Enable caching for extra performance
          loaders: ['babel?cacheDirectory'],
          include: include
        }
      ]
    }
  }
}

exports.loadCSS = function (paths) {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include: paths,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
}

exports.extractCSS = function (paths) {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include: paths,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader'
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css')
    ]
  }
}

exports.purifyCSS = function (paths) {
  paths = Array.isArray(paths) ? paths : [paths]

  return {
    plugins: [
      new PurifyCSSPlugin({
        basePath: '/',
        paths: paths.map(path => `${path}/*`),
        resolveExtensions: ['html']
      })
    ]
  }
}

exports.loadJavascript = function (paths) {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: paths,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            cacheDirectory: true
          }
        }
      ]
    }
  }
}


exports.setFreeVariable = function(key, value) {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [
      new webpack.DefinePlugin(env),
    ],
  }
}

exports.lintCSS = function (paths, rules) {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include: paths,
          enforce: 'pre',
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: function () {
              return [
                require('stylelint')({
                  rules: rules,
                  ignoreFiles: 'node_modules/**/*.css'
                })
              ]
            }
          }
        }
      ]
    }
  }
}

