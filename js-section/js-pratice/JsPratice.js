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


// n to 1  -----------> I understand how it is working

let see = (num) => {
  if (num===0) return;
  console.log(num);
  see(num-1);
};

see(5);


//1 to n -------> But I am not able to understand how it is working

let seeTwo = (num) => {
  if (num===0) return;
  see(num-1);
  console.log(num);
};

seeTwo(5);