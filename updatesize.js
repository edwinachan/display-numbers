const updateHeight = require('./updateheight');
const updateWidth = require('./updatewidth');
const numbers = require('./numbers');

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

const updateSize = props => {
    let input = convertInputToSegments(props.input);
    updateHeight(input, props.height);
    updateWidth(input, props.width);
    return input;
};

module.exports = updateSize;