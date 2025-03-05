/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {

    let res = 1;
    for(let i=1; i<=n; i++){
        res = res+(4*i)-4;
    }
    return res;
};