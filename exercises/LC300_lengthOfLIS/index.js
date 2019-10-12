function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    let maxLength = 1;
    const maxLengthArray = new Array(nums.length).fill(1);
    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (nums[i] < nums[j]) {
                maxLengthArray[j] = Math.max(maxLengthArray[i] + 1, maxLengthArray[j])
            }            
        }
    }
    for (let element of maxLengthArray) {
        maxLength = element > maxLength ? element : maxLength;
    }
    return maxLength;
}

module.exports = lengthOfLIS;
