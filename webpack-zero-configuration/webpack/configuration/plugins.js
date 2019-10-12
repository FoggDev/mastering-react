import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import CompressionPlugin from 'compression-webpack-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Dev Education',
    template: './src/index.html',
    filename: './index.html'
  })
];

if (!isProduction) {
  plugins.push(
    // new BundleAnalyzerPlugin(),
    new WebpackNotifierPlugin({
      title: 'Dev Education'
    }),
    new webpack.HotModuleReplacementPlugin()
  );
} else {
  new MiniCSSExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
    ignoreOrder: false
  }),
  new CompressionPlugin({
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$/,
    compressionOptions: { level: 11 },
    threshold: 10240,
    minRatio: 0.8,
    deleteOriginalAssets: false
  });
}

export default plugins;
