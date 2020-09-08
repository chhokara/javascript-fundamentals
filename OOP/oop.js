// prototypes
String.prototype.yell = function() {
    return `OMG!!! ${this.toUpperCase()} AHHHH!!!`;
}

Array.prototype.pop = function () {
    return 'Sorry I want that element, I will never pop it off!';
}

// factory funtions
function makeColors(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function() {
        const {r, g, b} = this;
        return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
    };
    return color;
}

const firstColor = makeColors(35, 255, 150);
console.log(firstColor.hex());

// constructor functions
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}
Color.prototype.rgb = function() {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
}
Color.prototype.hex = function() {
    const {r, g, b} = this;
    return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
}
Color.prototype.rgba = function(a = 1.0) {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b}, ${a})`;
}
// new operator does the following:
// 1. creates a blank, plain javascript object
// 2. links (sets the constructor of) this object to another object
// 3. passes the newly created object from step 1 as the this context
// 4. returns this if function does not return its own object 
const color1 = new Color(40, 50, 60);
const color2 = new Color(0, 0, 0);

// classes
class Color1 {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
    }
    innerRGBA() {
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGBA()})`;
    }
    rgba(a=1.0) {
        return `rgba(${this.innerRGBA()}, ${a})`
    }
    hex() {
        const {r, g, b} = this;
        return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
    }
    hsl() {
        const {h, s, l} = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
    opposite() {
        const {h, s, l} = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`;
    }
    fullSaturation() {
        const {h, l} = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }
    calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}
}

const white = new Color1(255, 255, 255, 'white');

// extends, super, subclasses
class Pet {
    constructor(name, age) {
        console.log('Inside Pet constructor');
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log('Inside Cat constructor');
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
         return 'MEOWWW!';
    }
}

class Dog extends Pet {
    bark() {
        return 'WOOOF!';
    }
    eat() {
        return `${this.name} scarfs his food!`;
    }
}
