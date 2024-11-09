function replaceElements(arr: number[]): number[] {
    let result: number[] = [];
    for(let i=0; i<arr.length-1; i++){
        let max: number = 0;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] >= max)
                max = arr[j];
        }
        result.push(max);
    }
    result.push(-1);
    return result;
};