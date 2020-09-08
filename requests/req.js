// XMLHttpRequests
// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
//     console.log('first request worked!');
//     const data = JSON.parse(this.responseText);
//     const filmURL = data.results[0].films[0]
//     const filmReq = new XMLHttpRequest();
//     filmReq.addEventListener('load', function() {
//         console.log('second request worked!');
//         const filmData = JSON.parse(this.responseText);
//         console.log(filmData);
//     });
//     filmReq.addEventListener('error', function(e) {
//         console.log('error!', e);
//     });
//     filmReq.open('GET', filmURL);
//     filmReq.send();
//     // for(let planet of data.results) {
//     //     console.log(planet.name);
//     // }
// });

// firstReq.addEventListener('error', () => {
//     console.log("error!");
// }); 

// firstReq.open('GET', 'https://swapi.dev/api/planets/');
// firstReq.send();
// console.log('request sent!');

// fetch requests
// version 1
// fetch('https://swapi.dev/api/planetsuy21/')
//     .then((response) => {
//         if(!response.ok) {
//             throw new Error(`status error code: ${response.status}`);
//         }
//         response.json()
//             .then((data) => {
//                 for(let planet of data.results) {
//                     console.log(planet.name);
//                 }
//             });
//     })
//     .catch((err) => {
//         console.log('error!');
//         console.log(err);
//     });

// version 2
// fetch('https://swapi.dev/api/planets/')
//     .then((response) => {
//         if(!response.ok) {
//             throw new Error(`status error code: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log('fetched the first ten planets!');
//         for(let planet of data.results) {
//             console.log(planet.name);
//         }
//         const filmURL = data.results[0].films[0];
//         return fetch(filmURL);
//     })
//     .then((response) => {
//         if(!response.ok) {
//             throw new Error(`status error code: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log('fetched first film from first planet!');
//         console.log(data.title);
//     })
//     .catch((err) => {
//         console.log('something went wrong!');
//         console.log(err);
//     });

// refactored version 
// const checkStatusAndParse = (response) => {
//     if(!response.ok) {
//         throw new Error(`status code error: ${response.status}`);
//     }
//     return response.json();
// };

// const printPlanets = (data) => {
//     console.log('loaded 10 more planets...');
//     for(let planet of data.results) {
//         console.log(planet.name);
//     }
//     return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
//     return fetch(url);
// }

// fetchNextPlanets()
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .then(fetchNextPlanets)
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .then(fetchNextPlanets)
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .catch((err) => {
//         console.log('something went wrong!');
//         console.log(err);
//     });

// axios
// parses JSON strings for us and runs catch statements for non-202 status codes
// axios.get('https://swapi.dev/api/planets/')
//     .then((res) => {
//         console.log('loaded first 10 planets!');
//         for(let planet of res.data.results) {
//             console.log(planet.name);
//         }
//     })
//     .catch((err) => {
//         console.log('something went wrong!');
//         console.log(err);
//     })

// sequential axios requests
const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
    console.log(url);
    return axios.get(url);
}

const printPlanets = ({data}) => {
    console.log(data);
    for(let planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
}

fetchNextPlanets()
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(printPlanets)
    .catch((err) => {
        console.log('error', err);
    })
