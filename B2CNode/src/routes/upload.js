const express = require('express');
const router = express.Router();

const ctl = require('../app/controllers/UploadController');

router.get('/', ctl.index);

module.exports = router;
