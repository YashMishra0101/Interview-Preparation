console.log("Js Practic is working");

// let arr=[7,89,34,67,2,,56,7]

let arr=[10,20,78,4,30,85,40,50,];
// let arr = [10, 85, 85, 85];
// let arr = [85, 85, 85, 10, 20, 5];

let maxValue = Math.max(arr[0], arr[1]);

let minValue = Math.min(arr[0], arr[1]);

for (a = 2; a < arr.length; a++) {
  if (arr[a] > maxValue) {
    minValue = maxValue;
    maxValue = arr[a];
  } 
  if(minValue===maxValue || maxValue<minValue || minValue<arr[a]){
     minValue=arr[a]
     console.log("Hit");
  }
}

console.log(minValue);
