document.addEventListener("DOMContentLoaded", init, false);

function init() {
	var _video = document.getElementById("video");
	var _audio = document.getElementById("audio");
	_video.addEventListener("playing", play_clicked, false);
	_video.addEventListener("pause", pause_clicked, false);
	_audio.addEventListener("playing", play_clicked, false);
	_audio.addEventListener("pause", pause_clicked, false);	
}

function play_clicked() {
    alert("play was clicked");
}

function pause_clicked() {
	alert("pause was clicked");
}
	