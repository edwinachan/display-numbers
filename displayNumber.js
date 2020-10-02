const numbers = require('./numbers');
const { updateHeight: updateHeight } = require('./updateheight')
const { updateWidth: updateWidth } = require('./updatewidth')
const { buildResult: buildResult } = require('./buildresult')
const { generateRows: generateRows } = require('./generaterows')

const convertInputToSegments = input => {
    let segments = [];
    let inputSplit = input.split('');
    inputSplit.forEach(number => {
        if (number === ':') {
            segments.push(['    ', ' .  ', ' .  ']);
        } else {
            segments.push(numbers[number])
        }
    })
    return segments;
}
exports.displayNumber = (input, height, width) => {
    let result = '';
    
    let numbersToPrint = convertInputToSegments(input);

    let numbersWithUpdatedHeight = updateHeight(numbersToPrint, height);

    let numbersWithUpdatedWidth = updateWidth(numbersWithUpdatedHeight, width);
    
    let rows = generateRows(height);

    let resultArr = buildResult(numbersWithUpdatedWidth, rows)
    
    resultArr.forEach(row => {
        result += row.join('') + '\n'
    })

    // return result
    return resultArr
}