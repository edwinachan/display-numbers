const updateSize = require('./updatesize');
const buildResult = require('./buildresult');
const generateRows= require('./generaterows');

const segmentNumberDisplay = ({ input, height, width}) => {
        let updatedInput = updateSize({ input, height, width});
        
        let rows = generateRows(height);
    
        let resultArr = buildResult(updatedInput, rows);

        let result = '';
        
        resultArr.forEach(row => {
            result += row.join('') + '\n';
        })
    
        return resultArr;
}

module.exports = segmentNumberDisplay;
