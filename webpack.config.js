const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoPrefixer = require('autoprefixer')

module.exports = (env, options) => {
  const isDevMode = options.mode === 'development'
  
  const config = {
    entry: './app/index.js',
    target: "web",
    output: {
      path: path.join(__dirname, 'build'),
      filename: '[name].bundle.js',
      chunkFilename: 'bundle.[chunkhash].js'
    },
    devtool: (isDevMode) ? 'inline-source-map' : false,
    resolve: {
      alias: {
        'Components': path.resolve('app', 'components'),
        'Containers': path.resolve('app', 'containers')
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('app', 'index.html')
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      })
    ],
    devServer: {
      publicPath: '/',
      port: 3100,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.scss$/,
          use: [
            {loader: isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader},
            {loader: 'css-loader'},
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoPrefixer]
              }
            },
            {loader: 'sass-loader'}
          ]
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/'
              }
            }
          ]
        }
      ]
    },
    node: {
      fs: 'empty',
      child_process: 'empty'
    }
  }

  return config
}
