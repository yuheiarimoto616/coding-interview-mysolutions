// 122. Best Time to Buy and Sell Stock II (Medium) LeetCode
function maxProfit(prices) {
    let profit = 0;
    let prevBuyPrice = prices[0];
    for (let price of prices) {
        if (price > prevBuyPrice) {
            profit += price - prevBuyPrice;
        }

        prevBuyPrice = price;
    }

    return profit;
}

// function maxProfit(prices) {
//     let prevBuyPrice = prices[0];
//     let buyPrice  = prices[0];
//     let profit = 0;
//     let prevProfit = 0;

//     for (let price of prices) {
//         if (buyPrice > price) {
//             buyPrice = price;
//             continue;
//         }

//         if ((profit - prevProfit) + (price - prevBuyPrice) > (profit + (price - buyPrice))) {
//             profit = (profit - prevProfit) + (price - prevBuyPrice);
//             prevProfit = (price - prevBuyPrice);
//         } else {
//             profit += (price - buyPrice);
//             prevProfit = (price - buyPrice);
//             prevBuyPrice = buyPrice;
//         }

//         buyPrice = price;
//     }

//     return profit;
// }

let prices = [7,1,5,3,8,6,7];

let ret = maxProfit(prices);

console.log('ret :>> ', ret);