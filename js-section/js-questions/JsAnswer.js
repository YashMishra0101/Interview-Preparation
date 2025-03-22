console.log("Js Question Section");

/*
#Ans 1)

--Checking Even or Odd Number

let checkEvenOdd=(number)=>{
if(!Number.isInteger(number)){
  return "Please enter valid number";
}

return number %2===0 ? "Even number" : "Odd number";
}

console.log(checkEvenOdd(5));


---Printing Even Number Between the two number

let printEvenNumbers = (valueOne, valueTwo) => {
  if (!Number.isInteger(valueOne) || !Number.isInteger(valueTwo)) {
    return "Please enter valid number";
  }

  if(valueOne>valueTwo){
    return "Value one must be less than equal to value two"
  }

  if(valueOne%2 !==0){
    valueOne++;
  }

  let storeEven=[];
  for (let a=valueOne; a<=valueTwo; a +=2){
       storeEven.push(a)
  }
  return storeEven.length !==0 ? storeEven : "No even number available";
};

console.log(printEvenNumbers(2,2));


---Printing Odd Number Between the two number

let printOddNumbers = (numOne, numTwo) => {

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

console.log(printOddNumbers(7, 15));


--Checking prime  Number

let checkPrimeNumber = (number) => {
  if (!Number.isInteger(number)) {
    return "Please enter a valid number";
  }

  if (number <= 1) {
    return "It is not a prime number";
  }

  for (let check = 2; check <= Math.sqrt(number); check++) {
    if (number % check === 0) {
      return "It is not a prime number";
    }
  }
  return "It's a prime number";
};

console.log(checkPrimeNumber(8));

--Print Prime number between Two numbers

let checkPrime = (valueOne, valueTwo) => {
  if (valueOne == null || valueTwo == null) {
    return "Please enter the value";
  }

  if (valueOne > valueTwo) {
    return "Value one must be less than or equal to value two";
  }

  if (
    typeof valueOne !== "number" ||
    typeof valueTwo !== "number" ||
    isNaN(valueOne) ||
    isNaN(valueTwo) ||
    !Number.isInteger(valueOne) ||
    !Number.isInteger(valueTwo)
  ) {
    return "Please enter the valid value";
  }
  let storePrime = [];
  for (let numOne = Math.max(2, valueOne); numOne <= valueTwo; numOne++) {
    let isPrime = true;
    for (let check = 2; check <= Math.sqrt(numOne); check++) {
      if (numOne % check === 0) {
        isPrime=false;
        break;
      }
    }
    if (isPrime) {
      storePrime.push(numOne);
    }
  }
  return storePrime.length !== 0 ? storePrime : "No Prime number available";
};

console.log(checkPrime(2,10));
*/
