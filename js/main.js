var heading = document.getElementById("click");
var count = 0;

heading.addEventListener ("click" , showClicks, false);

function showClicks(){
	count++;
	var newPara = document.createElement("p");
		newPara.innerHTML = "This is click number " + count;
		document.body.appendChild(newPara);
};