// The require statement will return the value assigned to module.exports in script.js
// When we require in a file and get the exports from that file, a require cache is updated
// The require cache is an object containing the file names and exports as key value pairs
// const message = require("./script.js");
// console.log(message);

const counterObject = require("./script.js");
console.log(counterObject.getCounter()); // 0
counterObject.incrementCounter();
console.log(counterObject.getCounter()); // 1

// Since files are only required once, newCounterObject will be assigned to the existing object in the require cache
const newCounterObject = require("./script.js");
// As a result, getCounter() will yield the existing value of counter
console.log(newCounterObject.getCounter()); // 1
