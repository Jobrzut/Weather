const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    
    entry: './src/index.js',

    
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
      clean: true, 
    },

    
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      port: 3000,
      open: true, 
      hot: true,  
      historyApiFallback: true, 
    },

    module: {
      rules: [
        
        {
          test: /\.css$/i,
          use: [
            'style-loader',  
            'css-loader',    
            'postcss-loader' 
          ],
        },
        
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },

    plugins: [
      
      new HtmlWebpackPlugin({
        template: './src/index.html', 
      }),
    ],

    
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
  };
};