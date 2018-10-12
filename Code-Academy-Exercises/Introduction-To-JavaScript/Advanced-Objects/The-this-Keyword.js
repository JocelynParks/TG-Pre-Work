const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo())

//This example teaches us how to use the 'this' keyword. This keyword helps when x isn't defined even though it's a property of y. Here, I used this to call energyLevel.  
