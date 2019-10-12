// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,2,4], 9) --> [1,2]

function twoSum(nums, target) {
    const visitedNums = {};
    for (let i = 0; i < nums.length; i++) {
        const required = target - nums[i];
        if (visitedNums[required] !== undefined) {
            return [i, visitedNums[required]].sort((a, b) => a - b);
        }
        // * Here if you add this visitedNums[nums[i]] at the beginning of the loop
        // * Then there will be error.
        // * Example  [3] this will return [0, 0] although it's wrong
        // * Hence always add at the end of loop

        visitedNums[nums[i]] = i;
    }
}

module.exports = twoSum;
