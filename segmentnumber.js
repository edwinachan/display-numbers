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

const segmentNumberDisplay = (props) => {
        let result = '';
        
        let numbersToPrint = convertInputToSegments(props.time);
    
        let numbersWithUpdatedHeight = updateHeight(numbersToPrint, props.height);
    
        let numbersWithUpdatedWidthAndHeight = updateWidth(numbersWithUpdatedHeight, props.width);
        
        let rows = generateRows(props.height);
    
        let resultArr = buildResult(numbersWithUpdatedWidthAndHeight, rows);
        
        resultArr.forEach(row => {
            result += row.join('') + '\n';
        })
    
        return resultArr;
}

module.exports = segmentNumberDisplay;
