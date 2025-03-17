console.log("JS Practice Room Is Working");



let checkPrime = (numOne,numTwo) => {
  if(numOne==null || numTwo==null){
    return "Please enter a number"
  }

  if(isNaN(numOne) || isNaN(numTwo)|| typeof numOne!=="number" || typeof numTwo!=="number" ){
    return "Please enter a valid number"
  }
  
  if (numOne > numTwo) {
    return "First number must be smaller than or equal to number two";
  }
  
let printPrime=[];
  for (let a = numOne; a <= numTwo; a++) { 
    if (numOne % a === 0) {
      return printPrime.push(a)
    }
    else{
      
    }
    
   
  }
  return printPrime;

 
};

console.log(checkPrime(29,100));