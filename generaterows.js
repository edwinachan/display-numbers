exports.generateRows = height => {
    let rows = [];
    const defaultHeight = 3;

    if (height > 1) {
        for (let i = 0; i < defaultHeight + Number(height) + (Number(height) - 2); i++) {
            rows.push([]);
        }
    } else {
        for (let i = 0; i < defaultHeight; i++) {
            rows.push([]);
        }
    }
    return rows;
}
