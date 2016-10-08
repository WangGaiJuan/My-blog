import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import db from './db/db';
import apiRouter from './api/routerApi';
//用于解析客户端请求的body中的内容
import bodyParser from 'body-parser';
//实现上传文件
import fileUpload from 'express-fileupload';


const app = express();
app.use(bodyParser.json());
app.use(fileUpload());

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));

app.use(express.static('./public'));

app.use('/api', apiRouter);

app.get('/hello', function(req, res) {
  res.send('Hello, world!');
});

app.listen(3000, function() {
  db.connect();
  console.log('Listening on 3000');
});
