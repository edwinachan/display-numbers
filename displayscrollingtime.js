const { displayTime: displayTime } = require('./displaytime')

let rowOne = '';
let rowTwo = '';
let rowThree = '';
let scrollRate = 0;
let rowLength;

const addWhiteSpaces = arr => {
    let whiteSpace = ' '.repeat(10);
    arr.forEach(row => {
        row.unshift(whiteSpace);
        row.push(whiteSpace);
    })
}

const getLongTimeString =() => {
    let timeArr = displayTime();
    addWhiteSpaces(timeArr)
    rowOne = timeArr[0].join('').repeat(3);
    rowTwo = timeArr[1].join('').repeat(3);
    rowThree = timeArr[2].join('').repeat(3);
    rowLength = rowOne.length;
};

const scroll = () => {
    let result = '';
    let logRowOne = rowOne.substring(scrollRate%rowLength) + rowOne.substring(0,scrollRate%rowLength);
    let logRowTwo = rowTwo.substring(scrollRate%rowLength) + rowTwo.substring(0,scrollRate%rowLength);
    let logRowThree = rowThree.substring(scrollRate%rowLength) + rowThree.substring(0,scrollRate%rowLength);
    result = logRowOne + '\n' + logRowTwo + '\n' + logRowThree;
    console.log(result)
    scrollRate++
    setTimeout(console.clear, 100)
}

exports.displayScrollingTime = () => {
    getLongTimeString();
    scroll();
}