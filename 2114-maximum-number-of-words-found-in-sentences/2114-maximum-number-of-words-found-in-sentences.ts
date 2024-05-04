function mostWordsFound(sentences: string[]): number {
    let maxLength: number = 0;
    for(let i=0; i<sentences.length; i++){
        let space: number = 0;
        for(let j=0; j<sentences[i].length; j++){
            space += sentences[i][j] === " " ? 1 : 0;
        }
        
        maxLength = Math.max(space+1, maxLength);
    }
    return maxLength;
};