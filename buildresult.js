const buildResult = (modifiedNumbers, rows) => {
    modifiedNumbers.forEach((part) => {
        for (let i = 0; i < rows.length; i++) {
            rows[i].push(part[i]);
        }
    })
    return rows;
}

module.exports = buildResult;
