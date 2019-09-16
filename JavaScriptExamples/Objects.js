//Creating objects with data inside it, strings, ints, and booleans
var bird = {
genus: "corvus",
species: "corvax",
commonName: "raven",
callType: "squawky",
quote: "Nevermore",
maxOffSpring: 5,
noisy: true,
deadly: false
};

var bear = {
    genus: "ursus",
    species: "arctos",
    commonName: "brown bear",
    callType: "roar",
    quote: " ",
    maxOffSpring: 3,
    noisy: true,
    deadly: true
    };

var bookOfKnowledge = {
"lunch time": "12:30 PM",
"the ultimate answer": 42,
bestSong: "Babyshark",
earth: "Mostly harmless"
};


var animal = {
    genus: "corvus",
    species: "corvax",
    commonName: "raven",
    callType: "squawky",
    quote: "Nevermore",
    maxOffSpring: 5,
    noisy: true,
    deadly: false
    };

    //uses json to convert string json and attaches string to new object
animal2 = JSON.parse(JSON.stringify(animal));
    