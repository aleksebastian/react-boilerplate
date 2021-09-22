export default {
  entry: __dirname + './client/src/index.js',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'checkout_bundle.js',
    path: __dirname + '/public'
  },
  devtool: 'source-map',
};