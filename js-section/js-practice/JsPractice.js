console.log("Working");
// 'use strict'

let n = 5;

const pattern = (count) => {
  let patternStore = "";
  for (let row = 0; row < count; row++) {
    for (let space = 0; space < row; space++) {
      patternStore += " ";
    }
    for (let star = row; star < 2 * count - row - 1; star++) {
      patternStore += "*";
    } 
    patternStore += "\n";
  }
  return patternStore;
};

console.log(pattern(n));
