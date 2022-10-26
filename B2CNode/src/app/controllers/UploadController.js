
class UploadController {
  //[get] -> home
  index(req, res) { 
    res.render('home', {session: req.user});
  }

}

module.exports = new UploadController();
