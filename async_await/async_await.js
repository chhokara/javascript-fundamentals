// async
// functions declared with async keyword will return a resolved promise with a value
async function greet() {
    return "Hello!"
}

greet()
    .then((res) => {
        console.log("promise resolved with value: ", res);
    });

// async function add(x, y) {
//     if(typeof x != 'number' || typeof y != 'number') {
//         throw "error, x and y must be numbers!";
//     }
//     return x + y;
// }

// using promises manually 
function add(x, y) {
    return new Promise((resolve, reject) => {
        if(typeof x != 'number' || typeof y != 'number') {
            reject("error, x and y must be numbers!");
        }
        else {
            resolve(x+y);
        }
    });
}

add(1, 'e')
    .then((res) => {
        console.log('promise resolved with value: ', res);
    })
    .catch((err) => {
        console.log('promise rejected with value: ', err);
    });

// await
// the await operator is used inside of an async function to wait for a resolved promise
// version 1
// function getPlanets() {
//     return axios.get('https://swapi.dev/api/planets/');
// }

// getPlanets()
//     .then((res) => {
//         console.log(res.data);
//     });

// version 2
async function getPlanets() {
    try {
        const res = await axios.get('https://swapi.dev/api/planetsuy21/');
        console.log(res.data);
    }
    catch (e) {
        console.log('error!', e);
    }
}

getPlanets();

// multiple awaits
const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bodyBounday = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
            if(elRight + amount > bodyBounday) {
                reject({bodyBounday, elRight, amount});
            }
            else {
                element.style.transform = `translateX(${currLeft + amount}px)`;
                resolve();
            }
        }, delay);
    });
}

const btn = document.querySelector('button');
async function animateRight(el, amt) {
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
} 

animateRight(btn, 100)
    .catch((err) => {
        console.log('all done');
        animateRight(btn, -100);
    });

// parallel vs sequential requests
// sequential requests
// async function get3Pokemon() {
//     // we await each request which returns a promise
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }

// get3Pokemon();

// parallel requests
async function get3Pokemon() {
    // since the following 3 requests are independent of each other, we can make them in parallel
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const poke1 = await prom1;
    const poke2 = await prom2;
    const poke3 = await prom3;
    console.log(poke1.data);
    console.log(poke2.data);
    console.log(poke3.data);
}

get3Pokemon();

function changeBodyColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
}

// sequential
async function lightShow() {
    await changeBodyColor('teal', 1000);
    await changeBodyColor('pink', 1000);
    await changeBodyColor('indigo', 1000);
    await changeBodyColor('violet', 1000);
 }
 
 lightShow();

// parallel
// async function lightShow() {
//    const p1 = changeBodyColor('teal', 1000);
//    const p2 = changeBodyColor('pink', 1000);
//    const p3 = changeBodyColor('indigo', 1000);
//    const p4 = changeBodyColor('violet', 1000);
//    await p1;
//    await p2;
//    await p3;
//    await p4;
// }

// lightShow();

// refactoring with Promise.all

async function getPokemon() {
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    // this method returns a promise when all 3 promises in array are fulfilled
    const results = await Promise.all([prom1,prom2,prom3]);
    printPokemon(results);
}

function printPokemon(results) {
    for(let pokemon of results) {
        console.log(pokemon.data.name);
    }
}

getPokemon();