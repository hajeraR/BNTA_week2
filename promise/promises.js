const greet = function(name){
    //promise starts a function with a "promise" that the function will be resolved/rejected with a output/error
    return new Promise(function(resolve, reject){
       //set a 1000ms delay before calling function
        setTimeout( function() {
            if (name !== "Colin") {
                resolve ("hello " + name + "!")
            }
            else reject ("you work here, Colin")
            }, 1000);
    })
    // setTimeout( function() {
    //     console.log("finished timeout")
    //     return "hello world!"}, 1000);
}

// const response = greet();

// console.log("logging response", response); //js jumps to next line before previous command is complete, this gives a undefined.



// greet("Oliver").then(function(result){ //passes resolve into function
//     console.log(result);
// }).catch(function(error){
//     console.log(error);
// });

// greet("Colin").then(function(result){ //passes resolve into function
//     console.log(result);
// }).catch(function(error){
//     console.log(error);
// });


const induction = async function(name){ //async declares this is asychronous
    result = await greet(name); //await tells function to wait for resolve, can only be used in a function declared async
    console.log(result);
}

// induction("Jason");
// induction("Colin")