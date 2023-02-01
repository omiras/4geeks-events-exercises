var currentUserIndex = 0;
var players = ["Mario", "Juan", "Josh"];
currentUser = players[currentUserIndex];

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

window.turnChanger = function turnChanger() {
	currentUserIndex = (++currentUserIndex) % players.length;
	currentUser = players[currentUserIndex];

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}
