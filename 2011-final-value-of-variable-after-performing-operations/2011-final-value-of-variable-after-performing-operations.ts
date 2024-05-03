function finalValueAfterOperations(operations: string[]): number {
    let ans: number = 0;
    
    for(let i=0; i<operations.length; i++){
        if(operations[i] === "++X" || operations[i] === "X++") 
            ans++;
        if(operations[i] === "--X" || operations[i] === "X--") 
            ans--;
    }
    return ans;
};