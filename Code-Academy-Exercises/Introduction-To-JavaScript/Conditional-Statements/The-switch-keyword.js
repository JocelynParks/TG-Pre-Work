let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
default:console.log('No medal awarded.');
break;
}


//"Switch" offers an easier way to use else if (if you are needing to write a lot of them). In this case, there was 1st, 2nd, and 3rd place. Created three cases and logged the result or medal they each would recieve. Be sure to end with "break;". At the end, add a default statement to account for the rest of the runners.
