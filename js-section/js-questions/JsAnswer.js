console.log("Js Question Section");

/*
#Ans 1)

--Checking Even or Odd Number

let checkEven = (number) => {
  if (number === "" || number===undefined || number===null) {
    return "Please Enter a Number";
  }
  if (
    typeof number !== "number" ||
    isNaN(number) ||
    !Number.isInteger(number)
  ) {
    return "Please Enter Valid Number";
  }
  

  return number%2===0 ? "It's an even number" : "It's an odd number";
};

console.log(checkEven(9));


---Printing Even Number Between the two number

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


let printEven = (numOne, numTwo) => {
  if (
    typeof numOne !== "number" ||
    typeof numTwo !== "number" ||
    !Number.isInteger(numOne) ||
    !Number.isInteger(numTwo)
  ) {
    throw new Error ("Please Enter a Valid Number")
  }

  if (numOne >= numTwo) {
    throw new Error("Number-One Must be Less than Number Two");
  }

  if (numOne % 2 !== 0) {
    numOne++;
  }
  let evenNumber=[];
  for (let a = numOne; a <= numTwo; a += 2) {
    evenNumber.push(a)
  }
};


console.log(printEven(2, 2)); // Throws an error: "Number-One must be less than Number-Two"

---Printing Odd Number Between the two number

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

--Printing prime  Number
let checkPrime = (num) => {
    if (num <= 1 ) {
        console.log("Not a Prime Number");
        return;
      }
  for (let a = 2; a < num; a++) {
    for (let b = a; num % b === 0; b++) {
      console.log("Not a Prime Number");
      return;
    }
  }
  console.log("It's a Prime Number");
};

checkPrime(11);

console.log(Math.sqrt(97));

let isPrime=(num)=>{
  if(typeof num==="number" || Number.isInteger(num)) {

  }
}

isPrime()

*/
