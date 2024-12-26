const path = require('path');

module.exports = {
  
  mode: 'development', // Set to 'development' for development builds

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // Replaces `contentBase`
    },
    client: {
      logging: 'info', // Optional: For better debugging logs in the browser console
    },
    compress: true, // Enables gzip compression
    port: 8080, // Default port, you can change it if needed
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};