console.log("Js Practic is working");

let arr = [10, 20, 78, 4, 30, 85, 40, 50,80,86,99,87,89,9,98,99];
// let arr = [50, 50, 50, 50];
// let arr = [99, 99, 99,89, 87];

let firstMaxValue = Math.max(arr[0], arr[1]);
let secondMaxValue = Math.min(arr[0], arr[1]);

for (let a = 2; a < arr.length; a++) {
  if (arr[a]>firstMaxValue) {
    secondMaxValue = firstMaxValue;
    firstMaxValue = arr[a];
  }
  else if(arr[a]>secondMaxValue && arr[a] !== firstMaxValue){
    secondMaxValue=arr[a]
  }
}

console.log("First Max Value",firstMaxValue);
console.log("Second Max Value",secondMaxValue);





