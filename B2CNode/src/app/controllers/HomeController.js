const Book = require('../models/Books')

class HomeController {

  //[get] -> home
  async index(req, res) { 

    var books = await Book.find({active: true});
    const numbooks = Object.keys(books).length;
    const elmEachPage = 20;
    const lastpage = ~~((numbooks-1)/elmEachPage) + 1;

    var pagenow;
    if(req.query.page === undefined){
      pagenow = 1;
    } else {
      pagenow = req.query.page;
    }

    if(req.query.page > lastpage) { pagenow = lastpage };

    var lstbook = new Array();
    if(pagenow == lastpage){

      for (let index = ((numbooks - 1) - (pagenow - 1)*elmEachPage); index >= 0; index--) {
          lstbook.push(books[index]);
        }

    } else {

      for (let index = ((numbooks - 1) - (pagenow - 1) * elmEachPage); index > ((numbooks - 1) - pagenow*elmEachPage); index--) {
          lstbook.push(books[index]);
        }
    }

    lstbook = lstbook.map(book => book.toObject());
    res.render('home', {session: req.user, lstbook, lastpage, pagenow, books}); 
  }

  sessionapi(req, res) {
    res.json(req.user);
  }

}

module.exports = new HomeController();
