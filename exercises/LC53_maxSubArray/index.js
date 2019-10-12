function maxSubArray(nums) {

    if (nums.length === 0) return 0;

    let max = nums[0];
    let previousMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const current = nums[i];
        const maxSum = Math.max(previousMax + current, current);
        max = Math.max(max, maxSum);
        previousMax = maxSum;
    }
    return max;
}

module.exports = maxSubArray;
