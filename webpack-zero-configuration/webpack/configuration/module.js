import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

const isProduction = process.env.NODE_ENV === 'production';

const sassUse = [];

if (isProduction) {
  sassUse.push(MiniCSSExtractPlugin.loader);
} else {
  sassUse.push({
    loader: 'style-loader'
  });
}

sassUse.push(
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
);

console.log('sassUse', sassUse);
export default {
  rules: [
    {
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      use: sassUse
    }
  ]
};
