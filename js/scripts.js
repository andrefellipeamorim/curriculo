function swingItemC() {
	document.getElementById('chapeu').className += "img-responsive ficons animated swing infinite";
}

function stopSwingC() {
	document.getElementById('chapeu').className = "img-responsive ficons";	
}

function swingItemM() {
	document.getElementById('mala').className += "img-responsive ficons animated swing infinite";
}

function stopSwingM() {
	document.getElementById('mala').className = "img-responsive ficons";	
}

function swingItemD() {
	document.getElementById('diploma').className += "img-responsive ficons animated swing infinite";
}

function stopSwingD() {
	document.getElementById('diploma').className = "img-responsive ficons";	
}

$('.formacao').scroll(function(){
	document.getElementByClass('formacao').className += "row formacao opacidade";
});