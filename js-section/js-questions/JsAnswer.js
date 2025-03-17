console.log("Js Question Section");

/*
#Ans 1)

--Checking Even or Odd Number

let checkNumber = (num) => {
  // I use '== null' instead of '=== null' because it checks for both 'null' and 'undefined' in a single condition,
  // avoiding the need to write 'number === null || number === undefined' separately.

  if (num == null) {
    return "Please enter a number";
  }
  if (!Number.isInteger(num)) {
    return "Please Enter a valid number";
  }

  return num % 2 === 0 ? "It is a even number" : "It is a odd number";
};

console.log(checkNumber());


---Printing Even Number Between the two number

let printEven = (numOne, numTwo) => {
  if (numOne == null || numTwo == null) {
    return "Please enter a number";
  }

  if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
    return "Please enter a valid number";
  }

  if (numOne > numTwo) {
    return "Number one must be less than or equal to number two";
  }

  if (numOne % 2 !== 0) {
    numOne++;
  }

  let printEven = [];
  for (let a = numOne; a <= numTwo; a += 2) {
    printEven.push(a);
  }

  return printEven.length !== 0 ? printEven : "No Even number available";
};

console.log(printEven(9, 15));

---Printing Odd Number Between the two number

let printOdd = (numOne, numTwo) => {
  if (numOne == null || numTwo == null) {
    return "Please enter the number";
  }
  if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
    return "Please enter a valid number";
  }

  if (numOne > numTwo) {
    return "Number one must be less or equal to Number Two";
  }

  if (numOne % 2 === 0) {
    numOne++;
  }
  let printOdd = [];
  for (let a = numOne; a <= numTwo; a += 2) {
    printOdd.push(a);
  }
  return printOdd.length !== 0 ? printOdd : "No odd number available";
};

console.log(printOdd(7, 15));


--Printing prime  Number

let checkPrime = (num) => {
  if(num==null){
    return "Please enter a number"
  }

  if(isNaN(num) || typeof num!=="number"){
    return "Please enter a valid number"
  }
  
  if (num <= 1) {
    return "It is not a prime number";
  }

  for (let a = 2; a <= Math.sqrt(num); a++) {
    if (num % a === 0) {
      return "It is not a prime number";
    }
  }
  return "It is a prime number";
};

console.log(checkPrime(8));


*/
