const express = require('express');
const router = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'b2c_data')
  },
  filename: function (req, file, cb) {
    cb(null, req.user.username + "_" +file.originalname)
  }
})
 
const upload = multer({ storage: storage })

const ctl = require('../app/controllers/UploadController');

router.get('/', ctl.index);

router.get('/photo', ctl.photo);

router.post('/photo',upload.single('bookImage'), ctl.photoup);

router.get('/file', ctl.file);

router.post('/file',upload.single('myFile'), ctl.fileup);

module.exports = router;
