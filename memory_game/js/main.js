var cards = [
	{
		rank: "Queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "Queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "King",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "King",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
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
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	checkForMatch();
}

flipCard(0);
flipCard(2);
