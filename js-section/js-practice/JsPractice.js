console.log("Working");
// 'use strict'

// let arr = [10, 20, 30, 40, 50];

// let arrTotal = 0;
// for (let a = 0; a < arr.length; a++) {
//   arrTotal += arr[a];
// }

// console.log(arrTotal);

// let arrTotal = 0;
// for (let value of arr) {
//   arrTotal += value;
// }
// console.log(arrTotal);

// let sum=arr.reduce((acc,next)=>{
// return acc+next;
// },0)

// console.log(sum);

// let arr=[10,20,78,30,85,40,50,];

// let maxValue=arr[0];

// for(let a=1; a<arr.length; a++){
//     if(maxValue<arr[a]){
//         maxValue=arr[a];
//     }
// }

// console.log(maxValue);

// let maxValue=Math.max(...arr);
// console.log(maxValue);

let arr = [10, 20, 78, 4, 30, 85, 40, 50];

// let minValue = arr[0];

// for (let a = 0; a < arr.length; a++) {
//   if (minValue > arr[a]) {
//     minValue = arr[a];
//   }
// }

// console.log(minValue);


let minValue=Math.min(...arr);
console.log(minValue);