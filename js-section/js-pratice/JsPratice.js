console.log("Js Practic is working");

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
