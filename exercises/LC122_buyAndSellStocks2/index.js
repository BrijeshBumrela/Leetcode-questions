const buyAndSellStock2 = (prices) => {
    let buyingDay = 0, sellingDay, finalProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        const current = prices[i];
        if (current < prices[i - 1]) {
            if (sellingDay && sellingDay > buyingDay) {
                finalProfit += prices[sellingDay] - prices[buyingDay];
            }
            buyingDay = i;
        }
        else if (current >= prices[i - 1]) {
            sellingDay = i;

            if (i === prices.length - 1) {
                finalProfit += prices[i] - prices[buyingDay];
            }
        }
    }
    return finalProfit;
}

// console.log(buyAndSellStock2([7,1,5,3,6,4]));
// console.log(buyAndSellStock2([1,2,3,4,5]));
// console.log(buyAndSellStock2([7,6,4,3,1]));
console.log(buyAndSellStock2([1,9,6,9,1,7,1,1,5,9,9,9]));
