/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let low: number =1;
    let high: number = n;
    
    while(low <= high){
            let mid: number = Math.floor((low+high)/2);

        let res: number = guess(mid);
        if(res === 0) return mid;
        if(res === 1) low = mid+1;
        else high = mid -1
    }
    return -1;
                                 
                                 
};