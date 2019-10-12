const findShortestSubArray = (nums) => {
    const hash = {}
    
    for (let num of nums) {
        hash[num] === undefined ? hash[num] = 1 : hash[num] += 1;
    }

    let maxValue = 0;
    for (let key in hash) {
        maxValue = Math.max(maxValue, hash[key]);
    }

    let maxOrderNumbers = [];
    for (let key in hash) {
        if ( hash[key] === maxValue ) {
            maxOrderNumbers.push(key);
        }
    }

    let minLengthObj = {}
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < maxOrderNumbers.length; j++) {
            if (nums[i] == maxOrderNumbers[j]) {
                minLengthObj[nums[i]] === undefined ? minLengthObj[nums[i]] = [i] : minLengthObj[nums[i]].push(i);
            }
        }
    }   
    let minLengthObjValue = Infinity;
    for (let key in minLengthObj) {
        const lengthOfArr = minLengthObj[key].length;
        minLengthObjValue = Math.min(minLengthObjValue, minLengthObj[key][lengthOfArr - 1] - minLengthObj[key][0] + 1);
    }

    return minLengthObjValue;
}

console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));