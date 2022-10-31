const book = require('../models/Books');
const chapter = require('../models/Chapters');

class UploadController {
  //[get] -> home
  index(req, res) { 
    if (req.isAuthenticated()) {   
      res.render('uploadBooks', {session: req.user});  
    } else
    res.redirect('/auth/login');
  }

  photo(req, res) {
    if (req.isAuthenticated()) {   
      res.render('/', {session: req.user});  
    } else
    res.redirect('/auth/login');
  }

  async photoup(req, res) {
    //xử lí add thông tin vào db ở đây
    const formData = req.body;
    //xoá khoảng trắng và dấu trong bookname và file - dang làm
    formData.pic = '/b2c_data/' + removeVietnameseTones(req.body.bookname) + '_' + req.user._id.toString() + "/" + req.user._id.toString() + removeVietnameseTones(req.file.originalname);
    formData.author = req.user.username;
    formData.email = req.user.email;
    formData.slug = removeVietnameseTones(req.body.bookname) + '_' + req.user._id.toString();
    const newBook = new book(formData);
    const cater = ["saubanhancut", "khong an cut dau", "ănc  o m", "more"];
    newBook.categories = cater;
    newBook.save();
    await sleep(500);
    res.redirect('/upload/' + newBook.slug + '/addchap');
  }

  chap(req, res) {
    if (req.isAuthenticated()) {
      res.render('uploadChaps', {name: req.params.bookslug, session: req.user});  
    } else
    res.redirect('/auth/login');
  }

  chapup(req, res) {
    //xử lí add thông tin vào db ở đây
    book.findOne({ bookslug: req.params.bookslug }, function(err, book) {
      if(!book) { res.redirect('/?ko-co-sach'); }
      const formData = req.body;
      formData.bookid = book._id.toString();
      const newChap = new chapter(formData);
      //link chua xong
      req.files.forEach(element  =>{
        var data = { 'link': removeVietnameseTones(element.originalname) }
        newChap.chaplinks.push(data);
      });
      newChap.save();
    })
    res.redirect('/');
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
  str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
  str = str.replace(/đ/g,"d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g,"_");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,"_");
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,"_");
  str = str.replace(/ /g,"_");
  return str;
}

module.exports = new UploadController();
