const TimeData = require('./timedata');

const buildTime = (hoursSegments, minutesSegments, secondsSegments) => {
    let rowOne = [];
    let rowTwo = [];
    let rowThree = [];

    [hoursSegments, minutesSegments, secondsSegments].forEach(time => {
        time.forEach(segment => {
            rowOne += segment[0];
            rowTwo += segment[1];
            rowThree += segment[2];
        })
    })

    return {
        rowOne: rowOne,
        rowTwo: rowTwo,
        rowThree: rowThree
    }
}

exports.displayTime = () => {
    let hoursSegments = TimeData.getHoursSegments();
    let minutesSegments = TimeData.getMinutesSegments();
    let secondsSegments = TimeData.getSecondsSegments();

    let time = buildTime(hoursSegments, minutesSegments, secondsSegments);

    return time.rowOne + '\n' + time.rowTwo + '\n'  +time.rowThree;
}