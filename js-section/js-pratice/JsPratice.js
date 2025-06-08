console.log("Working");

function bubbleSort(arr) {
  for (let a = 0; a < arr.length; a++) {
    let isSort=false;
    for (let b = 0; b < arr.length; b++) {
      if (arr[b] > arr[b + 1]) {
        let temp = arr[b];
        arr[b] = arr[b + 1];
        arr[b + 1] = temp;
        isSort=true;
      }
    }
    if(!isSort){
        break;
    }
  }
  return arr;
}
let arr = [2, 78, 9, 23, 3, -5, 0, 95, 1, 54, 77, -88];
console.log(bubbleSort(arr));
