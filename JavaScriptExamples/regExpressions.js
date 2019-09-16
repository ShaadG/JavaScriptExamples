var string1 = "This is the longest string ever";
var string2 = "This is the shortest string ever";
var string3 = "Is this the thing called Mount Everest?";
var string4 = "This is the Sherman on the Mount";


var regex = /this/; //allign comment
/* execute test method to each string */
//looking for the word 'this' IT IS CASE SENSITive

console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));
//sees if pattern can be found in string

//makes this NOT case senstive
regex = /this/i;

//checks if this appears at beginning of string
regex = /^this/i;

//checks if this appears at end of string
regex = /this$/i;

regex = /this/i;

