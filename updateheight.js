const addHeight = (props) => {
    let duplicateRow = props.itemPart.slice().replace('_', ' ');
        for (let i = 0; i < props.height - 1; i++) {
            props.updatedItem.splice(props.index + indexShift, 0, duplicateRow);
        }
        indexShift += (props.height - 1);
};

const handleAllDots = (height) => {
    let arr = [];
    for (let i = 0; i < (height * 2) + 1; i++) {
        arr.push('    ');
    }
    arr.splice(height, 1, '  . ');
    arr.splice(height * 2, 1, '  . ');
    return arr;
};

let indexShift;
let props;

const updateHeight = (arrayofItems, height) => {
    let result = [];
    arrayofItems.forEach(item => {
        indexShift = 0;
        let updatedItem = item.slice();
        
        item.forEach((itemPart, index) => {
            props = { itemPart, index, height, updatedItem };
            if (itemPart.includes('|')) {
                addHeight(props);
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