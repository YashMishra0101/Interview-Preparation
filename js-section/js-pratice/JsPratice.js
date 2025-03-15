console.log("JS Practice Room Is Working");

// let checkPrime = (num) => {
//     if (num <= 1 ) {
//         console.log("Not a Prime Number");
//         return;
//       }
//   for (let a = 2; a < num; a++) {
//     for (let b = a; num % b === 0; b++) {
//       console.log("Not a Prime Number");
//       return;
//     }
//   }
//   console.log("It's a Prime Number");
// };

// checkPrime(11);

// console.log(Math.sqrt(97));

// let isPrime=(num)=>{
//   if(typeof num==="number" || Number.isInteger(num)) {

//   }
// }

// isPrime()




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


