const Book = require('../models/Books');
const Chap = require('../models/Chapters');
const View = require('../models/Views');

class BooksController {
  //xong trả về đọc truyện
  async index(req, res) { 

    var thisbook = await Book.findOne({slug: req.params.slug});

    //check if user viewed this book
    if(req.isAuthenticated()){
      const isView = await View.findOne({bookid: thisbook._id.toString(), viewer: req.user._id.toString()});
      if(!isView){
        var viewer = new View();
        viewer.bookid = thisbook._id.toString();
        viewer.viewer = req.user._id.toString();
        viewer.save();
        await sleep(50);
      }
    }

    //count how many people has viewed this book
    const viewNumber = await View.find({bookid: thisbook._id.toString()}).count();    

    //check xem phai truyen vip ko
    if(thisbook.vip == true){
      //check xem nguoi dung da dang nhap chua
      if(!req.isAuthenticated()){
        res.redirect('/');
      } else {
        const userVipDate = new Date(req.user.vipexpire);
        const today = new Date(Date.now());
        //check vip cua nguoi dung da het han chua
        if(userVipDate < today) {
          res.render('order', {session: req.user})
        } else {
          var chaps = await Chap.find({bookid: thisbook._id});
          chaps = chaps.map(chap => chap.toObject());
          res.render('book', {session: req.user, thisbook: thisbook.toObject(), lstchap: chaps, viewNumber});
        }
      }
    } else {
      var chaps = await Chap.find({bookid: thisbook._id});
      chaps = chaps.map(chap => chap.toObject());
      res.render('book', {session: req.user, thisbook: thisbook.toObject(), lstchap: chaps, viewNumber});
    }

  }

  async chap(req, res) { 
    // làm link đàng hoàng cho chap --- xong
    var thisbook = await Book.findOne({slug: req.params.slug});
    if(thisbook.vip == true){
      //check xem nguoi dung da dang nhap chua
      if(!req.isAuthenticated()){
        res.redirect('/');
      } else {
        const userVipDate = new Date(req.user.vipexpire);
        const today = new Date(Date.now());
        //check vip cua nguoi dung da het han chua
        if(userVipDate < today) {
          res.render('order', {session: req.user})
        } else {
          var chaps = await Chap.findOne({bookid: thisbook._id,  chapslug: req.params.chap});
          res.render('chap', {session: req.user, chaps: chaps.toObject()});
        }
      }
    } else {
      var chaps = await Chap.findOne({bookid: thisbook._id,  chapslug: req.params.chap});
      res.render('chap', {session: req.user, chaps: chaps.toObject()});
    }

  }

  async apiBooks(req,res) {
    var lstBooks = await Book.find({active: true});
    lstBooks = lstBooks.map(book => book.toObject());
    res.json(lstBooks);
  }

}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

module.exports = new BooksController();
