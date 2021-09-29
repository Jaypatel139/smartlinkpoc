module.exports = {
  mode: "development",
  entry: "./src/components/index.js",
  output: {
    filename: "index.js",
    libraryTarget: "commonjs2", //This one the most important line, others things will remain same
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$|jsx/,
        exclude: /node_modules/,
      },
      {
        test: /\.[sac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
      },
    ],
  },
};
