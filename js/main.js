//tried several things thinking the addEventListener wasnt working, but it was the console log that wanst.
//So, I tried the function using alert
//Without the alert, the console.log doesnt work, but it works if the alert is added

var myForm = document.forms[0];

function getFormData (){
	console.log(
		myForm.elements[0].value,
		myForm.elements[1].value,
		myForm.elements[2].value,
		myForm.elements[3].value
	);
	alert("Thank you, your form has been submitted!");
}

myForm.addEventListener ("submit" , getFormData, false);

