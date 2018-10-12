const robot = {
  _energyLevel: 'high',
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

console.log(robot.recharge())
//In cases where we don't want to other code accessing and updating an object's properties. Therefore, we restrict certain properties from be changed or having a change in value. On way:_ before the name of a property to mean that the property should not be altered.
