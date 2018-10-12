const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;
console.log(functionality);

robot.functionality.beep()

// In the above example, I created a const variable named functionality that extracts the functionality from the robot object. You can then use that functionality as a shortcut to pull a particular function from within functionality
