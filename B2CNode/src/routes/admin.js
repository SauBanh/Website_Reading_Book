const express = require('express');
const router = express.Router();

const ctl = require('../app/controllers/AdminController');

router.get('/addcatergories', ctl.cater);

module.exports = router;
