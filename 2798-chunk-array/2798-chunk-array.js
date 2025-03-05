/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if(arr.length === 0 | size <1) return [];
    return [arr.slice(0, size), ...chunk(arr.slice(size), size)];
};
