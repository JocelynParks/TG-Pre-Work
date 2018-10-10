const satellite = 'The Moon'
const galaxy = 'The Milky Way'
const stars= 'North Star'
const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky())
//Scope is the context in which the variable are declared. Global scope is found outside of blocks (outside of brackets). Since they are not bound, they may be accessed by any code.
