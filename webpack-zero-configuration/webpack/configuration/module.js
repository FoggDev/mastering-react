import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

export default {
  rules: [
    {
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      use: [
        MiniCSSExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]_[local]__[hash:base64]'
            },
            importLoaders: 1,
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader'
        }
      ]
    }
  ]
};
