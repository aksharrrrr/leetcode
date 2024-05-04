function decode(encoded: number[], first: number): number[] {
    let ans: number[] = [first]
    for(let i=0; i<encoded.length; i++){
        ans.push(encoded[i]^ans[i]);
    }
    return ans;
};