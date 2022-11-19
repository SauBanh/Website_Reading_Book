const Book = require('../models/Books');
const BuyHistory = require('../models/BuyHistory');

class UserController {
    
    info(req, res) { 
        if (req.isAuthenticated()) {  
            res.render('userInfo', {session: req.user});
        } else {
            res.redirect('/');
        }
    }

    async mybook(req, res) {
        if (req.isAuthenticated()) { 
            var lstBook = await Book.find({email: req.user.email});
            lstBook = lstBook.map(book => book.toObject());
            res.render('userLstBook', {session: req.user, lstBook});
        } else {
            res.redirect('/');
        }
    }

    async buyHistory(req, res) {
        if (req.isAuthenticated()) { 
            var lstBuy = await BuyHistory.find({email: req.user.email});
            lstBuy = lstBuy.map(his => his.toObject());
            res.render('buyHistory', {session: req.user, lstBuy});
        } else {
            res.redirect('/');
        }
    }
  
}
  
module.exports = new UserController();
  