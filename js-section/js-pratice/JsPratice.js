console.log("Js Practic is working");

let arrMinValue = (...arrsValues) => {
  let minValue = arrsValues[0];
  for (let a = 1; a < arrsValues.length; a++) {
    if (minValue > arrsValues[a]) {
      minValue = arrsValues[a];
    }
  }
  return minValue;
};

console.log(arrMinValue(5,6,98,85,67,1,3));
