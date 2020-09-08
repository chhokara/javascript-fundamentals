for(let i = 1; i <= 10; i++) {
    console.log("hello: ", i);
}

for(i = 20; i >= 0; i--) {
    console.log(i);
}

let Avengers = [
    {
        name: "Captain America",
        attributes: "a Vibranium shield",
        energyLevel: 4
    },
    {
        name: "Ironman",
        attributes: "Repulsors",
        energyLevel: 6
    },
    {
        name: "Spiderman",
        attributes: "Webshooters",
        energyLevel: 1
    },
    {
        name: "Black Panther",
        attributes: "Vibranium claws",
        energyLevel: 8
    }
];

for(let i = 0; i < Avengers.length; i++) {
    let heroes = Avengers[i];
    console.log(`${heroes.name} has ${heroes.attributes}`); 
}

let total = 0;
for(let j = 0; j < Avengers.length; j++) {
    let heroes2 = Avengers[j];
    total += heroes2.energyLevel;
}
console.log(`The average energy level is ${total/Avengers.length}`);

// reversing a string
let mood = "stressed";
let newMood = "";
for(let k = mood.length-1; k >= 0; k--) {
    newMood += mood[k];
}
console.log(newMood);

// nested loops
for(let i = 1; i <= 10; i++) {
    console.log("Outer: ", i);
    for(let j = 10; j >= 0; j-=2) {
        console.log(  "Inner: ", j);
    }
}

const gameBoard = [
    [4, 32, 8 ,4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

let total2 = 0;
for(let r = 0; r < gameBoard.length; r++) {
    let row = gameBoard[r];
    for(let c = 0; c < row.length; c++) {
        total2 += row[c];
    }
}
console.log(total2);

// while loops
let f = 0;
while(f <= 5) {
    console.log(f);
    f++;
}

const target = Math.floor(Math.random()*10);
let guess = Math.floor(Math.random()*10);
while(guess != target) {
    console.log(`target: ${target} guess: ${guess}`);
    guess = Math.floor(Math.random()*10);
}
console.log(`target: ${target} guess: ${guess}`);
console.log(`You win!`);

const target2 = Math.floor(Math.random()*10);
let guess2 = Math.floor(Math.random()*10);
while(true) {
    if(guess2 === target2) break;
    console.log(`target: ${target2} guess: ${guess2}`);
    guess2 = Math.floor(Math.random()*10);
}
console.log(`target: ${target2} guess: ${guess2}`);
console.log(`You win!`);

// for..of loops
const arr = [1,2,3,4];

for(let elem of arr) {
    console.log(elem);
}

for(let char of "april") {
    console.log(char.toUpperCase());
}

const magicSquares = [[2,7,6], [9,5,1], [4,3,8]];

for(let x = 0; x < magicSquares.length; x++) {
    let sum = 0;
    let row = magicSquares[x];
    for(let y = 0; y < row.length; y++) {
        sum += row[y];
    }
    console.log(`${row} has sum ${sum}`);
}

for(let a of magicSquares) {
    let sum2 = 0;
    let row2 = a;
    for(let elem of row2) {
        sum2 += elem;
    }
    console.log(`${row2} has sum ${sum2}`);
}

const movies = {
    Ironman: 9.1,
    'Incredible Hulk': 6.6,
    Ironman2: 7.0,
    Thor: 7.1,
    'Captain America': 8.5,
    Avengers: 9.0
};

for(let keys of Object.keys(movies)) {
    console.log(keys, movies[keys]);
}

let count = 0;
const ratings = Object.values(movies);
for(let vals of ratings) {
    count += vals;
}
let avg = count/ratings.length;
console.log(`The average rating is ${avg}`);

const jeopardyWinnings = {
    regularPlay: 2400000,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades: 100000
};

for(let prop in jeopardyWinnings) {
    console.log(prop, jeopardyWinnings[prop]);
}

let tally = 0;
for(let z in jeopardyWinnings) {
    tally += jeopardyWinnings[z];
}
console.log(`Total winnings: ${tally}`);
