import fetch from "node-fetch";

let presidents = [];
fetch("https://api.sampleapis.com/presidents/presidents").then(function(result){
    return result.json() //use a .then() to order functions; turn data into json file
})
.then(function(data){
    presidents = data
})
.then(function(){
    const presidentName = presidents.map(function(president){
        return president.name
    });
    console.log(presidentName);
})