function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    let cnt: number = 0;
    
    for(let i=0; i<hours.length; i++){
        cnt += hours[i]>=target ? 1 : 0;
    }
    return cnt;
};