function reversePrefix(word: string, ch: string): string {
    const index: number = word.indexOf(ch);
    if(index === -1) return word;
    
    const prefix: string = word.substring(0, index+1);
    const suffix: string = word.substring(index+1);
    
    const rePrefix: string = prefix.split('').reverse().join('');
    
    return rePrefix+suffix;
};