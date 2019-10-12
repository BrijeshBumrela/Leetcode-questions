const eraseOverlapIntervals = intervals => {
    if (intervals.length === 0) return 0;

    intervals.sort((a, b) => a[0] - b[0]);
    let count = 0;
    let end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        if (current[0] < end) {
            end = current[1] < end ? current[1] : end;
            count++;
        } else {
            end = Math.max(current[1], end);
        }
    }
    return count;
};

module.exports = eraseOverlapIntervals;
