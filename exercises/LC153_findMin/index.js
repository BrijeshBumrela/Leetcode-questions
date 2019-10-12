function findMin(nums) {
    if (nums.length === 0) return [];
    if (nums.length === 1) return nums[0];

    let left = 0;
    let right = nums.length - 1;

    // Check if it's non-rotated
    if (nums[left] < nums[right]) return nums[0];

    while (left < right) {
        let mid = parseInt((left + right) / 2);
        let result = inflection(mid, nums);
        if (result[0]) {
            return result[1]; 
        }
        else {
            if (nums[mid] > nums[left]) {
                left = mid;
            } else {
                right = mid;
            }
        }
    }
}

function inflection(index, arr) {
    if (arr[index] < arr[index-1]) {
        return [true, arr[index]];
    } else if (arr[index] > arr[index+1]) {
        return [true, arr[index + 1]];
    } else {
        return [false];
    }
}


module.exports = findMin;
