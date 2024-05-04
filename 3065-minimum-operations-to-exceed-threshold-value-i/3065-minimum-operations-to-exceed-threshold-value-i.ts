function minOperations(nums: number[], k: number): number {
    nums.sort((a,b)=>a-b);
    let cnt: number = 0;
   for(let i=0; i<nums.length; i++){
        cnt += nums[i]<k ? 1 : 0;
    }
    return cnt;
};