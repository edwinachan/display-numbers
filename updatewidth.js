exports.updateWidth = (numbers, width) => {
    let result = [];
    numbers.forEach(numberPart => {
        if (width < 2) {
            result.push(numberPart);
            return numberPart;
        }

        let underscoreIndex;
        
        numberPart.forEach((part, index) => {
            if (part.includes('_')) {
                let modifiedPart = part.split('');
                underscoreIndex = modifiedPart.indexOf('_');
                for (let i = 0; i < width - 1; i++) {
                    modifiedPart.splice(underscoreIndex, 0, '_');
                }
                numberPart.splice(index, 1, modifiedPart.join(''));
            } else {
                let modifiedPart = part.split('');
                for (let i = 0; i < width - 1; i++) {
                    modifiedPart.splice(underscoreIndex, 0, ' ');
                }
                numberPart.splice(index, 1, modifiedPart.join(''));
            }
        })
        result.push(numberPart);
    })
    return result;
}