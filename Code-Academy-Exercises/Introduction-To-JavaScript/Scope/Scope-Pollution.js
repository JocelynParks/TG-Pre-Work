const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars());

//Scope pollution refers to the idea of having too many variables accessible within the program. When there are too many global namespaces, we refer to this as "scope pollution". With too many variables, it is hard to keep track of each which cause collisions in code.
