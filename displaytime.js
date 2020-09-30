const { displayNumber: displayNumber } = require('./displaynumber')

const correctForSingleDigits = arr => {
    arr.forEach((time, index) => {
        if (time.length < 2) {
            arr[index] = '0'.concat(time);
        }
    })
    return arr
};

exports.displayTime = () => {
    const hour = new Date().getHours().toString();
    const minute = new Date().getMinutes().toString();
    const seconds = new Date().getSeconds().toString();
    let timeArr = [hour, minute, seconds];
    
    let timeWithNoSingleDigits = correctForSingleDigits(timeArr);

    let time = timeWithNoSingleDigits.join(':')

    return displayNumber(time, 1, 1)
}