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

const getLongTimeString = ({ height, width }) => {
    arrToDisplay = [];
    let timeArr = timeDisplay({ height, width });
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

const scrollingTimeDisplay = ({ height, width }) => {
    getLongTimeString({ height, width });
    scroll();
}

module.exports = scrollingTimeDisplay;