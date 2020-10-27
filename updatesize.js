const updateHeight = require('./updateheight');
const updateWidth = require('./updatewidth');
const convertInputToSegments = require('./convertInputToSegments');

const updateSize = ({input, height, width}) => {
    let convertedInput = convertInputToSegments(input);
    let inputUpdatedHeight = updateHeight({ convertedInput, height });
    let inputUpdatedWidth = updateWidth({ inputUpdatedHeight, width });
    return inputUpdatedWidth;
};

module.exports = updateSize;