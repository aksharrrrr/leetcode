function runningSum(nums: number[]): number[] {
    let temp: number = 0;
    for(let i=0; i<nums.length; i++){
        nums[i] = nums[i]+ temp;
        temp = nums[i];
    }
    return nums;
};