const { displayTime: displayTime } = require('./displaytime')

let rowOne = '';
let rowTwo = '';
let rowThree = '';
let scrollRate = 0;

const addWhiteSpaces = arr => {
    let whiteSpace = ' '.repeat(10);
    arr.forEach(row => {
        row.unshift(whiteSpace);
        row.push(whiteSpace);
    })
}

const getTime =() => {
    let timeArr = displayTime();
    addWhiteSpaces(timeArr)
    rowOne = timeArr[0].join('').repeat(3);
    rowTwo = timeArr[1].join('').repeat(3);
    rowThree = timeArr[2].join('').repeat(3);
};

const scroll = () => {
    let result = '';
    let logRowOne = rowOne.substring(scrollRate%120) + rowOne.substring(0,scrollRate%120);
    let logRowTwo = rowTwo.substring(scrollRate%120) + rowTwo.substring(0,scrollRate%120);
    let logRowThree = rowThree.substring(scrollRate%120) + rowThree.substring(0,scrollRate%120);
    result = logRowOne + '\n' + logRowTwo + '\n' + logRowThree;
    console.log(result)
    scrollRate++
    setTimeout(console.clear, 100)
}

setInterval(getTime, 1000);
setInterval(scroll, 100);

