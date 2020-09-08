// changing multiple elements
// const allLis = document.querySelectorAll('li');

// for(let li of allLis) {
//     li.innerHTML = "WE ARE <b>THE CHAMPIONS!</b>";
// }

// altering styles
// const allLis2 = document.querySelectorAll('li');
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// allLis2.forEach((li, i) => {
//     const color = colors[i];
//     li.style.color = color;
// })

// manipulating classes
const todo = document.querySelector('#todos .todo')
todo.classList.add('done');
todo.classList.toggle('done');
secondLi = todo.nextElementSibling;

// creating elements
const h2 = document.createElement('h2');
h2.innerText = 'I love animals!';
h2.classList.add('special');

const section = document.querySelector('section');
section.appendChild(h2);

const img = document.createElement('img');
img.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png';
img.style.width = '300px';

document.body.appendChild(img);

const newLink = document.createElement('a');
newLink.innerText = 'Click here to see dem handles yo!';
newLink.href = 'https://www.youtube.com/watch?v=LAr6oAKieHk';

const firstP = document.querySelector('p');
firstP.appendChild(newLink);

// append, prepend, and insertBefore
const parentUL = document.querySelector('ul');
const firstLI = document.querySelector('li');
const secondLI = document.querySelectorAll('li.todo')[1];
const newLI = document.createElement('li');

newLI.innerText = 'I am a new li';
parentUL.insertBefore(newLI, firstLI);
parentUL.insertBefore(newLI, secondLI);

const i = document.createElement('i');
i.innerText = "I am italic";
firstP.insertAdjacentElement("beforebegin", i);
firstP.append(i,newLI);
firstP.prepend(i,newLI);

const ul2 = document.querySelector('section ul');
const removeMe = ul2.querySelector('.special');

const deleted = ul2.removeChild(removeMe);