const segmentNumberDisplay = require('./segmentnumber');

const correctForSingleDigits = arr => {
    arr.forEach((time, index) => {
        if (time.length < 2) {
            arr[index] = '0'.concat(time);
        }
    })
    return arr;
}

const timeDisplay = (props) => {
    const hour = new Date().getHours().toString();
    const minute = new Date().getMinutes().toString();
    const seconds = new Date().getSeconds().toString();
    let timeArr = [hour, minute, seconds];
    
    let timeWithNoSingleDigits = correctForSingleDigits(timeArr);

    let time = timeWithNoSingleDigits.join(':');

    const timeProps = {
        input: time,
        height: props.height,
        width: props.width
    };

    return segmentNumberDisplay(timeProps);
}

module.exports = timeDisplay;
