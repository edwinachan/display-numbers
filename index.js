const { displayTime: displayTime } = require('./displaytime')

const logEverySecond = () => {
    console.log(displayTime());
    setTimeout(console.clear, 1000)
}

setInterval(logEverySecond, 1000);
