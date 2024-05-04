function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let maxCandy: number = 0;
    let result: boolean[] = [];
    
    for(let i=0; i<candies.length; i++){
        maxCandy = Math.max(candies[i], maxCandy);
    }
    
    for(let i=0; i<candies.length; i++){
        result.push(candies[i]+extraCandies >= maxCandy ? true : false)
    }
    return result;
};