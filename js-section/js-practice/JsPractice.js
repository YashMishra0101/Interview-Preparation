console.log("Working");
// 'use strict'

// let n = 10;

// const fiboNumber = (n) => {
//   if (n <= 0) return [];
//   if (n === 1) return [0];

//   let fiboNum = [0, 1];

//   for (let a = 2; a < n; a++) {
//     fiboNum.push(fiboNum[a - 2] + fiboNum[a - 1]);
//   }
//   return fiboNum;
// };

// console.log(fiboNumber(2));

// let n = 10;

// const getFiboNumber = (n) => {
//   if (n < 0) return null;
//   if (n === 1) return 0;
//   if (n === 2) return 1;

//   let pre = 0;
//   let curr = 1;

//   for (let a = 3; a <= n; a++) {
//     let temp = pre + curr;
//     pre = curr;
//     curr = temp;
//   }
//   return curr;
// };

// console.log(getFiboNumber(n));

// let n = 34;

// const positionOfFiboNum = (n) => {
//   if (n < 0) return "Invalid Number";
//   if (n === 0) return 1;
//   if (n === 1) return 2;
//   let prev = 0;
//   let curr = 1;
//   let position = 2;
//   while (curr < n) {
//     let temp = prev + curr;
//     prev = curr;
//     curr = temp;
//     position++;
//   }

//   return curr === n ? position : "Not a Fibonacci Number";
// };

// console.log(positionOfFiboNum(n));

// let n = 10;

// const sumOfFiboNum = (n) => {
//   if (n <= 0) return null;
//   if (n === 1) return 0;
//   if (n === 2) return 1;

//   let prev = 0;
//   let curr = 1;
//   let sum = prev + curr;

//   for (let a = 3; a <= n; a++) {
//     let temp = prev+curr;
//     prev = curr;
//     curr = temp;
//     sum += curr;
//   }
//   return sum;
// };

// console.log(sumOfFiboNum(10));
