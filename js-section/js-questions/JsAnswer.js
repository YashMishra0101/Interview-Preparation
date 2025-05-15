console.log("Js Question Section");

/*
#Secion One
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


#Ans 2 : Printing Prime number from 2 to n .

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


#Ans 3 : Patterns Question Answer

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
  let store = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let minimumNumber = Math.min(i, j, size - i - 1, size - j - 1);
      let print = n - minimumNumber;
      store += print + " ";
    }
    store += "\n";
  }
  return store;
};

console.log(partternTwentyThree(4));

#Secion 3

---24)

??Concatenation :
Concatenation in JavaScript means joining two or more strings together to form a single string.
It is usually done using the + operator.

??Coercion (koversion) :
Coerced (koverced) means js automatic convert one data type into another data type.
Note: 
🤚🙎‍♂️ In JavaScript, type coercion is the automatic or implicit conversion of values "from one data type to 
another" (It converts one data type to another depending on the situation). It doesn't just convert to strings — depending on the context, it can also convert values to numbers,
booleans, or other types during operations.

let a=9;
let b=9;
let c="5";
let d="3";
let e=undefined;
let f=null;


1)console.log(a+b)
output=18 (Simple addtion)

2)console.log(c+d)
output=53 (This is string concatenation,Because both operands c and d are string , so JavaScript simply joins them called concatenation)

3)console.log(a+c)
ouptu=95 (This is type coercion + string concatenation. Since one operand (a) is a number and the other (c) is a string, JavaScript converts the number to a string, now both are string then it concatenates both the strings.)

4)console.log(e+a)
undefined+9=NaN 
output=NaN (Coerced means js automatic convert one data type into another data type so undefined is not a number, but when JS tries to convert it to a number, it becomes NaN and NaN + 9= NaN and if "9" is a string so it gives us NaN9)

5)console.log(e+d);
output:undefined + "3"= undefined3 (d is a string so js coverted undefined into string)

6)console.log(a+f);
output:9+null=9

7)console.log(d+f);
output:"3"+null=3null (d is a string so js converted null to the string);

8)console.log("Sum of a + b = " + a + b);
output=Sum of a + b = 99

9)console.log(a + b+ " is a sum of a + b");
output=18 is a sum of a + b


🔥 Note 🤚🤚🤚
=> In JavaScript, if you use the + operator and one of the values is a string (like "3"), it will treat everything as a string and join them. 
For example, "3" + "3" gives "33". But with other operators like -, /, or %, JavaScript converts strings to numbers and then does normal
math. So "3" - "3" becomes 0, "3" / "3" becomes 1, and "3" % "3" becomes 0.

so apart form + , for -,/ and % js do normal maths it does care about string.

This means JavaScript behaves differently based on the operator you're using. The + operator is special—it acts like a joiner when 
strings are involved. But the rest (-, *, /, %) don’t care about strings; they’ll automatically convert string numbers to real numbers 
and do proper mathematical calculations. So "3" - 3 also becomes 0 because JS changes "3" to number 3 first.


//#25)

1)Using Third Variable

 let c;

 c=a;
 a=b;
 b=c;

 console.log(a);
 console.log(b);

2)Without using Third Vairble

 a=a+b;//630
 b=a-b;//630-600=30
 a=a-b;//630-30=600

 console.log(a,b);

3)Swapping using Destructuring Assignment
[a,b]=[b,a]
console.log("a=",a);
console.log("b=",b);

#26)

let x = 1;
let y = 2;
let z = 3;

[x,y,z]=[y,z,x]
console.log(x,y,z);

#27)
let a=8;
let b=2;

console.log(8%2)//0
console.log(2%8)//2

#28)
let a=5859;

console.log(Math.floor(a/10));//585
console.log(a%10); //9

#29)

console.log(10>5 && -55<56 && 67<88)//ture
console.log(10>5  -55<56 && 67>88)//false
console.log(100=="100" || 2>-9 || 88<102)//true
console.log(100==="100" || 2>-9 || 88<102)//true
console.log(100==="100" || 2>-9 || 88>102)//true
console.log(100==="100" || 2<-9 || 88>102)//false


*/
