const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};

console.log(robot.energyLevel);

//Getters ('get' keyword) are methods that get and return the internal properties of an object. I added a get method which had an if statement which returned the energyLevel only if the energy level was 'typeOf == number'. I then logged the energyLevel to the console.
