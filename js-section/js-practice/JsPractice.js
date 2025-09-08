console.log("Working");
// 'use strict'

// let arr=[10,20,30,40,50];

// let sum=0;
// for(let a =0; a<arr.length; a++){
//   sum+=arr[a];
// }

// console.log(sum);

// let total=arr.reduce((acc,next)=>{
//   return acc+next
// },0)
// console.log(total);
// let arr=[10,20,78,30,85,40,50,];

// let maxValue=arr[0];
// for(let a=1; a<arr.length; a++){
//   if(maxValue<arr[a]){
//      maxValue=arr[a]
//   }
// }

// console.log(maxValue);

// let maxValue=Math.max(...arr);
// console.log(maxValue);

// let arr1 = [10, 20, 78, 4, 30, 85, 40, 50, 80, 86, 99, 87, 89, 9, 98, 99];
// let arr2 = [50, 50, 50, 50];
// let arr3 = [99, 99, 99, 89, 87];

// let firstSecondMax = (arr) => {
//   let firstMax = -Infinity;
//   let secondMax = -Infinity;

//   for (let a = 0; a < arr.length; a++) {
//     if (firstMax < arr[a]) {
//       secondMax = firstMax;
//       firstMax = arr[a];
//     } else if (arr[a] > secondMax && arr[a] < firstMax) {
//       secondMax = arr[a];
//     }
//   }
//   return {
//     firstMax,
//     secondMax: secondMax === -Infinity ? "No second max present" : secondMax,
//   };
// };

// console.log(firstSecondMax(arr1));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let reverse=arr.reverse();
// console.log(reverse);

// let a = 0;
// let b = arr.length - 1;
// while (a < b) {
//   let temp = arr[a];
//   arr[a] = arr[b];
//   arr[b] = temp;
//   a++;
//   b--;
// }

// console.log(arr);

// let arr = [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0];

// let a = 0;
// let b = arr.length - 1;
// while (a < b) {
//   if (arr[a] === 1) {
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
//     b--;
//   }
//   if (arr[a] !== 1) {
//     a++;
//   }
// }

// console.log(arr);

let arr = [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0];

let a = 0;
let b = 0;

while (a < arr.length) {
  if (arr[a] === 0) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    b++;
  }
  a++;
}

console.log(arr);
