console.log("Working");
// 'use strict'



let arr = [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0];

let a = 0;
let b = arr.length - 1;

while (a < b) {
  if (arr[a] === 1) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    b--;
  }
  if (arr[a] != 1) {
    a++;
  }
}

console.log(arr);



let arr=[0,0,1,0,1,0,1,1,0,1,0]

let a=0;
let b=0;

while(a<arr.length){
  if(arr[a]===0){
    temp=arr[a];
    arr[a]=arr[b]
    arr[b]=temp;
    b++;
  }
  a++;
}

console.log(arr);