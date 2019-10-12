import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Dev Education',
    template: './src/index.html',
    filename: './index.html'
  }),
  new MiniCSSExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
    ignoreOrder: false
  })
];

export default plugins;
