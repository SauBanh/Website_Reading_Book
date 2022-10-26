
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
    // const file = req.file
    // res.send(file);
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
