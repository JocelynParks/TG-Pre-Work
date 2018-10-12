const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);

// This lesson focused on Built-in Object methods. So, I added the parameter robot to line 10 to grab all the keys and put them in a list. Used the Object.entries() method to make an array of both keys and values. Using Object.assign() method to assign two new key/values to the object.
