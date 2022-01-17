if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
					"|",
					"e |",
					"e |",
					"e m |",
					"e m |",
					"e m p |",
					"e m p |",
					"e m p f |",
					"e m p f |",
					"e m p f a |",
					"e m p f a |",
					"e m p f a k |",
					"e m p f a k |",	
					"e m p f a k e |",
					"e m p f a k e |",
					"e m p f a k e d ",
					"e m p f a k e d ",				];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}