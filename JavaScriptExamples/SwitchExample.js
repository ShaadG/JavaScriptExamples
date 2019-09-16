var answer = window.prompt("Type YES, NO, or MAYBE. Then click OK"); 
if(answer === "YES"){
    console.log("You said YES!");
} 
else if (answer === "MAYBE"){
	console.log("You said maybe. I dont know what to make of that");
} 

else if (answer === "NO"){
	console.log("You said no. :(");
} else{
	console.log("You rebel ;)");
}

switch(answer){
    case "Yes":
        console.log("You said YES!");
        break;
    case "MAYBE":
        console.log("You said maybe. I dont know what to make of that");
        break;
     case "Yes":
         console.log("You said no. :(");
         break;
    default:
        console.log("You rebel you!");
        break;
}