const addHeight = (part, index, height, arr) => {
    let duplicateRow = part.slice().replace('_', ' ');
        for (let i = 0; i < height - 1; i++) {
            arr.splice(index + indexShift, 0, duplicateRow);
        }
        indexShift += (height - 1);
};

const handleDots = (height) => {
    let arr = [];
    for (let i = 0; i < (height * 2) + 1; i++) {
        arr.push('    ');
    }
    arr.splice(height, 1, '  . ');
    arr.splice(height * 2, 1, '  . ');
    return arr;
};

let indexShift;

const updateHeight = (arrayofItems, height) => {
    let result = [];
    arrayofItems.forEach(item => {
        indexShift = 0;
        let updatedItem = item.slice();
        
        item.forEach((part, index) => {
            if (part.includes('|')) {
                addHeight(part, index, height, updatedItem);
            }
            if (part.includes('.')) {
                let isFirstDot = index < 2;
                if (isFirstDot) {
                    updatedItem = handleDots(height);
                }
            }
        })
        result.push(updatedItem);
    })
    return result;
}

module.exports = updateHeight;