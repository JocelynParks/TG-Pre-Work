const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();

// Factory functions returns an object and can be reused to make multiple object instances. So in this example, I created function with two parameters model and mobile. Then, added a function called beep to the object which logged 'Beep Boop'. Lastyly, used the function to create a robot in lines 11 and 12
