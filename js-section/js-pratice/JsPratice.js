console.log("JS Practice Room Is Working");

let printEven = (numOne, numTwo) => {
  if (
    numOne === "" ||
    numTwo === "" ||
    numOne === null ||
    numTwo === null ||
    numOne === undefined ||
    numTwo === undefined
  ) {
    return "Please Enter a Number";
  }

  if (
    typeof numOne !== "number" ||
    typeof numTwo !== "number" ||
    !Number.isInteger(numOne) ||
    !Number.isInteger(numTwo)
  ) {
    return "Please Enter Valid Number";
  }

  if (numOne > numTwo) {
    return "Number One must be greater than Number Two";
  }
  if (numOne % 2 !== 0) {
    numOne++;
  }
  let printEven = [];
  for (let print = numOne; print < numTwo; print += 2) {
    printEven.push(print);
  }
  return printEven;
};

console.log(printEven(11,11));
