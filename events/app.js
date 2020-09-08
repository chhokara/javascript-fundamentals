const btn = document.querySelector('#clicker');

btn.onclick = () => {
    console.log('you clicked me!');
}

btn.ondblclick = () => {
    console.log('double click!');
}

// addEventListener
const btn2 = document.querySelector('#clicker2');

btn2.addEventListener('click', function() {
    console.log('clicked!');
});

btn2.addEventListener('click', function() {
    console.log('clicked again!');
});

btn2.addEventListener('mouseover', function() {
    btn2.innerText = 'stop touching me!'
})

btn2.addEventListener('mouseout', function() {
    btn2.innerText = 'Clicker2';
});

window.addEventListener('scroll', function() {
    console.log('stop scrolling');
});

const btn3 = document.querySelector('#Impossible');

btn3.addEventListener('mouseover', function() {
    console.log('Moused over me!');
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);
    btn3.style.top = `${height}px`;
    btn3.style.left = `${width}px`;
});

btn3.addEventListener('click', function() {
    btn3.innerText = 'You got me!';
    document.body.style.backgroundColor = 'green';
})

// events on multiple elements

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'violet'
];

const changeColor = function(event) {
    console.log(event);
    const h1 = document.querySelector('#pickColor');
    h1.style.color = this.style.backgroundColor;
}
 
const container = document.querySelector('#boxes');

for(let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box')
    container.appendChild(box);
    box.addEventListener('click', changeColor);
}
 
// document.body.addEventListener('keypress', function(event) {
//     console.log(event);
// }) 

// key events
const input = document.querySelector('#username');

// keydown is fired when any key is pressed
input.addEventListener('keydown', function() {
    console.log('keydown');
}) 

// keypress is fired when any key that causes input to show up is pressed (includes return) 
input.addEventListener('keypress', function() {
    console.log('keypress');
})

// keyup fired when key is released
input.addEventListener('keyup', function() {
    console.log('keyup');
})

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        if(!this.value) return;
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        itemsUL.appendChild(newItem);
        this.value = '';
    }
});

// form events and preventDefault
const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('cc', creditCardInput.value);
    console.log('terms', termsCheckbox.checked);
    console.log('veggieSelect', veggieSelect.value);
})

// input and change events

// version 1
// const formData = {};
// creditCardInput.addEventListener('input', function(e) {
//     console.log('cc changed', e);
//     formData['cc'] = e.target.value;
// })

// termsCheckbox.addEventListener('input', function(e) {
//     console.log('terms', e);
//     formData['terms'] = e.target.checked;
// })

// veggieSelect.addEventListener('input', function(e) {
//     console.log('veggie', e);
//     formData['veggieSelect'] = e.target.value;
// })

// version 2
// const formData = {};
// for(let input of [creditCardInput, termsCheckbox, veggieSelect]) {
//     input.addEventListener('input', function({target}) {
//         const {name, type, value, checked} = target;
//         formData[name] = type === 'checkbox' ? checked : value;
//         console.log(formData);
//     })
// }

// version 3
// change event will trigger for text input only when return is pressed or input is blurred
const formData = {};
for(let input of [creditCardInput, termsCheckbox, veggieSelect]) {
    input.addEventListener('change', function({target}) {
        const {name, type, value, checked} = target;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);
    })
}

