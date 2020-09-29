exports.updateHeight = (numbers, height) => {
    let result = [];
    numbers.forEach(numberPart => {
        if (height < 2) {
            return numberPart
        }
        let updatedNumberPart = numberPart.slice();
        let indexShift = 0;
    
        numberPart.forEach((part, index) => {
            if (part.includes('|')) {
                let duplicateRow = part.slice().replace('_', ' ');
                for (let i = 0; i < height - 1; i++) {
                    updatedNumberPart.splice(index + indexShift, 0, duplicateRow)
                }
                indexShift += (height - 1);
            }
        })
        result.push(updatedNumberPart);
    })
    return result;
}