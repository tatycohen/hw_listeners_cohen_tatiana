/*function showClicks (){
	var newPara = document.createElement("p");
	newPara.innerHTML = "New Paragraph";

	document.body.appendChild(newPara);
}

var theHeading = document.getElementsByTagName("h1");
theHeading.addEventListener("click" , showClicks, true);*/

/*var heading = document.getElementsByTagName("h1");

heading.addEventListener ("click" , function showClicks(){
	var newPara = document.createElement("p");
	newPara.innerHTML = "New Paragraph";
	document.body.appendChild(newPara);
});*/

/*var heading = document.getElementsByTagName("h1");

heading.addEventListener("click" , function(){
	var newPara = document.createElement("p");
	newPara.innerHTML = "New Paragraph";
	document.body.appendChild(newPara);
});*/


var headings = document.getElementsByTagName("h1");

headings.onclick = function () {
	console.log("you clicked me!");
}