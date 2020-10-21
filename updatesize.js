const updateHeight = require('./updateheight');
const updateWidth = require('./updatewidth');
const convertInputToSegments = require('./convertInputToSegments');

const updateSize = props => {
    let input = convertInputToSegments(props.input);
    updateHeight(input, props.height);
    updateWidth(input, props.width);
    return input;
};

module.exports = updateSize;