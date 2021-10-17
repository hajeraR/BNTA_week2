numbers = [1, 2, 3, 4, 5];

// const numberToPrint ; //placeholder variable

const numbersSuared= [] //must remain an array but contents don't matter

for (let number of numbers) {
    // numberToPrint = number
    // console.log("value of number inside loop ", numberToPrint);
    numbersSuared.push(number**2);
}
console.log(numbersSuared)
// defining a variable leaves it in a global scope; can have code outside of loop interacting with loop
//give block scope instead by using "let"

//using const, cannot reassign variable