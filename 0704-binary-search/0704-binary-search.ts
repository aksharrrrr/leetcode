function binarySearch(nums: number[], low: number, high: number, target: number): number {
    if(low > high) return -1;
    let mid: number = Math.floor((low + high)/2);
    if(nums[mid] == target) return mid;
    if(nums[mid] > target) {
        return binarySearch(nums, low, mid-1, target);
    }else {
        return binarySearch(nums, mid+1, high, target);
    }
}

function search(nums: number[], target: number): number {
    let low: number = 0;
    let high: number = nums.length-1;
    return binarySearch(nums, low, high, target);
};