console.log("Js Question Section");

/*
#Ans 1)

--Checking Even or Odd Number

let checkNumber = (num) => {
  if (typeof num !== "number" || !Number.isInteger(num)) {
    console.log("This is not a valid Number");
    return;
  }

  if (num % 2 === 0) {
    console.log("It's a even number");
  } else {
    console.log("It's a odd number");
  }
};

checkNumber(8);

---Printing Even Number Betwee the two number

let printEven = (numOne, numTwo) => {
  if (
    typeof !numOne === "number" ||
    typeof !numTwo === "number" ||
    !Number.isInteger(numOne) ||
    !Number.isInteger(numTwo)
  ) {
    console.log("Please Enter a Valid Number");
    return;
  }

  if (numOne >= numTwo) {
    console.log("Number-One Must be Less than Number Two");
    return;
  }

  if (numOne % 2 !== 0) {
    numOne++;
  }
  for (let a = numOne; numOne <= numTwo; numOne += 2) {
    console.log(numOne);
  }
};

printEven(3, 8);

---Printing Odd Number Betwee the two number

let printOdd = (numOne, numTwo) => {
  if (
    typeof !numOne === "number" ||
    typeof !numTwo === "number" ||
    !Number.isInteger(numOne) ||
    !Number.isInteger(numTwo)
  ) {
    console.log("Please Enter a Valid Number");
    return;
  }

  if (numOne >= numTwo) {
    console.log("Number-One Must be Less than Number Two");
    return;
  }

  if (numOne % 2 === 0) {
    numOne++;
  }
  for (let a = numOne; numOne <= numTwo; numOne += 2) {
    console.log(numOne);
  }
};

printOdd(2, 8);

*/