/* Create a sample object, then write a JavaScript function that
deletes the property of an object passed to it.*/

// Create an object

// Write the function the deletes the property of a specified object

//Function takes 2 parameters

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

function removePty(object, property) {
    delete object[property]; 
    return object;

}
removePty(spaceship, 'Fuel Type');
console.log(spaceship);