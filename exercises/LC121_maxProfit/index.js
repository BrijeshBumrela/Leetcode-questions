var maxProfit = function(prices) {
    let maxProfitValue = 0;
    let cheapestPrice = prices[0];
    for (let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i];
        cheapestPrice = Math.min(cheapestPrice, currentPrice);
        maxProfitValue = Math.max(maxProfitValue, currentPrice - cheapestPrice);
    }
    return maxProfitValue;
};

module.exports = maxProfit;
