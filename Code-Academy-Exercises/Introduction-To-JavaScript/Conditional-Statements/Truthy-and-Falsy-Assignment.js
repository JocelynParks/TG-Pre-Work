let tool = '';
tool = 'marker';


let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);
//Reassigning "tool" to a non-empty string, thus changing the value from "pen" to "marker"
