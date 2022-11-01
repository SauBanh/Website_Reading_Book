const Book = require('../models/Books')

class HomeController {

  //[get] -> home
  async index(req, res) { 

    var books = await Book.find({});
    const numbooks = Object.keys(books).length;
    const elmEachPage = 3;
    const lastpage = ~~((numbooks-1)/elmEachPage) + 1;

    var pagenow;
    if(req.query.page === undefined){
      pagenow = 1;
    } else {
      pagenow = req.query.page;
    }

    var lstbook = new Array();
    if(pagenow == lastpage){

      for (let index = (pagenow - 1)*elmEachPage; index < numbooks; index++) {
          lstbook.push(books[index]);
        }

    } else {

      for (let index = (pagenow - 1)*elmEachPage; index < pagenow*elmEachPage; index++) {
          lstbook.push(books[index]);
        }
    }

    lstbook = lstbook.map(book => book.toObject());
    res.render('home', {session: req.user, lstbook, lastpage}); 
  }

}

module.exports = new HomeController();
