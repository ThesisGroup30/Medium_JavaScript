/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const n = prices.length;
    let cash = 0; // Represents the maximum profit with no stock in hand
    let hold = -prices[0]; // Represents the maximum profit with a stock in hand

    for (let i = 1; i < n; i++) {
        // Calculate the maximum profit if no stock is held or if a stock is held
        cash = Math.max(cash, hold + prices[i] - fee);
        hold = Math.max(hold, cash - prices[i]);
    }

    return cash;
};
