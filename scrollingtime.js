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

const getLongTimeString = props => {
    arrToDisplay = [];
    timeArr = timeDisplay(props);
    addWhiteSpaces(timeArr);
    for (let i = 0; i < timeArr.length; i++) {
        arrToDisplay.push(timeArr[i].join('').repeat(2));
    }
}

const getStringWithIndexShift = index => {
    let arr = []
    for (let i = 0; i < arrToDisplay.length; i++) {
        arr.push(arrToDisplay[i].substring(index) + arrToDisplay[i].substring(0, index));
    }
    return arr
};

const scroll = () => {
    let rowLength = arrToDisplay[0].length;
    let substringIndex = scrollRate % rowLength;
    let result = getStringWithIndexShift(substringIndex);
    result.forEach(row => {
        console.log(row);
    })
    scrollRate++;
    setTimeout(console.clear, 100);
}

const scrollingTimeDisplay = (props) => {
    getLongTimeString(props);
    scroll();
}

module.exports = scrollingTimeDisplay;