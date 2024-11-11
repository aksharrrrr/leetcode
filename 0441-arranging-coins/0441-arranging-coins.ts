function arrangeCoins(n: number): number {
    let cnt: number = 1;
    
    if(n ===1) return cnt;
   while(n >= cnt) {
       n -= cnt;
       cnt++;
   }
    return cnt-1;
};


