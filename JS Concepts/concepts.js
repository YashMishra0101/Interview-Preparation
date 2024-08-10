console.log("JS Concepts Is Working");
//#1)How to declare variable in javascript / Three Type Of Function

//>Normal function

// function naam() {
//   console.log("Hi I am a normal Function");
// }

// naam();

// function naamTwo(num1, num2) {
//   console.log(num1 + num2);
// }

// naamTwo(5, 2);

// function naamThree(add) {
//   console.log(add);
// }

// naamThree(3 + 7);

//> Reference Assignment (Ek Variable ka refereance Dusre Variable ko diye hai)

// let a = [1, 2, 3, 5];

// let b = a;

// console.log(b);

//>Function Expression (Funciton ko Variable ke andar Store kiye hai)

//   const fExpress = function ex() {
//     console.log("I am a Function Expression");
//   };

// fExpress();

//>Anonymous Function (Functon ka name nahi hota use variable ke andar store kr te hai)

//   const ano = function () {
//     console.log("Hello Ji I am a Anonymous Function");
//  };

// ano()

//>Arrow Function

// const arrow =(print,printTwo)=>{
//     console.log(print,printTwo);
// }

// arrow ("I am a arrow Fucntion", "✋Two");

//>If there is a single Parameter

// const arrowTwo=(value)=>console.log(value);

// arrowTwo("I a Value")

//#2)IIFE (Immediately Invoked Function Expression): An IIFE is a function that is executed immediately after it is defined.
//--It is a common JavaScript pattern used to create a new scope and avoid polluting the global namespace.
//--Uses :-
//>Avoid polluting the global namespace
//>Execute an async function
//>The module pattern

//   (function abc () {
//     console.log("Helo Guys I am a iffi");
// }());

//#3)Parameter and Argument

/*
Parameter and argument are both part of a function. When we call a function and pass a value inside it, we use an argument to send
that value. The parameter, on the other hand, receives the value sent by the argument and handles it within the function. So, when 
we call a function and try to pass a value, that value is called an argument. Then, inside the function, that value is received 
and handled by the parameter.
*/

//>Code:-

// function greet(name) {
//     console.log("Hello, " + name);
// }

// greet("Yash");

//#4)What is first class citizen in javascript ?

/*
In JavaScript, functions are considered "first-class citizens." This means that functions have the same capabilities 
as other values like numbers and strings.

1.Assign to Variables: Functions can be assigned to variables, just like any other value.

const sayHello = function() {
  console.log("Hello!");
};

2.Pass as Arguments: Functions can be passed as arguments to other functions.

const greet = function(n) {
  return "Hello, " + n;
};


function logGreeting(greetingFunction,a) {
  console.log(greetingFunction(a));
}

logGreeting(greet,"yash")

3.Return from Other Functions: Functions can be returned from other functions.

function createGreeter() {
  return function() {
    console.log("Hi!");
  };
}

const greeter = createGreeter();
greeter(); // Output: Hi!


Other reason bhi hai
*/

//#5)Three way to declared variable in javascript (Var,let,Const)

//>In var we can redecared and reassing the the var vriable.

// var a = 10;
// console.log("In Var:", a);
// var a = 20;
// console.log("In Var:", a);

//>In let we cannot redecared the variable but we can reassign them.

// let b = 30;
// console.log("In let:", b);

// let b = 40; (not valid)
// console.log("In let:", b);

//>In const we cannot redecared or reassign the variable.

// const c = 50;
// console.log("In Const:", c);

//>Extra Info

/*
Using let and const is generally better because they avoid problems caused by var's function scope 
and hoisting. When we use var and let, we can assign a variable's value after declaration, but when
we use const, it is necessary to define the value during declaration.

--var is function scope and let and const are block scoped:-

example:function scope

function one() {
 if(true){
    var a=10;
 }
  console.log(a) //output:10
}
one()

example:Block scoped

function one() {
 if(true){
    let a=10;
 }
  console.log(a)//refrence error
}
one()

*/

//#5)What is Array in Javascript ?
/*
An array in JavaScript is a type of object that allows us to store multiple values in a single variable. 
We use square brackets ([]) to define an array, and the values inside the array are separated by commas.

Arrays are zero-indexed, which means the first element of an array is at index 0.
*/

// let array=["Yash","Jeet","Aman","Rahul"];
// console.log(typeof(array));//object
// console.log(array[1]);

//#6)What is object is Javascript ?

/*
An object is a data structure in JavaScript where we can store data in the form of key-value pairs. To access 
the data within an object, we use either dot notation or bracket notation. In bracket notation, we use square 
brackets. A function inside an object is called a method. Methods represent the behaviors or actions of the object.

With this: Preferred for accessing properties within methods as it makes the method flexible and tied to the object 
instance.

Without this: Not standard practice for object methods, but can work in specific contexts like closures or when 
properties are fixed at creation.
*/

// let person ={
//   name :"Yash",
//   age:22,
//   profile:"Front End Developer",
//   info:function(){
//     console.log(`Hello My Name is ${this.name}`);
//   }
// };

// console.log(person.name);
// console.log(person["name"]);
// console.log(person[name]); //wrong always use double or single quotes
// console.log(person[age]); //wrong always use double or single quotes

//--?Why it is wrong :Because whenever we write any key without double or single quotes, then JavaScript tries to find a variable name, not the object property name. So it gives a `ReferenceError` because the variable is not present.

/*
When you use a key without quotes in bracket notation, JavaScript interprets it as a variable name:

- **If the variable exists:** JavaScript uses its value as the property name.
- **If the variable does not exist:** JavaScript throws a `ReferenceError`.

Solution:-

let ref="name";
console.log(person[ref])
output=Yash
let age ="age";
console.log(person[age]);
output=22;

--🖐️ Use always Dot notation because is straightforward and easier to read.

*/

//--? 😂 Identifiers: Names given to variables, functions, properties, etc., to uniquely identify them.

//#7)Primitive Data Types , Non-Primitive Data Types and Stack and Heap

// Primitive Data Types: String, Boolean, Number, etc.
// Non-Primitive Data Types: Array, Object, Function, etc.

// Primitive Data Types are immutable, meaning their values cannot be changed.
// Any modification results in the creation of a new value.

// Non-Primitive Data Types are mutable, meaning their values can be changed
// without creating a new object, changing the same memory block.

// Primitive Data Types are stored in the stack. Copying these results in a new
// copy being created, so changes to the copy do not affect the original.

// Non-Primitive Data Types are stored in the heap. They are accessed via references,
// so changes to a reference will affect the original data.

/*

let oldProfile = "Front End Developer";
let newProfile = oldProfile;

newProfile = "Full Stack Developer";

console.log(newProfile); // Output: Full Stack Developer
console.log(oldProfile); // Output: Front End Developer

let arr = ["HTML", "CSS", "JavaScript"];
let arr2 = arr;

arr2[1] = "Tailwind CSS";

console.log(arr2[1]); // Output: Tailwind CSS
console.log(arr[1]);  // Output: Tailwind CSS

*/

//#8)Execution Context in JavaScript (Basic)
/*
An execution context is the environment in which JavaScript code is executed. It consists of two main phases:

1. **Memory Allocation Phase**:
   - Memory is allocated for variables and functions.
   - Initially, variables are set to `undefined`.
   - Function declarations are stored with their definitions.

2. **Code Execution Phase**:
   - Code is executed line by line.
   - Variables are assigned actual values during execution.

//-- Global Execution Context

- Created when the JavaScript code starts to run.
- Initially, the global execution context is pushed onto the call stack.

//-- Function Execution Context

- Created whenever a function is called.
- Each function call creates a new execution context.
- Function execution contexts are managed by the call stack:
  - A new execution context is pushed onto the call stack when a function is called.
  - The execution context is popped off the call stack when the function execution is complete.

//-- Call Stack

- The call stack keeps track of execution contexts.
- The global execution context is the first to be pushed onto the stack.
- Subsequent function calls create new execution contexts that are pushed onto the stack.
- Execution contexts are popped from the stack once their execution is finished.

//-- Key Points

- The execution context manages the execution of code.
- Memory allocation happens first, then code execution is happend.
- The call stack tracks the execution contexts, managing function calls and returns.

*/

//#9)Loops

//---For Loop

// for(let f=1;f<=10;f++){
//   console.log("For Loop",f);
// }

//--While Loop

// let w2=1;

// while(w2<=5){
//   console.log("While Loop",w2);
//   w2++
// }

//--Do While loop

// let d=1;

// do{
// console.log("Do While Loop",d);
// d++;
// }while(d<=8)

//--For in loop ( For in loop for object )

// const info={
//   name:"yash mishra",
//   role:"front end developer",
//   age:"21"
// }

// for (let key in info){
//   console.log(key);
// }

// for (let key in info){
//   console.log(info[key]);
// }

// for (let key in info){
//   console.log(`${key}:${info[key]}`);
// }

//>Inportant Info
/*
 When we use an arrow function, we cannot use this. If we need to use this, we should use a regular function instead 
  of an arrow function. According to gpt, a regular function is better than an arrow function inside an object .
? Can we use for of loop with obejct ?
Ans=>we cannot use a for...of loop directly with objects because for...of is designed to iterate over iterable objects, like 
arrays, strings, maps, and sets. Objects are not inherently iterable.However, you can use for...of with objects indirectly 
by iterating over their properties using methods like Object.keys(), Object.values(), or Object.entries()
*/

// -- For of loop (use for array)

// let arr = ["Yash", 21, "Developer"];

// for (let a of arr) {
//   console.log(a);
// }

/*
Can we use a for in loop for an array?
If we use for in with an array, it gives us the index numbers instead of the array values. If we need array values,
we need to use it this way: console.log(arr[a]) instant of console.log(a).

>Objects: Use for...in to iterate over keys.
>Arrays/Iterables: Use for...of to iterate over values.
*/

//#10) Hoisting Explained

/*
Hoisting means that during the compile phase (before code execution), variable and function declarations are moved to
the top of their containing scope. This is called hoisting.
*/

/*
**Explanation:**
- **During the compile phase**: It's important to note that hoisting occurs during the compile phase, not during code execution.
- **Variable and function declarations**: Both variables and functions are hoisted, but only the declarations, not the initializations.
*/

//--Hoistin In Function

//> Function Declarations

// Function Declarations: Are hoisted completely (both the name and body), so they can be called before they are defined in the code.

/*
Example:
hoistedFunction(); // This works because hoistedFunction is hoisted

function hoistedFunction() {
    console.log("This function is hoisted!");
}
*/

//> Function Expressions

// Function expressions, where you assign a function to a variable, are not hoisted. Only the variable declaration
// is hoisted, not the function assignment ,so calling the function before assignment results in a TypeError.

//Example:

// a()

// var a =function (){
//   console.log("Hey I a function") //TypeError: a is not a function
// }

// try {
//     notHoistedFunction(); // This throws an error because notHoistedFunction is undefined
// } catch (error) {
//     console.log(error); // ReferenceError: notHoistedFunction is not defined
// }

// var notHoistedFunction = function() {
//     console.log("This function is not hoisted.");
// };

//> Variable Declarations (var, let, const)

/*
- **var**: Variables declared with `var` are hoisted to the top of their scope, but they are initialized with 
`undefined` until the actual assignment happens.

Example:

console.log(hoistedVar); // Output: undefined
var hoistedVar = 5;
console.log(hoistedVar); // Output: 5


- **let** and **const**: Variables declared with `let` and `const` are also hoisted, but unlike `var`, they 
are not initialized. Accessing them before the declaration (initialization) results in a `ReferenceError`.

Example with `let`:

console.log(notHoistedVar); // Throws ReferenceError
let notHoistedVar = 10;


Example with `const`:

console.log(notHoistedConst); // Throws ReferenceError
const notHoistedConst = 15;

*/

//-- Conclusion

/*
- **Function Declarations**: Hoisted entirely (both name and function body).
- **Function Expressions**: Only the variable declaration is hoisted, not the function assignment.
- **Variable Declarations**: `var` variables are hoisted and initialized with `undefined`, while `let` 
and `const` variables are hoisted but not initialized (temporal dead zone).
*/

//#11)this,window and global

/*With the help of `window`, `this`, or `global`, you can access values inside the global execution context. 

To Summarize :
window : window is the global object in the browser.
global : global is the global object in Node.js.
this   : this refers to the current execution context. In a global scope (in non-strict mode) in browsers,. In Node.js, in the global scope,
this refers to an empty object ({}).
*/
//-- Browser:

//>window or this:
//- In the global execution context, you can use `window` or `this` to access any value (variables or functions) that are defined globally.

//-- Node.js:

//> global :
// - In the global execution context, you use `global` to access any value that is defined globally.

//--Example:

//>In Browser:

/*
var name = 'Alice';

Accessing the global variable 'name' using 'window' and 'this'

console.log(window.name); // Output: Alice
console.log(this.name);   // Output: Alice
*/

//>In Node.js:

/*

global.name = 'Alice';

Accessing the global variable 'name' using 'global'
console.log(global.name); // Output: Alice

*/

//--Key Points:
/*

- In browsers, `window` or `this` gives you access to the global scope.
- In Node.js, `global` gives you access to the global scope.

*/

//#8)Execution Context and Global Objects (In Detail)

//--Execution Context in JavaScript:

/*
- An execution context is the environment where JavaScript code is executed.
- It has two main phases:
  1. Memory Allocation Phase:
     - Memory is allocated for variables and functions.
     - Variables are initially set to `undefined`.
     - Function declarations are stored with their definitions.
  2. Code Execution Phase:
     - Code is executed line by line.
     - Variables are assigned their actual values during execution.
*/

//--Global Execution Context:
/*
- Created when JavaScript code starts to run.
- The global execution context is pushed onto the call stack first.
- Manages the execution of global code.
*/

//-- Global Objects in JavaScript:
/*
- In the browser, the global object is `window and this`.
  - You can use `window` or `this` to access global variables and functions.
  - Example:
    var name = 'Alice';
    console.log(window.name); // Output: Alice
    console.log(this.name);   // Output: Alice
- In Node.js, the global object is `global`.
  - Use `global` to access global variables and functions.
  - Example:
    global.name = 'Alice';
    console.log(global.name); // Output: Alice
*/

//--Key Points:
/*
- Global execution context is the default context where code starts execution.
- Execution context has memory allocation and code execution phases.
- Both **`this`** and **`window`** refer to the global object in browsers.
- **`this`, `window`, and `global` keywords** allow access to values in the global execution context.
- **`global`** serves a similar role as **`window`** in browsers but is specific to Node.js environments,provides 
  access to the global scope of variables and functions within Node.js applications.
*/

//#9)Basic Info

/*
JavaScript was developed by Brendan Eich in just 10 days in 1995 while he was working at Netscape Communications Corporation.
Initially named Mocha, it was later called LiveScript before adopting the name JavaScript. It's an interpreted language,
meaning it executes code line by line and is single-threaded.

JavaScript can be run in browsers and Node.js. Browsers like Firefox use SpiderMonkey, Safari uses JavaScriptCore,Chrome use V8 engine 
and Microsoft Edge uses the Chakra engine to execute JavaScript. //--Node.js, on the other hand, is not a framework 
or language but a software platform. It uses the V8 engine, the same one used by Google Chrome, to run JavaScript 
code in any terminal or command-line prompt.

JavaScript is fundamentally an interpreted language because it executes source code directly without 
a separate compilation step before runtime. However, modern JavaScript engines like V8 use JIT (just-in-time) compilation 
to optimize performance by compiling JavaScript code into machine code at runtime. So, while JavaScript remains an 
interpreted language, it benefits from JIT compilation in engines like V8, which significantly improves its performance. 

V8 uses just-in-time (JIT) compilation to translate JavaScript into optimized machine code at runtime, which speeds up
execution. So, while JavaScript benefits from improved performance with V8, it remains rooted in its interpreted nature.

-JavaScript is a synchronous single-threaded language.
*/

//##10)Lexical Scope , Scope chain

/*

-- Lexical Scope

**Definition:** Lexical scope means that a function can access variables that are defined in its 
  outer scope.

> Simple Explanation:

1. **Lexical Scope:** If you have a function inside another function (nested function), 
the inner function can access variables from the outer function.

2. **Example:**

function outerFunction() {
  var outerVar = "I am outside!";

  function innerFunction() {
    console.log(outerVar); // Can access outerVar because of lexical scope
  }

  innerFunction();
}

outerFunction();

In this example:
- `outerVar` is defined in `outerFunction`.
- `innerFunction` can access `outerVar` because it is within the lexical scope of `outerFunction`.

-- Scope Chain

**Definition:** The scope chain is the list of all the scopes in which a variable can be looked up.

> Simple Explanation:

1. **Scope Chain:** When the JavaScript engine needs to find a variable, it starts looking in the current scope. If it doesn't find it, it moves to the outer scope, and keeps going up the chain until it reaches the global scope.

2. **Example:**


function outerFunction() {
  var outerVar = "I am outside!";

  function innerFunction() {
    console.log(outerVar); // Looks in innerFunction's scope first, then outerFunction's scope
  }

  innerFunction();
}

outerFunction()

In this example:
- `innerFunction` looks for `outerVar`.
- It doesn't find `outerVar` in its own scope, so it looks in `outerFunction`'s scope.
- This process of looking up through the scopes is the scope chain.

-- Summary

- **Lexical Scope:** Determines that inner functions can access variables from their outer functions.
- **Scope Chain:** The process of looking up variables through nested scopes.

**In simple terms:** Lexical scope is like a nested set of boxes. The inner box (function) can look into the outer box (function) to find variables. The scope chain is the path JavaScript follows to find a variable if it's not in the current box.

*/

//##11)Tempory Dead Zone (TDZ)
/*
Temporal Dead Zone (TDZ) means you cannot access a variable declared with let or const before its declaration. If you try, 
it throws a ReferenceError. On the other hand, variables declared with var are hoisted and initialized to undefined, 
so you can access them before their declaration, but they'll just return undefined.

--Example

console.log(myVar); // Output: undefined (because of hoisting)
var myVar = 10;

console.log(myLet); // Throws ReferenceError
let myLet = 20;

console.log(myConst); // Throws ReferenceError
const myConst = 30;

*/

//#12)Shadowing

/*
Definition: Shadowing occurs when a variable declared within a certain scope (like a function or block) has the 
same name as a variable in an outer scope. The inner variable "shadows" the outer variable, meaning it takes precedence 
within its scope.

--Example

let x = 10; // Outer variable

function example() {
  let x = 20; // Inner variable that shadows the outer one
  console.log(x); // Outputs: 20
}

example();
console.log(x); // Outputs: 10


But ,

{
  let fruit = "Orange";
  console.log("one :", fruit)
  {
    var fruit = "Apple";
    console.log("two", fruit)//error,Identifier 'fruit' has already been declared
  }
} 

var is function-scoped and does not respect block scope, leading to potential conflicts and errors.
let and const are block-scoped, preventing these conflicts by keeping variables confined to the block in which they are declared.

>So, shadowing means that a variable inside a specific scope can "hide" a variable with the same name in an outer scope.
*/

//#13)About array and objects in details

/*
JavaScript में arrays और functions दोनों की typeof output "object" होती है, लेकिन वे अलग-अलग तरह से काम करते हैं। Arrays और functions दोनों iterable होते हैं, जबकि plain objects by default iterable नहीं होते। 

1. **Arrays और functions iterable होते हैं।** आप arrays के लिए for-of loop का उपयोग कर सकते हैं क्योंकि वे iterable होते हैं।
2. **Plain objects iterable नहीं होते।** अगर आपको objects के keys या values को iterate करना है, तो आप for-in loop का उपयोग कर सकते हैं।

उदाहरण:
- **Arrays:** for-of loop का उपयोग कर सकते हैं।
- **Objects:** for-in loop का उपयोग कर सकते हैं।

*/

//--We can add key,value and function inside the array

/*
let arr=[1,"Yash","Ram","Hello"];
arr.name="yash"
*/

/*
--More About array

let arr = [1, "Yash", "Ram", "Hello"];

// Adding a property to the array
arr.name = "yash";

// Adding a method to the array
arr.a = function(){
  console.log("I am a function inside the array");
}

console.log(arr); // Outputs the array with added properties and methods

console.log(arr.length); // Outputs: 4

**Explanation:**
- We start with an array containing four elements.
- We then add a property `name` and a method `a` to the array.
- The `length` property of the array remains 4. This is because the `length` property only counts the numeric indices (elements) in the array, not the additional properties or methods.

// Adding an element at index 10

arr[10] = "Rahul";

console.log(arr); // Outputs the array with "Rahul" at index 10 and undefined for missing indices

console.log(arr.length); // Outputs: 11
console.log(arr[8]); // Outputs: undefined (since no value is assigned at index 8)
console.log(arr[10]); // Outputs: "Rahul"
console.log(arr[15]); // Outputs: undefined (since no value is assigned at index 15)


**Explanation:**
- We add an element "Rahul" at index 10 of the array.
- The `length` of the array now becomes 11. This is because the array now has elements from index 0 to 10, even though some of these elements are `undefined`.
- Accessing `arr[8]` returns `undefined` because no value is assigned at that index.
- Accessing `arr[10]` returns "Rahul" because we explicitly assigned a value at that index.
- Accessing `arr[15]` returns `undefined` because no value is assigned at that index.

**Key Points:**
1. **Array Length:** The `length` property of an array only counts numeric indices (elements), not additional properties or methods added to the array.
2. **Adding Properties/Methods:** Adding properties or methods to an array does not affect its length.
3. **Sparse Arrays:** Assigning a value to a higher index (e.g., 10) creates a sparse array, where intermediate indices (e.g., 4 to 9) are `undefined`.

--- About array

>1. `shift()`
 **`shift()`**:
  - **Use:** Removes and returns the first element of an array.

let arr = [1, 2, 3, 4];
let firstElement = arr.shift();

console.log(firstElement); // Outputs: 1
console.log(arr); // Outputs: [2, 3, 4]


 >2. `Object.keys()`
 **`Object.keys()`**:
  - **Use:** Returns an array of the object's property names (keys).


let obj = { name: "Yash", age: 21, role: "Front End Developer" };
let keys = Object.keys(obj);

console.log(keys); // Outputs: ["name", "age", "role"]

>3. `Object.values()`
 **`Object.values()`**:
  - **Use:** Returns an array of the object's property values.

**Example:**

let obj = { name: "Yash", age: 21, role: "Front End Developer" };
let values = Object.values(obj);

console.log(values); // Outputs: ["Yash", 21, "Front End Developer"]


>4. `Object.entries()`
**`Object.entries()`**:
  - **Use:** Returns an array of the object's property [key, value] pairs.
  
let obj = { name: "Yash", age: 21, role: "Front End Developer" };
let entries = Object.entries(obj);

console.log(entries); // Outputs: [["name", "Yash"], ["age", 21], ["role", "Front End Developer"]]

--About function

In JavaScript, functions are a special type of object. Although using `typeof` on a function will return `"function"`,
functions are indeed objects. This means you can add properties and methods to them just like you would with any other object.

So, even though `typeof` returns `"function"`, you can think of functions as objects with additional capabilities. 

Here's a quick example:

function example() {
  console.log("I am a function.");
}

// Adding a property to the function
example.description = "This is a function object.";

// Adding a method to the function
example.sayHello = function() {
  console.log("Hello!");
};

console.log(typeof example); // "function"
console.log(example.description); // "This is a function object."
example.sayHello(); // "Hello!"


In this example, `example` is a function, but it also has properties and methods, demonstrating that functions are
indeed objects in JavaScript.

Method:In simple terms, a method is a function that belongs to an object. It allows you to perform actions or compute values
related to that object.Property of an Object: 
*/

//#14)Imperative Programming vS Declarative Programming
/*
-- Imperative Programming:

- **Pros**:
  - **Control**: Gives you more control over the exact steps the program takes, which can be useful for optimization.
  - **Flexibility**: Allows for more detailed and customized solutions.
  - **Performance**: Can be more performant in certain cases because you can optimize the exact steps.

- **Cons**:
  - **Readability**: Code can become verbose and harder to read, especially for complex tasks.
  - **Maintainability**: Can be harder to maintain and modify because of the detailed control flow.

  > Example:

  --(Array Sum):

  const numbers = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum); // Outputs: 15

-- Declarative Programming:

- **Pros**:
  - **Readability**: Code is usually easier to read and understand because it focuses on *what* you want to achieve.
  - **Maintainability**: Easier to maintain and modify, especially for complex logic.
  - **Abstraction**: Hides the complexity of the underlying implementation, allowing you to focus on the business logic.
  - **Conciseness**: Typically requires fewer lines of code, making it more concise.

- **Cons**:
  - **Performance**: May not always be the most optimized for performance, depending on how the underlying system handles the logic.
  - **Flexibility**: Sometimes less flexible because you rely on predefined functions or methods.

> Example:

  --(Array Sum):

  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log(sum); // Outputs: 15

-- Which is Better?
- Use Imperative When:
  - You need more control over the exact steps of the program.
  - You're working on performance-critical code where every step needs to be optimized.
  - The task requires detailed step-by-step logic that's not easily expressed declaratively.
  
- Use Declarative When:
  - You want your code to be more readable and maintainable.
  - You're working with high-level abstractions like React, SQL, or CSS.
  - The performance difference is negligible, or you're not dealing with performance-critical code.


-- Summary:

Declarative programming is often more readable and maintainable, while imperative programming offers 
more control and can be more performant for certain tasks. Both paradigms have their place, and the
choice depends on the specific requirements of your project. 

*/

//#15)Pure Function vs Imppure Function
/*

--Pure Functions:

A **pure function** is a function that:
1. **Always returns the same output** for the same input.
2. **Does not cause any side effects** (does not modify external state, variables, or data).

>Example:

function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Always returns 5


In this example, `add` is a pure function because it always returns the same result for the same 
inputs and does not modify any external state.

--Impure Functions:

An **impure function** is a function that:
1. **May return different outputs** for the same input.
2. **Causes side effects** (modifies external state, variables, or data).

>Example:

let counter = 0;

function increment() {
  counter++;
  return counter;
}

console.log(increment()); // 1
console.log(increment()); // 2


In this example, `increment` is an impure function because it modifies the external variable `counter`, 
causing side effects.

-- Key Differences:

- **Predictability**:
  - Pure functions are predictable and easier to test because they always produce the same output for the same input.
  - Impure functions are less predictable because their output can depend on external factors or state changes.
  
- **Side Effects**:
  - Pure functions do not cause side effects, making them safer to use and less likely to introduce bugs.
  - Impure functions can cause side effects, which can lead to unintended consequences and harder-to-trace bugs.

-- Summary:
- **Pure Functions**:
  - Always return the same output for the same input.
  - Do not cause side effects.
  
- **Impure Functions**:
  - May return different outputs for the same input.
  - Cause side effects by modifying external state.
*/

//#16)ForEach vs forOf loop
/*
- **`forEach`** is specifically for arrays and uses a callback function. With `forEach`, we can access the index number, 
but we cannot use `break` or `continue` statements.

forEach(value,index,array)
- **`for...of`** is for iterables, including arrays, strings, etc. In a `for...of` loop, we can use `continue` and `break
` statements but cannot directly access the index number (unless using `Array.entries()`).

> `forEach` is only for arrays and has a callback function. With `forEach`, we can access the index number, but we cannot use `break` 
> or `continue` statements. `for...of` is for iterables, including arrays, strings, etc. In a `for...of` loop, 
> we can use `continue` and `break` statements but cannot directly access the index number.

--ForEach Example

let arr = ['Yash', 'Ram', 'Hello'];

arr.forEach((value, index) => {
  console.log(`${index}:${value}`);
});

 Output:
 Index: 0, Value: Yash
 Index: 1, Value: Ram
 Index: 2, Value: Hello

 --for of loop

 1)
 let arr=[1,2,"Yash",4,"Bro"];

  for(let a of arr){
   console.log(a)
 }

 Output:
 1
 2
 Yash
 4
 Bro

2)let str = "Yash";

str.forEach((value) => {
  console.log(value);
});

//Output
Y
a
s
h


3)
let str = "Yash";

for (let char of str) {
  if (char === 's') {
    console.log('Found "s", terminating the loop.');
    break;  // Exit the loop
  }
  console.log(char);
}

//Output:
Y
a
Found "s", terminating the loop.

4)
let str = "Yash";

for (let char of str) {
  if (char === 's') {
    console.log('Skipping "s".');
    continue;  // Skip the rest of the loop for this iteration
  }
  console.log(char);
}

Output:
Y
a
Skipping "s".
h

5)
let arr = ['Yash', 'Ram', 'Hello'];

for (let [index, value] of arr.entries()) {
  console.log(`Index: ${index}, Value: ${value}`);
}

// Output:
// Index: 0, Value: Yash
// Index: 1, Value: Ram
// Index: 2, Value: Hello
*/

//#17)Map, Filter, and Reduce (They are higher-order functions, and they are used specifically for arrays. They create new arrays without impacting the original array.)

/*

--With the help of map,filter and reduce we can make new array based on our need , forEach helps us to perform operation on array
--map and filter return an array and reduce return an single value.

>Map

let data=[1,2,"Yash",4,"Bro"];

let a=data.map((value ,index ,arr)=>{
  return value ;
  // return index ;
  // return arr ;
})

console.log(a)

>Filter

let data=[1,2,3,4,5];

let a=data.filter((value ,index ,arr)=>{
  // return value>2 ;
  // return index ; // value start form 1 not from 0 , The filter method in this code is using the index to determine which elements to keep. Since 0 is falsy in JavaScript, the element at index 0 is removed from the array, and all other elements 
  // return arr ;
})

console.log(a)

>>In JavaScript, `0` is considered a falsy value. Falsy values are values that are considered false when
> encountered in a Boolean context. Here are the falsy values in JavaScript:

- `false`
- `0`
- `-0`
- `0n` (BigInt zero)
- `""` (empty string)
- `null`
- `undefined`
- `NaN` (Not a Number)

>Reduce (Combines all elements of an array into a single value based on a provided function).
>Reduce a element of array into the single value.

let numbers = [1, 2, 3, 4, 5];

let a=numbers.reduce((previousElement , nextElement)=>{
  return accumulator+currentValue
})

let a=numbers.reduce((accumulator, currentValue)=>{
  return accumulator+currentValue
})

console.log(a)

*/

//#18)What is polly fill
/*


With the help of polyfills, we can write the latest JavaScript code and ensure that older browsers can still support those modern 
features and functions. Polyfills are crucial for maintaining cross-browser compatibility in web development, 
allowing developers to use the latest features while ensuring older browsers can still function correctly.

*/

//#19)What is closer

/*
A closure in JavaScript means that an inner function has access to the outer function’s variables and functions even after 
the outer function has completed execution.

let outerFun=()=>{
  let name="My Name is Yash I am a Front End Developer";
  function innerFun (){
   console.log(name)
  }
  return innerFun;
}

let print=outerFun();
print()

*/

//#20)Call Back fucniton inside the array
/*
When you use the `map` method, it’s a function itself, and it takes another function as an argument. That function you pass inside `map` is what we call the **callback function**.

-- How It Works:
- The `map` method iterates over each element in the array.
- For each element, it calls the **callback function** you provided.
- The callback function takes the current element (and optionally the index and the whole array) and returns a new value.
- The `map` method collects all these new values into a new array.

-- Simple Breakdown:

// Original array
const numbers = [1, 2, 3, 4];

// map method (outer function) takes an inner function (callback function)
const doubled = numbers.map(function(number) { // This function is the callback
  return number * 2; // This is what the callback does with each element
});

console.log(doubled); // Output: [2, 4, 6, 8]


So, in the code above:
- `numbers.map(...)` is the `map` method (which is a function).
- `function(number) { return number * 2; }` is the callback function.

This callback function is applied to every element of the `numbers` array. The `map` method uses it to generate a new array based on the transformations done by the callback function.

So yes, when you use `map`, the function you pass to it is indeed the callback function. 🎉


*/
