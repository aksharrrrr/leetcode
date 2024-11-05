function containsDuplicate(nums: number[]): boolean {
    if(nums.length <=1 ) return false;
    
    let dup:Set<number> = new Set<number>();
    
    for(let i=0; i<nums.length; i++){
        if(dup.has(nums[i])){
            return true;
        }
        dup.add(nums[i])
    }
    return false;
};