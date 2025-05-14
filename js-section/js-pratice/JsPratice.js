console.log("Js Practic is working");

let printPrimeNumber = (n) => {
  let storePrime = "";
  for (let a = 2; a <= n; a++) {
    let isPrime = true;
    for (let b = 2; b <= Math.sqrt(a); b++) {
      if (a % b === 0) {
        isPrime = false;
      }
    }
     if(isPrime){
      storePrime+=a + " ";
    }
  }
  return storePrime;
};

console.log(printPrimeNumber(25));
