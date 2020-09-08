function helloWorld() {
    for(let i = 1; i <= 5; i++) {
        console.log("hello world!");
    }
}

helloWorld();

function rollDie() {
    let roll = Math.floor(Math.random()*6) + 1;
    console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
    for(let i = 0; i < numRolls; i++) {
        rollDie();
    }
}

throwDice(3);

function greet(nickname) {
    console.log(`Greetings ${nickname}!`);
}

greet("Arsh")

function square(num) {
    console.log(num * num);
}
square(4);

function sum(x, y) {
    console.log(x + y);
}
sum(2,3);

function divide(a, b) {
    console.log(a / b);
}
divide(4,2);

function isPurple(color) {
    if(color.toLowerCase() === "purple") {
        return true;
    }
    return false;
}

function isPurple2(color2) {
    return color2.toLowerCase() === "purple";
} 

function containsPurple(arr) {
    for(let elem of arr) {
        if(elem.toLowerCase() === 'purple') return true;
    }
    return false;
}

function isValidPassword(password, username) {
    if(password.length < 8 || 
      (password.indexOf(' ') !== -1) || 
      (password.indexOf(username)) !== -1) {
        return false;
    }
    return true;
}

function average(arr) {
    let sum2 = 0;
    for(let elem of arr) {
        sum2 += elem;
    }
    let avg = sum2/arr.length;
    return avg;
}

function isPangram(str) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    str = str.toLowerCase();
    for(let char of alpha) {
        if(!str.includes(char)) return false; 
    }
    return true;
}

function getCard() {
    const value = ['1','2','3','4','5','6','7','8','9','10','J',
                   'Q','K','A'];
    const suit = ['clubs','spades','hearts','diamonds'];
    let i = Math.floor(Math.random()*value.length);
    let j = Math.floor(Math.random()*suit.length);
    const card = {
        'value': value[i],
        'suit': suit[j]
    };
    return card;
}

// function scope
function lol() {
    let person = 'Tom';
    const age = 45;
    var color = 'teal'
    console.log(age) // will print 45
}
// console.log(age) <-- error!

let bird = 'Mandarin Duck';

function birdWatch() { 
    let bird = 'Golden Pheasant';
    console.log(bird); // will print Golden Pheasant (function scope)
}
console.log(bird) // will print Mandarin Duck (global scope)

// block scope
function doubleArray(arr) {
    const result = []; // scoped to a function
    for(let num of arr) {
        let double = num * 2; // double is scoped to a block
        result.push(double);
    }
    // console.log(double) <-- error, not within block scope!
    return result;
}
// console.log(result) <-- error, not within function scope!

function doubleArray(arr) {
    const result = []; // scoped to a function
    for(let num of arr) {
        var double = num * 2; // double is NOT scoped to a block but it is scoped to a function
        result.push(double);
    }
    console.log(double) // will print last doubled element of result
    return result;
}
// console.log(result) <-- error, not within function scope!

// lexical scope
function outer() {
    let movie = "avengers";
    function inner() {
        let movie = "black panther"
        function extraInner() {
            console.log(movie.toUpperCase());
        }
        extraInner();
    }
    inner();
}

// function expressions
const sum2 = function add(x,y) {
    return x + y;
}

const add = function (x, y) {
    return x + y;
}

const sub = function (x, y) {
    return x - y;
}

const mult = function (x, y) {
    return x * y;
}

const div = function (x, y) {
    return x / y;
}

// higher order funcitons
const operations = [add, sub, mult, div];

for(let val of operations) {
    let res = val(7,5);
    console.log(res);
}

const math = {
    op1: add,
    op2: sub,
    op3: mult,
    op4: div
};

console.log(math.op3(3,7));

// functions as arguments
function cry() {
    console.log("BOO HOO I'M SO SAD!");
}

function rage(input) {
    console.log("I HATE EVERYTHING");
}

function callNTimes(func, n) {
    for(let i = 0; i < n; i++) {
        func();
    }
}

function pickOne(f1, f2) {
    let rand = Math.random();
    if(rand < 0.5) {
        f1();
    }
    else {
        f2();
    }
}

// functions as return values

function multiplyBy(num) {
    return function (x) {
        return x * num;
    }
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);

function makeBetween(x, y) {
    return function (val) {
        return val >= x && val <= y;
    }
}

const isChild = makeBetween(0,17);
console.log(isChild(18));
const isNineties = makeBetween(1990, 1999);
console.log(isNineties(1991));
const isNiceWeather = makeBetween(20, 30);
console.log(isNiceWeather(21));

// callback functions
setTimeout(function () {
    alert("Welcome!");
}, 5000);

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    alert("Why did you click me?!");
});

// hoisting
console.log(yell); // will print 'undefined'
var yell = 'AHHH'; // declaration of yell is hoisted while initialization stays below

// console.log(echo); // error!
// let echo = 'HEEELLOOOOO'; // declaration is not hoisted with let and const

howl(); // functions are hoisted and this will print 'AAAOOOOOO'
function howl() {
    console.log("AAAOOOOOO");
} 

// hoot(); // error, function expressions are not hoisted
// let hoot = function () {
//     console.log("HOOO HOOO");
// } 

// forEach method calls the provided function on each element of array
const numbers = [20,21,22,23,24,25,26,27];

numbers.forEach(function(num, i){
    console.log(i, num*2);
})

const books = [
    {
        title: 'Harry Potter',
        author: 'JK Rowling',
        rating: 8,
        genre: 'Fantasy'
    },
    {
        title: 'Of Mice and Men',
        author: 'John Steinbeck',
        rating: 9,
        genre: 'Novella'
    },
    {
        title: 'Animal Farm',
        author: 'George Orwell',
        rating: 7,
        genre: 'Satire'
    },
    {
        title: '1984',
        author: 'George Orwell',
        rating: 8,
        genre: 'Thriller'
    }
];

books.forEach(function(book){
    console.log(book.title.toLowerCase());
});

// map method creates new array with the result of calling the callback on each element
const doubles = numbers.map(function(num){
    return num*2;
})

const numsDetail = numbers.map(function(num) {
    return {
        value: num,
        isEven: num % 2 === 0
    };
})

let words = ['asap', 'byob', 'rsvp', 'diy'];

const abbrevs = words.map(function(word) {
    return word.toUpperCase().split('').join('.');
})

const titles = books.map(function(book){
    return book.title;
})

// arrow functions
const isEven = (num) => {
    return num % 2 === 0;
}

const square2 = num => {
    return num*num;
}

const multiply = (x, y) => {
    return x*y;
}

const greet2 = () => {
    console.log("Hello");
}

const nums = [1,2,3,4,5,6,7];

const parityList = nums.map(n => {
    if(n % 2 === 0) return true;
    return false;
});

// implicit returns
const parityList2 = nums.map(n => (
    n % 2 === 0 ? true : false
));

const parityList3 = nums.map(n =>  n % 2 === 0 ? true : false);

// find method returns the first element in the array that satisfies provided testing function
let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
];

const movie2 = movies.find(item => (
    item.includes('Mrs.')
))

const movie3 = movies.find(item => item.indexOf('Mrs.') === 0);

const goodBook = books.find(book => book.rating >= 7);

const findRowling = books.find((book) => {
    return book.author === 'JK Rowling';
});

const findSteinbeck = books.find(book => book.author === 'John Steinbeck');

const findOrwell = books.find(book => (
    book.author === 'George Orwell'
));

// filter method creates new array with all elements that pass the test of callback function
const fantasyBooks = books.filter(book => {
    return book.genre.includes('Fantasy');
});

const query = 'e';
const results = books.filter(book => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase());
});

// every method tests whether every element in array passed the test of callback function
// some method tests if at least 1 element in array passes the test of callback function
const words2 = ['dog', 'dig', 'log', 'bag', 'wag'];

const allStartWithD = words2.every(word => word[0] === 'd');
const someStartWithD = words2.some(word => word[0] === 'd');

const allEndInG = words.every(word => {
    const last = word.length-1;
    return word[last] === 'g';
});

const allGoodRatings = books.every(book => {
    return book.rating >= 8; 
});

// sort method sorts elements of array in place (array is mutated). Default based on string encodings! 
const prices = [200, 400, 300, 25, 100, 50];

// sorting based on string encodings
const badSort = prices.slice().sort();
// sorting based on ascending values
const ascendSort = prices.slice().sort((a,b) => a-b);
// sorting based on descending values
const descendSort = prices.slice().sort((a,b) => b-a); 
// sorting based on book ratings
const bookSort = books.sort((a,b) => a.rating-b.rating);

// reduce method executes a reducer callback function on each value in array 
const nums2 = [1,2,3,4];
const product = nums2.reduce((accum,current) => {
    return accum * current;
});

const grades = [55, 39, 88, 93, 80, 70, 68];
const maxGrade = grades.reduce((max, current) => {
    if(current > max) return current;
    return max;
});

const maxGrade2 = grades.reduce((max, current) => {
    return Math.max(max,current);
});

const minGrade = grades.reduce((min, current) => {
    return Math.min(min, current);
});

// we can also specify an intial value as second argument to reduce method
const sum3 = [10,20,30,40,50].reduce((accum, current) => {
    return accum + current;
}, 100);

const votes = ['y','y','y','n','n','y','n'];

const electionResults = votes.reduce((tally, val) => {
    if(tally[val]) {
        tally[val]++ 
    }
    else {
        tally[val] = 1;
    }
    return tally;
}, {});

const electionResults2 = votes.reduce((tally, val) => {
    tally[val] = (tally[val]||0) + 1;
    return tally;
}, {});

const groupedByBooks = books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    if(!groupedBooks[key]) groupedBooks[key] = [];
    groupedBooks[key].push(book);
    return groupedBooks;
}, {});











