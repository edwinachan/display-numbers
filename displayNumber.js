const numbers = require('./numbers');
const { updateHeight: updateHeight } = require('./updateheight')
const { buildResult: buildResult } = require('./buildresult')
const { generateRows: generateRows } = require('./generaterows')

function convertInputToSegments (input) {
    let segments = [];
    let inputSplit = input.split('');
    inputSplit.forEach(number => {
        segments.push(numbers[number])
    })
    return segments;
}
exports.displayNumber = (input, height) => {
    let result = '';
    
    let numbersToPrint = convertInputToSegments(input);

    let numbersWithUpdatedHeight = updateHeight(numbersToPrint, height);
    
    let rows = generateRows(height);

    let rawResult = buildResult(numbersWithUpdatedHeight, rows)
    
    rawResult.forEach(row => {
        result += row.join('') + '\n'
    })

    return result 
}