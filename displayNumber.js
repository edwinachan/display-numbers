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

    numbersToPrint.forEach(segment => {
        rowOne.push(segment[0]);
        rowTwo.push(segment[1]);
        rowThree.push(segment[2]);
    });

    let result = rowOne.join('') + '\n' + rowTwo.join('') + '\n' + rowThree.join('');

    return result
}