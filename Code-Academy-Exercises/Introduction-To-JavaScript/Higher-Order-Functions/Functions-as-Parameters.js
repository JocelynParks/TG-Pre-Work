const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
  let firstTry = func(val);
  let secondTry =func(val);
  if (firstTry === secondTry) {
  	return firstTry;
  } else {
  return 'This function returned inconsistent results';
}
};

checkConsistentOutput(addTwo, 4);

//Using a function within another function and then calling that function (the function stating that you need a func and value is considered "higher-order") In this case, I set that the function must produce a function and a value. Thus when calling it, I needed to input "addTwo" and a value (in this case, I chose 4).
