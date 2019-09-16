var myNum = 32;
var myResult = "Success!";

function randomizer(limit){
    var randomNum = Math.floor(Math.random()*limit);

    var myNum = randomNum;

    console.log("myNum is ", myNum);
    console.log("Global myNum is ", window.myNum);

    console.log("Result is ",myResult);

    return myNum;
}

