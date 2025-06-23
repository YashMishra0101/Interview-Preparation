console.log("Working");

//--n to 1

//Normal using for loop

// let printToN = (n) => {
//   for (let a = n; a > 0; a--) {
//     console.log(a);
//   }
// };

// printToN(5);

//Using Recursion

// let see = (num) => {
//   if (num===0) return;
//   console.log(num);
//   see(num-1);
// };

// see(5);

//--1 to n

// let oneToN = (n) => {
//   for (let a = 1; a <= n; a++) {
//     console.log(a);
//   }
// };

// oneToN(5);

let seeTwo = (num) => {
  if (num===0) return;
  console.log(num);
  seeTwo(num-1);
};

seeTwo(5);

// let sum = (n) => {
//   let total = 0;
//   for (let a = 1; a <= n; a++) {
//     total = total + a;
//   }
//   return total;
// };

// console.log(sum(5));

// let sumRecursion = (n) => {
//   if (n === 1) return 1;
//   return n + sumRecursion(n - 1);
// };

// console.log(sumRecursion(5));
