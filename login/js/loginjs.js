const toggle = document.getElementsByClassName("toggle"),

      input = document.getElementsByClassName("imput-conect");
  toggle[0].addEventListener("click", () =>{
  if(input[0].type === "password") {
    input[0].type = "text";
    toggle[0].classList.replace("fa-eye-slash", "fa-eye");
  }else {
    input[0].type = "password";
    toggle[0].classList.replace("fa-eye", "fa-eye-slash");
  }
  })
  toggle[1].addEventListener("click", () =>{
    if(input[1].type === "password") {
      input[1].type = "text";
      toggle[1].classList.replace("fa-eye-slash", "fa-eye");
    }else {
      input[1].type = "password";
      toggle[1].classList.replace("fa-eye", "fa-eye-slash");
    }
    })

var user= document.forms['form']['user'];
var password= document.forms['form']['password'];

var error_user= document.getElementById('error_user');
var error_password= document.getElementById('error_password');

// user.addEventListener('textInput',user_veryfy);
// password.addEventListener('textInput',pass_veryfy);

function validator(){
    if(user.value.length <9){
      error_user.style.display="block";
      user.focus();
      return false;      
    }
  
    if(password.value.length <6){
      error_password.style.display="block";
      user.focus();
      return false; 
    }
}
  
//   }
//   function user_veryfy(){
//     if(user.value.length >=8){
//       error_user.style.display="none";   
//       return true;
//     }
//   }
//   function pass_veryfy(){
//     if(password.value.length >=5){
//       error_password.style.display="none";   
//       return true;
//     }