const express = require('express');
const router = express.Router();
const fs = require('fs');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //can phan biet path cho book va path cho chap
    const dir = 'src/public/b2c_data/' + req.body.bookname + req.user._id.toString();
    fs.exists(dir, exist => {
      if(!exist) {
        return fs.mkdir(dir, err => cb(err, dir))
      }
      return cb(null, dir);
    })
  },
  filename: function (req, file, cb) {
    cb(null, req.user.username + file.originalname)
  }
})
 
const upload = multer({ storage: storage })

const ctl = require('../app/controllers/UploadController');
const { exists } = require('../app/models/User');

router.get('/', ctl.index);

router.get('/photo', ctl.photo);

router.post('/photo',upload.single('pic'), ctl.photoup);

router.get('/file', ctl.file);

router.post('/file',upload.array('myFile'), ctl.fileup);

module.exports = router;
