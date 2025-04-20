console.log("JS Logical Questions Section Is Working");
/*
1. Check and print the following types of numbers within a given range:  
  - Even Numbers  
  - Odd Numbers  
  - Prime Numbers

2. Print the following star patterns: 

1)Pattern One
*****
*****
*****
*****
*****

2)Pattern Two
*
**
***
****
*****

3)Pattern Three
1
12
123
1234
12345

4)Pattern Four
1
22
333
4444
55555

5)Pattern Five (Decending Order)

*****
****
***
**
*

6)Pattern Six
12345
1234
123
12
1

7)Pattern Seven
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

1
0 1
1 0 1
0 1 0 1
1 0 1 0 1

12)Pattern Twelve

1      1
12    21
123  321
12344321

13)Pattern Thirteen

if n=5

1
2 3
4 5 6
7 8 9 10
11 13 14 15

14)Pattern Fourteen

A
A B
A B C
A B C D
A B C D E

15)Pattern Fifteen

A B C D E
A B C D
A B C
A B
A

16)Pattern Sixteen

A
B B
C C C
D D D D
E E E E E

17)Pattern Seventeen

    A
   ABA
  ABCBB
 ABCDCCC
ABCDEDDDD






_____--------------------____________________-------------------------------_____________________------------------------___________________________-------------------------_________________________   

1. **Reverse a String:** Write a function to reverse a given string.
2. **Palindrome Check:** Write a function to check if a string is a palindrome.
3. **Max & Min in an Array:** Find the maximum and minimum values in an array.
4. **Remove Duplicates:** Remove duplicates from an array.
5. **Prime Number Check:** Write a function to determine if a number is prime.
6. **Factorial Calculation:** Calculate the factorial of a number using recursion.
7. **Fibonacci Series:** Generate the Fibonacci series up to *n* terms.
8. **Custom Array Sort:** Sort an array of numbers without using the built-in sort function.
9. **Character Frequency:** Count the occurrence of each character in a string.
10. **Empty Object Check:** Determine if an object is empty.
11. **Merge Arrays:** Merge two arrays without duplicates.
12. **Flatten Nested Array:** Flatten a nested array (one level or fully flattened).
13. **Array Intersection:** Find the intersection between two arrays.
14. **Implement Map:** Create your own implementation of the `Array.map()` method.
15. **Pattern Generation:** Generate a pyramid (or similar) pattern using loops.
16. **Decimal to Binary:** Convert a number to its binary representation.
17. **Swap Variables:** Swap two variables without using a temporary variable.
18. **Anagram Check:** Check if two strings are anagrams.
19. **Deep Clone Object:** Create a deep clone of an object.
20. **Sum of Digits:** Find the sum of the digits of a number.
21. **Count Vowels:** Count the number of vowels in a string.
22. **Reverse Array:** Reverse an array without using the built-in `reverse()` method.
23. **Capitalize Words:** Capitalize the first letter of every word in a string.
24. **Debounce Function:** Implement a debounce function.
25. **Even or Odd:** Check if a number is even or odd.

*/
//#Question 1

// let ab=5;
// let bc="10"

// let cd=bc-ab;
// let cd=bc*ab;
//  let cd=bc/ab;

// let cd=bc+ab;
// console.log(cd);
// console.log(typeof(cd));

/*
In JavaScript, when you use the + operator with one operand being a number and the other operand being a string, JavaScript implicitly
coerces the number to a string and performs string concatenation rather than addition.
*/

/* 
Concatenation primarily refers to combining strings together to form a single string. However, it can also be used more broadly to
describe the process of combining or linking together multiple items or entities, not just limited to strings. 

In the context of programming, especially with languages like JavaScript, concatenation commonly refers to combining strings by 
appending one string to the end of another. For example, combining words or phrases to form a sentence, or combining different 
parts of a URL.

While concatenation often involves combining strings, the concept can also be applied to other types of data, such as combining arrays, 
objects, or even numbers. However, in the context of programming languages, the term "concatenation" is most commonly associated 
with string manipulation.

*/

//# Question 2 :- How can you pass one function into another function and print its value in JavaScript ?

// const one = (parameter) => {
//   console.log(parameter());
// };

// const two = () => {
// return("I am Two")
// };

// one(two)

//  function a(){
//   console.log("one");
// }
// a()

// function a(){
//   console.log("two");
// }

// function a(){
//   console.log("three");
// }

//#Question 4 : Tells the output without running the code.

// function firstFunction() {
//   console.log("First Function Start");
//   secondFunction();
//   console.log("First Function End");
// }

// function secondFunction() {
//   console.log("Second Function Start");
//   thirdFunction();
//   console.log("Second Function End");
// }

// function thirdFunction() {
//   console.log("Third Function");
// }

// firstFunction();

//#Quesstion 5 : Tells the output without running the code in the proper sequence.

// console.log("line number 1", varName);
// var varName = 10;

// function b() {
//   console.log("line number 2", varName);
// }

// console.log("line number 3", varName);

// function fn() {
//   console.log("line number 4", varName);
//   var varName = 20;
//   b();
//   console.log("line number 5", varName);
// }

// console.log("line number 6");

// fn();

//#Question 6 : Can we use the for...of loop for objects?
/*
When we use the for...of loop with an array, it throws the values. 
When we use the for...in loop with an array, it prints the index 
numbers instead of the array values.

1. Use `for...of` for arrays to directly access the values.
2. Use `for...in` for objects to iterate over property names.
*/

//#Question 7 : Tells the output

// var a = 10;
// console.log("line number 2", a);
// function fn() {
//   console.log("line number 4", a);
//   var a = 28;
//   a++;
//   console.log("line number 7", a);
//   if (a) {
//     var a = 30;
//     a++;
//     console.log("line number 11", a);
//   }
//   console.log("line number 13", a);
// }
// fn();
// console.log("line number 2", a);

//#Question 8 : Tells The output

// let letFruit = "orange";
// var varFruit = "orange"
// console.log("letFruit", letFruit,
// "varFruit", varFruit)
// {
// let letFruit = "apple";
// varFruit = "apple";
// console. log("letFruit", letFruit,
// "varFruit", varFruit)
// }
// console.log("letFruit", letFruit, "varFruit", varFruit);

/*
letfruit=orange,varfruit=orange
letfruit=apple,varfruit=apple
letfruit=orange,varfruit=apple

*/

//#Question 9 : You have the following JavaScript object:

// 1. What will be the output of `console.log(person.fullName())`, and why?
// 2. How does the `this` keyword behave inside the `fullName` method?
// 3. What is the significance of using `let` inside the `fullName` method?

/*
let person = {
  firstName: "Yash",
  lastName: "Mishra",
  age: 22,
  fullName: function() {
    let greeting = "Hello, my name is ";
    return `${greeting} ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
  }
};

//>**Answer:**

1. **Output:**
   - The output will be: `"Hello, my name is Yash Mishra. I am 22 years old."`

2. **Explanation of `this`:**
   - Inside the `fullName` method, `this` refers to the `person` object because the method is being called on the `person` object (`person.fullName()`).
   - As a result, `this.firstName`, `this.lastName`, and `this.age` correctly access the `firstName`, `lastName`, and `age` properties of the `person` object.

3. **Significance of `let`:**
   - `let` is used to declare the `greeting` variable inside the `fullName` method. This variable is block-scoped, meaning it is only accessible within the `fullName` method. 
   - Using `let` here ensures that `greeting` is a local variable and doesn't interfere with other parts of the code, demonstrating good scoping practices.

 */

//##Question 9 In JavaScript, what is the difference between using an arrow function and a regular function as a method inside an object? How does the value of `this` differ between the two,and what happens if you try to access object properties using `this` inside an arrow function?
/*
**Answer:**

The key difference between an arrow function and a regular function as a method inside an object is how `this` is handled.

- **Regular functions**: When used as methods inside an object, the `this` keyword refers to the object the method is called on. This allows you to access the object's properties directly using `this.propertyName`.

- **Arrow functions**: Arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding lexical scope where the function is defined. If an arrow function is used as a method inside an object, the `this` value inside the arrow function will refer to the `this` from the outer scope, not the object itself.

**Example:**

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


**Explanation:**

- In `regularFunction`, `this` refers to the `person` object, so it correctly accesses `firstName`, 
`lastName`, and `age`.
- In `arrowFunction`, `this` does not refer to the `person` object. Instead, it refers to 
the outer scope, which in many cases is the global object (`window` in browsers), leading to `undefined` values for the properties.

**Conclusion:** When defining methods inside an object, if you need to use `this` to refer
 to the object, you should use regular functions. Arrow functions are more suited for cases 
 where you want to maintain `this` from the surrounding scope, not when you need to access 
 properties of the object.  
*/

//#10) What will be the output of the following code ?

/*
? Code Without `await`:

async function f1() {
  console.log(1);
}

async function f1() {
  console.log(2);
}

console.log(3);

f1();

console.log(1);

f2();

async function f2(){
  console.log("Go!");
}


? Code With `await`

async function main() {
  async function f1() {
    console.log(1);
  }

  async function f1() {
    console.log(2);
  }

  console.log(3);

  await f1();

  console.log(1);

  await f2();

  async function f2(){
    console.log("Go!");
  }
}

main();


>Bothe code have same output

3
2
1
Go!

 If the `await` is used with functions that don't involve any actual delay (like those that return 
 promises resolved immediately or don’t have any asynchronous operations), the code behaves similarly
 to synchronous code. Here's a more detailed explanation:

1. await` Behavior:
   - `await` pauses the execution of an `async` function until the promise it’s waiting for is resolved or rejected. 
   - If the promise resolves immediately (or if the function doesn’t actually involve any asynchronous behavior), the `await` doesn’t cause any noticeable delay.

2. Immediate Resolution:
   - In your example, both `f1()` and `f2()` are defined as `async` functions but they don’t return any promises that involve real asynchronous work like network requests or timers. 
   - Because of this, `await` doesn’t introduce a delay and the code executes in a synchronous-like manner within the `main()` function.

3. Code Execution Order:
   - Without `await`: The functions are called in the order they appear, with synchronous logging and function calls.
   - With `await`: Even though `await` is used, the functions execute immediately because they are resolved immediately. Thus, the output order remains the same as if `await` were not used.

In summary, without actual asynchronous operations, `await` does not create a delay and the code 
effectively executes in a synchronous manner.

*/

//#11) Find the output of this code using var and let.

/*

for (let a = 1; a <= 5; a++) {
    setTimeout(() => {
      console.log(a);
    }, 1000);
}

--Vs--

for (var a = 1; a <= 5; a++) {
  setTimeout(() => {
    console.log(a);
  }, 1000);
}


-----------------------------------------

#### For `let`

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


-----------------------------------------


>>Explanation for Let :

- Each `{}` block represents a new scope created by `let` for each iteration.
- `setTimeout` captures the value of `a` specific to that iteration's block.


-----------------------------------------

>>> For `var`


Code:

for (var a = 1; a <= 5; a++) {
  setTimeout(() => {
    console.log(a); // Prints 6 (value of 'a' after loop ends)
  }, 1000);
}


🔥Diagram 1:


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


🔥Diagram 2:

var a; // Global Scope 👀👀👀👀

for (a = 1; a <= 5; a++) {
  setTimeout(() => {
    console.log(a); // Prints 6 (value of 'a' after loop ends; each iteration updates the same 'a')
  }, 1000);
}


-----------------------------------------

>>Explanation for var:

1. Global Scope: When using `var`, there is only one variable in the global scope. 
The value of `a` is updated during each iteration, but no new block is created for each loop 
Value Updated Globally. 
 
2. **Value Updated Globally**:
 When you use `var`, there’s only one variable, and it’s being updated throughout the entire loop. 
 So during each iteration, the value of `a` is updated globally.

That means:

1. Initially, `a` is `1`.
2. When `a` becomes `2`, the previous value of `1` is also updated to `2` 
(because there is only one `a` variable in the global scope).
3. This keeps happening, so by the time the loop finishes, `a` is `6`.

When the `setTimeout` function is executed after the loop has completed, it refers to that same 
global `a` variable, which now holds the value `6`. That's why `6` gets printed five times. 
The previous values aren't preserved because `var` is constantly being overwritten.

During looping, only the value of the one `a` variable is being updated each time. 

- `var` is function-scoped and only creates a single block scope.
- By the time `setTimeout` executes, `a` has the final value of `6` because the loop has completed.
- Each `setTimeout` callback references the same `a`, which has been updated to `6`.



>> Summary

- **`let`**: Creates a new block scope for each iteration of the loop. Each `setTimeout`
 callback captures the value of `a` specific to that iteration.
  
- **`var`**: Uses a single block scope for the entire loop. By the time `setTimeout`
 callbacks execute, `var` has the final value of `6`, as `var` is function-scoped and not block-scoped.


*/

//##13)Give me previous output which you get using Let but that time don't use let .

/*
>>Without changing the var into let 

for (var a = 1; a <= 5; a++) {

    function see() {
        var a2=a;
        setTimeout(() => {
            console.log(a2)
        }, 1000)
    }
    see()

}

output:

1
2
3
4
5

*/

//#14)What if we palce let outside the for loop ? , tell me correct output .

/*
let a = 1;

for (a; a <= 5; a++) {
    setTimeout(() => {
        console.log(a)
    }, 1000)
}

Ans : In short: Both in the case of let (outside the loop) and var (inside the loop),
the same single variable is updated, and previous values are overwritten. That’s why 
in both cases, you get 6 printed five times when the loop completes.
*/

//#15)Tell me the output of this code.

/*
let count = 0;
(function immediate() {
    if (count === 0) {
        let count = 1;
        console.log(count); // What is logged here?
    }
    console.log(count); // What is logged here?
})();
*/

//#16)Tell me the output of this code in proper sequence manner .

/*

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


*/

/*
>>>Solution :

> Code Explanation:


let outerFun = (() => {
    
    let count = 10;
    
    function see() {
        count++;
        console.log("See count", count);
    }
    
    let ref = count;
    console.log("Center ref", ref);

    function seeTwo() {
        console.log("SeeTwo count", count);
        console.log("SeeTwo ref", ref);
    }

    return [see, seeTwo];
});

let [see, seeTwo] = outerFun();
see();      // increments count by 1 -> count is now 11
see();      // increments count by 1 again -> count is now 12
seeTwo();   // logs count and ref


> Key Points:
1. **Initial State:**
   - The first time `outerFun` is invoked, `count` is initialized with `10`.
   - The variable `ref` is immediately set to the value of `count`, which is `10` at that moment. This stores a **copy** of the value of `count` in `ref`.
   - `console.log("Center ref", ref)` logs the value of `ref` (which is `10` at that moment).

2. **When `see()` is called:**
   - The `count++` operation inside `see()` increments the `count` by 1.
   - After the first `see()`, `count` becomes `11`.
   - After the second `see()`, `count` becomes `12`.

3. **When `seeTwo()` is called:**
   - It logs the current value of `count` (which is `12`).
   - However, `ref` still holds the initial value of `count`, which was **`10`**, because `ref` was assigned the value of `count` at the time `outerFun` was first invoked.
   - **`ref` is not automatically updated** when `count` changes, because `ref` holds the **value** of `count` at the time it was declared, not a reference to `count`.

> Why `ref` is Not Updated:
- **`ref` is a primitive value (number)**, and when you do `let ref = count;`, it stores the value `10` (the value of `count` at that time), but it does not store a reference to the `count` variable itself.
- So, when `count` is incremented later inside the `see()` function, `ref` does not change because it's a separate copy of the value at the time of the assignment.

> Correct Output:

Center ref 10   // ref was assigned the initial value of count (10)
See count 11    // count is incremented to 11 after the first see()
See count 12    // count is incremented to 12 after the second see()
SeeTwo count 12 // seeTwo logs the current count, which is 12
SeeTwo ref 10   // seeTwo logs the value of ref, which is still 10

> How to Fix This:
If you want `ref` to reflect the current value of `count`, you would need to reference `count` directly inside `seeTwo()`, rather than assigning a copy of `count` to `ref`. Here's one way to fix it:

```javascript
let outerFun = (() => {
    
    let count = 10;
    
    function see() {
        count++;
        console.log("See count", count);
    }

    // No need for ref assignment here
    console.log("Center ref", count);

    function seeTwo() {
        console.log("SeeTwo count", count);
        // Now use count directly instead of ref
    }

    return [see, seeTwo];
});

let [see, seeTwo] = outerFun();
see();      // increments count to 11
see();      // increments count to 12
seeTwo();   // will log the current count, which is now 12


Now, `seeTwo()` will always log the current value of `count`.
*/

//#17)Tell me the output of this code .

/*

for (var i = 0; i < 3; i++) {
setTimeout(function log() {
   console.log(i); 
}, 1000);
}

*/
//#18)What is Bable and webpack ?

/*
1. Babel
Babel is a JavaScript transpiler that converts modern JavaScript (ES6+) into older, browser-compatible 
JavaScript. This ensures your code works in all browsers, even those that don’t support the latest
features.

What it is: Babel is a JavaScript transpiler.
Purpose: It converts modern JavaScript (ES6/ES7+) into older JavaScript (ES5) that works
in all browsers.

Why it's important: Not all browsers support the latest JavaScript features, so Babel ensures 
your code is compatible with older browsers.

2. Webpack

Webpack is a module bundler. It takes all your project’s files (JavaScript, CSS, images)
and bundles them into one (or a few) optimized files, improving performance and managing 
dependencies.


What it is: Webpack is a module bundler.

Purpose: It bundles your JavaScript, CSS, and other assets into a single file (or smaller chunks) 
for faster browser loading.

Why it's important: Webpack helps in managing dependencies and improving performance by bundling 
and optimizing files for deployment.

*/

//##19) Why is Node.js necessary?
/*

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


*/
//##20) For version Checking which command is good: --version, -v, --v, or -version?

/*
With the help of these commands (--version, -v, --v, and -version), we can check the version of 
installed tools. But, but, but...

For checking versions, **--version** and **-v** are the most commonly used and reliable commands.
, --v and -version  may also work, but they are not supported by all tools. 
For example, in **TypeScript**, all these commands work. However, in Node.js, --v and -version 
do not work. 

>>Therefore, it's better to use --version and -v consistently to avoid issues.
*/

/*

###21)What is TypeScript ?

TypeScript is a statically typed superset of JavaScript that enhances code quality, maintainability, and 
readability. It ensures type safety during development, which helps prevent runtime errors, especially in 
large-scale applications.

> Extra Tip:
When discussing TypeScript, make sure to mention that it’s widely used in larger applications to improve 
reliability** and make **refactoring** easier. It also **transpiles** into JavaScript, so it can run in 
any environment where JavaScript runs!
*/

/*

###21)What is -g ?

-g (Global Installation):
When you use the -g flag with npm (e.g., npm install -g <package-name>), it means you are installing the 
package globally on your system. This means the package will be available system and can be used 
in any project without needing to install it separately in each project folder.

>>Global Installation :
(-g) installs the package in a global location on your system, making it accessible anywhere in your system.

>>Local Installation (without -g) :
Installs the package only in the current project’s node_modules folder, and it is available only within that 
specific project.

*/

//#22)What is type inference in TypeScript?
/*
Type inference in TypeScript is the ability of the compiler to automatically determine the type of a 
variable or expression based on its value or context, without needing explicit type annotations. 
This feature helps keep the code clean and reduces redundancy while still providing type safety. For example, if you write `let num = 5;`, TypeScript infers that `num` is of type `number`. 📊✨

Even with type inference, we mention types explicitly for clarity, better error checking, improved IDE 
support, and to maintain code readability, especially in larger projects and for the developers.

Example : let num = 5; // TypeScript infers that 'num' is of type 'number'

*/
//#23)What is JSX ?

/*
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code directly 
within your JavaScript files. It is primarily used in React to describe what the UI should look like.

JSX simplifies the process of creating React components and enhances the readability of the code, allowing 
developers to build user interfaces more efficiently.
*/

//#24)What is ts and tsx in react vite ?

/*
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

*/
