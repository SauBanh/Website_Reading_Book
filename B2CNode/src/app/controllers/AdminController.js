
class AdminController {
  //[get] -> home
  admin(req, res) { 
    res.render('admin', {session: req.user});
  }

}

module.exports = new AdminController();
