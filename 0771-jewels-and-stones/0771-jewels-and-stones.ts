function numJewelsInStones(jewels: string, stones: string): number {
    let jewelSet: Set<string> = new Set();
    
    for(const jewel of jewels){
        jewelSet.add(jewel);
    }
    
    let result: number = 0;
    for(const stone of stones){
        result += jewelSet.has(stone) ? 1 : 0;
    }
    return result;
};