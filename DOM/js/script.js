var btn_prev = document.querySelector('.gallery .wrapper .button-prev');
var btn_next = document.querySelector('.gallery .wrapper .button-next');

var images = document.querySelectorAll('.gallery .wrapper .photos img');
var i = 0;
var src;

var picture = document.querySelector('.gallery .big-picture img');

btn_prev.onclick = function(){
    images[i].classList.remove('active');
    i--;
     
    if(i < 0){
        i = images.length - 1;
    }
     
    images[i].classList.add('active');
	
	src = images[i].getAttribute('src');
	picture.setAttribute('src', src);
}

btn_next.onclick = function(){
    images[i].classList.remove('active');
    i++;
     
    if(i >= images.length){
        i = 0;
    }
     
    images[i].classList.add('active');
	
	src = images[i].getAttribute('src');
	picture.setAttribute('src', src);
}
