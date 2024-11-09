function maxDistance(colors: number[]): number {
   let color = colors.at(0) 
  let result = 0

  for(let i = 1, j = colors.length - 2; i < colors.length; i++, j--) {
    if(colors[i] !== color || colors[j] !== color) {
      result = Math.max(result, Math.abs(Math.max(i, j)))
    } 
  }

  return result
};