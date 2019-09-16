function speakSomething (what, howMany){
    //using tenary to default what to default speech
    var what = (typeof what !== "undefined") ? what : "Default speech";

    var howMany = (typeof howMany !== "undefined") ? howMany: 10;


for (var i = 0; i < howMany; i++){
    console.log(what + " (" + i + ")");
}
}

function addingMachine(){
    var total = 0;


    for(var i =0; i < arguments.length; i++){

var number = arguments[i];
        if (typeof number === "number"){
            total += number;
        }
    }
    return total;
}

var calvin = {
    name: "Calvin";
    bestFriend: "Hobbes";
    form: "Human boy"
};

function transmorgrifier (calvin){
    if(typeof calvin !== "object"){
        console.error("argument is of wrong type")
        return;
    }
//generates random number between 1-5
    var RandNum = Math.floor(Math.random() * 5) +1;

    switch(RandNum){
        case 1:
            calvin.form = "tyrannosaurus";
            break;
         case 2:
            calvin.form = "grey wolf";
             break;
        case 3:
            calvin.form = "bengal tiger";
            break;
        case 4:
             calvin.form = "grizzly bear";
             break;
        case 5:
             calvin.form = "canary";
             break;
        default:
            //stays human
            calvin.form = "Human boy";
            break;
    }
}

function transmorgrifierCopy (calvin){
    if(typeof calvin !== "object"){
        console.error("argument is of wrong type")
        return;
    }
//generates random number between 1-5
    var RandNum = Math.floor(Math.random() * 5) +1;

    var newForm = calvin.form; //create a copy of calvin form stored in local memory

    switch(RandNum){
        case 1:
         newForm = "tyrannosaurus";
            break;
         case 2:
                newForm = "grey wolf";
             break;
        case 3:
                newForm = "bengal tiger";
            break;
        case 4:
                newForm = "grizzly bear";
             break;
        case 5:
                newForm = "canary";
             break;
        default:
            //stays human
            newForm = "Human boy";
            break;
    }
}

