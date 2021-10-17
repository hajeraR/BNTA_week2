const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubltNumbers = [];

const doubltNumberAndAddToArray = function (number, array) {
    array.push(number * 2);
}

// for (number of numbers) {
//     doubltNumberAndAddToArray(number, doubltNumbers);
// }


//forEch is a streamlined way to create for loop by calling a function
// numbers.forEach(function(number) {
//     doubltNumberAndAddToArray(number, doubltNumbers);
// })

// console.log(doubltNumbers)


//map gives back an array where the values are mapped using a function similar to f(x)
const mappedNumbers = numbers.map(function(number){
    return number * 2;
    //need to explicitly return the value
});
// console.log(mappedNumbers);


const evenNumbers = [];

// numbers.forEach(function(number){
//     if (number % 2 === 0 ) {
//         evenNumbers.push(number);
//     }
// });


//filter uses a condition to be to output an array
// const filteredNumbers = numbers.filter(function(number){
//     return number % 2 === 0;
// })

const filteredNumbers = numbers.filter((number) => { return number % 2 === 0;
});

console.log(filteredNumbers);

//console.log(evanNumbers);

let sum = 0;
//const sum will not work, const can't be reassigned
numbers.forEach(function(number){
    sum += number;
});

//reduce uses a starting value to call on function for each item
const total = numbers.reduce(function(runningTotal, number){
    return runningTotal + number;
}, 0)

// console.log(total);
// console.log(sum);

people = [
    {
        name: "Alice",
        age: 25
    },
    {
        name: "Bob",
        age: 19
    },
    {
        name: "Charlie",
        age: 22
    }

]

const totalAge = people.reduce(function(runningTotal, person){
    return runningTotal + person.age;
}, 0);
//without a starting point reduce uses the first item which is a name.
// console.log(totalAge);