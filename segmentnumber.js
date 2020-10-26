const updateSize = require('./updatesize');
const buildResult = require('./buildresult');
const generateRows= require('./generaterows');

const segmentNumberDisplay = (props) => {
        let updatedInput = updateSize(props);
        
        let rows = generateRows(props.height);
    
        let resultArr = buildResult(updatedInput, rows);

        let result = '';
        
        resultArr.forEach(row => {
            result += row.join('') + '\n';
        })
    
        return resultArr;
}

module.exports = segmentNumberDisplay;
