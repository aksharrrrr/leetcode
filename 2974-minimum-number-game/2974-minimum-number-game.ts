function numberGame(nums: number[]): number[] {
    let ans: number[] = [];
    nums.sort((a,b) => b-a);
    while(nums.length){
        let alice = nums.pop();
        let bob = nums.pop();
        ans.push(bob);
        ans.push(alice);
    }
    return ans;
};