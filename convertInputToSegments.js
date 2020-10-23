const numbers = require('./numbers');

const convertInputToSegments = input => {
    let segments = [];
    let inputSplit = input.split('');
    inputSplit.forEach(number => {
        if (number === ':') {
            segments.push(['    ', '  . ', '  . ']);
        } else {
            segments.push(numbers[number])
        }
    })
    return segments;
}

module.exports = convertInputToSegments;