var cards = ['queen','queen','king','king'];
var cardsInPlay = [];
function checkForMatch() {
//	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("The same!");
	}
	else {
		alert("sorry try again");
	}
}
function flipCard(cardID) {
//	var cardOne = cards[0];
//	var cardTwo = cards[1];
//	cardsInPlay.push(cardOne);
//	console.log("user flipped " + cardsInPlay[0]);
//	cardsInPlay.push(cardTwo);
//	console.log("user flipped " + cardsInPlay[1]);
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	checkForMatch();
}

flipCard(0);
flipCard(2);
