// 121. Best Time to Buy and Sell Stock (Easy) from LeetCode
function maxProfit(prices) {
    let low = prices[0];
    let max = 0;

    for (let price of prices) {
        if (price < low) {
            low = price;
        } else {
            max = Math.max((price - low), max );
        }
    }

    return max;
}

let prices = [7,6,4,3,1];

let ret = maxProfit(prices);

console.log('ret :>> ', ret);