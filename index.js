const { displayNumber: displayNumber } = require('./displaynumber')

const input = process.argv.slice(2)[0];
const height = process.argv.slice(2)[1];
const width = process.argv.slice(2)[2];

console.log(displayNumber(input, height, width));