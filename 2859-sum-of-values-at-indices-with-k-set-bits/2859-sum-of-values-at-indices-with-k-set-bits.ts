function sumIndicesWithKSetBits(nums: number[], k: number): number {
    let sum: number = 0;
    nums.forEach((num, index) => {
        let setCountBits = index.toString(2).split('').filter((n)=>n === '1' ).length;
        if(setCountBits === k) sum += num;
    })
    return sum;
};