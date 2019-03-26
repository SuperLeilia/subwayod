var Koa = require('koa');
var path = require('path');
var server = require('koa-static');

var app = new Koa();

// 静态资源目录对于相对入口文件index.js的路径
var staticPath = './dist/subway-od-web';

app.use(server(
  path.join( __dirname,  staticPath)
));

app.listen(3000, function () {
  console.log('[subway-od-server] static-use-middleware is starting at port 3000')
});
