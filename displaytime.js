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
    
    let time = correctForSingleDigits(timeArr);

    let result = time.join(':')

    return displayNumber(result, 1, 1)
}