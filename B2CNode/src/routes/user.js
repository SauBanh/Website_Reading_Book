const express = require('express');
const router = express.Router();

const ctl = require('../app/controllers/UserController');

router.get('/', ctl.info);

router.get('/info', ctl.info);

router.get('/book', ctl.mybook);

router.get('/history', ctl.buyHistory);

module.exports = router;
