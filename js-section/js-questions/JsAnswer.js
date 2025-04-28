console.log("Js Question Section");

/*
#Ans 1)

----Checking Even or Odd Number

let checkEvenOdd=(number)=>{
if(!Number.isInteger(number)){
  return "Please enter valid number";
}

return number %2===0 ? "Even number" : "Odd number";
}

console.log(checkEvenOdd(5));


----Printing Even Number Between the two number

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


----Printing Odd Number Between the two number

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


----Checking Prime Number

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

----Print Prime number between Two numbers

let printPrime = (valueOne, valueTwo) => {
  if (!Number.isInteger(valueOne) || !Number.isInteger(valueTwo)) {
    return "Please enter valid number";
  }

  if (valueOne > valueTwo) {
    return "Value one must be less than or equal to value two";
  }

  let storePrime = [];

  for (let check = Math.max(2, valueOne); check <= valueTwo; check++) {
    let isPrime = true;

    for (let a = 2; a <= Math.sqrt(check); a++) {
      if (check % a === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      storePrime.push(check);
    }
  }

  return storePrime.length === 0 ? "No Prime number available" : storePrime;
};

console.log(printPrime(2, 11));

#Ans 2

----1)

let patternOne = (num) => {
  let store = "";
  for (let i = 1; i <= num; i++) {
    for (let a = 1; a <= num; a++) {
      store += " * ";
    }
    store += "\n";
  }
  return store;
};

console.log(patternOne(5));

----2)

let patternTwo = (value) => {
  let store = "";
  for (let a = 1; a <= value; a++) {
    for (let b = 1; b <= a; b++) {
      store += " * ";
    }
    store += "\n";
  }
  return store;
};

console.log(patternTwo(5));

---3)

let patternThree = (number) => {
  let store = "";
  for (let a = 1; a <= number; a++) {
    for (let b = 1; b <= a; b++) {
      store += b + " ";
    }
    store += "\n";
  }
  return store;
};

console.log(patternThree(5));

---4)
let patternFour = (value) => {
  let store = "";
  for (let a = 1; a <= value; a++) {
    for (let b = 1; b <= a; b++) {
      store += a + " ";
    }
    store += "\n";
  }
  return store;
};

console.log(patternFour(5));

---5)
let patternFive = (value) => {
  let store = "";
  for (let a = value; a >= 1; a--) {
    for (let b = 1; b <=a; b++) {
      store += " * " ;
    }
    store += "\n";
  }
  return store;
};

console.log(patternFive(5));

---6)

let patternSix = (value) => {
  let store = "";
  for (let a = value; a >= 1; a--) {
    for (let b = 1; b <= a; b++) {
      store += b;
    }
    store += "\n";
  }
  return store;
};

console.log(patternSix(5));

---7)

let printPatternSeven = (number) => {
    let store = "";
    
    for (let a = 1; a <= number; a++) {
        for (let space = 1; space <= number - a; space++) {
            store += " ";  
        }
        for (let star = 1; star <= 2 * a - 1; star++) {
            store += "*";  
        }
        store += "\n";  
    }

    return store;
};

console.log(printPatternSeven(5));

---8)

let patternEight=(number)=>{
  let store="";
  for(let a=number; 1<=a; a--){
      for(let space=1; space<=number-a; space++){
          store+=" ";
      }
      for(let star=1; star<=2*a-1; star++){
          store+="*";
      }
       store+="\n";
  }
 return store;
}

console.log(patternEight(5))

---9)

let patternNine = (number) => {
  let store = "";

  for (let a = 1; a <= number; a++) {
    for (let space = 1; space <= number - a; space++) {
      store += " ";
    }
    for (let star = 1; star <= 2 * a - 1; star++) {
      store += "*";
    }
    store += "\n";
  }
  for (let a = number; 1 <= a; a--) {
    for (let space = 1; space <= number - a; space++) {
      store += " ";
    }
    for (let star = 1; star <= 2 * a - 1; star++) {
      store += "*";
    }
    store += "\n";
  }

  return store;
};

console.log(patternNine(5));

---10)

let patternTen=(value)=>{
    let store="";
    for(let a=1; a<=value*2-1; a++){
         let star=a;
         if(a>value){
             star=2*value-a;
         }
        for(let b=1; b<=star; b++){
            store+="*";
        }
        store+="\n";
    }
    return store;
}

console.log(patternTen(5))

---11)

let patternEleven = (number) => {
  let store = "";
  for (let a = 1; a <= number; a++) {
    for (let b = 1; b <= a; b++) {
      a % 2 === 0
        ? 
        b % 2 === 0 ? (store += 1 + " "): (store += 0 + " ")
        : 
        b % 2 === 0 ? (store += 0 + " "): (store += 1 + " ");
    }
    store += "\n";
  }
  return store;
};

console.log(patternEleven(5));

---12)

let patternTwelve=(number)=>{
    let store="";
    for (let a=1; a<=number; a++){
        for (let b=1; b<=a; b++){
            store +=b;
        }
        for(let c=1; c<=2*number-a*2;c++){
            store+=" ";
        }
        for(let d=a; 1<=d; d--){
            store+=d;
        }
        store+="\n";
    }
    return store;
}

console.log(patternTwelve(5))

--13)

let patternThirtheen=(n)=>{
    let store="";
    let c=1;
    for(let a=1; a<=n; a++){
        for(let b=1; b<=a; b++){
            store+=c+" ";
            c++;
        }
        store+="\n";
    }
    return store;
}

console.log(patternThirtheen(5))

--14)

let patternFourteen = (value) => {
  let store = "";
  for (let a = 1; a <= value; a++) {
    let print = 65;
    for (let b = 1; b <= a; b++) {
      (store += String.fromCharCode(print) + " "), print++;
    }
    store += "\n";
  }
  return store;
};

console.log(patternFourteen(5));

--15)

let patternFifteen=(value)=>{
    let store="";
    for (let a=value; a>=1; a--){
        let print=65;
        for (let b=1; b<=a; b++){
            store+=String.fromCharCode(print)+" ";
            print++;
        }
        store+="\n";
    }
    return store;
}

console.log(patternFifteen(5))

--16)

let patternFifteen = (value) => {
  let store = "";
  let print = 65;
  for (let a = 1; a <= value; a++) {
    for (let b = 1; b <= a; b++) {
      store += String.fromCharCode(print) + " ";
    }
    store += "\n";
    print++;
  }
  return store;
};

console.log(patternFifteen(5));

---17)

function patternSevenTeen(n) {
  let store = "";
  for (let a = 1; a <= n; a++) {
    let alphabet = 65;
    for (let space = 1; space <= n - a; space++) {
      store += " ";
    }
    for (let b = 1; b <= 2 * a - 1; b++) {
      store += String.fromCharCode(alphabet);
      if(b>=a){
        alphabet--
      }
      else{
        alphabet++
      }
    }
    store += "\n";
  }
  return store;
}

console.log(patternSevenTeen(5));

--18)

let patternEighteen=(n)=>{
    let store="";
  for(let a=0; a<n; a++){
      let alphabet=64;
      let print=alphabet+n-a;
      for(let b=0; b<=a; b++){
          store+=String.fromCharCode(print) + " ",
          print++;
      }
      store+="\n"
  }
  return store;
}

console.log(patternEighteen(5));

--19)

let patternNineteen = (n) => {
  let store = "";
  let startCount = n;
  let totalspace = 0;
 
    for (let firstPhase = 1; firstPhase <= n; firstPhase++) {
      for (let rightSideStar = 1; rightSideStar <= startCount; rightSideStar++) {
        store += "*";
      }
      for (let space = 1; space < totalspace * 2; space++) {
        store += " ";
      }
      for (let leftSideStar = 1; leftSideStar <= startCount; leftSideStar++) {
        store += "*";
      }
      store += "\n";
      if (firstPhase < n) {
        startCount--; //5-4-3-2-1
        totalspace++; //0-1-2-3-4
      } else {
        break;
      }
    }


    for (let secondPhase = 1; secondPhase <= n; secondPhase++) {
      for (let rightSideStar = 1;rightSideStar <= startCount;rightSideStar++
      ) {
        store += "*";
      }
      for (let space = 1; space < totalspace * 2; space++) {
        store += " ";
      }
      for (let leftSideStar = 1; leftSideStar <= startCount; leftSideStar++) {
        store += "*";
      }
      store += "\n";
      if (secondPhase < n) {
        startCount++;
        totalspace--;
      } else {
        break;
      }
    }
    return store;
};


console.log(patternNineteen(5));


--20)

let patternTwenty = (n) => {
  let store = "";
  let startCount = 1;
  let totalspace = n - 1;

  for (let firstPhase = 1; firstPhase <= n; firstPhase++) {
    for (let rightSideStar = 1; rightSideStar <= startCount; rightSideStar++) {
      store += "*";
    }
    for (let space = 1; space <= totalspace * 2; space++) {
      store += " ";
    }
    for (let leftSideStar = 1; leftSideStar <= startCount; leftSideStar++) {
      store += "*";
    }
    store += "\n";

    if (firstPhase < n) {
      startCount++;
      totalspace--;
    } else {
      startCount--;
      totalspace++;
    }
  }
  for (let secondPhase = 1; secondPhase < n; secondPhase++) {
    for (let rightSideStar = 1; rightSideStar <= startCount; rightSideStar++) {
      store += "*";
    }
    for (let space = 1; space <= totalspace * 2; space++) {
      store += " ";
    }
    for (let leftSideStar = 1; leftSideStar <= startCount; leftSideStar++) {
      store += "*";
    }
    store += "\n";
    if (secondPhase < n) {
      startCount--;
      totalspace++;
    } else {
      break;
    }
  }
  return store;
};

console.log(patternTwenty(5));


--21)
let patternTwentyOne=(n)=>{
    let store="";
    for(let a=1; a<=n; a++){
        for(let b=1; b<=n; b++){
            if(a===1 || b===1 || a===n || b===n){
                store+="*";
            }
            else{
                store+=" ";
            }
        }
        store+="\n";
    }
     return store;
}

console.log(patternTwentyOne(5))

22)

let patternTwentyOne=(n)=>{
    let store="";
    for(let a=1; a<=n; a++){
        for(let b=1; b<=n; b++){
            if(a===1 && (b===1 || b===n) || a===n && (b===1 || b===n) ||  a===2 && (b===2 || b===4)||  a===3 && b===3 || a===4 && (b===2 || b===4)){
                store+="*";
            }
            else{
                store+=" ";
            }
        }
        store+="\n";
    }
     return store;
}

console.log(patternTwentyOne(5))

23)

let partternTwentyThree = (n) => {
  let size = 2 * n - 1;
  let store ="";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let minimumNumber = Math.min(i, j, size - i - 1, size - j - 1);
      print = n - minimumNumber;
      store += print + " ";
    }
    store+="\n";
  }
  return store.trim();
};

console.log(partternTwentyThree(4));


*/
