console.log("Js Practic is working");

// let checkPrime = (n) => {
//   for (let a = 2; a <= Math.sqrt(n); a++) {
//     let ans=true;
//     if (n % a === 0) {
//       ans = true;
//     }
//     return ans ? "Not a Prime Number" : "Prime Number";
//   }
// };

// console.log(checkPrime(8));


const checkPrime = (n) => {
  if (n < 2){
    return `${n} Not a Prime Number`;
  } 
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return `${n} Not a Prime Number`;
    }
  }
  return `${n} Prime Number`;
};

console.log(checkPrime(6));
