let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};


// Write your code below
spaceship['color'] = 'glorious gold';
spaceship.numEngines = 5;

delete
spaceship['Secret Mission'];

//Object may be changed by using the assignment operator (=).It's important to know that although we can't reassign an object declared with const, we can still mutate it. You may also need to delete a property in which you use 'delete'
