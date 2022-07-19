const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((runningTotal, item) => {
    return runningTotal+= item;
  }, 0); 
};

const multiply = function(array) {
  return array.reduce((runningTotal, item) => {
    return runningTotal *= item;
  }, 1)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	if (number === 0) { return 1; }
  let total = 1; 
  for (number; number >= 1; number--) {
    total *= number;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
