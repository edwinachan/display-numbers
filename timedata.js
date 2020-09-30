const TimeHelpers = require('./timehelpers');
const Helpers = require('./helpers');

exports.getHoursSegments = () => {
    const hours = new Date().getHours()
    const numbersToPrint = ('' + hours).split('');
    const hourSegments = Helpers.convertToSegments(numbersToPrint);
    if (hourSegments.length < 2) {
        TimeHelpers.prefixWithZero(hourSegments);
    }
    TimeHelpers.addSeparator(hourSegments);
    return hourSegments;
};

exports.getMinutesSegments = () => {
    const minutes = new Date().getMinutes()
    const numbersToPrint = ('' + minutes).split('');
    const minuteSegments = Helpers.convertToSegments(numbersToPrint);
    if (minuteSegments.length < 2) {
        TimeHelpers.prefixWithZero(minuteSegments);
    }
    TimeHelpers.addSeparator(minuteSegments);
    return minuteSegments;
};

exports.getSecondsSegments = () => {
    const seconds = new Date().getSeconds()
    const numbersToPrint = ('' + seconds).split('');
    const secondsSegments = Helpers.convertToSegments(numbersToPrint);
    if (secondsSegments.length < 2) {
        TimeHelpers.prefixWithZero(secondsSegments);
    }
    return secondsSegments;
};