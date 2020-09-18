const { displayNumber: displayNumber } = require('./displayNumber')

console.log('What number would you like to print?');

process.stdin.once('data', (input) => {
    console.log(displayNumber(input));
});