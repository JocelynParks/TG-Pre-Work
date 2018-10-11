let spaceship = {
    crew: {
    captain: {
        name: 'Lily',
        degree: 'Computer Engineering',
        cheerTeam() { console.log('You got this!') }
        },
    'chief officer': {
        name: 'Dan',
        degree: 'Aerospace Engineering',
        agree() { console.log('I agree, captain!') }
        },
    medic: {
        name: 'Clementine',
        degree: 'Physics',
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna',
        degree: 'Conservation Science',
        powerFuel() { console.log('The tank is full!') }
        }
    }
};

// Write your code below

for (let crewMem in spaceship.crew) {
  console.log(`${crewMem}: ${spaceship.crew[crewMem].name}`)
};

for (let crewMem in spaceship.crew) {
  console.log(`${spaceship.crew[crewMem].name}: ${spaceship.crew[crewMem].degree}`)
};

//In this exercise, I looped through the objects and took the information I wanted (the names and positions of the crew members). Lastly, I printed each to the console.
