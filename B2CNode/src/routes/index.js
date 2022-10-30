const newRouter = require('./home');
const pay = require('./vnpay');
const authRouter = require('./auth');
const upload = require('./upload');
const adminload = require('./admin');

function route(app) {
  app.use('/', newRouter);

  app.use('/auth', authRouter);

  app.use('/order', pay);

  app.use('/upload', upload);
  
  app.use('/admin', adminload);

}

module.exports = route;
