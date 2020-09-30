const { displayNumber: displayNumber } = require('./displaynumber')

exports.displayTime = () => {
    const hour = new Date().getHours().toString();
    const minute = new Date().getMinutes().toString();
    const seconds = new Date().getSeconds().toString();
    let timeArr = [hour, minute, seconds];
    
    timeArr.forEach((time, index) => {
        if (time.length < 2) {
            timeArr[index] = '0'.concat(time);
        }
    })

    let result = timeArr.join(':')

    return displayNumber(result, 1, 1)
}