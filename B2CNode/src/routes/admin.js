const express = require('express');
const router = express.Router();

const ctl = require('../app/controllers/AdminController');

router.get('/', ctl.admin);

module.exports = router;
