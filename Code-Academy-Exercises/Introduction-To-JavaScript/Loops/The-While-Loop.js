const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}



//Convert a "for" loop into a "while" loop. Reminder that != means "not". Three cards displayed when code was ran.
