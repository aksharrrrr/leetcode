function maxScore(cardPoints: number[], k: number): number {
    let total = 0;
    for(let i=0; i<k; i++){
        total += cardPoints[i];
    }
    
    let maxsum = total;
    for(let j=0; j<k; j++){
        total = total - cardPoints[k-j-1] + cardPoints[cardPoints.length-j-1];
        maxsum = Math.max(total, maxsum);
    }
    return maxsum;
};

// 1 2 3 lsum = 6 rsum = 0  6 temp =4 k =3
// 1 2 1 lsum = 3 rsum = 1  4 temp =3 k =3
// 1 6 1 lsum = 1 rsum = 7  8 temp = 2 k =3
// 5 6 1 lsum = 0 rsum = 12 12


// 2 2 lsum = 4 rsum = 0 4 
// 2 2 lsum = 2 rsum = 2 4
// 2 2 lsum = 0 rsum = 4 4