const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: __dirname + "/client/src/index.js",
  module: {
    rules: [
      {
        test: [/\.jsx$|.js$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/client/dist",
  },
  devtool: "source-map",
  plugins: [new BundleAnalyzerPlugin()],
};
