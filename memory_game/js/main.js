var cards = ['queen','queen','king','king'];
var cardsInPlay = [];
var cardOne = cards[2];
cardsInPlay.push(cardOne);
console.log("user flipped " + cardsInPlay);
var cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log("user flipped " + cardsInPlay[1]);
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("The same!");
	}
	else {
		alert("sorry try again");
	}
}