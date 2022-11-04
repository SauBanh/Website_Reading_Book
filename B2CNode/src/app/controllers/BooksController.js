const Book = require('../models/Books');
const Chap = require('../models/Chapters');

class BooksController {
  //xong trả về đọc truyện
  async index(req, res) { 

    var thisbook = await Book.findOne({slug: req.params.slug});
    var chaps = await Chap.find({bookid: thisbook._id});
    chaps = chaps.map(chap => chap.toObject());
    res.render('book', {session: req.user, thisbook: thisbook.toObject(), lstchap: chaps});

  }

  async chap(req, res) { 
    // làm link đàng hoàng cho chap --- chưa xong nên đừng chạy phần này!!!
    var thisbook = await Book.findOne({slug: req.params.slug});
    var chaps = await Chap.findOne({bookid: thisbook._id,  chapslug: req.params.chap});
    res.render('chap', {session: req.user, chaps: chaps.toObject()});

  }

}

module.exports = new BooksController();
