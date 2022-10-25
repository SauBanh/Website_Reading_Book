const newRouter = require('./home');
const pay = require('./vnpay');
var authRouter = require('./auth');

function route(app) {
  app.use('/', newRouter);

  app.use('/auth', authRouter);

  app.use('/order', pay);
}

module.exports = route;
