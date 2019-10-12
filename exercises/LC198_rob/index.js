function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    let doublePreviousMax = nums[0];
    let previousMax = Math.max(nums[0], nums[1]);
    let max;
    for (let i = 2; i < nums.length; i++) {
        max = Math.max(doublePreviousMax + nums[i], previousMax);
        doublePreviousMax = previousMax;
        previousMax = max;
    }
    return max;
}

module.exports = rob;
