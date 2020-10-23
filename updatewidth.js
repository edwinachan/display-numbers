const addWidth = props => {
    let modifiedItemPart = props.itemPart.split('');
    for (let i = 0; i < props.width - 1; i++) {
        modifiedItemPart.splice(underscoreIndex, 0, '_');
    }
    props.item.splice(props.index, 1, modifiedItemPart.join(''));
};

const addSpaces = props => {
    let modifiedItemPart = props.itemPart.split('');
    for (let i = 0; i < props.width - 1; i++) {
        modifiedItemPart.splice(underscoreIndex, 0, ' ');
    }
    props.item.splice(props.index, 1, modifiedItemPart.join(''));
};

let underscoreIndex = 1;
let props;

const updateWidth = (arrayofItems, width) => {
    let result = [];
    arrayofItems.forEach(item => {
        item.forEach((itemPart, index) => {
            props = { itemPart, index, item, width };
            if (itemPart.includes('_')) {
                addWidth(props);
            } else {
                addSpaces(props);
            }
        })
        result.push(item);
    })
    return result;
}

module.exports = updateWidth;