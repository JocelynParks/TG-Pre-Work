const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift('orange');

groceryList.unshift('popcorn');

console.log(groceryList.slice( 1, 4));

groceryList.indexOf('pasta');
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

//Much more array methods that do not "mutate" an array like pop and push. To name a few: slice, splice, shift, unshift, etc.,
