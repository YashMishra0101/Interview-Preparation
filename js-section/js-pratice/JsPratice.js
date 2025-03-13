// let checkPrime = (num) => {
//   for (let a = 2; a < num ; a++) {
//     for (let b = a; num % b === 0 ; b++) {
//       console.log("Not a Prime Number");
//       return;
//     }
//   }
//   console.log("It's a Prime Number");
// };

// checkPrime(13);


let checkPrime = (num) => {
    
      for (let b = 2; num % b === !0 ; b++) {
          for (let a = b; a < num ; a++) {
              console.log("It's a Prime Number");
              return;
            }
        }
        console.log("Not a Prime Number");
      
  };
  
  checkPrime(7);