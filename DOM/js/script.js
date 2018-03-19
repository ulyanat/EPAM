var btn_prev = document.querySelector('.gallery .wrapper .button-prev');
var btn_next = document.querySelector('.gallery .wrapper .button-next');
var bigPicture = document.querySelector('.gallery .big-picture img');
var panel = document.querySelector('.gallery .wrapper .pictures');
var i = 0;
var src;

panel.onclick = function(event){
	var target = event.target;
	
	if (target.tagName != "IMG") return;
	
	deleteActive();
	
	target.classList.add('active');
	
	src = target.getAttribute('src');
	bigPicture.setAttribute('src', src);
	
	for (k = 0; k < panel.children.length; k++){
		if (panel.children[k] == target) 
		i = k; 
	}
}

function deleteActive() {  
	for (var j = 0; j < panel.children.length; j++) {
		panel.children[j].classList.remove('active');
	}  
}

btn_prev.onclick = function(){
    deleteActive();
    i--;
     
    if(i < 0){
        i = panel.children.length - 1;
    }
     
    panel.children[i].classList.add('active');
	
	src = panel.children[i].getAttribute('src');
	bigPicture.setAttribute('src', src);
}

btn_next.onclick = function(){
    deleteActive(); 
    i++;
     
    if(i >= panel.children.length){
        i = 0;
    }
    
    panel.children[i].classList.add('active');
	
	src = panel.children[i].getAttribute('src');
	bigPicture.setAttribute('src', src);
}
