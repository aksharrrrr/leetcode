function maxProfit(prices: number[]): number {
    let profit: number = 0;
    let minPrice: number = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<prices.length; i++){
       minPrice = Math.min(minPrice, prices[i]);
        profit = Math.max(profit, prices[i]-minPrice);
    }
    return profit;
};