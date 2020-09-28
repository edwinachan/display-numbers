const numbers = require('./numbers');
const { updateHeight: updateHeight } = require('./updateheight')
const { buildResult: buildResult } = require('./buildresult')
const { generateRows: generateRows } = require('./generaterows')

exports.displayNumber = (input, height) => {
    let numbersToPrint = [];
    let convertedInput = input.split('')
    let modifiedNumbers = [];
    let result = '';
    convertedInput.forEach(number => {
        numbersToPrint.push(numbers[number])
    })

    numbersToPrint.forEach((numberPart) => {
        modifiedNumbers.push(updateHeight(numberPart, height))
    })
    
    let rows = generateRows(height);

    let rawResult = buildResult(modifiedNumbers, rows)
    
    rawResult.forEach(row => {
        result += row.join('') + '\n'
    })

    return result 
}