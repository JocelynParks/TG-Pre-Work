// Write your code below
let bobsFollowers = ['Sam','Sally','Smith', 'Sarah'];

let tinasFollowers = ['Lilly', 'Sally', 'Smith']
let mutualFollowers= [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};




//Nested Loops are when a loop is running inside of another loop. For inner loop, use "for. For outer loop array, use""myArray".
