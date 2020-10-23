const timeDisplay = require('./time');

let scrollRate = 0;
let arrToDisplay;

const addWhiteSpaces = arr => {
    let whiteSpace = ' '.repeat(10);
    arr.forEach(row => {
        row.unshift(whiteSpace);
        row.push(whiteSpace);
    })
}

const getLongTimeString = (props) => {
    arrToDisplay = [];
    timeArr = timeDisplay(props);
    addWhiteSpaces(timeArr);
    for (let i = 0; i < timeArr.length; i++) {
        arrToDisplay.push(timeArr[i].join('').repeat(2));
    }
}

const scroll = () => {
    let resultArr = [];
    let rowLength = arrToDisplay[0].length;
    let substringToDisplay = scrollRate % rowLength;
    for (let i = 0; i < arrToDisplay.length; i++) {
        resultArr.push(arrToDisplay[i].substring(substringToDisplay) + arrToDisplay[i].substring(0, substringToDisplay));
    }
    resultArr.forEach(row => {
        console.log(row);
    })
    // console.log(resultArr.join(''))
    scrollRate++;
    setTimeout(console.clear, 100);
}

const scrollingTimeDisplay = (props) => {
    getLongTimeString(props);
    scroll();
}

module.exports = scrollingTimeDisplay;