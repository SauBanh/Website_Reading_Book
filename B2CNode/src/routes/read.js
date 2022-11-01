const express = require('express');
const router = express.Router();

const ctl = require('../app/controllers/BooksController');

router.get('/:slug', ctl.index);

module.exports = router;
