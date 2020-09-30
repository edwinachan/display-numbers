const numbers = require('./numbers');

exports.convertToSegments = input => {
    let segments = [];
    input.forEach(number => {
        segments.push(numbers[number])
    })
    return segments;
}