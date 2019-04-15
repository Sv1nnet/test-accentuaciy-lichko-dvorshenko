const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FileLoader = require('file-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  pages: {
    test: path.join(__dirname, '../src/test'),
  },
  assets: 'assets/',
}

const main = new MiniCssExtractPlugin({
  filename: 'css/[name].css',
  // chunkFilename: '[id].css',
});

const test = new MiniCssExtractPlugin({
  filename: 'css/test/[name].css',
  // chunkFilename: '[id].css',
});

module.exports = {
  externals: {
    path: PATHS,
  },
  entry: {
    main: [
      './src/sass/main.sass'
    ],
    index: [
      PATHS.src,
    ],
    test: [
      './src/sass/test/test.sass',
      PATHS.pages.test,
    ]
  },
  output: {
    path: PATHS.dist,  // path to output directory
    filename: `js/[name].js`,  // output js file. Name will correspond with entry props names (not values)
    publicPath: '/',  // path to index.html for browsersync in dev-mode
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: (url, resourcePath, context) => {
            const relativePath = path.relative(context, resourcePath).substr(4).split('\\').join('/');
            return relativePath;
          },
          name: '[name].[ext]',
        }
      },
      {
        test: /\.(ttf|eot|woff)$/,
        loader: 'file-loader',
        options: {
          outputPath: (url, resourcePath, context) => {
            const relativePath = path.relative(context, resourcePath).substr(4).split('\\').join('/');
            return relativePath;
          },
          name: '[name].[ext]',
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: 'src/config/postcss.config.js' } },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ]
        // use: ['style-loader', 'css-loader'], // use it if you need css in header
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: PATHS.src + '/config/postcss.config.js' } },
          },
        ]
        // use: ['style-loader', 'css-loader'], // use it if you need css in header
      },
    ]
  },
  plugins: [
    // miniCss,
    main,
    test,
    // Copy HtmlWebpackPlugin and change index.html for another html page
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.html`,
      filename: './index.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.pages.test}/index.html`,
      filename: './test/index.html',
      inject: false,
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/img`, to: 'img' },
      { from: `${PATHS.src}/static`, to: '' },
      // { from: `${PATHS.src}/fonts`, to: 'fonts' },
    ]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': 'jquery',
    })
  ],
};

// {
//   entry: {
//     main: [
//       './src/sass/main.sass',
//     ],
//   },
//   output: {
//     path: PATHS.dist,  // path to output directory
//     // filename: `js/index.js`,  // output js file. Name will correspond with entry props names (not values)
//     filename: `js/[name].js`,  // output js file. Name will correspond with entry props names (not values)
//     publicPath: '/',  // path to index.html for browsersync in dev-mode
//   },
//   module: {
//     rules: [
//       // {
//       //   test: /\.js$/,
//       //   loader: 'babel-loader',
//       //   exclude: '/node_modules',
//       // },
//       {
//         test: /\.(ttf|eot|woff)$/,
//         loader: 'file-loader',
//         options: {
//           outputPath: (url, resourcePath, context) => {
//             const relativePath = path.relative(context, resourcePath).substr(4).split('\\').join('/');
//             return relativePath;
//           },
//           name: '[name].[ext]',
//         }
//       },
//       {
//         test: /\.(sass|scss)$/,
//         use: [
//           {
//             loader: 'style-loader',
//           },
//           MiniCssExtractPlugin.loader,
//           {
//             loader: 'css-loader',
//             options: { sourceMap: true },
//           },
//           {
//             loader: 'postcss-loader',
//             options: { sourceMap: true, config: { path: 'src/config/postcss.config.js' } },
//           },
//           {
//             loader: 'sass-loader',
//             options: { sourceMap: true },
//           },
//         ]
//         // use: ['style-loader', 'css-loader'], // use it if you need css in header
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           MiniCssExtractPlugin.loader,
//           {
//             loader: 'css-loader',
//             options: { sourceMap: true },
//           },
//           {
//             loader: 'postcss-loader',
//             options: { sourceMap: true, config: { path: PATHS.src + '/config/postcss.config.js' } },
//           },
//         ]
//         // use: ['style-loader', 'css-loader'], // use it if you need css in header
//       },
//     ]
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: 'css/test/[name].css',
//       chunkFilename: '[id].css',
//     }),
//   ],
// }
// ];