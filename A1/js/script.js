var index = 0;

var changeImage = function(){
	index++;
	document.getElementById("num").innerHTML= index + "%";
	if(index==100) {
		clearInterval(clear)
	}
}

let clear = setInterval(changeImage, 30);
