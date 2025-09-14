console.log("Working");
// 'use strict'

// let n = 5;

// const pattern = (count) => {
//   let patternStore = "";
//   for (let row = 0; row < 2 * count - 1; row++) {
//     let currentRow = row < count ? row : 2 * count - row - 2;
//     for (let space = 0; space < currentRow; space++) {
//       patternStore += " ";
//     }
//     let starCount = 2 * (count - currentRow) - 1;
//     for (let star = 0; star < starCount; star++) {
//       patternStore += "*";
//     }
//     patternStore += "\n";
//   }
//   return patternStore;
// };

// console.log(pattern(n));

// let n = 5;
// const Diamondpattern = (count) => {
//   let storePattern = "";
//   for (let upperRow = 1; upperRow <= count; upperRow++) {
//     for (let space = upperRow; space < count; space++) {
//       storePattern += " ";
//     }
//     for (let star = 1; star <= 2 * upperRow - 1; star++) {
//       storePattern += "*";
//     }
//     storePattern += "\n";
//   }

//   for (let bottomRow = count - 1; bottomRow >= 1; bottomRow--) {
//     for (let space = bottomRow; space < count; space++) {
//       storePattern += " ";
//     }
//     for (let star = 1; star <= 2 * bottomRow - 1; star++) {
//       storePattern += "*";
//     }
//     storePattern += "\n";
//   }
//   return storePattern;
// };

// console.log(Diamondpattern(n));

// let n = 3;
// let s = 1;
// let pattern = "";
// for (let a = 1; a <= n; a++) {
//   for (let b = 1; b <= n; b++) {
//     pattern += s + " ";
//     s++;
//   }
//   pattern += "\n";
// }

// console.log(pattern);


console.log(new Date().getFullYear())