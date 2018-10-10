const plantNeedsWater =

function(day){
  if (day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};
plantNeedsWater('Tuesday');
console.log(plantNeedsWater ('Tuesday'));

//First I declared a function (day) and then determined, based on the day, does the plant need watering or not. Function expressions must be defined first before be called. In this case, the output was false.
  
