const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

// Write your code below
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes
is2p2();
console.log(is2p2.name);
//Reassigning the function without interferring with the source of the code. In this exercise, I renamed a variable so it was more readable and then logged it ending in ".name"
