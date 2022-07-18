const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 ) { return "ERROR"; }
    if (typeof num1 !== "number" || typeof num2 !== "number") { return "ERROR"; }

    let sum = 0;
    let smallerNumber, biggerNumber;

    if (num1 < num2) {
        smallerNumber = num1;
        biggerNumber = num2;
    } else {
        smallerNumber = num2;
        biggerNumber = num1;
    }

    for (let counter = smallerNumber; counter <= biggerNumber; counter++) {
        sum += counter;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
