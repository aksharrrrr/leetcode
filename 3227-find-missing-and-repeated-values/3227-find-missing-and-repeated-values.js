/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let n = grid.length;
    let counter = new Array((n*n) + 1).fill(0);
    let duplicate, missing;

    for(let i = 0; i<n; i++){
        for(let j=0; j<n; j++){
            counter[grid[i][j]]++;
        }
    }

    for(let i=1; i<counter.length; i++){
        if(counter[i] === 0) missing =i;
        if(counter[i] === 2) duplicate = i;
    }

    return [duplicate, missing]
};