// ---- DATA TYPES ---- //
    // ----- 1. A light switch that can be either on or off.
    
    // Booleans -  lightSwitchOn = true || false;
    
    // ----- 2. A user's email address.
    
    // String - let userEmail = 'anon@email.com';
    
    // ----- 3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
    
    // Object const spaceship = {
    //     hull: hard,
    //     laserBeams: hot,
    //     tractorBeams: pull,
    //     warpDrive: fast,
    // };
    
    // ----- 4. A list of student names from our class.
    
    // Array - const studentList = ['John Doe','Jane Doe','Craig Duke'];

    // ----- 5. A list of student names from our class, each with a location.
    
    // Array - const studentList2 = [['john doe', 'San Francisco'], ['Jane Doe', 'Miami'], ['Craig Duke', 'Los Angeles']];
    
    // ----- 6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
    // Array & Object - const studentList3 = [
    //     {name: 'John Doe',
    //     location: 'San Francisco',
    //     favShow: 'Scrubs'},
    //     {name: 'Jane Doe',
    //     location: 'Miami',
    //     favShow: '90210'},
    //     {name: 'Craig Duke',
    //     location: 'Los Angeles',
    //     favShow: 'The Office'},
    // ];

// ---- 2. Take it Easy ----//
    // 1. Make an array that holds all of the colors of the rainbow.

    const rainbow = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

    // 2. Write code that will access "blue" from the rainbow array.
    
    console.log(rainbow[4]);

    // 3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
    
    const josua = {
        favFood: 'Sushi',
        hobby: 'Basketball',
        homeTown: 'Long Beach',
        favDataType: 'Strings',
    }

    // 4. Write code that will access your hobby from the object that you just created.

    console.log(josua.hobby)

// ---- 3. Crazy Object! ---- //

const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
};

// Use crazyObject to log the following.

//   1. "omg my mouth is burning"

console.log(crazyObject.taco[1].salsa[crazyObject.taco[1].salsa.length - 1]);

//   2. "Pretty pretty prettayyyyy good"

console.log(crazyObject.larry.quotes[0])

//   3. "Swearing at Larry and Jeff"

console.log(crazyObject.larry.characters[2].favourtieHobby)

//   4. "Chicken Teriyaki Boyyyyyy"

console.log(crazyObject.larry.nicknames[1])

//   5. The object that contains the name `funkhauser`

console.log(crazyObject.larry.characters[1])

// ---- 4. Object-ception ---- //

// With the following object:

const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                            }
                        }
                    }
                }
            }
        }
    }
}

// Change the value of `limbo` to `null`.

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = 'null';

console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);

