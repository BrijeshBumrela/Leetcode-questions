const merge = intervals => {
    if (!intervals.length) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);
    const resultArr = [];

    for (let i = 0; i < intervals.length; i++) {
        if (i === 0) {
            resultArr.push(intervals[i]);
            continue;
        }
        const current = intervals[i];
        const previous = resultArr[resultArr.length - 1];

        // Checking if intervals overlap
        if (current[0] <= previous[1] && current[1] > previous[1]) {
            // End of current is higher than end of previous
            previous[1] = current[1];
        }
        if (current[0] > previous[1]) resultArr.push(current);
    }
    return resultArr;
};

module.exports = merge;
