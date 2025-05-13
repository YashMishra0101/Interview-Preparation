console.log("Js Practic is working");

let printPrimeNumber = (n) => {
  let storePrime = "";
  for (let a = 2; a <= n; a++) {
    for (let b = 2; b < Math.sqrt(a); b++) {
      let isprime = true;
      if (b % a === 0) {
        return (isprime = false);
      }
    }
    if (isprime ) storePrime += a + ",";
  }
  return storePrime;
};

console.log(printPrimeNumber(25));
