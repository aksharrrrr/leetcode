function smallerNumbersThanCurrent(nums: number[]): number[] {
    let res: number[] = [];
    
    for(let i=0; i<nums.length; i++){
        let cnt: number = 0;
        for(let j=0; j<nums.length; j++){
            if(j != i)
            cnt += nums[j] < nums[i] ? 1 : 0;
        }
        res.push(cnt);
    }
    return res;
};