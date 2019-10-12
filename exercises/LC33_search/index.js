function search(nums, target) {
    const inflectionIndex = findInflection(nums);
    return Math.max(binarySearch(nums, target, 0, inflectionIndex),
        binarySearch(nums, target, inflectionIndex, nums.length - 1));
}

function findInflection(rotatedArr) {
    let left = 0;
    let right = rotatedArr.length - 1;

    if (rotatedArr.length === 1) return 0;

    // Non-rotated
    if (rotatedArr[left] < rotatedArr[right]) return 0;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (rotatedArr[mid] < rotatedArr[mid-1]) {
            return mid;
        } else if (rotatedArr[mid] > rotatedArr[mid+1]) {
            return mid + 1;
        }
        else {
            if (rotatedArr[mid] > rotatedArr[left]) {
                left = mid - 1;
            } else {
                right = mid + 1;
            }
        }
    }
}

function binarySearch(arr, target, left, right) {
    while (left <= right) {
        const mid = parseInt((left + right) / 2);
        if(arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        }
        if (arr[mid] > target) {
            right = mid - 1;
        }
    }
    return -1;
}

module.exports = search;
