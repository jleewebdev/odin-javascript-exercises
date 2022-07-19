const fibonacci = function(input) {
    if (input < 0  || isNaN(input) ) { return "OOPS" }
    let sequence = [];
    for (let i = 0; i < input; i++) {
        const sequenceLength = sequence.length;
        const firstNumber = sequence[sequenceLength - 1] ? sequence[sequenceLength - 1] : 1;
        const secondNumber = sequence[sequenceLength -2 ] ? sequence[sequenceLength- 2] : 0;
        sequence.push(firstNumber + secondNumber);
        console.log(sequence);
    }
    return sequence.pop();
};

// Do not edit below this line
module.exports = fibonacci;
