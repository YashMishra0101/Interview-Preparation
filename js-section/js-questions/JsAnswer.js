console.log("Js Question Section");

/*
#Section One : Logical Building

#Ans 1)

----Checking Even or Odd Number

let checkEvenOdd=(number)=>{
if(!Number.isInteger(number)){
  return "Please enter valid number";
}

return number %2===0 ? "Even number" : "Odd number";
}

console.log(checkEvenOdd(5));

TC:O(1)
SC:O(1)


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

TC:O(N)
SC:O(N)


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

TC:O(N)
SC:O(N)


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

TC:O(√N)
SC:O(1)


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

TC:O(N√N)
SC:O(N)

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

TC:O(√N)
SC:O(N)


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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)


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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)


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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)

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

TC:O(N²)
SC:O(N²)

--22)

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

TC:O(N²)
SC:O(N²)

--23)

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

TC:O(N²)
SC:O(N²)
----------------------------------------------------------------------------------------------------------------
#Section 2 : For interviews

#Ans 1

In JavaScript, when you use the + operator with one operand being a number and the other 
operand being a string, JavaScript implicitly coerces the number to a string and performs 
string concatenation rather than addition.

>Note:
so apart form + , for -,/ and % js do normal maths it does care about string.

---a)
let a=5;
let b="10";

let a=5;
let b="10";

let c=b-a; //5 number
let c=b*a; //50 number
let c=b/a; //2 number
let c=b+a //105 string

---b)

let a=9;
let b=9;
let c="5";
let d="3";
let e=undefined;
let f=null;
let g=true;
let h=false;


console.log(a+b)//18
console.log(a+d)//53
console.log(a+c)//95
console.log(e+a)//NaN
console.log(e+d);//undefined3
console.log(a+f)//9
console.log(d+f);//3null
console.log(d-f);//3
console.log(d/f);//Infinite
console.log(a+g);//10
console.log(a-g);//8
console.log(b-h);//9
console.log(b+h);//9

console.log(a + b+ " is a sum of a + b");//18
console.log("Sum of a + b = " + a + b);//99
console.log("Sum of a + b = " , a + b);//18

This means JavaScript behaves differently based on the operator you're using. The + operator is special—it acts like a joiner when 
strings are involved. But the rest (-, *, /, %) don’t care about strings; they’ll automatically convert string numbers to real numbers 
and do proper mathematical calculations. So "3" - 3 also becomes 0 because JS changes "3" to number 3 first.


#Ans 2)

let functionOne = (parameter) => {
    return parameter();
}

let functionTwo = () => {
    return "Hello ji kaise ho aap";
}

console.log(functionOne(functionTwo));

#Ans 3)

  console.log("First Function Start");
  console.log("Second Function Start");
  console.log("Third Function");
  console.log("Second Function End");
  console.log("First Function End");

#Ans 4)

console.log("line number 1", undefined);
console.log("line number 3", 10);
console.log("line number 6",10); 
console.log("line number 4", undefined);
console.log("line number 2", 10);
console.log("line number 5", 20); 

#Ans 5)

console.log("line number 1", 10);
console.log("line number 6", 10);
console.log("line number 2", undefined);
console.log("line number 3", 29);
console.log("line number 4", 31);
console.log("line number 5", 31);

#Ans 6)

console.log("letFruit" = orange, "varFruit" = orange)
console.log("letFruit" = apple, "varFruit" = apple) 
console.log("letFruit" = orange, "varFruit" = apple)


#Ans 7)
Hello, my name is  Yash Mishra. I am 22 years old.

#Ans 8)
Lexical scope means that the scope of a variable is determined by where it is written in the code, not where it is called from,
Inner Functions can access their parent or outer scope — this is called lexical scoping.

In simple language : The scope of a variable is decided by the place where the function is defined, not where it is called.

or 

Lexical scoping means that the accessibility of variables is determined by where they are declared in the code structure, not where they are executed.

✅ Scope determined by: Where the function is defined/written
❌ NOT determined by: Where the function is called/executed
✅ Functions can access: Variables from their parent/outer scope

--Example 1:

let name = "Yashu";

function outer() {
  let hobby = "Coding";

  function inner() {
    console.log(name);  // ✅ Accesses global `name`
    console.log(hobby); // ✅ Accesses parent scope `hobby`
  }

  inner();
}

outer();

--Example 2:

function outer() {
  let secret = "hidden";

  function inner() {
    console.log(secret);
  }

  return inner;
}

let func = outer();
func(); // ✅ Still prints "hidden" because of lexical scope


#Ans 9)

✅ for...of loop is used for arrays — it gives the values directly.
✅ for...in loop is used to iterate over object keys.
✅ for...in loop can be used on arrays — it gives the indexes instead of values.
❌ for...of cannot be used directly on objects — because plain objects are not iterable.


let arr = [2, 4, 5, 6, 7, 8];

for (let a of arr) {
    console.log(a); // ✅ for...of → gives values of array
}

for (let a in arr) {
    console.log(a); // ✅ for...in → gives indexes of array
}

let userInfo = {
    name: "Yash",
    age: 23
}

for (let b in userInfo) {
    console.log(b); // ✅ for...in → gives keys of object
}

// ❌ for...of can't be used on plain objects (not iterable)
// for (let x of userInfo) {
//     console.log(x); // ❌ TypeError
}

#Ans 10)

Let’s say I have a function that uses this to refer to an object’s properties. If I want to call that function for a different object, 
I can use call, apply, or bind to change the value of this. Call, apply and blind are the pre build method in javascript with the helps 
that we can invoke the funciton with the help of this keyword.

--1. `call()` Method

>- Definition: `call()` is a method that allows you to invoke a function with a specified `this` value and arguments provided individually.
- Example:
 
let userOne={
  firstName:"Yash",
  lastName:"Mishra" 
}

let userTwo={
  firstName:"Ram",
  lastName:"Turkar"
}

let userInfo=function(age,post){
  return (`${this.firstName} ${this.lastName} ${age} ${post}`)
}

console.log(userInfo.call(userOne,"Full Stack Developer",23))
console.log(userInfo.call(userTwo,"frontEnd-Developer",24))


-- 2. apply()` Method

>- Definition: `apply()` is similar to `call()`, but it takes the arguments as an array rather than individually.
- Example:

let userOne={
  firstName:"Yash",
  lastName:"Mishra" 
}

let userTwo={
  firstName:"Ram",
  lastName:"Turkar"
}

let userInfo=function(age,post){
  return (`My name is ${this.firstName} ${this.lastName} ${age} ${post}`)
}

console.log(userInfo.apply(userOne,["Full-Stack-Developer","23"])) //--Pass Info In the form of array
console.log(userInfo.apply(userTwo,["FrontEnd-Developer","24"])) //--Pass Info In the form of array
  

-- 3. `bind()` Method

> **Definition:** `bind()` is a method that creates a new function with a specified `this` value, but does not invoke it immediately and arguments provided individually.
- Example:

let userOne={
  firstName:"Yash",
  lastName:"Mishra" 
}

let userTwo={
  firstName:"Ram",
  lastName:"Turkar"
}

let userInfo=function(age,post){
  return (`${this.firstName} ${this.lastName} ${age} ${post} `)
}

let userDataOne=userInfo.bind(userOne,"frontEnd-Developer","23"); //--assing to the variable and then call it
console.log(userDataOne())
let userDataTwo=userInfo.bind(userOne,"frontEnd-Developer","24"); //--assing to the variable and then call it
console.log(userDataTwo())


>Should You Use Array Form or Individual Arguments?

--Individual Arguments: When using bind, you should pass arguments individually, as bind is not designed to accept an array of arguments. The additional arguments after the this value are passed directly to the bound function when it is called.

--Array Form: If you have arguments in array form, you might consider using apply instead, as apply is designed to accept an array of arguments.

> Summary:
- `call()`: Calls a function with a specific `this` value and individual arguments.
- `apply()`: Like `call()`, but arguments are passed as an array.
- `bind()`: Creates a new function with a specific `this` value but doesn’t call it immediately and individual arguments.

#Asn 11)

"this is a keyword in JavaScript, and its value differs depending on the environment (like the browser or Node.js)
and it also depends on how the function is called.

--🔹 1. **Global Scope:**

In **browsers**, `this` in the global scope refers to the **`window` object**.
In **Node.js**, it refers to an **empty object** `{}`.


--🔹 2. **Inside a Function:**

  🔸 a. **Non-strict mode:**

In **browsers**, `this` inside a regular function refers to the **global object (`window`)**.
In **Node.js**, `this` inside a function refers to the **global object (`global`)**.

 🔸 b. **Strict mode (`'use strict'`):**

In both **browsers and Node.js**, `this` becomes **`undefined`** inside a regular function.


--🔹 3. **Inside an Object Method:

If you use a **normal function**, `this` refers to the **object itself**.
If you use an **arrow function**, `this` does **not** refer to the object — instead, it uses **lexical scope**, meaning it takes `this` from the outer context (usually `window` in browsers).


--🔹 4. This substitution :

In non-strict mode, JavaScript has an automatic behavior called 'this' substitution. When this would normally be
null or undefined, JavaScript automatically substitutes it with the global object (which is window in browsers).


#Ans 12)
let person = {
  firstName: "Yash",
  lastName: "Mishra",
  age: 22,
  regularFunction: function() {
    return `Regular: My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
  },
  arrowFunction: () => {
    return `Arrow: My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
  }
};

console.log(person.regularFunction());
// Output: "Regular: My name is Yash Mishra. I am 22 years old."

console.log(person.arrowFunction());
// Output: "Arrow: My name is undefined undefined. I am undefined years old."

console.log(person.arrowFunctionTwo());
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

--Reason : 
Arrow functions do not have their own this. Instead, they inherit this from the outer lexical scope where they are defined—usually the global scope.
Or, if the arrow function is wrapped inside another function, it inherits this from that outer function.

(In the global space, this refers to the window object. That is why, when we use an arrow function and try to print this, it gives us the window object)


#13)

console.log(person.seeOne());
Output: My name is Yash Mishra.

console.log(person.seeTwo());
Output: The entire object :  {firstName: 'Yash', lastName: 'Mishra', seeOne: ƒ, seeTwo: ƒ, seeThree: ƒ, …}
Explanation: The entire object is returned because `this` refers to the person object in a regular function.

console.log(person.seeThree());
Output: undefined
Explanation: The arrow function returns a value, but it is not returned by the outer function, so we get undefined.

console.log(person.seeFour());
Output: My name is Yash Mishra.
Explanation: The arrow function inherits `this` from its enclosing function (which refers to the `person` object), 
and its return value is returned by the outer function.

console.log(person.seeFive());
Output: The entire object : {firstName: 'Yash', lastName: 'Mishra', seeOne: ƒ, seeTwo: ƒ, seeThree: ƒ, …}
Explanation: The arrow function returns `this`, which it inherits from the outer function (`seeFive()`), 
and since `seeFive()` is called on `person`, `this` refers to the person object.

console.log(globalSpace);
output:Window {window: Window, self: Window, document: document, name: '', location: Location, …}

abc();
output:Window {window: Window, self: Window, document: document, name: '', location: Location, …}

#Ans 14)

>Bothe code have same output

3
2
1
Go!

#Ans 15)

>a)
1
2
3
4
5

>b)
6
6
6
6
6
(6 repeated 5 times)

For Better underStanding : https://claude.ai/public/artifacts/7b76b74b-c488-4eeb-be6b-06292265ab25

#Ans 16)

a)
1
2
3
4
5

b) 6 "5 time"

c) 6 "5 time"

d) 5 "5 time"

e) 6 "5 time"

f) 5 "5 time"

g)
1
2
3
4
5

h) 6 "5 time"

g) 6 "5 time"


>>>


#Ans 17)
a)
error
1

b)
1 
then error

Core concept : The code prints 1 because in a for loop, JavaScript executes the loop body first, then the increment. Here, 
setTimeout is scheduled during the first iteration before a++ is attempted. Since a is a const, the increment throws a TypeError, 
stopping the loop. However, the already-scheduled setTimeout still runs, printing 1. So, the output is 1 followed by an error about
assigning to a constant.

#Ans 18)
>a)
0
3

>b)
3
0

>c)
3
3


#Ans 20)
---All the concepts of `Destructuring`, `Spread operator`, and `Rest operator` are available in the “Concepts” section. 
Ctrl + F ➤ Just search in concepts section :  #17)
>Destructuring

--1)Problem 1 Ans: 
const {
  name,
  address: { city },
  hobbies: [firstHobbie],
} = user;
console.log(name); // John Doe
console.log(city); // New York
console.log(firstHobbie); // reading

//Basically, in this, I change the variable name to userName and address and hobbies themselves are not variables — only city and firstHobbie become variables.
const {
  name: userName,
  address: { city: cityName },
  hobbies: [firstHobbyRenamed],
} = user;
console.log(userName); // John Doe
console.log(cityName); // New York
console.log(firstHobbyRenamed); // reading

--2)Problem 2 Ans:
const [firstColor,secondColor,thirdColor="yellow"]=colors;

console.log(firstColor); //red
console.log(secondColor); //green
console.log(thirdColor); //white (white - because the array has a third color, if third color not present then it will give yellow color)

--3)Problem 3 Ans:
function userInfo({name,age,email="N/A"}){
return `User name is ${name} , Age is ${age} and email is ${email}`
}

console.log(userInfo({name:"Alice",age:"25"}));

>Spread operator

--1)Problem 4 Ans:
//First approach
const result = [10, ...arr1, ...arr2, ...arr3, 0];

//Second approach
const combineArray=[...arr1,...arr2,...arr3];
combineArray.unshift(10);
combineArray.push(0);
console.log(combineArray);

--2)Problem 5 Ans:
const combine={...defaultSettings,...userSettings};

console.log(combine);

--3)Problem 6 Ans:
const numbers = [10, 20, 30, 40, 50];

function calculateSum(a, b, c, d, e) {
  return a + b + c + d + e;
}

console.log(calculateSum(...numbers));

>Rest Operator Solutions

---1)Problem 7 Ans:

function multiply(multiplier, ...numbers) {
return  numbers.reduce((accumulator, currentValue) => {
    return accumulator+(multiplier*currentValue)
  }, 0);
}

console.log(multiply(2, 3, 4, 5));

---2)Problem 8 Ans:

const scores = [95, 87, 92, 78, 85, 90, 88];

const[first,second,...remaining]=scores;

function average(first, second, ...remaining) {
  const ans = remaining.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return ans / remaining.length;
}

console.log(average(first,second,...remaining));

const {id,name,...details}=student

console.log(id);
console.log(name);
console.log(details);
#Ans 21)
---Event loop concept is available in “Concepts” section. 
Ctrl + F ➤ Just search in concepts section : #15) 

#Ans 22)
---Global Execution context concept is available in “Concepts” section.
Ctrl + F ➤ Just search in concepts section : #14) 

#Ans 23)
---Callback, Callbachell, Promises->.then and async await concepts are available in “Concepts” section.
Ctrl + F ➤ Just search in concepts section : #4) #5) #6)  #7)  

#Ans 24)

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error", error);
  })
  .finally(() => {
    console.log("Code End");
  });

--Using Async await (try/catch):

let info = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data);
  } catch {
    console.log(error);
  } finally {
    console.log("Code End");
  }
};
info();

#Ans 25)
>Constructor

When we create a new object using the new keyword, the constructor inside the class is automatically called. 
The constructor is mainly used to create and initialize the properties of the object inside the class.


class UserInfo {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  showInfo() {
    console.log(`User name is ${this.name} and User is a ${this.role}`);
  }
}

const userOne = new UserInfo("Yash", "Software Developer");
console.log(userOne);
userOne.showInfo();

const userTwo = new UserInfo("Vani", "Backend Developer");
console.log(userTwo);
userTwo.showInfo();

const userThree = new UserInfo("Gaurav", "Frontend Developer");
console.log(userThree);
userThree.showInfo();

#Ans 26)
>Encapsulation 
Encapsulation means restricting direct access to the internal data of a class and only allowing access through controlled 
public methods. In JavaScript, we use # to declare private fields inside a class. This ensures data protection and prevents 
unauthorized modifications.

--In simple language 

Encapsulation means hiding internal details and only exposing necessary things. In JavaScript, we use # for private 
properties (ES2022+).

--❓ Why didn’t we use a constructor in this code?

We didn’t use a constructor in this code because the private field #balance is already initialized with a default value (100). 
If we wanted to make the starting balance dynamic, then we would need a constructor.”



class BankAccount {
  #balance = 100;

  deposit(amount) {
    if (amount <= 0) {
      console.log("Amount must be greater than 0.");
      return;
    }

    this.#balance += amount;
    console.log(
      `₹${amount} deposited successfully. Your current balance is ₹${this.#balance}.`
    );
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance.");
      return;
    }

    this.#balance -= amount;
    console.log(
      `₹${amount} withdrawn successfully. Your current balance is ₹${this.#balance}.`
    );
  }

  checkBalance() {
    console.log(`Your current balance is ₹${this.#balance}.`);
  }
}

const userOne = new BankAccount();
userOne.checkBalance();
userOne.deposit(1500);
userOne.withdraw(500);


#Ans 27)
>Inheritance

Inheritance is a concept where one class (called the child or subclass) can inherit properties and methods from 
another class (called the parent or superclass) using the extends keyword in JavaScript.

>super keyword

The super keyword is used to call the constructor and methods of the parent class from within the child class.

class TeamInfo {
  constructor(teamName, teamRole, teamSize) {
    this.teamName = teamName;
    this.teamRole = teamRole;
    this.teamSize = teamSize;
  }

  getTeamInfo() {
    return `Team name: ${this.teamName} | Team role: ${this.teamRole} | Team size: ${this.teamSize} members`;
  }
}

class TeamCurrentTask extends TeamInfo {
  constructor(teamName, teamRole, teamSize, currentTask) {
    super(teamName, teamRole, teamSize);
    this.currentTask = currentTask;
  }
  getTeamInfoWithTask(){
  return `${super.getTeamInfo()}. Currently, the team is working on ${this.currentTask}.`;
  }
}


let teamCurrentTask=new TeamCurrentTask("Frontend Warriors","Handling Frontend Task",12,"Food Website");
console.log(teamCurrentTask.getTeamInfoWithTask());

#Ans 28)
--- Polymorphism
Polymorphism is a concept where multiple classes can have methods with the same name, but each class provides its own different 
use case or behavior.

In JavaScript, this is usually achieved through "method overriding", where a child class overrides a method inherited from its 
parent class to provide a different functionality.

>Difference (one-liner trick)

--Overriding → Same method name, same parameters, but redefined in child class (runtime).
--Overloading → Same method name, different parameters (compile-time → but JS doesn’t true method overloading like C++ and Java).

class SMSNotification {
  send() {
    console.log("Sending a generic notification");
  }
}

class EmailNotification extends SMSNotification {
  send() {
    console.log("Sending Email Notification");
  }
}

class PushNotification extends EmailNotification {
  send() {
    console.log("Sending Push Notification");
  }
}

const sendNotification = [
  new SMSNotification(),
  new EmailNotification(),
  new PushNotification(),
];

sendNotification.forEach((n) => {
  n.send();
});

#Ans 29)
--Abstraction

Abstraction in JavaScript simply means hiding the internal details and showing only the necessary things to the user.

In JS, we don’t have keywords like abstract (like in Java), but we can achieve abstraction using classes + methods + private 
fields (or by using functions with closures).

class Login {
  #password;
  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }

  userLogin(inputPassword) {
    if (inputPassword === this.#password) {
      return `${this.name} Login successfully`;
    } else {
      return "Invalid Password";
    }
  }
}

let userOne=new Login("Yash","12345");
console.log(userOne.userLogin("12345")); ✅ 
console.log(userOne.userLogin("123")); ❌

#Ans 30)
---Prototype

Every object in JavaScript has a hidden property called [[Prototype]], which refers to another object called its prototype.
This prototype object contains various properties and methods, which can be inherited by other objects through the prototype chain.

or 

Every object has a hidden object called a prototype that contains methods and properties. With the help of prototype inheritance, objects can share their properties and methods.

--- Prototype Inheritance

Prototype inheritance means that one object can inherit properties and methods from another object through its prototype, 
forming a chain of inheritance known as the prototype chain.

or

Prototype inheritance in JavaScript allows an object to inherit shared properties and methods from another object through 
the [[Prototype]] link


---Code

const usersName = {
   userOneName: "Yash",
   userTwoName: "Ram"
};

const usersAge = {
  userOneAge: "23",
  userTwoAge: "24"
};

// Set the prototype of usersAge to usersName
Object.setPrototypeOf(usersAge, usersName);

// Get the prototype of usersName
console.log(Object.getPrototypeOf(usersName));

// Accessing userOneName from usersAge
console.log(usersAge.userOneName); 
console.log(usersAge.userTwoName); 


#Ans 31)
---Type Coercion (koversion) vs Type casting and Concatenation concepts are available in “Concepts” section.
Ctrl + F ➤ Just search in concepts section : #20)  

#Asn 32)

>🤚 IMP: Summary for Deep vs Shallow Copy:

-- ✅For shallow copy, use the spread operator `{...}` or `Object.assign()` — but remember, it only copies the first layer.

-- ✅ For Deep copy:

=> Use `structuredClone()` It can create deep copy, but it cannot work with functions , moder way (Node 17+, Chrome 98+).
=> Use `_.cloneDeep()` from Lodash for deep copy it work with functions also. (you're working with older browsers or complex structures)


>A)
//shallow copy 

let profileTwo={...profileOne};

profileTwo.name="Ram";

console.log(profileOne);//Yashu
console.log(profileTwo);//Ram

>B)
//Deep Copy (In this we can not use shallow copy technique)

let newProfile=structuredClone(profile);

newProfile.name="Shiva";
newProfile.social.twitter="shiva@dev"

console.log(profile);
console.log(newProfile);

>C)
const copy = structuredClone(user);

copy.name="Ram";
copy.skills.push("Node.js");
copy.address.city = "Mumbai";

console.log("Original:", user);
console.log("Copy:", copy);

>D)
//Deep copy with Lodash ( _.cloneDeep(); ) and We are Using Lodash via CDN in Vanilla JS

let newUser= _.cloneDeep(user);

newUser.name = "Vani";
newUser.skills[0]="Node.js";
newUser.skills[1]="Express";
newUser.address.city = "Mumbai";
newUser.address.pin="9999";

console.log(user);
user.info();

console.log(newUser);
newUser.info()

#Ans 33)
let names = ["Yashu", "Vani", "Code", "Fun", "🔥"];

let ansOne=names.slice(1,3);
console.log(ansOne);

let ansTwo=names.splice(2,2,"Sucess");
console.log(names);

#Ans 34)
let randomNumber = (numOne, numTwo) => {
  return Math.floor(Math.random() * (numTwo - numOne + 1) + numOne);
};
console.log(randomNumber(2, 10));
console.log(randomNumber(2, 10));
console.log(randomNumber(2, 10));

#Ans 35)
console.log([] == false);
=>true 
When we use == then JS "changes types" to compare the values so [] becomes an empty string (""), and "" becomes 0 when converted to a
number, and false is converted into 0, that's why answer is true.

console.log([] === false);
=>false
JS does NOT convert values when using === , That’s the whole point of strict equality — it compares values as-is, 
without converting them, [] is an object (array is technically an object type), Since they are different types 
(object !== boolean), it is immediately gives false,=== checks type and value strictly, so array (object) and
boolean are not the same type, hence false.

#Ans 36)
 Answer: c) `splice()`

`splice()` modifies the original array → ❌ mutable
`map()`, `filter()`, and `concat()` return a new array without changing the original → ✅ immutable

So, `splice()` is the only **mutable** one among them 👀


#Ans 37)
>a)
Promise {<fulfilled>: 'Yash'}

[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "Yash"

>b)
Promise {<pending>}

[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "23"

#Ans 38)
>Babel
Babel is a JavaScript compiler that allows developers to use the latest JavaScript features without worrying about browser 
compatibility. It transpiles modern JavaScript code (like ES6+) into a version that older browsers can understand, ensuring
wide support.

->In simple language: Babel converts modern JavaScript code into an older form so that older browsers can understand it.

>Bundlers
Bundlers (like Webpack, Parcel, Vite) are powerful module bundlers for JavaScript applications. They take all assets (JavaScript, 
CSS, images, etc.) and bundle them into optimized files for efficient loading. Bundlers also support loaders and plugins, making 
it possible to handle tasks like transpiling code with Babel, processing CSS, or optimizing images.

->In simple language: Bundlers take all the files and bundle them into a single or fewer optimized files.

#Ans 39)

1. To use npm (Node Package Manager):  
  -Reason: When you install Node.js, it comes with npm (Node Package Manager), which is essential for installing and managing 
  JavaScript packages like TypeScript, React, and other libraries used in development. Without npm, you can’t easily install 
  these packages.
  
2. **To run JavaScript outside the browser**:  
   - Reason: Node.js provides a JavaScript runtime environment, allowing you to run JavaScript
    on the server-side or locally (e.g., running backend services or development tools).

3. **For modern development tools**:  
   - Reason: Tools like Webpack, Babel, and TypeScript compilers are built on top of Node.js. 
   Node.js is required to run these tools for building and optimizing code.

#Ans 40)
- JSX (JavaScript XML) is a syntax extension for JavaScript used in React. With the help of JSX, we can write HTML-like code 
inside JavaScript

#Ans 41)

1)First Way : Using a temporary variable

 let c;

 c=a;
 a=b;
 b=c;

 console.log(a);
 console.log(b);

2)Second Way: Using arithmetic operations

 a=a+b;//630
 b=a-b;//630-600=30
 a=a-b;//630-30=600

 console.log(a,b);

3)Third Way : Using Array destructuring (ES6)

[a,b]=[b,a]
console.log("a=",a);
console.log("b=",b);


#Ans 42)

let x = 1;
let y = 2;
let z = 3;

[x,y,z]=[y,z,x]
console.log(x,y,z);

#Ans 43)
let a=8;
let b=2;

console.log(8%2)//0
console.log(2%8)//2 (if a%b and a<b so asnwer will be a)

#Ans 44) 
let a=5859;

console.log(Math.floor(a / 10)); // 585
console.log(a % 10); // 9


#Ans 45) 
console.log(10>5 && -55<56 && 67<88)//ture
console.log(10>5  -55<56 && 67>88)//false
console.log(100=="100" || 2>-9 || 88<102)//true
console.log(100==="100" || 2>-9 || 88<102)//true
console.log(100==="100" || 2>-9 || 88>102)//true
console.log(100==="100" || 2<-9 || 88>102)//false

#Ans 46)
Context 
Unary Operator (++,--)

Pre Increment and Decrement
++x
--x

Post Increment and Decrement

x++
x--


1)
let a=10;
let ansPost=a++;
console.log(ansPost)//10

2)
let b=10;
let ansPre=++b;
console.log(ansPre)//11

3)
let x=10;
let ansPost=x++;
let ansPre=++x;
console.log(ansPost);//10
console.log(ansPre);//12

4)
let i=11; 
let answer=i++ + ++i;
console.log(answer);//24

5)
let p=11; 
let value=p++ + p;
console.log(value);//23

6)
let a = 3, b = 1;

let c = a + b + a++ + b++ + ++a + ++b;
console.log("a=" + a);
console.log("b=" + b);
console.log("c=" + c);

7)

a)
let a=true;
a++;
console.log(a);//2

b)
let see=false;
see++;
console.log(see);//1

c)
let x=10;
console.log(x++)//10

d)
let y=15++;
console.log(y);

output=Uncaught SyntaxError: Invalid left-hand side expression in postfix operation
In simple lang we can not apply unary operator on constant value we can put on vairbale but not on constant value.

e)
let p=10;
let ans=(p++);
console.log(p);//11

f)
let p=10;
let ans=++(p++);
console.log(p);

output=Uncaught SyntaxError: Invalid left-hand side expression in prefix operation.
Same reason we cannot apply unary operator.

let p=10;
let ans=++(p++)
First brakcet solved so :  ++(p++)=++11; (so after brakcet solved ++ is applying on constant value that's why it's giving error)

#Ans 47)
>A)
1)
function generateFourDigitOtp(){
return Math.floor(Math.random()*(9999-1000+1)+1000).toString()
}

console.log(generateFourDigitOtp());

2)
-->Approach 1: Range 100000-999999 (Industry Standard)

const crypto = require("crypto");

function generateSixDigitOtp() {
  return crypto.randomInt(100000, 1000000).toString();
}

console.log(generateSixDigitOtp());

-->Approach 2: Range 0-999999 with Padding

const crypto = require("crypto");
function generateSixDigitOtp() {
  return crypto.randomInt(0, 1000000).toString().padStart(6, "0");
}
console.log(generateSixDigitOtp());

---Explanation:

Math.random() is fine for simple randomness in games or UI, but it’s not secure since it’s a pseudo-random generator, 
meaning the numbers are generated by a predictable algorithm and are not truly random.

For OTPs, tokens, and authentication, we use cryptographically secure random number generators like crypto.randomInt(). 
These rely on system-level entropy sources such as CPU timing differences, disk activity, mouse movement, keyboard input, 
network events, and even small temperature variations — making the output truly unpredictable and safe for security-critical 
applications.

(In computer security, entropy means randomness or unpredictability)

-->Approach 1 - True 6-Digit Range

Pros:
- No padding required - cleaner code
- Always generates "real" 6-digit numbers
- Better user experience
- No leading zero confusion
- Faster execution (no string manipulation)

Cons:
- Slightly smaller range (900,000 vs 1,000,000 possibilities)
- Still cryptographically secure

--> Industry Usage: 90%+ Use Approach 1
--> Why Industry Prefers Approach 1:

1. User Experience Priority
   - Users expect codes like `123456`, not `000123`
   - Reduces customer support tickets
   - More intuitive for users

2. System Compatibility
   - SMS gateways handle better
   - No issues with leading zero stripping
   - Database storage consistency

3. Code Maintainability
   - Simpler, cleaner code
   - No string manipulation needed
   - Less prone to errors

4. Real-World Examples Using Approach 1:
   - Banking apps (Chase, Bank of America)
   - Tech giants (Google, Microsoft 2FA)
   - Payment systems (PayPal, Stripe)
   - Social media platforms

--> Security Analysis

- Both are equally secur from cryptographic perspective
- `crypto.randomInt()` provides cryptographically secure randomness
- Range difference (900k vs 1M) is negligible for security
- Both meet industry security standards

-->The Second method has 100,000 more possible combinations, but this difference is negligible for security.

--> Approach 2 - Padding Method
Pros:
- Mathematically uses full range (1 million possibilities)
- Explicit padding makes intent clear
- Works for any digit length requirement

Cons:
- Extra processing step (padding)
- Can generate confusing codes like `000001`
- Users may not recognize `000123` as valid OTP
- Some systems strip leading zeros


>B)
Formula 2*pi*r
let radius=5;
let ans =Number((2*Math.PI*radius).toFixed(2))
console.log(typeof(ans));
console.log(ans);

#Ans 48)
let arr = [10, 20, 30, 40, 50];

---Simple for loop
let arrTotal = 0;
for (let a = 0; a < arr.length; a++) {
  arrTotal += arr[a];
}
console.log(arrTotal);

---Using for of loop
let sum = 0;
for (let value of arr) {
  sum += value;
}
console.log(sum);

---Using reduce
let sum = arr.reduce((accum, next) => {
  return accum + next;
});
console.log(sum);


#Ans 49)
let arr=[10,20,78,30,85,40,50,];

---First Solution :

let biggestValue=arr[0]
for(let i=1; i<arr.length; i++){
    if(biggestValue<arr[i]){
        biggestValue=arr[i]
    }
}

console.log(biggestValue);

TC:O(n)
SC:O(1)

---Second Solution (In Industry)

let arr=[10,20,78,4,30,85,40,50,];

let max=Math.max(...arr)
console.log(max);

TC:O(n)
SC:O(n)

#Ans 50)
let arr=[10,20,78,4,30,85,40,50,];

---First Solution

let smallestValue=arr[0]
for(let i=1; i<arr.length; i++){
    if(arr[i]<smallestValue){
        smallestValue=arr[i]
    }
}

console.log(smallestValue);

TC:O(n)
SC:O(1)

---Second Solution 

let arr=[10,20,78,4,30,85,40,50,];

let min=Math.min(...arr)
console.log(min);

TC:O(n)
SC:O(n)

#Ans 51)
let arr = [10, 20, 78, 4, 30, 85, 40, 50, 80, 86, 99, 87, 89, 9, 98, 99];
let arr = [50, 50, 50, 50];
let arr = [99, 99, 99,89, 87];

let firstSecondMaxArray = (arr) => {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  for (let a = 0; a < arr.length; a++) {
    if (firstMax < arr[a]) {
      secondMax = firstMax;
      firstMax = arr[a];
    } else if (arr[a] > secondMax && arr[a] < firstMax) {
      secondMax = arr[a];
    }
  }
  if (secondMax === -Infinity) {
    secondMax = "No second max";
  }

  return { firstMax, secondMax };

  // return {
  //   firstMax,
  //   secondMax: secondMax === -Infinity ? "No second max present" : secondMax,
  // };
};

console.log(firstSecondMaxArray(arr1));

#Ans 52)

---First Solution

let arr=[1,2,3,4,5,6,7,8,9,10,11,12];

let reverse=arr.reverse();
console.log(reverse);

>>It modifies the original array

So We can use this approch 

let reverse=[...arr];

console.log(reverse.reverse());

---Second Way (Not optimal : We are creating New Array based on previous array it take same space like previous array )

let arr=[1,2,3,4,5,6,7,8,9,10,11,12];

let revArray=[];
for(let a=arr.length-1; a>=0; a--){
   revArray.push(arr[a])
}

console.log(revArray);

---Third Solution (Optimal)

let arr=[1,2,3,4,5,6,7,8,9,10,11,12];
let arr=[0,45,98,1,33,1,-7,55];


let a = 0;
let b = arr.length - 1;

while (a < b) {
  let temp = arr[a];//In temp me 1 hai
  arr[a] = arr[b];//In arr[a] means a[0]-->10 store huaa hai arr[arr.length-1]
  arr[b] = temp;//and temp me 1 hai ab vo arr[b] me store ho gaya 
  a++; 
  b--;
}

console.log(arr);

Method name : Two-pointer swapping technique (in-place reversal)
-Time Complexity: O(n)
-Space Complexity: O(1)

#Ans 53)

let arr=[0,0,1,0,1,0,1,1,0,1,0]

---First Approach
let a = 0;
let b = arr.length - 1;
while (a < b) {
  if (arr[a] === 1) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    b--;
  }
  if (arr[a] !== 1) {
    a++;
  }
}

console.log(arr);

-Time Complexity: O(n)
-Space Complexity: O(1)

---Second Approach (This one is better than first one) (Two Pointer - Partition Process used in QuickSort)

let a=0;
let b=0;

while(a<arr.length){
  if(arr[a]===0){
    let temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
    b++;
  }
  a++;
}

console.log(arr);

-Time Complexity: O(n)
-Space Complexity: O(1)


#Ans 54) 

let s="ramratan";

---Using simple loop

for(let a=0; a<s.length;a++){
    console.log(s[a]);
    // console.log(s.charAt(a));
}

---Using for of loop

for(let a of s){
    console.log(a);
}


#Ans 55)

let s="ramratan";

for(let a=s.length-1; a>0; a--){
    console.log(s[a]);
    // console.log(s.charAt(a));
}

#Ans 56)

---Solution One using pre build methods

let checkPalindrom = (string) => {
  let rev = string.split("").reverse().join("");
  return rev === string ? true : false;
};

---Second Solution

let checkPalindrom = (string) => {
    let rev="";
  for (let i = string.length-1; i >= 0; i--) {
       rev+=string[i]
  }
  return rev ===string ? true : false;
};

console.log(checkPalindrom("abcdef"));

---Third Solution using Two pointer 

const checkPalindrom = (para) => {
  let a = 0;
  let b = para.length - 1;

  while (a < b) {
    if (para[a] !== para[b]) {
      return "Not a palindrom";
    }
    a++;
    b--;
  }

  return "It's a palindrom";
};

console.log(checkPalindrom(a));


#Ans 57)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 13;

const checkTarget = (target) => {
  let right = 0;
  let left = arr.length - 1;
  while (right < left) {
    let total = arr[right] + arr[left];
    if (total < target) {
      right++;
    } else if (total > target) {
      left--;
    } else {
      console.log(`Found: ${arr[right]} + ${arr[left]} = ${total}`);
      return;
    }
  }
  console.log("No Target Found");
  return;
};

checkTarget(13);

-Time Complexity: O(n)
-Space Complexity: O(1)

#Ans 58)
//ASCII knowledge → A-Z = 65-90, a-z = 97-122
let str = "YAsh";

const changeCase = (para) => {
  let newStr = "";
  for (let a = 0; a < para.length; a++) {
    let check = para.charCodeAt(a);
    if (check >= 97 && check <= 122) {
      newStr += String.fromCharCode(check - 32);
    } else {
      newStr += String.fromCharCode(check + 32);
    }
  }
  return newStr;
};
console.log(changeCase(str));


#Ans 59)

let str = "zZabcdedcjbAeeee";

let count = {};

for (let a = 0; a < str.length; a++) {
  let char = str[a].toLocaleLowerCase();

  if (count[char]) {
    count[char]++;
  } else {
    count[char] = 1;
  }
}

console.log(count);

TC = O(n)
SC = O(n)

#Ans 60)
--1)
let getCurrentYear=new Date();
console.log(getCurrentYear.getFullYear())

---2)
let factorial = 1;
for (let a = 5; a > 0; a--) {
  factorial *= a;
}
console.log(factorial);

---3)
let star = 6;

const startPattern = (size) => {
  let patternStore = "";
  for (let a = 1; a <= size; a++) {
    for (let b = 1; b <= size; b++) {
      patternStore += "*";
    }
    patternStore += "\n";
  }
  return patternStore;
};

console.log(startPattern(star));


---4)
let n = 5;

const pattern = (count) => {
  let patternStore = "";
  for (let row = 0; row < 2 * count - 1; row++) {
    let currentRow = row < count ? row : 2 * count - row - 2;
    for (let space = 0; space < currentRow; space++) {
      patternStore += " ";
    }
    let starCount = 2 * (count - currentRow) - 1;
    for (let star = 0; star < starCount; star++) {
      patternStore += "*";
    }
    patternStore += "\n";
  }
  return patternStore;
};

console.log(pattern(n));

--5)
let n = 5;
const Diamondpattern = (count) => {
  let storePattern = "";
  for (let upperRow = 1; upperRow <= count; upperRow++) {
    for (let space = upperRow; space < count; space++) {
      storePattern += " ";
    }
    for (let star = 1; star <= 2 * upperRow - 1; star++) {
      storePattern += "*";
    }
    storePattern += "\n";
  }

  for (let bottomRow = count - 1; bottomRow >= 1; bottomRow--) {
    for (let space = bottomRow; space < count; space++) {
      storePattern += " ";
    }
    for (let star = 1; star <= 2 * bottomRow - 1; star++) {
      storePattern += "*";
    }
    storePattern += "\n";
  }
  return storePattern;
};

console.log(Diamondpattern(n));

--6)
let n = 3;
let s = 1;
let pattern = "";
for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n; b++) {
    pattern += s + " ";
    s++;
  }
  pattern += "\n";
}

console.log(pattern);



#Ans 61)
When we declare a variable without using `var`, `let`, or `const`, it becomes a global variable. This means we can access it from
anywhere in the code—even from inside a function or block.

If we use `var`, the variable is function-scoped, so we cannot access it from outside the function where it was declared.
If we use `let` or `const`, they are block-scoped, which means we cannot access them from outside the block in which they 
were declared.

Also, we **cannot access variables before their declaration**. If we use `var`, accessing the variable before declaration gives us 
`undefined` because of hoisting. But if we use `let` or `const`, trying to access them before declaration results in a 
**ReferenceError**, due to the Temporal Dead Zone.

This declaring a variable without using `var`, `let`, or `const` and it becoming globalonly happens in JavaScript**. 
Most other languages don’t allow this at all. 

---Example :

function check(){
  console.log("Just checking");
  {

      umar=23;
  }
}

check()

console.log(umar);

#Ans 62)
>>Bubble Sort
---Bubble Sort keeps swapping adjacent numbers (if they are in the wrong order) so that the bigger ones move to the end.
function bubbleSort(arr) {
  for (let a = 0; a < arr.length; a++) {
    let isSort=false;
    for (let b = 0; b < arr.length-1-a; b++) {
      if (arr[b] > arr[b + 1]) {
        let temp = arr[b];
        arr[b] = arr[b + 1];
        arr[b + 1] = temp;
        isSort=true;
      }
    }
    if(!isSort){
        break;
    }
  }
  return arr;
}
let arr = [2, 78, 9, 23, 3, -5, 0, 95, 1, 54, 77, -88];
console.log(bubbleSort(arr));

--TC: O(n²)
--SC: O(1)

>>Selection Sort
---Selection Sort is a sorting algorithm where we Repeatedly find the smallest element from the unsorted part of the array and swap it with the correct postion (Initially with first one).
let selectionSort = (arr) => {
  for(let a=0; a<arr.length-1; a++){
    let minValue=a;
    for(let b=a+1; b<arr.length; b++){
      if(arr[b]<arr[minValue]){
        minValue=b;
      }
    }
    if(minValue !== a){
      let temp=arr[minValue];
      arr[minValue]=arr[a];
      arr[a]=temp;
    }
  }
  return arr;
};

console.log(selectionSort(arr));

--TC: O(n²)
--SC: O(1)


>>Insertio sort 
>In insertion sort, we check one element at a time, compare it with the previous elements, and place it in its correct position.
let insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let a = i - 1;
    while (a >= 0 && arr[a] > current) {
      arr[a + 1] = arr[a];
      a--;
    }
    arr[a + 1] = current;
  }
  return arr;
};

console.log(insertionSort(arr));

--TC: O(n²)
--SC: O(1)

#Answer 63)
The first code uses recursion, and the second uses a loop — and they behave very differently under the hood.

--- Loops vs Recursion in JavaScript 

In JavaScript, loops like for, while, or do-while run inside a single function call. No matter how many times the loop executes, 
it doesn't add new function calls to the stack. That makes loops memory-efficient, fast, and safe from stack overflow. 
They are ideal for simple, repetitive tasks like printing, counting, or iterating over arrays because they maintain a single 
stack frame throughout execution.

In contrast, recursion creates a new function call for every step. So if the input size is large (for example, recurse(100000)), 
it results in too many function calls, which can exceed the call stack limit and crash the program with a 👉 "Maximum call stack size 
exceeded" error.
Most browsers have a call stack size limit ranging from ~10,000 to 100,000 calls, depending on the engine and environment. 
Recursion is great for problems like tree traversal, divide-and-conquer algorithms, and deeply nested structures. 
However, JavaScript does not support Tail Call Optimization in most engines, meaning it can't reuse stack frames during deep 
recursion. So for large input sizes, recursion is risky and must be used carefully, while loops are preferred for performance,
safety, and reliability.

#Answer 64)

>>1)
let fiboNumber = (n) => {
  if(typeof n!=="number"){
    return "Please enter a valid number"
  }
  if (n <= 0) return [];
  if (n === 1) return [0];

  let storeFiboNum = [0, 1];

  for (let a = 2; a < n; a++) {
    storeFiboNum.push(storeFiboNum[a-2]+storeFiboNum[a-1]);
  }

  return storeFiboNum;
};

console.log(fiboNumber(10));

--TC:O(n)
--SC:O(n)

>>2)
let getFiboAtPosition = (n) => {
  if (typeof n !== "number") {
    return "Please enter a valid number";
  }
  if (n<=0) return "Invaid Number";
  if(n===1) return 0;

  let pre=0;
  let curr=1;

  for(let a=2; a<n; a++){
    let next=pre+curr;
    pre=curr;
    curr=next;
  }
  return curr;
};

console.log(getFiboAtPosition(10));

--TC:O(n)
--SC:O(1)

>>3)
let positionOfFiboNum = (num) => {
  if (typeof num !== "number") return "Please enter a valid number";
  if (num < 0) return "Invalid Number";
  if (num === 0) return 1;

  let pre = 0;
  let curr = 1;
  let pos = 2;

  while (curr < num) {
    let next = pre + curr;
    pre = curr;
    curr = next;
    pos++;
  }

  return curr === num ? pos : "Not a Fibonacci number";
};

console.log(positionOfFiboNum(34));

--TC:O(n)
--SC:O(1)

>>4)
let sumOfFiboLoop = (n) => {
  if (typeof n !== "number") {
    return "Please Enter a valid number";
  }

  if (n <= 0 || n === 1) return 0;
  if (n === 2) return 1;

  let pre = 0;
  let curr = 1;
  let sum = 1;

  for (let a = 2; a < n; a++) {
    let next = pre + curr;
    sum += next;
    pre = curr;
    curr = next;
  }

  return sum;
};

console.log(sumOfFiboLoop(10));

#Ans 65)
>>N to One

let nToOne = (n) => {
  if (n === 0) return;
  console.log(n);
  nToOne(n - 1);
};

nToOne(5);

>>One To N

let OneToN = (n) => {
  if (n === 0) return;
  OneToN(n - 1);
  console.log(n);
};

OneToN(5);

#Ans 66)

let sumNumbers = (n) => {
  if (n === 0) return 0;
  return n + sumNumbers(n - 1);
};

console.log(sumNumbers(10));

#Ans 67)
let fiboNumber = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let print = fiboNumber(n - 1);
  print.push(print[print.length - 2] + print[print.length - 1]);
  return print;
};

console.log(fiboNumber(10));

#Ans 68)Answer not added yet 👨‍💻

#Ans 69)Memoization
Memoization is an optimization technique used to speed up programs by saving time. It works by storing the 
results of function calls in a cache. When the function is called again with the same inputs, it gets the 
result from the cache instead of running the function again. This helps save time and system resources.

In simple words, memoization means storing the result in a cache so that if the user asks for the same thing
again, the program can return the saved result instead of calculating it again.

#Ans 70)Merge Two sorted Array

let arrayOne = [3, 5, 8, 9, 89, 92];
let arrayTwo = [1, 6, 34, 67, 90,95, 102,999];

let mergeArray = (arrayOne, arrayTwo) => {
  let a = 0;
  let b = 0;
  let store = [];
  while (a < arrayOne.length && b < arrayTwo.length) {
    if (arrayOne[a] < arrayTwo[b]) {
      store.push(arrayOne[a]);
      a++;
    } else {
      store.push(arrayTwo[b]);
      b++;
    }
  }

  while (a < arrayOne.length) {
    store.push(arrayOne[a]);
    a++;
  }

  while (b < arrayTwo.length) {
    store.push(arrayTwo[b]);
    b++;
  }

  return store;
};

console.log(mergeArray(arrayOne, arrayTwo));

#Ans 71)
let arr = [2, 5, 14, 25, 67, 89, 103, 117, 150];
let target = 25;

let binarySearch = (arr, target) => {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let mid = Math.floor(first + (last - first) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }
  return -1;
};

console.log(binarySearch(arr, target));
*/
