/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let n = nums.length;
    let i = n - 2;

    // Find the first decreasing element
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // If the entire array is non-increasing, it's the last permutation
    if (i < 0) {
        nums.reverse();
        return; // There is no next permutation
    }

    // Find the element just larger than nums[i] to the right of i
    let j = n - 1;
    while (nums[j] <= nums[i]) {
        j--;
    }

    // Swap the found elements
    [nums[i], nums[j]] = [nums[j], nums[i]];

    // Reverse the sequence after the position i
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};