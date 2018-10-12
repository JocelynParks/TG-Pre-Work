const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();
//"Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object." Orginally, .checkEnergy method was not producing the correct output, so I needed to edit it thus allowing .checkEnergy() to have access to other internal properties. 
