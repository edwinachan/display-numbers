const numbers = require('./numbers');

let numbersToPrint = [];
let rowOne = [];
let rowTwo = [];
let rowThree = [];

exports.displayNumber = input => {
    const convertedInput = input.toString().trim().split('');

    convertedInput.forEach(number => {
        numbersToPrint.push(numbers[number]);
    });

    numbersToPrint.forEach(numberPart => {
        rowOne.push(numberPart[0]);
        rowTwo.push(numberPart[1]);
        rowThree.push(numberPart[2]);
    });

    let result = rowOne.join('') + '\n' + rowTwo.join('') + '\n' + rowThree.join('');

    return result
}