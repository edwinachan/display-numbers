const updateHeight = require('./updateheight');
const updateWidth = require('./updatewidth');
const convertInputToSegments = require('./convertInputToSegments');

const updateSize = props => {
    let input = convertInputToSegments(props.input);
    let inputUpdatedHeight = updateHeight(input, props.height);
    let inputUpdatedWidth = updateWidth(inputUpdatedHeight, props.width);
    return inputUpdatedWidth;
};

module.exports = updateSize;