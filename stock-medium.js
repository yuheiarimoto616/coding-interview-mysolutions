// 122. Best Time to Buy and Sell Stock II (Medium) LeetCode
function maxProfit(prices) {
    let prevBuyPrice = prices[0];
    let buyPrice  = prices[0];
    let profit = 0;
    let prevProfit = 0;

    for (let price of prices) {
        if (buyPrice > price) {
            buyPrice = price;
            continue;
        }

        if ((profit - prevProfit) + (price - prevBuyPrice) > (profit + (price - buyPrice))) {
            profit = (profit - prevProfit) + (price - prevBuyPrice);
            prevProfit = (price - prevBuyPrice);
        } else {
            profit += (price - buyPrice);
            prevProfit = (price - buyPrice);
            prevBuyPrice = buyPrice;
        }

        buyPrice = price;
    }

    return profit;
}

let prices = [7,6,4,3,1];

let ret = maxProfit(prices);

console.log('ret :>> ', ret);