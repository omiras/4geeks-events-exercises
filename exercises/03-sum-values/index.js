// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	console.log('click');
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	//your code goes here
	document.querySelector('#resultNumber').value = +stringA + +stringB;
};
