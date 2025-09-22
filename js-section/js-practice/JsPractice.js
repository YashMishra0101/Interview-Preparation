console.log("Working");
// 'use strict'

// const generateOTP = () => {
//   return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000).toString();
// };

// console.log(generateOTP());

// const generateOTP=(length)=>{
// if(length<=0) return;

// let min=10**(length-1);
// let max=10**length-1;
// return Math.floor(Math.random()*(max-min+1)+min).toString()
// }

// console.log(generateOTP(6));

// let radius=5;

// let result=2 * 22/7 * radius;
// console.log(result.toFixed(2));

// let arr=[10,20,30,40,50];

// let sum=0;
// for(let a=0; a<arr.length;a++){
//     sum+=arr[a]
// }

// console.log(sum);

// let sum=arr.reduce((prev,next)=>{
//  return prev+next;
// })

// console.log(sum);

// let arr = [10, 20, 78, 30, 85, 40, 50];

// let largest = arr[0];

// for (let a = 1; a < arr.length; a++) {
//   if (largest < arr[a]) {
//     largest = arr[a];
//   }
// }
// console.log(largest);

// console.log(Math.max(...arr));

// let arr = [10, 20, 78, 30, 85, 40, 50];

// let lowest = arr[0];

// for (let a = 1; a < arr.length; a++) {
//   if (lowest > arr[a]) {
//     lowest = arr[a];
//   }
// }
// console.log(lowest);

// console.log(Math.min(...arr));

// let arr1 = [10, 20, 78, 4, 30, 85, 40, 50, 80, 86, 99, 87, 89, 9, 98, 99];
// let arr2 = [50, 50, 50, 50];
// let arr3 = [99, 99, 99, 89, 87];

// const firstSecondLargest = (arr) => {
//   let firstLargest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let a = 0; a < arr.length; a++) {
//     if (arr[a] > firstLargest) {
//       secondLargest = firstLargest;
//       firstLargest = arr[a];
//     }
//     if (secondLargest < arr[a] && firstLargest > arr[a]) {
//       secondLargest = arr[a];
//     }
//   }
//   if (secondLargest === -Infinity) {
//     secondLargest = "No second largest";
//   }
//   return {
//     firstLargest,
//     secondLargest,
//   };
// };

// console.log(firstSecondLargest(arr3));
