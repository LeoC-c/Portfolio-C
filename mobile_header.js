var btn = document.getElementById('mobile_btn_open');
var btn_header_close = document.getElementById("mobile_btn_close")
var header = document.getElementById("hero_header_mobile_container");
var body = document.getElementById("body");

function btn_header(){
    if(header.style.opacity != "1"){
        header.style.opacity = "1";
        header.style.animation = "mobile-in forwards 1s";
        btn.style.opacity = "0";
        btn_header_close.style.opacity = "1";
        body.style.overflow = "hidden";
    } else { 
        header.style.opacity = "0";
        header.style.animation = "mobile-out forwards 1s";
        body.style.overflow = "auto";
        btn.style.opacity = "1";
        btn_header_close.style.opacity = "0";
    }
}