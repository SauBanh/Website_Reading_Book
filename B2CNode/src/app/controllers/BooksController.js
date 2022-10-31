const Book = require('../models/Books');
const Chap = require('../models/Chapters');

class BooksController {
  //xong trả về đọc truyện
  async index(req, res) { 
    var thisbook = await Book.findOne({slug: req.params.slug});
    res.render('book', {session: req.user, thisbook: thisbook.toObject()});
  }

  async chap(req, res) { 
    // làm link đàng hoàng cho chap --- chưa xong nên đừng chạy phần này!!!
    var thisbook = await Book.findOne({slug: req.params.slug});

    res.render('book', {session: req.user, thisbook: thisbook.toObject()});
  }

}

module.exports = new BooksController();
