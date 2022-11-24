const User = require('../models/User');
const Book = require('../models/Books');
const View = require('../models/Views');

class AdminController {
  //[get] -> home
  admin(req, res) { 
    if(req.isAuthenticated()) {
      if(req.user.admin == true) {
        //xử lí thông tin vào admin
        res.render('admin', {session: req.user, layout: false});
      }
      else
      {
        res.redirect('/');
      }
    }
    else
    {
      res.redirect('/auth/login');
    }
  }

}

module.exports = new AdminController();
