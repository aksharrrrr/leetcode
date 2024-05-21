/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let low: number = 0; 
    let mid: number = 0; 
    let high: number = nums.length-1;
    
    while(mid<=high){
        if(nums[mid] == 0){
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            low++;
            mid++;
        }else if(nums[mid] == 1){
            mid++;
        }else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};