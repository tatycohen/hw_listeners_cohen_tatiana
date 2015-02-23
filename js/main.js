var doggie = document.getElementById("dogImage");
//Event Listener listens for a mouse over the dog 
doggie.addEventListener("mouseover" , howl , false);
//Event Listener listens for a mouse out the dog
doggie.addEventListener("mouseout" , stopHowling , false);

//When mouse over, this function swaps the image to show the dog howling
function howl (){
	console.log("I am howling");
	doggie.src = "img/dog2.png";
}

//When mouse out, this function swaps the image back to the original, not howling dog
function stopHowling (){
	console.log("I am not howling");
	doggie.src = "img/dog1.png";
}

