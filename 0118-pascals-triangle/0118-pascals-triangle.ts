function generate(numRows: number): number[][] {
    let result: number[][] = [[1]];
    
   let prev: number[] = [1];

    
    for(let i = 1; i<numRows; i++){
        let curr: number[] =[1];
        
        for(let j=0; j<prev.length-1; j++){
            curr.push(prev[j]+prev[j+1]);
        }
        curr.push(1);
        prev = curr;
        result.push(curr);
    }
   
    return result;
    
};