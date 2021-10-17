// named function
function greet(timeOfDay, name) {
    console.log("Good " + timeOfDay + name + "!");
}

// greet("morning ", "Hajera");

// anonymous functions

const sum = function (number1, number2) {
    return number1 + number2;  
}
const total = sum(1,2);
console.log("total is:", total);

// arrow function

const multiply = (number1, number2) =>  number1 * number2;

const product = multiply (2, 3);
console.log("product is:", product);