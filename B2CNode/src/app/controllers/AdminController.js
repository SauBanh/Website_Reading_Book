
class AdminController {
  //[get] -> home
  admin(req, res) { 
    res.render('admin', {session: req.user, layout: false});
  }

}

module.exports = new AdminController();
