const fitbitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: '5755',
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13',
    45: 'forty five',
    'one hundred': 100
};

console.log(fitbitData.totalSteps);
// we use square brackets when dot notation is not valid
console.log(fitbitData['45']);
console.log(fitbitData['one hundred']);
console.log(fitbitData['totalMiles']);
// updating properties
fitbitData.avgCalorieBurn = '6000';
fitbitData['totalMiles'] = 300.7;
fitbitData.totalSteps += 500000;
// adding properties
fitbitData.heartStillBeating = true;
fitbitData['runningSpeed'] = 15.7;

// nested arrays & objects
const student = {
    lastName: "Chhokar",
    firstName: "Arshdeep",
    strengths: [ 'Math', 'Computing' ],
    exams: {
        midterms: 86,
        final: 55
    }
};
let avg = (student.exams.midterms + student.exams.final)/2;
console.log(avg);

const game = {
    player1: {
        username: 'Arsh',
        playingAs: 'X'
    },
    player2: {
        username: 'Adarsh',
        playingAs: 'O'
    },
    board: [
            ['O', null, 'X'],
            ['X', 'O', 'X'],
            [null, 'O', 'X']
                            ]
};

// Shorthand object properties
const getStats = (arr) => {
    max = Math.max(...arr);
    min = Math.min(...arr);
    sum = arr.reduce((accum,curr) => {
        return accum + curr;
    });
    avg = sum / arr.length;
    return {
        max,
        min,
        sum,
        avg
    };
}
const arr2 = [1,2,3,4];
console.log(getStats(arr2));

// Computed properties
const role = 'host';
const person = 'Jimmy Kimmel';
const role2 = 'actor';
const person2 = 'Tom Holland';

// The old way:
// const team = {};
// team[role] = person;
// team[role2] = person2;

// The new way:
const team = {
    [role]: person,
    [role2]: person2
}

// The old way:
// function addProp(obj, k, v) {
//     const copy = {
//         ...obj
//     }
//     copy[k] = v;
//     return copy;
// }

//The new way:
const addProp = (obj,k,v) => ({...obj,[k]: v})

console.log(addProp(team,'happy',':)'));

// Adding methods to objects
const math = {
    numbers: [1,2,3,4],
    add: function (x,y) {
        return x + y;
    },
    multiply: function (x,y) {
        return x * y;
    }
}

// Method shorthand syntax

const auth = {
    login2: () => {
        console.log("ARROW");
    },
    login() {
        console.log("LOGGED YOU IN!");
    },
    logout() {
        console.log("GOODBYE");
    }
}

// 'this' is a reference to an object that represents the current execution scope

function sayHi() {
    console.log("HI");
    console.log(this); // will print the window object
}

const greet = () => {
    console.log(this);
}

const person3 = {
    first: "Michael",
    last: "Jordan",
    nickName: "His Airness",
    fullName() {
        const {
            first,
            last,
            nickName
        } = this;
        return `${first} ${last} AKA ${nickName}`;
    },
    printBio() {
        console.log(this);
        const fullName = this.fullName();
        console.log(`${fullName} is the star of stars`);
    },
    laugh: () => {
        console.log(this); // 'this' will always refer to window object
        console.log(`${this.first} says hahaha`);
    }
}

// The value of this depends on the invocation context of a function
const printBio = person3.printBio; // 'this' will refer to window object
person3.printBio(); // 'this' will refer to person3 object

const annoyer = {
    phrases: ["literally", "cray cray", "I can't even", "Totes!",
    "YOLO", "Can't stop, won't stop"],
    pickPhrase() {
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
    start() {
        console.log(this.pickPhrase());
        setInterval(function() {
            console.log(this); // 'this' refers to the window object because the setInterval() is not invoked as a method 
            console.log(this.pickPhrase());
        }, 3000);
    },
    // 'this' in arrow functions refers to the same object as 'this' in its parent function
    start2() {
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase()); // 'this' refers to annoyer object
        }, 3000);
    },
    stop() {
        clearInterval(this.timerId);
        console.log("PHEW, THANK GOODNESS IT'S OVER!");
    }
 }

 // Deck of cards 
 const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearts','diamonds','spades','clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck() {
        const {values, suits, deck} = this;
        for(value of values.split(',')) {
            for(suit of suits) {
                deck.push({
                    value,
                    suit
                });
            }
        }
    },
    drawCard() {
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(num) {
        const cards = [];
        for(let i = 0; i < num; i++) {
            cards.push(this.drawCard());
        }
        return cards;
    },
    shuffle() {
        const {
            deck
        }=this;
        // loop over array backwards
        for(let i = deck.length-1; i > 0; i--) {
            // pick random index before current element
            let j = Math.floor(Math.random()*i);
            // swap
            [deck[i],deck[j]] = [deck[j],deck[i]];
        }
    }
 }

 const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suits: ['hearts','diamonds','spades','clubs'],
        values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
        initializeDeck() {
            const {values, suits, deck} = this;
            for(value of values.split(',')) {
                for(suit of suits) {
                    deck.push({
                        value,
                        suit
                    });
                }
            }
        },
        drawCard() {
            const card = this.deck.pop();
            this.drawnCards.push(card);
            return card;
        },
        drawMultiple(num) {
            const cards = [];
            for(let i = 0; i < num; i++) {
                cards.push(this.drawCard());
            }
            return cards;
        },
        shuffle() {
            const {
                deck
            }=this;
            // loop over array backwards
            for(let i = deck.length-1; i > 0; i--) {
                // pick random index before current element
                let j = Math.floor(Math.random()*i);
                // swap
                [deck[i],deck[j]] = [deck[j],deck[i]];
            }
        }
     }
 }

myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

const deck2 = makeDeck();
deck2.initializeDeck()
deck2.shuffle();
