function getRow(rowIndex: number): number[] {
    let prev: number[] = [1];
    
    for(let i = 1; i<=rowIndex; i++){
        let curr: number[] =[1];
        
        for(let j=0; j<prev.length-1; j++){
            curr.push(prev[j]+prev[j+1]);
        }
        curr.push(1);
        prev = curr;
    }
    return prev;
    
};