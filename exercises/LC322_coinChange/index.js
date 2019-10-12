function coinChange(coins, amount) {
    const maxCoinsArray = new Array(parseInt(amount) + 1).fill(Infinity);
    maxCoinsArray[0] = 0;
    for (let i = 1; i < maxCoinsArray.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            const difference = i - coins[j];
            if (difference < 0) break;
            maxCoinsArray[i] = Math.min(maxCoinsArray[i], maxCoinsArray[difference] + 1);
        }
    }
    return maxCoinsArray[maxCoinsArray.length - 1] !== Infinity ? maxCoinsArray[maxCoinsArray.length - 1] : -1;
}
module.exports = coinChange;
