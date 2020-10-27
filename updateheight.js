const addHeight = ({ itemPart, index, height, updatedItem }) => {
    let duplicateRow = itemPart.slice().replace('_', ' ');
        for (let i = 0; i < height - 1; i++) {
            updatedItem.splice(index + indexShift, 0, duplicateRow);
        }
        indexShift += (height - 1);
};

const handleAllDots = height => {
    let arr = [];
    for (let i = 0; i < (height * 2) + 1; i++) {
        arr.push('    ');
    }
    arr.splice(height, 1, '  . ');
    arr.splice(height * 2, 1, '  . ');
    return arr;
};

let indexShift;

const updateHeight = ({ convertedInput, height }) => {
    let result = [];
    let arrayOfItems = convertedInput;
    arrayOfItems.forEach(item => {
        indexShift = 0;
        let updatedItem = item.slice();
        
        item.forEach((itemPart, index) => {
            if (itemPart.includes('|')) {
                addHeight({ itemPart, index, height, updatedItem });
            }
            if (itemPart.includes('.')) {
                const isFirstDot = index < 2;
                if (isFirstDot) {
                    updatedItem = handleAllDots(height);
                }
            }
        })
        result.push(updatedItem);
    })
    return result;
}

module.exports = updateHeight;