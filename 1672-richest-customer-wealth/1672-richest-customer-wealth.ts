function maximumWealth(accounts: number[][]): number {
    let max: number = 0;
    for(let i =0; i<accounts.length; i++){
        let temp: number = 0;
        for(let j=0; j<accounts[0].length; j++){
            temp += accounts[i][j];
        }
        max = temp > max ? temp : max;
    }
    return max;
};