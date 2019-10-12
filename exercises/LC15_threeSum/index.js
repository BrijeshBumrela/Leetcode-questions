const threeSum = nums => {
    const sortedNums = nums.sort((a, b) => a - b);
    const finalArr = [];

    for (let i = 0; i < sortedNums.length; i++) {
        const fixed = sortedNums[i];
        const target = 0 - fixed;
        let left = i + 1;
        let right = sortedNums.length - 1;

        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

        while (left < right) {
            const start = sortedNums[left];
            const end = sortedNums[right];

            if (start + end === target) {
                finalArr.push([fixed, start, end]);
                left += 1;
                while(sortedNums[left] === sortedNums[left - 1]) {
                    left += 1;
                }
            }
            else if (start + end < target) {
                left += 1;
            }
            else { 
                right -= 1;
            }
        }
    }
    return finalArr;
};

module.exports = threeSum;
