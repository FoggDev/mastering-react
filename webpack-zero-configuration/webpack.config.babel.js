require('@babel/register');

// Configuration
import {
  devtool,
  entry,
  mode,
  module,
  optimization,
  output,
  plugins,
  resolve
} from './webpack/configuration';

const webpackConfig = {
  devtool,
  entry,
  mode,
  module,
  optimization,
  output,
  plugins,
  resolve
};

console.log('WEBPACK', webpackConfig);
export default webpackConfig;
