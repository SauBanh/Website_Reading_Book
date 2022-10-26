const book = require('../models/Books');
const chapter = require('../models/Chapters');

class UploadController {
  //[get] -> home
  index(req, res) { 
    if (req.isAuthenticated()) {   
      res.render('uploadBooks');  
    } else
    res.redirect('/auth/login');
  }

  photo(req, res) {
    if (req.isAuthenticated()) {   
      res.render('/');  
    } else
    res.redirect('/auth/login');
  }

  photoup(req, res) {
    //xử lí add thông tin vào db ở đây
    const formData = req.body;
    formData.pic = '/b2c_data/' + req.body.bookname + req.user._id.toString() + "/" + req.user.username + req.file.originalname;
    formData.author = req.user.username;
    formData.email = req.user.email;
    const newBook = new book(formData);
    newBook.save();
    res.redirect('/upload/file');
  }

  file(req, res) {
    if (req.isAuthenticated()) {   
      res.render('uploadChaps');  
    } else
    res.redirect('/auth/login');
  }

  fileup(req, res) {
    //xử lí adđ thông tin vào db ở đây
    res.redirect('/');
  }

}

module.exports = new UploadController();
