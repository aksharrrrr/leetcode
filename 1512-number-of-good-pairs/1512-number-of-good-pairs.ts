function numIdenticalPairs(nums: number[]): number {
    let cnt = 0;
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] == nums[j])
                cnt++;
        }
    }
    return cnt;
};