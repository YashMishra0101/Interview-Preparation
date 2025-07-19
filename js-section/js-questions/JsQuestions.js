console.log("JS Logical Questions Section Is Working");
/*
#Section One : Logical Building

#This questions are mainly for improving your logic-building skills. They aren't directly tied to JavaScript concepts or interview preparation, but they are super helpful for developing strong logical thinking.

---1) Write a JavaScript program to check whether a number is even, odd, or prime, and then print all even, odd, and prime numbers within a given range. You can choose any two numbers as the range limits: start and end.

  - Even Numbers  
  - Odd Numbers  
  - Prime Numbers

---2) Write a JavaScript function `printPrimeNumber(n)` that returns all **prime numbers** from 2 to `n` (inclusive) as a **string**, separated by spaces.

A **prime number** is a number greater than 1 that has no positive divisors other than 1 and itself.

Your function should:

* Accept a positive integer `n`.
* Check each number from 2 up to `n`.
* Collect all prime numbers in a string, separated by a single space.
* Return the final string.

Example:
console.log(printPrimeNumber(25));

Output:
"2 3 5 7 11 13 17 19 23"

---3) Print the following Star Patterns (Total 23 Questions): 

1)Pattern One
n=5;

*****
*****
*****
*****
*****

2)Pattern Two
n=5;

*
**
***
****
*****

3)Pattern Three
n=5;

1
12
123
1234
12345

4)Pattern Four
n=5;

1
22
333
4444
55555

5)Pattern Five (Decending Order)
n=5;

*****
****
***
**
*

6)Pattern Six
n=5;

12345
1234
123
12
1

7)Pattern Seven
n=5;

1
3
5
7       
9

      *
     ***
    *****
   *******
  *********

8)Pattern Eight (Reverse of Pattern Seven)
n=5;

9
7
5
3
1


*********
 *******
  *****
   ***
    *
    
9)Pattern Nine 
n=5;

9
7
5
3
1
1
3
5
7       
9

*********
 *******
  *****
   ***
    *
    *
   ***
  *****
 *******
*********

10)Pattern Ten
n=5;

*
**
***
****
*****
****
***
**
*

11)Pattern Eleven
n=5;

1
0 1
1 0 1
0 1 0 1
1 0 1 0 1

12)Pattern Twelve
n=5;

1      1
12    21
123  321
12344321

13)Pattern Thirteen
n=5;


1
2 3
4 5 6
7 8 9 10
11 13 14 15

14)Pattern Fourteen
n=5;

A
A B
A B C
A B C D
A B C D E

15)Pattern Fifteen
n=5;

A B C D E
A B C D
A B C
A B
A

16)Pattern Sixteen
n=5;

A
B B
C C C
D D D D
E E E E E

17)Pattern Seventeen
n=5;


    A
   ABA
  ABCBA
 ABCDCBA
ABCDEDCBA

18)Pattern Eighteen
n=5;


E 
D E 
C D E 
B C D E 
A B C D E 

19)Pattern Nineteen
n=5;

**********
**** ****
***   ***
**     **
*       *
*       *
**     **
***   ***
**** ****
**********

20)Pattern Twenty
n=5;


*         *
**       **
***     ***
****   ****
***** *****
****   ****
***     ***
**       **
*         *

21)Pattern Twentyone
n=5;


*****
*   *
*   *
*   *
*****

22)Pattern Twentytwo
n=5;


*   *
 * * 
  *  
 * * 
*   *

23)Pattern Twenthree
n=4;
7*7

4 4 4 4 4 4 4 
4 3 3 3 3 3 4 
4 3 2 2 2 3 4 
4 3 2 1 2 3 4 
4 3 2 2 2 3 4 
4 3 3 3 3 3 4 
4 4 4 4 4 4 4 


-------------------------------------------------------------------------------------------------------------------------------------------

#Section 2 : For interviews

#In this section, JavaScript-based questions are covered for interview preparation, along with other commonly asked questions which are asked in coding rounds.


#)1

--a)
let a=5;
let b="10";

let c=b-a;
let c=b*a;
let c=b/a;
let c=b+a

console.log(c);
console.log(typeof(c));

--b)
let a=9;
let b=9;
let c="5";
let d="3";
let e=undefined;
let f=null;
let g=true;
let h=false;

console.log(a+b)
console.log(c+d)
console.log(a+c)
console.log(e+a)
console.log(e+d);
console.log(a+f)
console.log(d+f);
console.log(d-f);
console.log(d/f);
console.log(a+g);
console.log(a-g);
console.log(b-h);
console.log(b+h);

console.log("Sum of a + b = " + a + b);
console.log(a + b+ " is a sum of a + b");


#2) Implement callback function in JavaScript by passing one function into another and then using it to print a value?

#3) Tells the output without running the code.

function firstFunction() {
  console.log("First Function Start");
  secondFunction();
  console.log("First Function End");
}

function secondFunction() {
  console.log("Second Function Start");
  thirdFunction();
  console.log("Second Function End");
}

function thirdFunction() {
  console.log("Third Function");
}

firstFunction();

#4)Tells the output without running the code in the proper sequence.

console.log("line number 1", varName);
var varName = 10;

function b() {
  console.log("line number 2", varName);
}

console.log("line number 3", varName);

function fn() {
  console.log("line number 4", varName);
  var varName = 20;
  b();
  console.log("line number 5", varName);
}

console.log("line number 6");

fn();


#5)Tells the output 

var a = 10;
console.log("line number 2", a);
function fn() {
  console.log("line number 4", a);
  var a = 28;
  a++;
  console.log("line number 7", a);
  if (a) {
    var a = 30;
    a++;
    console.log("line number 11", a);
  }
  console.log("line number 13", a);
}
fn();
console.log("line number 2", a);

#6) Tells The output

let letFruit = "orange";
var varFruit = "orange"
console.log("letFruit", letFruit,
"varFruit", varFruit)
{
let letFruit = "apple";
varFruit = "apple";
console. log("letFruit", letFruit,
"varFruit", varFruit)
}
console.log("letFruit", letFruit, "varFruit", varFruit);


#7) What will be the output of `console.log(person.fullName())`, and why?

let person = {
  firstName: "Yash",
  lastName: "Mishra",
  age: 22,
  fullName: function () {
    let greeting = "Hello, my name is ";
    return `${greeting} ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
  },
};

#8)What is lexical scop/lexical scoping ?
    
#9) Can we use the for...of loop for objects ?

#10)Explain the use of call(), apply(), and bind() in JavaScript?

#11)What "this keyword" is javascript ?

#12) In JavaScript, what is the difference between using an arrow function and a regular function as a method inside an object? How does the value of `this` differ between the two and what happens if you try to access object properties using `this` inside an arrow function?

let person = {
  firstName: "Yash",
  lastName: "Mishra",
  age: 22,
  regularFunction: function () {
    return `Regular: My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
  },
  arrowFunction: () => {
    return `Arrow: My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
  },
  arrowFunctionTwo: () => {
    return this;
  },
};

console.log(person.regularFunction());

console.log(person.arrowFunction());

console.log(person.arrowFunctionTwo());

#13)Tell the output without running the code.

let globalSpace = "this";
console.log(globalSpace);

function abc() {
  console.log(this);
}

abc();

let person = {
  firstName: "Yash",
  lastName: "Mishra",
  seeOne: function () {
    return `My name is ${this.firstName} ${this.lastName}.`;
  },
  seeTwo: function () {
    return this;
  },
  seeThree: function () {
    let arrowFunction = () => {
      return `My name is ${this.firstName} ${this.lastName}.`;
    };
    arrowFunction();
  },
  seeFour: function () {
    let arrowFunction = () => {
      return `My name is ${this.firstName} ${this.lastName}.`;
    };
    return arrowFunction();
  },
  seeFive: function () {
    let arrowFunction = () => {
      return this;
    };
    return arrowFunction();
  },
};

console.log(person.seeOne());
console.log(person.seeTwo());
console.log(person.seeThree());
console.log(person.seeFour());
console.log(person.seeFive());


 
#14) What will be the output of the following code ?

? Code Without `await`:

async function f1() {
  console.log(1);
}

async function f2() {
  console.log(2);
}

console.log(3);

f1();
f2()

console.log(1);

f3();

async function f3() {
  console.log("Go!");
}

? Code With `await`

async function main() {
  async function f1() {
    console.log(1);
  }

  async function f2() {
    console.log(2);
  }

  console.log(3);

  await f1();
  await f2();

  console.log(1);

  await f3();

  async function f3(){
    console.log("Go!");
  }
}

main()


#15) Find the output of this codes ?

>a)
for (let a = 1; a <= 5; a++) {
    setTimeout(() => {
      console.log(a);
    }, 1000);
}


>b)
for (var a = 1; a <= 5; a++) {
  setTimeout(() => {
    console.log(a);
  }, 1000);
}


#16)Give me previous output output:

1
2
3
4
5
#which you get using Let but that time don't use let .

>>Without changing the var into let 

Expected output:

1
2
3
4
5


#17)What if we palce let outside the for loop ? , tell me correct output .

let a = 1;

for (a; a <= 5; a++) {
    setTimeout(() => {
        console.log(a)
    }, 1000)
}


#18)Tell me the output of this code.

>a)
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 2;
    count++;
    console.log(count); // What is logged here?
  }
  console.log(count); // What is logged here?
})();

>b)
let countTwo = 0;
function immediate() {
  if (countTwo === 0) {
    let countTwo = 2;
    countTwo++;
    console.log(countTwo); // What is logged here?
  }
  console.log(countTwo); // What is logged here?
}

immediate();

#19)Tell me the output of this code in proper sequence manner .

let outerFun = (() => {
    
    let count = 10;
    
    function see() {
        count++;
        console.log("See count", count)
    }
    
    let ref = count;
    console.log("Center ref", ref)

    function seeTwo() {
        console.log("SeeTwo count", count)
        console.log("SeeTwo ref", ref)

    }
    return [see, seeTwo];

})

let [see, seeTwo] = outerFun()
see();
see();
seeTwo();


#20) What is `Destructuring`, `Spread operator`, and `Rest operator`.

#21)Explain Event loop.

#22)Explain Global Execution context.



//#17)What is Bable and webpack ?

--1. Babel

Babel is a JavaScript transpiler that converts modern JavaScript (ES6+) into older, browser-compatible 
JavaScript. This ensures your code works in all browsers, even those that don’t support the latest
features.

Purpose: It converts modern JavaScript (ES6/ES7+) into older JavaScript (ES5) that works
in all browsers.

Why it's important: Not all browsers support the latest JavaScript features, so Babel ensures 
your code is compatible with older browsers.

--2. Webpack

Webpack is a module bundler. It takes all your project’s files (JavaScript, CSS, images)
and bundles them into one (or a few) optimized files, improving performance and managing 
dependencies.

Purpose: It bundles your JavaScript, CSS, and other assets into a single file (or smaller chunks) 
for faster browser loading.

Why it's important: Webpack helps in managing dependencies and improving performance by bundling 
and optimizing files for deployment.


#18) Why is Node.js necessary?

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

#19) For version Checking which command is good: --version, -v, --v, or -version?

With the help of these commands (--version, -v, --v, and -version), we can check the version of 
installed tools. But, but, but...

For checking versions, **--version** and **-v** are the most commonly used and reliable commands.
, --v and -version  may also work, but they are not supported by all tools. 
For example, in **TypeScript**, all these commands work. However, in Node.js, --v and -version 
do not work. 

>>Therefore, it's better to use --version and -v consistently to avoid issues.

#20)What is TypeScript ?

TypeScript is a statically typed superset of JavaScript that enhances code quality, maintainability, and 
readability. It ensures type safety during development, which helps prevent runtime errors, especially in 
large-scale applications.

> Extra Tip:
When discussing TypeScript, make sure to mention that it’s widely used in larger applications to improve 
reliability** and make **refactoring** easier. It also **transpiles** into JavaScript, so it can run in 
any environment where JavaScript runs!

#21)What is -g ?

-g (Global Installation):
When you use the -g flag with npm (e.g., npm install -g <package-name>), it means you are installing the 
package globally on your system. This means the package will be available system and can be used 
in any project without needing to install it separately in each project folder.

>>Global Installation :
(-g) installs the package in a global location on your system, making it accessible anywhere in your system.

>>Local Installation (without -g) :
Installs the package only in the current project’s node_modules folder, and it is available only within that 
specific project.


#22)What is JSX ?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code directly 
within your JavaScript files. It is primarily used in React to describe what the UI should look like.

JSX simplifies the process of creating React components and enhances the readability of the code, allowing 
developers to build user interfaces more efficiently.

#23)What is ts and tsx in react vite ?

  --  ts = Typescript and tsx = Typescript XML.
  - .ts : This is a TypeScript file that can contain plain TypeScript code. It does **not** support JSX syntax.
  - .tsx : This is a TypeScript file that **does** support JSX syntax, allowing you to write React components.
  - .ts for files that do not contain any React components or JSX.
  - .tsx for files that contain React components, JSX, or any JSX expressions.
  - Use `.ts` for standard TypeScript files without JSX.
  - Use `.tsx` when writing React components that include JSX.

> Using `.ts` File

This file contains TypeScript code without any JSX:

```typescript
// example.ts
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet('Yashu'));


>  Using `.tsx` File
This file contains a React component with JSX:

```typescript
// ExampleComponent.tsx

import React from 'react';

const ExampleComponent: React.FC = () => {
  return (
    <div>
      <h1>Hello, Yashu!</h1>
    </div>
  );
};

export default ExampleComponent;



#25)
Swap Two Variable (Three Ways)

let a=30;
let b=600;

#26)
Can you write this same array destructuring swap logic for three variables?
Like x = 1, y = 2, z = 3 → swap x -> y, y -> z, z -> x

#27)
let a=8;
let b=2;

console.log(8%2)
console.log(2%8)

#28)
let a=5859;

1)Remove last digit and print all the remaiing digit 585.
2)Print only last digit 9.

#29)
console.log(10>5 && -55<56 && 67<88)
console.log(10>5  -55<56 && 67>88)
console.log(100=="100" || 2>-9 || 88<102)
console.log(100==="100" || 2>-9 || 88<102)
console.log(100==="100" || 2>-9 || 88>102)
console.log(100==="100" || 2<-9 || 88>102)

#30)

1)
let a=10;
let ansPost=a++;
console.log(ansPost)

2)
let b=10;
let ansPre=++b;
console.log(ansPre)

3)
let x=10;
let ansPost=x++;
let ansPre=++x;
console.log(ansPost);
console.log(ansPre);

4)
let i=11; 
let answer=i++ + ++i;
console.log(answer);

5)
let p=11; 
let value=p++ + p;
console.log(value);

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
console.log(a);

b)
let see=false;
see++;
console.log(see);

c)
let x=10;
console.log(x++)

d)
let y=15++;
console.log(y);

e)
let p=10;
let ans=(p++);
console.log(p);

f)
let p=10;
let ans=++(p++);
console.log(p);

#31)
A)Firt Generate 4 digit otp then Generate 5 digit otp.
B)Area of rectangle (Formula : Lenght*Breadth) and Perimeter of rectangle (Formula : 2(Length * Breadth)
let l=10;
let b=20;
c)Find circumference of circle , Formula 2*pi*r (We need only Two value after decimal and number not string so type also)
let radius=5;

#32) Given an array of integers, calculate the total of all its values.

let arr=[10,20,30,40,50];

#33) Find the largest value in an array.

let arr=[10,20,78,30,85,40,50,];

#34) Find the lowest value in the array.

let arr=[10,20,78,4,30,85,40,50,];

#35) Find the first and second maximum values from the array, Create a solution that can find the first and second maximum values from the arrays given below:
let arr1 = [10, 20, 78, 4, 30, 85, 40, 50, 80, 86, 99, 87, 89, 9, 98, 99];
let arr2 = [50, 50, 50, 50];
let arr3 = [99, 99, 99, 89, 87];

#36)Reverse the array

let arr=[1,2,3,4,89,5,6,7,66,8,0,9,10];

#37)Put 0s on left and 1s on right side.

let arr=[0,0,1,0,1,0,1,1,0,1,0]

#38)Print Each Charcter on new line.

let s="ramratan";

#39)Print the each Charcter on a reverse order on new line.

let s="ramratan";

#40)Check the string is Palindrom or not .

let a="abcdef";

#41)Find two numbers in a sorted array whose sum equals the "target" using two pointers, Your target is 13 and the array is sorted.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

#42)Write a JavaScript function to toggle the case of each character in a given string without using built-in methods like toUpperCase() or toLowerCase().
let str="YAsh";

#43)
Count how many times each character repeats in a string.

let str = "zZabcdedcjbA";

#44)
1)Use console.log() to display the current year.
2)Create a two variable for first and last name.
3)Create a for loop that calculate the factorial of 5.
4)Write a nested loop to print a 3x3 grid of numbers.
1 2 3 
4 5 6 
7 8 9 
5)Reverse the Array'
let arr=[1,2,3,4,5];


#45)In JavaScript, what happens if you declare a variable without using let, const, or var?

#46)Reverse the array  using Bubble sort,Selection Sort,Insertio sort and Merge sort.
let arr = [2, 78, 9, 23, 3, -5, 0, 95, 1, 54, 77, -88];

#47)Why does the first code throw a "Maximum call stack size exceeded" error while the second code runs infinitely without crashing, even though both are designed to run continuously?

---Context :

>>Recursion
Recursion is a programming technique in which a function calls itself to solve a problem by breaking it down into smaller subproblems, 
continuing until a base case is reached.

>>Backtracking
Backtracking is a method where we try all the possible options.If one option doesn’t lead to a valid solution, we go back and try another option.
We keep doing this until we find the correct solution.
--or-- 
Backtracking is a problem-solving technique where we try all possible options to build a solution step by step.
If a certain choice doesn’t lead to a valid or complete solution, we backtrack—go back to the previous step—and try another option.
This continues until we find a valid solution or explore all possibilities.
--or--
Backtracking is a method where we explore all possible options, and if one path fails, we backtrack and try another, until we 
reach a valid solution.


let test = (n) => {
if (n===0) return;
console.log("hello ji");
test(n--)
};

test(5);


let testTwo = (n) => {
for(let a=n; a>-1; a++){
    console.log("Helllo ji");
}
};

testTwo(5);

#48) Fibonacci Series – 3 Variations

>Q1. Write a function to print the first `n` Fibonacci numbers.
Example:
Input: `n = 10`
Output: `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`

---

>Q2. Write a function to return the Fibonacci number at the `n`th position (1-based index).
Example:
Input: `n = 10`
Output: `34`

---

>Q3. Write a function to return the position of a given number in the Fibonacci sequence. If the number is not part of the Fibonacci series, return `"Not a Fibonacci number"`.
Example:
Input: `num = 34`
Output: `10`

>Q4. Write a function to return the sum of first n Fibonacci numbers.
Example:
Input: n = 10
Output: 88
Explanation: 0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 = 88

#49)Write a function to print numbers from n to 1 and from 1 to n without using a loop.
Example 1 (n to 1):
Input: n = 5
Output: 5 4 3 2 1

Example 2 (1 to n):
Input: n = 5
Output: 1 2 3 4 5

#50)Write a function to calculate the sum of first n natural numbers without using a loop.
Example:
Input: n = 10
Output: 55
Explanation: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

#51)Write a function to print Fibonacci numbers till n without using a loop.
Example:
Input: n = 10
Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
Explanation: Each number is the sum of the previous two numbers.

#52)Write a function to calculate the sum of first n Fibonacci numbers without using a loop.
Example:
Input: n = 10
Output: 88
Explanation: 0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 = 88

#53)What is Memoization ?

#54)Merge Two sorted array ?
let arrayOne = [3, 5, 8, 9, 89, 92];
let arrayTwo = [1, 6, 34, 67, 90,95, 102,999];

#55)You are given a sorted array of distinct integers in ascending order and a target value. Your task is to implement the binary search algorithm to return the index of the target if it is present in the array. If it is not present, return -1.
let arr = [2, 5, 14, 25, 67, 89, 103, 117, 150];
*/
