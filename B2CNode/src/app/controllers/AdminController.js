
class AdminController {
  //[get] -> home
  admin(req, res) { 
    //check authen and admin role
    res.render('admin', {session: req.user});
  }

}

module.exports = new AdminController();
