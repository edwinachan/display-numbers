const updateHeight = (numbers, height) => {
    let result = [];
    numbers.forEach(numberPart => {
        if (height < 2) {
            result.push(numberPart);
            return numberPart;
        }

        let indexShift = 0;
        let updatedNumberPart = numberPart.slice();
        
        numberPart.forEach((part, index) => {
            if (part.includes('|')) {
                let duplicateRow = part.slice().replace('_', ' ');
                for (let i = 0; i < height - 1; i++) {
                    updatedNumberPart.splice(index + indexShift, 0, duplicateRow);
                }
                indexShift += (height - 1);
            }
            if (part.includes('.')) {
                if (index < 2) {
                    updatedNumberPart = [];
                    for (let i = 0; i < (height * 2) + 1; i++) {
                        updatedNumberPart.push('    ');
                    }
                    updatedNumberPart.splice(height, 1, '  . ');
                    updatedNumberPart.splice(height * 2, 1, '  . ');
                }
            }
        })
        result.push(updatedNumberPart);
    })
    return result;
}

module.exports = updateHeight;