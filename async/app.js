const repeat = (str, times) => {
    let result = '';
    for(let i = 0; i < times; i++) {
        result += str;
    }
    return result;
};

const scream = (str) => {
    return str.toUpperCase() + '!!!';
};

const getRantText = (phrase) => {
    let text = scream(phrase);
    let rant = repeat(text, 8);
    return rant;
};

const makeRant = (phrase, el) => {
    const h1 = document.createElement('h1');
    h1.innerText = getRantText(phrase);
    el.appendChild(h1);
};
console.log('Hello world');
makeRant('I hate mayonaise', document.body);
//makeRant('If you have to cough, please cover your mouth', document.body);

// callback hell
// const btn = document.querySelector('button');
// version 1
// const moveX = (element, amount, delay, callback) => {
//     const bodyBounday = document.body.clientWidth;
//     const elRight = element.getBoundingClientRect().right;
//     const currLeft = element.getBoundingClientRect().left;
//     if(elRight + amount > bodyBounday) {
//         console.log('done - cannot go that far');
//     }
//     else {
//         setTimeout(() => {
//             element.style.transform = `translateX(${currLeft + amount}px)`;
//             if(callback) callback();
//         }, delay);
//     }
// };

// moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000, () => {
//             moveX(btn, 100, 1000, () => {
//                 moveX(btn, 1000, 1000);
//             });
//         });
//     });
// });

// version 2
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//     setTimeout(() => {
//         const bodyBounday = document.body.clientWidth;
//         const elRight = element.getBoundingClientRect().right;
//         const currLeft = element.getBoundingClientRect().left;
//         if(elRight + amount > bodyBounday) {
//             onFailure();
//         }
//         else {
//             element.style.transform = `translateX(${currLeft + amount}px)`;
//             onSuccess();
//         }
//     }, delay);
// };

// moveX(btn, 300, 1000, () => {
//     moveX(btn, 300, 1000, () => {
//         moveX(btn, 300, 1000, () => {
//             moveX(btn, 300, 1000, () => {
//                 console.log('really, we still have screen left?!');
//             }, () => {
//                 alert('cannot move any further');
//             })
//         }, () => {
//             alert('cannot move any further');
//         })
//     }, () => {
//         alert('cannot move any further');
//     })
// }, () => {
//     alert('cannot move any further');
// })

// Promises 
// if we don't reject or resolve a promise, its status will be pending
const pendingPromise = new Promise((resolve, reject) => {
    // pass
});

// version 1
// const getNewDog = new Promise((resolve, reject) => {
//     const rand = Math.random();
//     if(rand < 0.5) {
//         resolve();
//     }
//     else {
//         reject();
//     }
// });

// getNewDog.then(() => {
//     console.log('Yay we got a new dog!!!');
// });

// getNewDog.catch(() => {
//     console.log(':( No dog');
// });

// version 2
// const willGetDog = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const rand = Math.random();
//         if(rand < 0.5) {
//             resolve();
//         }
//         else {
//             reject();
//         }
//     }, 5000);
// });

// willGetDog.then(() => {
//     console.log('Yay we got a new dog!');
// });

// willGetDog.catch(() => {
//     console.log(':( no dog');
// });

// version 3
const makeDogPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if(rand < 0.5) {
                resolve();
            }
            else {
                reject();
            }
        }, 5000);
    });
}

makeDogPromise()
    .then(() => {
        console.log('yay we got a dog!');
    })
    .catch(() => {
        console.log(':( no dog');
    })

// resolving and rejecting with values
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users' : [
                    {id: 1, username: 'Arsh'},
                    {id: 2, username: 'Adarsh'}
                ],
                '/users/1' : {
                    id: 1,
                    username: 'Arshdeep',
                    upvotes: 400,
                    city: 'Burnaby',
                    topPostId: 454321
                },
                '/users/5' : {
                    id: 5,
                    username: 'Adarsh',
                    upvotes: 500,
                    city: 'Vancouver',
                },
                '/posts/454321' : {
                    id: 454321,
                    title: 'I am Ironman'
                },
                '/about' : 'This is the about page'
            };
            const data = pages[url];
            if(data) {
                resolve({status: 200, data});
            }
            else {
                reject({status: 404});
            }
        }, 1000);
    })
}

fakeRequest('/nooo')
    .then((res) => {
        console.log('Status code: ', res.status);
        console.log('Data: ', res.data);
        console.log('Request worked');
    })
    .catch((res) => {
        console.log('Status code: ', res.status);
        console.log('Request failed');
    });

fakeRequest('/users')
    .then((res) => {
        console.log('Status code: ', res.status);
        console.log('Data: ', res.data);
        console.log('Request worked');
    })
    .catch((res) => {
        console.log('Status code: ', res.status);
        console.log('Request failed');
    });

// promise chaining
// version 1
// fakeRequest('/users').then((res) => {
//     const id = res.data[0].id;
//     fakeRequest(`/users/${id}`).then((res) => {
//         const postId = res.data.topPostId;
//         fakeRequest(`/posts/${postId}`).then((res) => {
//             console.log(res.data);
//         })
//     })
// })

// version 2
fakeRequest('/users25')
    .then((res) => {
        console.log(res);
        const id = res.data[0].id;
        return fakeRequest(`/users/${id}`);
    })
    .then((res) => {
        console.log(res);
        const postId = res.data.topPostId;
        return fakeRequest(`/posts/${postId}`);
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log('Error!', err);
    })

// refactoring moveX with promises
const btn = document.querySelector('button');
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

moveX(btn, 300, 1000)
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .catch((data) => {
        console.log(`Body is ${data.bodyBounday}px wide`);
        console.log(`Element is at ${data.elRight}px, ${data.amount}px is too large!`);
    })
    

