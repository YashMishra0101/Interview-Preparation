// let isEven = (value) => {
//   let check = value % 2 === 0;
//   check
//     ? console.log(`${value} is a Even Number`)
//     : console.log(`${value} is Not a Even Number`);
// };

// isEven(false);

// let printEven = (value) => {
//   let a = 0;
//   for (let check = a; check <= value; check++) {
//     for (let print = check; print % 2 === 0; print++) {
//       console.log(print);
//     }
//   }
// };

// printEven(7);

// let isOdd = (value) => {
//   let check = value % 2 !== 0;
//   check
//     ? console.log(`${value} is a odd Number`)
//     : console.log(`${value} is Not a odd Number`);
// };

// isOdd(9);

// let printOdd = (value) => {
//   let a = 0;
//   for (check = a; check<=value; check++) {
//     for (let print = check; print % 2 !== 0; print++) {
//       console.log(print);
//     }
//   }
// };

// printOdd(9)

// function checkEvenOdd(value) {
//   if (typeof value !== 'number' || isNaN(value)) {
//     console.log(`${value} is not a valid number.`);
//     return;
//   }
//   if (!Number.isInteger(value)) {
//     console.log(`${value} is not an integer; please provide an integer value.`);
//     return;
//   }
//   if (value % 2 === 0) {
//     console.log(`${value} is an Even Number`);
//   } else {
//     console.log(`${value} is an Odd Number`);
//   }
// }

// // Example usage:
// checkEvenOdd(7);   // Output: 7 is an Odd Number
// checkEvenOdd(8);   // Output: 8 is an Even Number
// checkEvenOdd(7.5); // Output: 7.5 is not an integer; please provide an integer value.
// checkEvenOdd('a'); // Output: a is not a valid number.

let checkNumber = (value) => {
  if (typeof value !== "number" || !Number.isInteger(value)){
    console.log(`${value} is not a valid number`);
    return;
  }

  if (value % 2 === 0) {
    console.log(`${value} is a Even NUmber`);
  } else {
    console.log(`${value} is a Odd Number`);
  }
};


checkNumber(NaN)