const addWidth = ({ itemPart, index, item, width }) => {
    let modifiedItemPart = itemPart.split('');
    for (let i = 0; i < width - 1; i++) {
        modifiedItemPart.splice(underscoreIndex, 0, '_');
    }
    item.splice(index, 1, modifiedItemPart.join(''));
};

const addSpaces = ({ itemPart, index, item, width }) => {
    let modifiedItemPart = itemPart.split('');
    for (let i = 0; i < width - 1; i++) {
        modifiedItemPart.splice(underscoreIndex, 0, ' ');
    }
    item.splice(index, 1, modifiedItemPart.join(''));
};

let underscoreIndex = 1;

const updateWidth = ({ inputUpdatedHeight, width }) => {
    let result = [];
    let arrayofItems = inputUpdatedHeight;
    arrayofItems.forEach(item => {
        item.forEach((itemPart, index) => {
            if (itemPart.includes('_')) {
                addWidth({ itemPart, index, item, width });
            } else {
                addSpaces({ itemPart, index, item, width });
            }
        })
        result.push(item);
    })
    return result;
}

module.exports = updateWidth;