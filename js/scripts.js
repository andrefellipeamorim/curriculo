/*JS puro*/

function swingItemC() {
	document.getElementById('chapeu').className += " animated jello infinite";
}

function stopSwingC() {
	document.getElementById('chapeu').className = "img-responsive ficons";	
}

function swingItemM() {
	document.getElementById('mala').className += " animated jello infinite";
}

function stopSwingM() {
	document.getElementById('mala').className = "img-responsive ficons";	
}

function swingItemD() {
	document.getElementById('diploma').className += " animated jello infinite";
}

function stopSwingD() {
	document.getElementById('diploma').className = "img-responsive ficons";	
}

/*Jquery*/

$(document).ready(function(){
	$('.formacao').mouseover(function(){
		
		lert('funciona')
	});
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');   
  } else {
    $('nav').removeClass('shrink');
    
  }
});
