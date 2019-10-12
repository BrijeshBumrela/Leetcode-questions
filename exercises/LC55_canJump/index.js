function canJump(nums) {
    // const dpArray = nums.map((num, index) => index === 0 ? true : false);
    const dpArray = new Array(nums.length).fill(false);
    dpArray[0] = true;


    for (let j = 1; j <= dpArray.length; j++) {
        for (let i = 0; i <= dpArray.length - 1; i++) {
            if (dpArray[i] === false) continue;
            if (nums[i] + i >= j) {
                dpArray[j] = true;
                break;
            };
        }
    }

    return dpArray[dpArray.length - 1];
}

module.exports = canJump;
