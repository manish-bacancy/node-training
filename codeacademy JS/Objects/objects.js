// *****  Creating Object Literals  *****

    const fasterShip = {
        'Fuel Type': 'Turbo Fuel',
        color: 'silver'
    };

// *****  Accessing Properties  *****

    let spaceship = {
        homePlanet: 'Earth',
        color: 'silver',
        'Fuel Type': 'Turbo Fuel',
        numCrew: 5,
        flightPath: ['Venus', 'Mars', 'Saturn']
    };

    const crewCount = spaceship.numCrew;
    console.log(crewCount);

    const planetArray = spaceship.flightPath;
    console.log(planetArray);

// *****  Bracket Notation  *****

    let spaceship = {
        'Fuel Type' : 'Turbo Fuel',
        'Active Mission' : true,
        homePlanet : 'Earth', 
        numCrew: 5
     };
   
    let propName =  'Active Mission';
    let isActive = spaceship[propName];
    console.log(isActive);

// *****  Property Assignment  *****

    let spaceship = {
        'Fuel Type' : 'Turbo Fuel',
        homePlanet : 'Earth',
        color: 'silver',
        'Secret Mission' : 'Discover life outside of Earth.'
    };

    spaceship.color = 'glorious gold';
    spaceship.numEngines = 5;
    delete spaceship['Secret Mission'];

// *****  Methods  *****

    let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

    let alienShip = {
        retreat () {
            console.log(retreatMessage);
        },
        takeOff () {
            console.log('Spim... Borp... Glix... Blastoff!');
        }
    }

    alienShip.retreat();
    alienShip.takeOff();

// *****  Nested Objects  *****

    let spaceship = {
        passengers: null,
        telescope: {
            yearBuilt: 2018,
            model: "91031-XLT",
            focalLength: 2032 
        },
        crew: {
            captain: { 
                name: 'Sandra', 
                degree: 'Computer Engineering', 
                encourageTeam() { console.log('We got this!') },
                'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] 
            }
        },
        engine: {
            model: "Nimbus2000"
        },
        nanoelectronics: {
            computer: {
                terabytes: 100,
                monitors: "HD"
            },
            'back-up': {
                battery: "Lithium",
                terabytes: 50
            }
        }
    }; 
  
    const capFave = spaceship.crew.captain['favorite foods'][0];
    console.log(capFave);
    
    let p1 = {
        fname: 'Manish',
        lname: 'Rathod'
    }

    let passengersDetails = [p1];
    spaceship.passengers = passengersDetails;
    console.log(spaceship.passengers);

    let firstPassenger = spaceship.passengers[0];
    console.log(firstPassenger);

// *****  Pass By Reference  *****

    let spaceship = {
        'Fuel Type' : 'Turbo Fuel',
        homePlanet : 'Earth'
    };

    let greenEnergy = (obj) => {
        obj['Fuel Type'] = 'avocado oil';
    }

    let remotelyDisable = (obj) => {
        obj.disabled = true;
    }

    greenEnergy(spaceship);
    remotelyDisable(spaceship);

    console.log(spaceship); 

// *****  Looping Through Objects  *****

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

    for (let crewMember in spaceship.crew){
        console.log(crewMember + ": " + spaceship.crew[crewMember].name);
        console.log(spaceship.crew[crewMember].name + ": " + spaceship.crew[crewMember].degree);
    }