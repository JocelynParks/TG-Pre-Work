const newNumbers = [1, 3, 5, 7];

const newSum =
newNumbers.reduce(function(accumulator , currentValue) {
}, 10)

console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator + currentValue;

console.log(newSum);


//The reduce method shortens the array by returning a single value. Add the accumulator and the current value (both are parameters) to get the return value.
