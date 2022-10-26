// js dropdown
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
//js popup
var mypopup = document.getElementById("mypopup");
var btn = document.getElementById("myBtn");
var Close = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  mypopup.style.display = "block";
}

Close.onclick = function() {
  mypopup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == mypopup) {
    mypopup.style.display = "none";
  }
}
//js

function ngay() {
  document.getElementById("money").innerHTML = "5.000đ";
}
function tuan() {
  document.getElementById("money").innerHTML = "35.000đ";
}
function thang() {
  document.getElementById("money").innerHTML = "150.000đ";
}

//js date
const d = new Date();
var m=d.getMonth() + 1;
var m1=d.getMonth() + 2;
//var ny=d.getFullYear()+1;
document.getElementById("now").innerHTML = d.getDate()+ " / " + m +" / "+ d.getFullYear();
document.getElementById("lastyear").innerHTML = d.getDate()+ " / " + m1 +" / " + d.getFullYear();