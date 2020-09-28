const { displayNumber: displayNumber } = require('./displaynumber')

const input = process.argv.slice(2)[0];
const height = process.argv.slice(2)[1];

console.log(displayNumber(input, height));