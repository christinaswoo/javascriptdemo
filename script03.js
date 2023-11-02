// Create a function that takes in two arguments 
// and returns a concatenated string either as a 
// console.log or alert.


var firstArgu = ["Puppies", "Kittens", "Hot dogs", "Rainbows", "Bunnies"];
var nextArgu = ["delicious", "beautiful", "evil", "powerful", "terrifying"];

var randomIndex1 = firstArgu[Math.floor(Math.random() * 4)];
var randomIndex2 = nextArgu[Math.floor(Math.random() * 4)];

alert(randomIndex1 + " are " + randomIndex2 + "!");