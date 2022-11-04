const express = require('express');
const router = express.Router();

const ctl = require('../app/controllers/BooksController');

router.get('/:slug', ctl.index);

router.get('/:slug/:chap', ctl.chap);

module.exports = router;
