const productExceptSelf = nums => {
    const finalArr = new Array(nums.length).fill(1);
    let product = 1;
    // Left Product
    for (let i = 0; i < nums.length; i++) {
        finalArr[i] = finalArr[i] * product;
        product = product * nums[i];
    }
    product = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        finalArr[i] = finalArr[i] * product;
        product = product * nums[i];
    }
    return finalArr;
};

module.exports = productExceptSelf;
