console.log("Working");

// let arr = [2, 78, 9, 23, 3, -5, 0, 95, 1, 54, 77, -88, 78];

// let bubbleSort=(arr)=>{
//   for(let a=0; a<arr.length; a++){
//     let isSorted=false;
//     for(let b=0; b<arr.length-a-1; b++){
//       if(arr[b]>arr[b+1]){
//           let temp=arr[b];
//           arr[b]=arr[b+1];
//           arr[b+1]=temp;
//           isSorted=true;
//       }
//     }
//    if(!isSorted){
//     break;
//    }
//   }
//   return arr;
// }

// console.log(bubbleSort(arr))

// let selectionSort = (arr) => {
//   for(let a=0; a<arr.length-1; a++){
//     let minValue=a;
//     for(let b=a+1; b<arr.length; b++){
//       if(arr[b]<arr[minValue]){
//         minValue=b;
//       }
//     }
//     if(minValue !== a){
//       let temp=arr[minValue];
//       arr[minValue]=arr[a];
//       arr[a]=temp;
//     }
//   }
//   return arr;
// };

// console.log(selectionSort(arr));

// let arr = [2, 78, 9, 23, 3, -5, 0, 95, 1, 54, 77, -88, 78];

// let one="Yash";

// let two=one;

// two="yashji";

// console.log(one);
// console.log(two);

// console.log("---------------------------------------");

// let userInfo={
//     name:'ram',
//     age:"21"
// }
// let newAge=userInfo.age="23"

// console.log(userInfo.age);
// console.log(newAge);

// let arr=[1,2,3,4,5];
// let change=arr;

// change[0]=8888;
// console.log(change);

//--n to 1  -----------> I understand how it is working

// let see = (num) => {
//   if (num===0) return;
//   console.log(num);
//   see(num-1);
// };

// see(5);

//--1 to n -------> But I am not able to understand how it is working

// let seeTwo = (num) => {
//   if (num===0) return;
//   see(num-1);
//   console.log(num);
// };

// seeTwo(5);

//--Sum of numbers

// let sumOfNumber = (num) => {
//   if (num == 1) return 1;

//   return num + sumOfNumber(num - 1);
// };

// console.log(sumOfNumber(5));

//--Factorial of number

// let fact=(n)=>{
//  if(n===1) return 1;
//  return n*fact(n-1)
// }

// console.log(fact(5));

// let fibo = (n) => {
//   if (n <= 0) return [];
//   if (n === 1) return [0];
//   let storeFibo = [0, 1];

//   for (let a = 2; storeFibo[storeFibo.length - 1] <= n; a++) {
//     let calculate = storeFibo[a - 2] + storeFibo[a - 1];
//     storeFibo.push(calculate);
//     if (calculate >= n) {
//       break;
//     }
//   }
// return {
//     FiboSeries: storeFibo,
//     Position: storeFibo.indexOf(n)
//   };
// };

// console.log(fibo(1));

let fiboNum = (n) => {
  if (typeof n !== "number") {
    return "Please provide a valid number!";
  }
  if (n <= 0) return [];
  if (n === 1) return [0];
  let storeFibo = [0, 1];
  for (let a = 2; a < n; a++) {
    let calculate = storeFibo[a - 2] + storeFibo[a - 1];
    storeFibo.push(calculate);
  }
  return storeFibo;
};

console.log(fiboNum(15));

let fibo = (n) => {
  if (typeof n !== "number") {
    return "Please provide a valid number!";
  }
  if (n <= 0) return [-1];
  if (n === 1) return [0];

  let pre = 0;
  let curr = 1;

  for (let a = 2; a < n; a++) {
    let next = pre + curr;
    pre = curr;
    curr = next;
  }
  return curr;
};

console.log(fibo(10));

let fiboPosition = (n) => {
  if (n < 0) return [-1];
  if (n === 0) return [1];
  if (n === 1) return [2];

  let pre = 0;
  let curr = 1;
  let postion = 2;
  while (curr<n) {
    let next = pre + curr;
    pre = curr;
    curr = next;
    postion++;
  }
  return curr;
};

console.log(fiboPosition(21));
