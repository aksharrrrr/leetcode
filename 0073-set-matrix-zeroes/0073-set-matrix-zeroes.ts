/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const R: number = matrix.length;
    const C: number = matrix[0].length;

    const row: number[] = Array(R).fill(1);
    const col: number[] = Array(C).fill(1);

    for(let i=0; i<R; i++){
       for(let j = 0; j<C; j++){
           if(matrix[i][j] === 0) {
               row[i] = 0;
               col[j] = 0;
           }
       }
    }

    for(let i=0; i<R; i++){
        for(let j=0; j<C; j++){
            if(row[i] === 0 || col[j] === 0){
                matrix[i][j] = 0;
            }
        }
    }
};