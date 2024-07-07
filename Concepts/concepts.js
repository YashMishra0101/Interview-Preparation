console.log("Console Is Working");
//#1)Three Type Of Function

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

//#2)IIFE (Immediately Invoked Function Expression): An IIFE is a function that is executed
//#immediately after it is defined.
//--It is a common JavaScript pattern used to create a new scope and avoid polluting the
//#global namespace.
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

- **`var`**: Accessible anywhere in the function where it's declared. Can cause unexpected 
behavior due to its function scope and hoisting.
- **`let`**: Only accessible within the block (`{}`) where it's declared. Safer to use
 because it's block-scoped.
- **`const`**: Also block-scoped like `let`. Once assigned, its value can't be changed. 

Using `let` and `const` is generally better because they avoid problems caused by `var`'s 
function scope and hoisting.

*/

// function abcd() {
//   if (true) {
//     const yash = "Developer";
//     console.log(yash);
//   }
// }

// abcd();

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
//   age:"22",
//   profile:"Front End Developer",
//   info:function(){
//     console.log(`Hello My Name is ${this.name}`);
//   }
// };

// console.log(person.name);
// console.log(person["age"]);
// person.info();

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

//#8)Execution Context in JavaScript
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
- Memory allocation happens first, followed by code execution.
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

//--For in loop

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

//--For of loop

// const fruits = ['apple', 'banana', 'cherry'];

// for (let fruit of fruits) {
//   console.log(fruit[1]);
// }

//#10) Hoisting Explained

/*

**Hoisting** in JavaScript means that variable and function declarations are moved to the top of their 
containing scope during the execution phase. However, this does not mean that the actual initialization or 
assignment of values is hoisted, only the declarations.

*/

//-- Function Declarations

// Function declarations using the `function` keyword are hoisted to the top of their scope. This means you
// can call a function before it is declared in the code.

/*
Example:
hoistedFunction(); // This works because hoistedFunction is hoisted

function hoistedFunction() {
    console.log("This function is hoisted!");
}
*/

//--Function Expressions

// Function expressions, where you assign a function to a variable, are not hoisted. Only the variable declaration
// is hoisted, not the function assignment.

//Example:

// try {
//     notHoistedFunction(); // This throws an error because notHoistedFunction is undefined
// } catch (error) {
//     console.log(error); // ReferenceError: notHoistedFunction is not defined
// }

// var notHoistedFunction = function() {
//     console.log("This function is not hoisted.");
// };

//-- Variable Declarations (var, let, const)

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
This makes it easy to refer to or manipulate global variables and functions.*/

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

//#8)Execution Context and Global Objects

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
- In the browser, the global object is `window`.
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

JavaScript can be run in browsers and Node.js. Browsers like Firefox use SpiderMonkey, Safari uses JavaScriptCore, 
and Microsoft Edge uses the Chakra engine to execute JavaScript.Node.js, on the other hand, is not a framework 
or language but a software platform. It uses the V8 engine, the same one used by Google Chrome, to run JavaScript 
code in any terminal or command-line prompt.

JavaScript is fundamentally an interpreted language because it executes source code directly without 
a separate compilation step before runtime. However, modern JavaScript engines like V8 use JIT (just-in-time) compilation 
to optimize performance by compiling JavaScript code into machine code at runtime. So, while JavaScript remains an 
interpreted language, it benefits from JIT compilation in engines like V8, which significantly improves its performance. 

V8 uses just-in-time (JIT) compilation to translate JavaScript into optimized machine code at runtime, which speeds up
execution. So, while JavaScript benefits from improved performance with V8, it remains rooted in its interpreted nature.
*/

//#

console.log("line number 1", varName);
var varName = 10;

function b() {
console.log("line number 5", varName);
}

console.log("line number 7", varName);

function fn() {
console.log("line number 9", varName);
var varName = 20;
b();
console.log("line number 13", varName);
}

fn();

//line 1: undefine
//line 7:10
//line 9:undefine
//line 5:

