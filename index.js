const scrollingTimeDisplay = require('./scrollingtime');

const props = {
    height: process.argv.slice(2)[0],
    width: process.argv.slice(2)[1]
};

function getScrollingTimeDisplay() {
    scrollingTimeDisplay(props);
};

setInterval(getScrollingTimeDisplay, 100);


