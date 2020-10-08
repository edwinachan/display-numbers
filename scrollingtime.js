const timeDisplay = require('./time');

let row1, row2, row3, rowLength;
let scrollRate = 0;

const addWhiteSpaces = arr => {
    let whiteSpace = ' '.repeat(10);
    arr.forEach(row => {
        row.unshift(whiteSpace);
        row.push(whiteSpace);
    })
}

const getLongTimeString = () => {
    let timeArr = timeDisplay();
    addWhiteSpaces(timeArr);
    for (let i = 0; i < timeArr.length; i++) {
        eval(`row${i + 1}  = timeArr[i].join('').repeat(3)`);
    }
    rowLength = row1.length;
}

const scroll = () => {
    let result = '';
    let substringToDisplay = scrollRate % rowLength;
    let logRow1, logRow2, logRow3;
    for (let i = 1; i < 4; i++) {
        eval(`logRow${i} = row${i}.substring(${substringToDisplay}) + row${i}.substring(0, ${substringToDisplay})`);
    }
    result = logRow1 + '\n' + logRow2 + '\n' + logRow3;
    console.log(result);
    scrollRate++;
    setTimeout(console.clear, 100);
}

const scrollingTimeDisplay = () => {
    getLongTimeString();
    scroll();
}

module.exports = scrollingTimeDisplay;