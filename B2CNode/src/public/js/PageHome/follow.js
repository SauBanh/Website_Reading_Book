var btnFollow = document.querySelectorAll('.item_book_icon_follow');
var btnFollow_Length = btnFollow.length;
console.log(btnFollow[0])

{/* <i class="fa-solid fa-bookmark"></i> fa-regular fa-bookmark */}
for(var i = 0; i < btnFollow_Length; i++){        
    btnFollow[i].onclick = function(){
        if(this.classList.contains('fa-solid')){
            this.classList.replace('fa-solid', 'fa-regular');            
        }
        console.log(this)
    }
}