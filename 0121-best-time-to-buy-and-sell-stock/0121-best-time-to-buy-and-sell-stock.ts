function maxProfit(prices: number[]): number {
    let profit: number = 0;
    for(let i=0; i<prices.length-1; i++){
        for(let j=i+1; j<prices.length; j++){
            if(prices[j]-prices[i] > 0 && prices[j]-prices[i] >= profit){
                profit = prices[j]-prices[i];
            }else if(prices[j]-prices[i] <= 0){
                break;
            }
        }
    }
    return profit;
};