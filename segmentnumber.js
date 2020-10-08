const numbers = require('./numbers');
const updateHeight = require('./updateheight');
const updateWidth = require('./updatewidth');
const buildResult = require('./buildresult');
const generateRows= require('./generaterows');

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

const segmentNumberDisplay = (input, height, width) => {
        let result = '';
        
        let numbersToPrint = convertInputToSegments(input);
    
        let numbersWithUpdatedHeight = updateHeight(numbersToPrint, height);
    
        let numbersWithUpdatedWidthAndHeight = updateWidth(numbersWithUpdatedHeight, width);
        
        let rows = generateRows(height);
    
        let resultArr = buildResult(numbersWithUpdatedWidthAndHeight, rows);
        
        resultArr.forEach(row => {
            result += row.join('') + '\n';
        })
    
        return resultArr;
}

module.exports = segmentNumberDisplay;
