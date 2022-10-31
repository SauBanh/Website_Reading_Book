const Book = require('../models/Books')

class HomeController {

  //[get] -> home
  async index(req, res) { 
    var books = await Book.find({});
    books = books.map(book => book.toObject());
    res.render('home', {session: req.user, books});
  }

}

module.exports = new HomeController();
