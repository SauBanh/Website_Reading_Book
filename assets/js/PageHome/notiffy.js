// dùng để xóa dấu chấm khi có thông báo đến
    document.getElementsByClassName('center js_show_hide')[0].onclick = function(){
    document.getElementsByClassName('js_seen')[0].classList.remove('seen');
    document.getElementsByClassName('box_info_user')[0].classList.remove('active_box_info_user');
    document.getElementsByClassName('js_fun_show_hide')[0].classList.toggle('js_show_notify');
    document.getElementsByClassName('notification_box')[0].onclick = function(e){
        e.stopPropagation();
    }
    // xóa cái active thông báo đi 
    var li = document.getElementsByClassName('item_notify_header');
    var length_li = li.length;
    for(var i = 0; i < length_li; i++){        
        li[i].onclick = function(){
            if(this.classList.contains('item_notify_header_viewed')){
                this.classList.remove('item_notify_header_viewed');            
            }
        }
    }
    document.getElementsByClassName('list_notify_header')[0].scrollTop = - document.getElementsByClassName('list_notify_header')[0].scrollHeight;
    document.getElementsByClassName('notification_header')[0].classList.toggle('notification_header_active_js');
    document.getElementsByClassName('see_all_notify')[0].onclick = function(){
        var li = document.getElementsByClassName('item_notify_header');
        var length_li = li.length;
        for(var i = 0; i < length_li; i++){                    
            if(li[i].classList.contains('item_notify_header_viewed')){
                li[i].classList.remove('item_notify_header_viewed');            
            }
        }
    }
}

function test(){
    document.getElementsByClassName('box_info_user')[0].classList.remove('active_box_info_user');
    console.log('hello')
}

document.getElementsByClassName('user_header')[0].onclick = function(){
    document.getElementsByClassName('box_info_user')[0].classList.toggle('active_box_info_user');
    document.getElementsByClassName('notification_header')[0].classList.remove('notification_header_active_js');
    document.getElementsByClassName('js_fun_show_hide')[0].classList.remove('js_show_notify');
}