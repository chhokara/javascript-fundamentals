let Avengers = ["Ironman",
                "Captain America",
                "Thor",
                "Hulk",
                "Black Widow"];
let Fantastic4 = ["Mr. Fantastic",
                  "Human Torch",
                  "The Thing",
                  "Invisible Woman"];
// push method appends an item to the end of an array
Avengers.push("Hawkeye");
Avengers.push("Quicksilver", "War Machine");
// pop method removes an item from the end of an array 
Avengers.pop();
// unshift method adds an item to the front of an array
Avengers.unshift("Vision");
Avengers.unshift("Scarlet Witch", "Black Panther");
// shift removes an item from the front of an array
Avengers.shift();
// concat method merges two arrays together
let NewAvengers = Avengers.concat(Fantastic4);
// includes method returns true if item is found in array, otherwise false
console.log(NewAvengers.includes("Spiderman"));
// second argument specifies at which index to start from
console.log(NewAvengers.includes("Captain America", 4));
// indexOf method returns the index of first occurence of an item
console.log(NewAvengers.indexOf("Black Panther")); 
// reverse method reverses the items in an array
let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
letters.reverse();
// join method joins items in an array and converts them to a string
console.log(letters.join(''));
// slice method return a copy of the portion of array specified by indices
console.log(NewAvengers.slice(0,5));
console.log(NewAvengers.slice(-4));
// splice method removes or replaces existing items in an array
// syntax: function.splice(startIndex, deleteCount, itemToInsert);
NewAvengers.splice(4, 0, "Captain Marvel", "Daredevil");
NewAvengers.splice(5, 2);
NewAvengers.splice(3,2, "Winter Soldier", "Ms. Marvel");
// sort method sorts the elements of an array in place and returns the sorted array
// sorts based on string character codes by default
NewAvengers.sort();

const food = [
                ['jam', 'butter', [1,2,3]],
                ['pizza', 'burger', 'fries'],
                ['pasta', 'soup', 'fish']
                                            ];
console.log(food[2][1]);
console.log(food[0][2][2]);




