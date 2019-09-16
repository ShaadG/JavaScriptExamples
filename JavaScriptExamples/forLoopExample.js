var pageNames = [
"Home",
"About Us",
"Contact Us",
"Javascript Playground",
"News",
"Blog"
];

for(var i = 0; i <pageNames.length; i++){
    if(document.title === pageNames[i]){
        console.log("we are here: "+ pageNames[i]);
    } else{
        console.log("We are not here: "+ pageNames[i])
    }
}

//for each loop in JS
for(var p in pageNames){ 
    console.log(p, pageNames[p]); 
    }