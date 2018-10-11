const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];



console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => {return word.length > 5});


console.log(interestingWords.every((word) => {return word.length > 5}));

//I corrected errors in exsiting code. Previously "true" was used where it really should have been "words some(word => return word.length < 6;" This is stating that the words in the array must be less than 6 characters.
