const numbers = require('./numbers');

exports.prefixWithZero = segment => {
    segment.splice(0, 0, numbers[0]);
};

exports.addSeparator = (timeSegments) => {
    timeSegments[1][0] += ' '
    timeSegments[1][1] += ' '
    timeSegments[1][2] += ':'
}