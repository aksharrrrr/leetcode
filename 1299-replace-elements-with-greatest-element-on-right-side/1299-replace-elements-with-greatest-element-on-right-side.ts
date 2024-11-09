function replaceElements(arr: number[]): number[] {
    // initial max -1
    let rightMax: number = -1;
    //reverse iteration
    // new max = max(oldmax, current value)
    for(let i = arr.length-1; i>=0; i--){
        let newMax = Math.max(rightMax, arr[i]);
        arr[i] = rightMax;
        rightMax = newMax;
    }
    return arr;
};