/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let left = [];
    let right = [];
    let cnt = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] < pivot) left.push(nums[i]);
        else if(nums[i] === pivot) cnt++;
        else right.push(nums[i]);
    }
    if(cnt > 0){
        while(cnt != 0){
            left.push(pivot);
            cnt--;

        }
    }
    const result = left.concat(right);
    return result;
};