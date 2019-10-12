const containsDuplicate = nums => {
    const visitedNums = {};
    for (let i = 0; i < nums.length; i++) {
        if (visitedNums.hasOwnProperty(nums[i])) {
            return true;
        }
        visitedNums[nums[i]] = 1;
    }
    return false;
};

module.exports = containsDuplicate;
