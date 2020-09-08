// Default parameters
// The old way:
function multiply(x, y) {
    if(typeof y === "undefined") y = 1;
    return x * y;
}

function multiply2(x, y) {
    y = typeof y === "undefined" ? 1 : y;
    return x * y;
}

// The new way:
const greet = (name, greeting='hi,', punc='!') => {
    console.log(`${greeting} ${name}${punc}`);
}

// Spread
// When used in function call, each element of iterable is passed as a standalone argument
function giveMe4(a,b,c,d) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

const nums = [1,2,3,4];
const str = "GOAT";

giveMe4(...nums);
giveMe4(...str);

// When used with arrays, each element of iterable is copied to new array
const avengers = ['Ironman', 'Captain America', 'Thor', 'Hulk'];
const fantastic4 = ['Mr. Fantastic', 'Invisible woman', 'The Thing', 'Human Torch'];

const marvel = [...avengers, ...fantastic4];
console.log(marvel);

// When used with objects, each property is copied to new object
const Ford = {
    model: 'Mustang',
    maxSpeed: 270,
    horsePower: 210
}

const Ferrari = {
    model: 'Enzo',
    maxSpeed: 330,
    horsePower: 290
}

const Lamborghini = {
    model: 'Aventador',
    maxSpeed: 350,
    horsePower: 310
}

const exoticCars = {
    ...Ford,
    priceTag: '$60,000',
    ...Ferrari,
    priceTag: '$290,000',
    ...Lamborghini,
    priceTag: '$320,000'
}

// Arguments object is an array like object containing all the arguments passed to a function

function sum() {
    const argsArray = [...arguments];
    return argsArray.reduce((accum, curr) => {
        return accum + curr;
    })
}

function name(first, last) {
    console.log(arguments);
}

// Arguments object cannot be used in arrow functions
const mult = () => {
    const argsArray = [...arguments];
    return arguments.reduce((prod, curr) => {
        return prod * curr;
    })
}

// Rest parameters hold an indefinite number of arguments in an array
function sum2(...nums) {
    return nums.reduce((accum,curr) => {
        return accum + curr;
    });
}

function fullName(first, last, ...title) {
    console.log('first', first);
    console.log('last', last);
    console.log('title', title);
}

const multiply3 = (...vals) => {
    return vals.reduce((prod,curr) => prod * curr)
};

// Destructuring arrays
const oscarResults = ['Joker', 
                      'The Irishman', 
                      'Marriage Story', 
                      'Parasite'];

const [first, second, third] = oscarResults;

const [winner, ...nominees] = oscarResults;

const [winner2, , , loser] = oscarResults;

// Destructuring objects
const runner = {
    first2: "Usain",
    last2: "Bolt",
    country: "Jamaica",
    title: "The fastest man on the planet"
}

const {first2, last2, title} = runner;

const {
        country: nation,
        title: honorific
} = runner;

const {country:region, title:nickName, ...other} = runner;

// Nested destructuring

const results = [
    {
        first:'Usain',
        last:'Bolt',
        county:'Jamaica'
    },
    {
        first:'Andre',
        last:'De Grasse',
        country:'Canada'
    },
    {
        first:'Yohan',
        last:'Blake',
        country:'Jamaica'
    }
];

const [{first:first3},{first:first4}] = results;

const [gold,silver] = results;
const {last:last3} = gold;
const {last:last4} = silver;

// Destructuring parameters
function print({first2, last2, country}) {
    console.log(`${first2} ${last2}, ${title}`);
}

const response = [
    'HTTP/1.0',
    '200 OK',
    'application/json'
];

function parseRespons([protocol, statusCode, contentType]) {
    console.log(`status: ${statusCode}`);
}
