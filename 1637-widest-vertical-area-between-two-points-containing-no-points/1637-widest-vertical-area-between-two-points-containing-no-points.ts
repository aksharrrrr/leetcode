function maxWidthOfVerticalArea(points: number[][]): number {
    const temp: number[] = points.map(point => point[0]);
    
    temp.sort((a,b) => a-b);
    let result: number  = 0;
    
    for(let i=1; i<points.length; i++){
        const width = temp[i]-temp[i-1];
        result = Math.max(result, width);
    }
    
    return result;
    
};