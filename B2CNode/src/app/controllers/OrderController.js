class OrderController {
    //[get] -> home
  index(req, res) {  
    if (req.isAuthenticated()) {   
      res.render('order', {session: req.user});  
    } else
    res.redirect('/');
  }

}
  
module.exports = new OrderController();
  