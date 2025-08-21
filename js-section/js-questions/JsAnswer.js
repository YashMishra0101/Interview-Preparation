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
Functions can access variables from their parent or outer scope — this is called lexical scoping.

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
I can use call, apply, or bind to change the value of this.Call , apply and blind are the pre build method in javascript with the helps 
that we can invoke the funciton with the help of this keyword.

--1. `call()` Method

- Definition: `call()` is a method that allows you to invoke a function with a specified `this` value and arguments provided individually.
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

- Definition: `apply()` is similar to `call()`, but it takes the arguments as an array rather than individually.
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

> **Definition:** `bind()` is a method that creates a new function with a specified `this` value, but does not invoke it immediately.
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
- `bind()`: Creates a new function with a specific `this` value but doesn’t call it immediately.

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

In **non-strict mode**, if `this` is `null` or `undefined`, JavaScript **automatically substitutes it with the global object**.
That’s why, inside a normal function in non-strict mode in browsers, `this` becomes `window`so originally value is "undefined" but 
because of this keyword it gives us window object.


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

>For Let

Code:

for (let a = 1; a <= 5; a++) {
  setTimeout(() => {
    console.log(a); // Prints value of 'a' specific to each block
  }, 1000);
}


🔥Diagram 1:


Iteration 1: { Block Scope: a = 1 }
Iteration 2: { Block Scope: a = 2 }
Iteration 3: { Block Scope: a = 3 }
Iteration 4: { Block Scope: a = 4 }
Iteration 5: { Block Scope: a = 5 }

After 1 second: Logs -> 1, 2, 3, 4, 5


🔥Diagram 2:

for (let a = 1; a <= 5; a++) {
  //-- New Block Scope for each iteration
  {
    // Iteration 1
    setTimeout(() => {
      console.log(a); // Prints 1
    }, 1000);
  }
  {
    // Iteration 2
    setTimeout(() => {
      console.log(a); // Prints 2
    }, 1000);
  }
  {
    // Iteration 3
    setTimeout(() => {
      console.log(a); // Prints 3
    }, 1000);
  }
  {
    // Iteration 4
    setTimeout(() => {
      console.log(a); // Prints 4
    }, 1000);
  }
  {
    // Iteration 5
    setTimeout(() => {
      console.log(a); // Prints 5
    }, 1000);
  }
}


---Explanation for Let :

- Each `{}` block represents a new scope created by `let` for each iteration.
- `setTimeout` captures the value of `a` specific to that iteration's block.


--------------------------------------------------

>>> For `var`


Code:

for (var a = 1; a <= 5; a++) {
  setTimeout(() => {
    console.log(a); // Prints 6 (value of 'a' after loop ends)
  }, 1000);
}


🔥Diagram :

Global Scope: var a; //👀👀👀👀

Iteration 1: { Single Scope: a updated to 1 }
Iteration 2: { Single Scope: a updated to 2 } (previous value 1 is also updated to 2)
Iteration 3: { Single Scope: a updated to 3 } (previous values 1 and 2 are also updated to 3)
Iteration 4: { Single Scope: a updated to 4 } (previous values 1, 2, and 3 are also updated to 4) 
Iteration 5: { Single Scope: a updated to 5 } (previous values 1, 2, 3, and 4 are also updated to 5)

After Loop Completes:
The loop ends with a incrementing one last time.
Final Value of a: The loop condition (a <= 5) becomes false when a becomes 6 (after the last increment).

After 1 second: Logs -> 6, 6, 6, 6, 6

---Explanation for var:

1. Global Scope: When using `var`, there is only one variable in the global scope. 
The value of `a` is updated during each iteration, but no new block is created for each loop 
Value Updated Globally. 
 
2. **Value Updated Globally**:
 When you use `var`, there’s only one variable, and it’s being updated throughout the entire loop. 
 So during each iteration, the value of `a` is updated globally.


#Ans 16)

for (var a = 1; a <= 5; a++) {
  function inner() {
    var b = a;
    setTimeout(() => {
      console.log(b);
    });
  }
  inner();
}


#Ans 17)
let a = 1;

for (a; a <= 5; a++) {
    setTimeout(() => {
        console.log(a)
    }, 1000)
}

Ans : 6 (Five times)

Explanation:In short: Both in the case of let (outside the loop) and var (inside the loop),
the same single variable is updated, and previous values are overwritten. That’s why 
in both cases, you get 6 printed five times when the loop completes.


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

class Users {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  login() {
    console.log(`${this.name} (${this.role}) has logged in.`);
  }
  logout() {
    console.log(`${this.name} (${this.role}) has logged out.`);
  }
}

class Admin extends Users {
  constructor(name, role) {
    super(name, role);
  }

  delete(user) {
    console.log(
      `${this.name} (${this.role}) Deleted ${user.name} (User) account.`
    );
  }

  banUser(user) {
    console.log(
      `${this.name} (${this.role}) Banned ${user.name} (User) account.`
    );
  }
}

const userOne = new Users("Vani", "User");

userOne.login();
userOne.logout();

const admin = new Admin("Yash", "Admin");

admin.login();
admin.delete(userOne);
admin.banUser(userOne);
admin.logout();

#Ans 28)
--- Polymorphism
Polymorphism is a concept where multiple classes can have methods with the same name, but each class provides its own different 
use case or behavior.

In JavaScript, this is usually achieved through "method overriding", where a child class overrides a method inherited from its 
parent class to provide a different functionality

class SMSNotification{
    send(){
        console.log("Sending SMS Notification");
    }
}

class EmailNotification extends SMSNotification{
    send(){
        console.log("Sending Email Notification");
    }
}

class PushNotification extends EmailNotification {
    send(){
        console.log("Sending Push Notification");
    }
}

const userOne=new SMSNotification;
const userTwo=new EmailNotification;
const userThree=new PushNotification;

userOne.send();
userTwo.send();
userThree.send();

#Ans 29)
--Abstraction

Abstraction means hiding the complex internal logic and only exposing the essential features or behavior to the outside world.
It helps you focus on what an object does instead of how it does it.

It’s like using a TV remote:
You press a button to increase volume, but you don’t need to know how the remote talks to the TV. That's abstraction in action.


class PaymentProcessor {
  #connectToBank() {  // private method
    console.log("Connecting to bank...");
  }

  processPayment(amount) {
    this.#connectToBank();  // hide internal logic
    console.log(`Processing payment of ₹${amount}`);
  }
}

const payment = new PaymentProcessor();
payment.processPayment(1000);  // ✅
payment.#connectToBank();      // ❌ Not accessible from outside


✅ Key Points:

--You only expose what's necessary (processPayment)

--You hide internal logic (#connectToBank)

--User doesn't need to know the complex stuff going on behind


#Ans 30)
---Prototype

Every object in JavaScript has a hidden property called [[Prototype]], which refers to another object called its prototype.
This prototype object contains various properties and methods, which can be inherited by other objects through the prototype chain.

or 

In JavaScript, every object has a hidden property called [[Prototype]] (accessible via Object.getPrototypeOf(example:myCar) ), which refers to another object.
This prototype object contains shared properties and methods. If the original object doesn't have a certain property or method, 
JavaScript looks it up in its prototype chain.

"

💬 In Simpler Words (for notes or revision):
Each object has a hidden prototype that is itself an object containing shared properties and methods. These can be inherited by other objects.

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
without converting them.

#Ans 36)
 Answer: c) `splice()`

`splice()` modifies the original array → ❌ mutable
`map()`, `filter()`, and `concat()` return a new array without changing the original → ✅ immutable

So, `splice()` is the only **mutable** one among them 👀


#Ans 37)
>a)
Promise {<fulfilled>: 'Yash'}

>b)
Promise {<pending>}

#Ans 38)
- Answer not present yet 👨‍💻

#Ans 39)

1. To use npm (Node Package Manager):  
   - Reason: Node.js comes with npm (Node Package Manager), which is essential for installing
    and managing JavaScript packages like TypeScript, React, and other libraries used in development. 
    Without npm (Node Package Manager), you can’t easily install these packages.
  
2. **To run JavaScript outside the browser**:  
   - Reason: Node.js provides a JavaScript runtime environment, allowing you to run JavaScript
    on the server-side or locally (e.g., running backend services or development tools).

3. **For modern development tools**:  
   - Reason: Tools like Webpack, Babel, and TypeScript compilers are built on top of Node.js. 
   Node.js is required to run these tools for building and optimizing code.

#Ans 40)
- Answer not present yet 👨‍💻

#Ans 41)

1)First Way : Using Third Variable

 let c;

 c=a;
 a=b;
 b=c;

 console.log(a);
 console.log(b);

2)Second Way: Without using Third Vairble

 a=a+b;//630
 b=a-b;//630-600=30
 a=a-b;//630-30=600

 console.log(a,b);

3)Third Way : Swapping using Destructuring Assignment
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
console.log(2%8)//2

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
1)
console.log(Math.trunc(1000+Math.random()*9000)); // 4 Digit Otp
console.log(Math.trunc(10000+Math.random()*9000)); // 5 Digit Otp

2)
let l=10;
let b=20;
console.log(l*b)//200 Area of rectangel
console.log(2*(l*b))//200 Perimeter of rectangle

3)
Formula 2*pi*r
let radius=5;
let ans =Number((2*Math.PI*radius).toFixed(2))
console.log(typeof(ans));
console.log(ans);

#Ans 48)
let arr=[10,20,30,40,50];

let arrTotal=0;
for(let i=0; i< arr.length ; i++){
    arrTotal=arrTotal+arr[i];
}

console.log(arrTotal);

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

or 

---Another way to writting 

let arrMaxValue = (...arrsValues) => {
  let maxValue = arrsValues[0];
  for (let a = 1; a < arrsValues.length; a++) {
    if (maxValue < arrsValues[a]) {
      maxValue = arrsValues[a];
    }
  }
  return maxValue;
};

console.log(arrMaxValue(5,6,98,85,67));

---Second Solution 

let arr=[10,20,78,4,30,85,40,50,];

let max=Math.max(...arr)
console.log(max);


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

or 

---Another way of writting 

let arrMinValue = (...arrsValues) => {
  let minValue = arrsValues[0];
  for (let a = 1; a < arrsValues.length; a++) {
    if (minValue > arrsValues[a]) {
      minValue = arrsValues[a];
    }
  }
  return minValue;
};

console.log(arrMinValue(5,6,98,85,67,1,3));

---Second Solution 

let arr=[10,20,78,4,30,85,40,50,];

let min=Math.min(...arr)
console.log(min);

#Ans 51)
let arr = [10, 20, 78, 4, 30, 85, 40, 50, 80, 86, 99, 87, 89, 9, 98, 99];
let arr = [50, 50, 50, 50];
let arr = [99, 99, 99,89, 87];

let secondMaxValue = () => {
  let firstMaxValue = -Infinity;
  let secondMaxValue = -Infinity;
  for (let a = 0; a < arr.length; a++) {
    if (arr[a] > firstMaxValue) {
      secondMaxValue = firstMaxValue;
      firstMaxValue = arr[a];
    } else if (arr[a] > secondMaxValue && arr[a] < firstMaxValue) {
      secondMaxValue = arr[a];
    }
  }
  if(secondMaxValue===-Infinity){
    return "No Second Max Value Found"
  }
  else{
    return {
      "First Max Value" : firstMaxValue,
      "Second Max Value" : secondMaxValue

    }
  }
};

console.log(secondMaxValue());

#Ans 52)

---First Solution

let arr=[1,2,3,4,89,5,6,7,66,8,0,9,10];

let reverse=arr.reverse();
console.log(reverse);

>>It modifies the original array

So We can use this approch 

let reverse=[...arr];

console.log(reverse.reverse());

---Second Way (Not optimal : We are creating New Array based on previous array it take same space like previous array )

let arr=[1,2,3,4,89,5,6,7,66,8,0,9,10];

let revArray=[];
for(let a=arr.length-1; a>=0; a--){
   revArray.push(arr[a])
}

console.log(revArray);

---Third Solution (Optimal)

let arr=[1,2,3,4,89,5,6,7,66,8,0,9,10];

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

#Ans 53)

let arr=[0,0,1,0,1,0,1,1,0,1,0]

let a=0;
let b=0;

while(a<arr.length){
  if(arr[a]===0){
    temp=arr[a];
    arr[a]=arr[b]
    arr[b]=temp;
    b++;
  }
  a++;
}

console.log(arr);


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

let checkPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
console.log(checkPalindrome("abbao"));

#Ans 57)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 13;
let targetCheck = (arr) => {
  let right = 0;
  let left = arr.length - 1;
  while (right < left) {
    let check = arr[right] + arr[left];
    if (check === target) {
      console.log(`${arr[right]}+ ${arr[left]} = ${check}`);
      return true;
    } else if (check < target) {
      right++;
    } else {
      left--;
    }
  }
  console.log("No Target found");
  return false;
};

targetCheck(arr);

#Ans 58)
let str="YAsh";
let newStr="";
for(let i=0; i<=str.length-1; i++){
    let char=str.charCodeAt(i);

    if(char>=65 && char<=90){
       newStr+=String.fromCharCode(char+32);
    }
    else
    {
        newStr+=String.fromCharCode(char-32)
    }
  
}
console.log(newStr);

#Ans 59)

let str = "zZabcdedcjbA";

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

#Ans 60)
--1)
let getCurrentYear=new Date();
console.log(getCurrentYear.getFullYear())

---2)
let firstName="Yash";
let lastName="Mishra";

console.log(firstName+" "+lastName)
console.log(`${firstName} ${lastName}`)

---3)
let factorial = 1;
for (let a = 5; a > 0; a--) {
  factorial *= a;
}
console.log(factorial);

---4)
let gridPattern=(value)=>{
   let pattern="";
   let count=1;
   for(let a=1; a<=value; a++){
    for(let b=1; b<=value; b++){
        pattern+=count+" ";
        count++;
    }
    pattern+="\n";
   }
   return pattern;
}

console.log(gridPattern(3));

---5)

// let rev=arr.reverse();
// console.log(rev);

let revArr=[];
for(let a=arr.length-1; a>=0; a--){
  revArr.push(arr[a])
}
console.log(revArr);

| Method          | Time Complexity | Space Complexity | Mutates Original? |
| --------------- | --------------- | ---------------- | ----------------  |
| `arr.reverse()` | O(n)            | O(1)             | ✅ Yes (Original array lost) |
| `for` loop      | O(n)            | O(n)             | ❌ No  (Original array stil exit) |

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
