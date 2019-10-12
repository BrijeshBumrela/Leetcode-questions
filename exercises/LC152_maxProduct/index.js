function maxProduct(nums) {
    let previousMax = nums[0];
    let previousMin = nums[0];
    let max = nums[0];

    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    for (let i = 1; i < nums.length; i++) {
        const current = nums[i];
        const tempPreviousMax = previousMax;
        const tempPreviousMin = previousMin;

        previousMax = Math.max(current, current * tempPreviousMax, current * tempPreviousMin);
        previousMin = Math.min(current, current * tempPreviousMax, current * tempPreviousMin);
        max = Math.max(max, previousMax);
    }
    return max;
}

module.exports = maxProduct;
