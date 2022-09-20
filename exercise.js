// let str = "I dislike trains as a mode of transport"
// let str2 = "abcdefghijklmnopqrstuvwxyz"

// function strLength (str) {
//     return str.length;
// }

// console.log("abcdefghijklmnopqrstuvwxyz"[4]);

// console.log("I love you".toUpperCase());

// Exercise 2

// console.log(Math.round(1.23456789 * 100)/100);
// console.log(1.23456789.toFixed(2));

// console.log(+"45");
// console.log(parseInt("45", 10));

// Exercise 3
const arr = ['red', 'blue', 'yellow', 'green', 'blue']

// console.log(arr.slice(-1));
// console.log(slice(arr));

arr.push("orange")
console.log(arr);

console.log(arr[2]);

const arr2 = [23123, 2, -328, 0]
console.log(Math.min(...arr2));

// Exercise 4

// function myFunction(country="London", length, destination) {
//     return `person is travelling from ${country} to ${destination}. The flight time is ${length} hours.`
// }
// console.log(myFunction("England", 3, "Spain"));

const myFunction = (length, destination, country="London") => `person is travelling from ${country} to ${destination}. The flight time is ${length} hours.`

console.log(myFunction(3, "Argentina"))

