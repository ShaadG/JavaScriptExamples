function doubleIt(number){
    return(number *= 2)
}

var myNumbers = [1,2,3,4,5];

//using call back to MAP out the array from 
//my numbers and creating a new array to my double
var myDoubles = myNumbers.map(doubleIt);

//for each also calls back in an array
//using annymous call back
myNumbers.forEach(function(number){
    console.log("My array contains ", number);
});

//arrow function
doubleIt = number => (number *=2);

