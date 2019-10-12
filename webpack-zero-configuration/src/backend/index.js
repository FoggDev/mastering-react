import express from 'express';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';

import webpackConfig from '@webpackConfig';

import clientRender from './render/clientRender';

import { isMobile, isFirefox } from '@utils/device';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

const compiler = webpack(webpackConfig);

if (!isProduction) {
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.get('*.js', (req, res, next) => {
    if (isFirefox(req.headers['user-agent'])) {
      return next();
    }

    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');

    return next();
  });
}

app.use(express.static(path.join(__dirname, '../../public')));

app.use((req, res, next) => {
  req.isMobile = isMobile(req.headers['user-agent']);
  next();
});

app.use(clientRender());

app.disable('x-powered-by');

app.listen(3000);
