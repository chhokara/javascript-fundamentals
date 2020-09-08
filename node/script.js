// const message = "hi there";
// The value assigned to module.exports will be made available to other files
// module.exports = message;

let counter = 0;
module.exports = {
  incrementCounter() {
    counter = counter + 1;
  },
  getCounter() {
    return counter;
  },
};
