
class AdminController {
  //[get] -> home
  cater(req, res) { 
    res.render('home', {session: req.user});
  }

}

module.exports = new AdminController();
