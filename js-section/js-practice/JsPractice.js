console.log("Working");
// 'use strict'

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
//   if(arr[a]!==1){
//     a++;
//   }
// }

// console.log(arr);

// let arr = [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0];

// let a=0;
// let b=0;

// while(a<arr.length){
//   if(arr[a]===0){
//     let temp=arr[a];
//     arr[a]=arr[b];
//     arr[b]=temp;
//     b++;
//   }
//   a++;
// }

// console.log(arr);

// let s="ramratan";

// for(let a=0; a<s.length; a++){
//   console.log(s[a]);
// }

// let s="ramratan";

// for(let a=s.length-1; a>=0; a--){
//   console.log(s[a]);
// }

// let a="abcdef";
// let a="aba"

// let check=a.split("").reverse().join("");

// if(a===check){
//   console.log("It's a palindrom");
// }else{
//   console.log("Not a palindrom");
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let target = 13;

// const checkTarget = (target) => {
//   let right = 0;
//   let left = arr.length - 1;
//   while (right < left) {
//     let total = arr[right] + arr[left];
//     if (total < target) {
//       right++;
//     } else if (total > target) {
//       left--;
//     } else {
//       console.log(`Found: ${arr[right]} + ${arr[left]} = ${total}`);
//       return;
//     }
//   }
//   console.log("No Target Found");
//   return;
// };

// checkTarget(13);

let a = "abcdef";

const checkPalindrom = (para) => {
  let a = 0;
  let b = para.length - 1;
  while (a < b) {
    if (para[a] !== para[b]) {
      return "Not a palindrom";
    }
    a++;
    b--;
  }
  return "It's a palindrom";
};

console.log(checkPalindrom(a));
