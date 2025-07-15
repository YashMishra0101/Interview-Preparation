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
console.log("line number 2", undefined); 
console.log("line number 3", 29); 
console.log("line number 4", 31); 
console.log("line number 5", 31); 
console.log("line number 6", 10);

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

#Ans 11)
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

(In the global space, this refers to the window object. That is why, when we use an arrow function and try to print this, it gives us the window object :  they inherit this from the outer lexical scope where they are defined—usually the global scope.)

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

#30)
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

#31)
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

#32)
let arr=[10,20,30,40,50];

let arrTotal=0;
for(let i=0; i< arr.length ; i++){
    arrTotal=arrTotal+arr[i];
}

console.log(arrTotal);

#33)
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


#34)
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

#35)
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

#36)

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

#37)

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


#38) 

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


#39)

let s="ramratan";

for(let a=s.length-1; a>0; a--){
    console.log(s[a]);
    // console.log(s.charAt(a));
}

#40)

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

#41)
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

#42)
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

#43)

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

#44)
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

#45)
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

#46)
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

#47) Answer
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

#48)

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

#49)
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

#50)

let sumNumbers = (n) => {
  if (n === 0) return 0;
  return n + sumNumbers(n - 1);
};

console.log(sumNumbers(10));

#51)
let fiboNumber = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let print = fiboNumber(n - 1);
  print.push(print[print.length - 2] + print[print.length - 1]);
  return print;
};

console.log(fiboNumber(10));


#53)Memoization
Memoization is an optimization technique used to speed up programs by saving time. It works by storing the 
results of function calls in a cache. When the function is called again with the same inputs, it gets the 
result from the cache instead of running the function again. This helps save time and system resources.

In simple words, memoization means storing the result in a cache so that if the user asks for the same thing
again, the program can return the saved result instead of calculating it again.

#54)Merge Two sorted Array

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

#55)
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
