console.log("JS Concepts Is Working");


//#1)How to decalare function in Javascript

//--1)Normal function

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

//--2)Anonymous Function (Functon ka name nahi hota use variable ke andar store kr te hai)

//   const ano = function () {
//     console.log("Hello Ji I am a Anonymous Function");
//  };

// ano()

//--3)Arrow Function

// const arrow =(print,printTwo)=>{
//     console.log(print,printTwo);
// }

// arrow ("I am a arrow Fucntion", "✋Two");

//>If there is a single Parameter

// const arrowTwo=(value)=>console.log(value);

// arrowTwo("I a Value");

//> Reference Assignment (Ek Variable ka refereance Dusre Variable ko diye hai)

// let a = [1, 2, 3, 5];

// let b = a;

// console.log(b);

//>Function Expression (Funciton ko Variable ke andar Store kiye hai)

//   const fExpress = function ex() {
//     console.log("I am a Function Expression");
//   };

// fExpress();

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
-Using let and const is generally better because they avoid problems caused by var's function scope 
and hoisting and let and const are block scope.
-When we use var and let, we can assign a variable's value after declaration, but when
we use const, it is necessary to define the value during declaration.

--var is function scope and let and const are block scoped:-

--Example:function scope

function one() {
 if(true){
    var a=10;
 }
  console.log(a) //output:10
}
one()

--Example:Block scoped

function one() {
 if(true){
    let a=10;
 }
  console.log(a)//refrence error
}
one()

*/

//#6)What is Array in Javascript ?
/*
An array in JavaScript is a type of object that allows us to store multiple values in a single variable. 
We use square brackets ([]) to define an array, and the values inside the array are separated by commas.

Arrays are zero-indexed, which means the first element of an array is at index 0.
*/

// let array=["Yash","Jeet","Aman","Rahul"];
// console.log(typeof(array));//object
// console.log(array[1]);

//#7)What is object is Javascript ?

/*
An object is a data structure in JavaScript where we can store data in the form of key-value pairs. To access 
the data within an object, we use either dot notation or bracket notation. 

In bracket notation, we use square brackets.A function inside an object is called a method. 
Methods represent the behaviors or actions of the object.

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

//--? Why it is wrong ?

/*Why it is wrong :Because whenever we write any key without double or single quotes, then 
JavaScript tries to find a variable name, not the object property name. So it gives a 
`ReferenceError` because the variable is not present.

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

//--? 😂 Identifiers: Names given to variables, functions, properties, etc, to uniquely identify them.

//#8)Primitive Data Types , Non-Primitive(Reference) Data Types and Stack and Heap

// Primitive Data Types: String, Boolean, Number, etc. (immutable,values cannot be changed.)
// Non-Primitive Data Types: Array, Object, Function, etc. (mutable,values can be changed-(Reference-)

// Primitive Data Types are immutable, meaning their values cannot be changed.
// Any modification results in the creation of a new value.

// Non-Primitive(Reference) Data Types are mutable, meaning their values can be changed
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

//#9) Execution Context in JavaScript (Basic)

/*
An execution context is the environment in which JavaScript code runs. It consists of two main phases:

1. **Memory Allocation Phase**:
   - Memory is allocated for variables and functions.
   - Variables are initialized to `undefined`.
   - Function declarations are stored with their full definitions.

2. **Code Execution Phase**:
   - Code is executed line by line.
   - Variables are assigned their actual values.

 //-- Global Execution Context

- Created when JavaScript code first starts to run.
- The global execution context is pushed onto the call stack at the start.

 //-- Function Execution Context

- Created whenever a function is called.
- Each function call generates a new execution context.
- Function execution contexts are managed by the call stack:
  - A new execution context is pushed onto the stack when a function is invoked.
  - It is popped off the stack once the function completes execution.

 //-- Call Stack

- The call stack tracks all execution contexts.
- The global execution context is the first to be pushed onto the stack.
- Subsequent function calls push new execution contexts onto the stack.
- Execution contexts are popped from the stack when their execution finishes.

 //-- Key Points

- The execution context manages the flow and execution of code.
- Memory allocation happens before code execution.
- The call stack handles the order of execution contexts, managing function calls and returns.
*/

//#10)Loops

//---1)For Loop

// The for loop is used to repeat a block of code a specific number of times.

// for(let f=1;f<=10;f++){
//   console.log("For Loop",f);
// }

//--2)While Loop

// The while loop repeats a block of code as long as a condition is true.

// let w2=1;

// while(w2<=5){
//   console.log("While Loop",w2);
//   w2++
// }

//--3)Do While loop

// The do while loop executes the code block once before checking the condition, then repeats as long as the condition is true.

// let d=1;

// do{
// console.log("Do While Loop",d);
// d++;
// }while(d<=8)

//--4)For in loop ( For in loop for object )

// The for...in loop is used to iterate over the properties (keys) of an object.

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
? Can we use for of loop with obejct ?
Ans=>we cannot use a for...of loop directly with objects because for...of is designed to iterate over iterable objects, like 
arrays, strings, maps, and sets. Objects are not inherently iterable.However, you can use for...of with objects indirectly 
by iterating over their properties using methods like Object.keys(), Object.values(), or Object.entries()
*/

// --5)For of loop (use for array)

// let arr = ["Yash", 21, "Developer"];

// for (let a of arr) {
//   console.log(a);
// }

/*
? Can we use a for in loop for an array?
If we use for in with an array, it gives us the index numbers instead of the array values. If we need array values,
we need to use it this way: console.log(arr[a]) instant of console.log(a).

>Objects: Use for...in to iterate over keys.
>Arrays/Iterables: Use for...of to iterate over values.

//--6)ForEach vs forOf loop
/*
forEach(value,index,array)

- `forEach` is specifically for arrays and uses a callback function. With `forEach`, we can access the index number, 
but we cannot use `break` or `continue` statements.

- `for...of`** is for iterables, including arrays, strings, etc. In a `for...of` loop, we can use `continue` and `break
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

//#11) Hoisting Explained

/*
Hoisting means that during the compile phase (before code execution), variable and function declarations are moved to
the top of their containing scope. This is called hoisting.

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
//     notHoistedFunction(); // This throws an error because not HoistedFunction is undefined
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

//#12)Execution Context and Global Objects (In Detail)

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

//#13)Basic Info

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

//##14)Lexical Scope , Scope chain

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

//##15)Tempory Dead Zone (TDZ)
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

//#16)Shadowing

/*
Definition: Shadowing occurs when a variable declared within a certain scope (like a function or block) has the 
same name as a variable in an outer scope. The inner variable "shadows" the outer variable, meaning it takes precedence 
within its scope.

>var is function-scoped and does not respect block scope, leading to potential conflicts and errors.
>let and const are block-scoped, preventing these conflicts by keeping variables confined to the block in which they are declared.

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



>So, shadowing means that a variable inside a specific scope can "hide" a variable with the same name in an outer scope.
*/

//#17)About array and objects in details

/*
JavaScript में arrays और functions दोनों की typeof output "object" होती है, लेकिन वे अलग-अलग तरह से काम करते हैं। Arrays और functions दोनों iterable होते हैं, जबकि plain objects by default iterable नहीं होते। 

1. **Arrays और functions iterable होते हैं।** आप arrays के लिए for-of loop का उपयोग कर सकते हैं क्योंकि वे iterable होते हैं।
2. **Plain objects iterable नहीं होते।** अगर आपको objects के keys या values को iterate करना है, तो आप for-in loop का उपयोग कर सकते हैं।

उदाहरण:
- **Arrays:** for-of loop का उपयोग कर सकते हैं।
- **Objects:** for-in loop का उपयोग कर सकते हैं।

*/

//-- 🔥🧐 We can add key,value and function inside the array

/*
--More About array

let arr = [1, "Yash", "Ram", "Hello"];

// Adding a property to the array
arr.name = "Amit";

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
  - **Use:** Returns an array of the object's property names (keys) work on both arrya and object.


let obj = { name: "Yash", age: 21, role: "Front End Developer" };
let keys = Object.keys(obj);

console.log(keys); // Outputs: ["name", "age", "role"]

>3. `Object.values()`
 **`Object.values()`**:
  - **Use:** Returns an array of the object's property values  work on both arrya and object..

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

//#18)Imperative Programming vS Declarative Programming
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

//#19)Pure Function vs Imppure Function
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

//#20)Map, Filter, and Reduce (They are higher-order functions, and they are used specifically for arrays. They create new arrays without impacting the original array.)

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

//#21)What is pollyfill
/*


With the help of polyfills, we can write the latest JavaScript code and ensure that older browsers can still support those modern 
features and functions. Polyfills are crucial for maintaining cross-browser compatibility in web development, 
allowing developers to use the latest features while ensuring older browsers can still function correctly.

*/

//#22)What is closer

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

//#23)Call Back fucniton inside the array
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

//#24) What is window obejct in browser ?

/*
The browser automatically creates a window object.The window object represents a window in the browser 
and provides access to the browser's features and functions,alert(), setTimeout(),prompt() etc.  

Window is the object of browser, it is not the object of javascript. The javascript objects are string, 
array, date etc. 
*/

//#25)Call , Apply , Blind

/*

--1. **`call()` Method**
>Call , apply and blind are the pre build method in javascript with the helps that we can invoke the funciton with the help of this keyword.

- **Definition:** `call()` is a method that allows you to invoke a function with a specified `this` value and arguments provided individually.
- **Example:**
 
 
let userOne={
  firstName:"Yash",
  lastName:"Mishra" 
}

let userTwo={
  firstName:"Ram",
  lastName:"Turkar"
}

let userInfo=function(post){
  return (`My name is ${this.firstName} ${this.lastName} and I am a ${post}`)
}

console.log(userInfo.call(userOne,"frontEnd-Developer"))

-- 2. **`apply()` Method**

- **Definition:** `apply()` is similar to `call()`, but it takes the arguments as an array rather than individually.
- **Example:**

let userOne={
  firstName:"Yash",
  lastName:"Mishra" 
}

let userTwo={
  firstName:"Ram",
  lastName:"Turkar"
}

let userInfo=function(post){
  return (`My name is ${this.firstName} ${this.lastName} and I am a ${post}`)
}

console.log(userInfo.apply(userOne,["frontEnd-Developer"])) //--Pass Info In the form of array
  

-- 3. **`bind()` Method**

> **Definition:** `bind()` is a method that creates a new function with a specified `this` value, but does not invoke it immediately.
- **Example:**

let userOne={
  firstName:"Yash",
  lastName:"Mishra" 
}

let userTwo={
  firstName:"Ram",
  lastName:"Turkar"
}

let userInfo=function(post){
  return (`My name is ${this.firstName} ${this.lastName} and I am a ${post}`)
}

let userData=userInfo.bind(userOne,"frontEnd-Developer"); //--assing to the variable and then call it
console.log(userData())

>Should You Use Array Form or Individual Arguments?

--Individual Arguments: When using bind, you should pass arguments individually, as bind is not designed to accept an array of arguments. The additional arguments after the this value are passed directly to the bound function when it is called.

--Array Form: If you have arguments in array form, you might consider using apply instead, as apply is designed to accept an array of arguments.

> Summary:
- **`call()`**: Calls a function with a specific `this` value and individual arguments.
- **`apply()`**: Like `call()`, but arguments are passed as an array.
- **`bind()`**: Creates a new function with a specific `this` value but doesn’t call it immediately.

*/

//#26)Function Currying
/*
Currying in JavaScript is a process that allows you to transform a function 
with multiple arguments into a sequence of nesting functions.

--With Bind

function add(a,b){
  return a+b;
} 

let result=add.bind(this,4)

console.log(result(2))



--With Closer

function add(a,b,c){
  return a+b+c;
}

console.log(add(5,1,1));


function one(a){
  return function (b){
      return function (c){
        return a+b+c;
      }
  }
}

console.log(one(1)(2)(3));


function stepOne(name) {
    return function stepTwo(tea) {
        return function stepThree(cup) {
            console.log(`${name} ordered ${cup} of ${tea}.`);
        };
    };
}

stepOne("Yash")("Lemon Tea")("One cup");

*/

//#27) What is constructor in Javascript ?
/*

- **Constructor**: With the help of construcot we can define the we can define the object and and it's properties.
- **`new` keyword**: When you use the `new` keyword with a constructor function, it creates a new instance of an object.
- **`this` keyword**: Inside the constructor, `this` refers to the new object that is being created, allowing you to set properties on that object.

-- Example Recap:

>Example one : 

function Car(make, model) {
    this.make = make;  // 'this' refers to the new Car object
    this.model = model;
}

let myCar = new Car('Toyota', 'Corolla');
console.log(myCar);  

// Output: Car { make: 'Toyota', model: 'Corolla' }


In this example:
- The `Car` function is a **constructor**.
- The `new` keyword is used to create an object, `myCar`, from the `Car` constructor.
- The `this` keyword refers to the `myCar` object inside the `Car` constructor, allowing the properties `make` and `model` to be set.

>Example Two :
*/
function UserData(name, age, role) {
  this.name = name;
  this.age = age;
  this.role = role;

  this.userInfo = function () {
    return `Hello My name is ${this.name} and my age is ${this.age} and I am 
    ${this.role} Developer`;
  };
}

let userOne = new UserData("Yash", "22", "FrontEnd");

let userTwo = new UserData("Ram", "25", "Full Stack");

console.log(userOne.userInfo());
console.log(userTwo.userInfo());

//#28)Prototype and Prototype inheritance

/*
-- In JavaScript, every object has a hidden internal property known as Prototype.

>What is Prototype Inheritance ?

/*
Inheritance means one object is trying to access property of other objects,
and overall prototype inheritance ka bhi means ye hi hota hai.

Prototype inheritance is a feature of JavaScript that allows objects to inherit 
properties and methods from their prototype. If a property or method isn’t found 
directly on an object, JavaScript will look for it in the object’s prototype. 
If it’s not found in the prototype, it will keep looking up the chain until it 
finds the property or reaches the end of the chain (where the prototype is null).

--Example 

let userOne={
  name:"Yashu",
  age:"22"
}

let userTwo={
  name:"Ram"
}

userTwo.__proto__=userOne;

console.log(userTwo.age)

--But

>Why It's Not Ideal to Use `__proto__` Directly:

1. Performance: Direct manipulation of `__proto__` can lead to performance issues, as it changes 
the internal prototype chain, which is generally not as fast as other methods.
  
2. Readability and Maintainability: Using `__proto__` can make your code harder to understand 
and maintain, especially in larger projects.

>Recommended Approach:

Instead of using `__proto__`, you can use `Object.create()` to create `userTwo` with `userOne` 
as its prototype:

let userOne={
  name:"Yashu",
  age:"22"
}

let userTwo={
  name:"Ram"
}

userTwo=Object.create(userOne)

console.log(userTwo.age)


Explanation:
- `Object.create(userOne)` creates a new object (`userTwo`) with `userOne` as its prototype.
- `userTwo` inherits the properties of `userOne`, so `userTwo.age` will return `22`.

*/

//#29)Callback funtion and Async call back

/*
>Call Back

let userName=(name)=>{
  return name;
}

let info=(data)=>{
  console.log(data)
}

info(userName("Yashu"))

>Async call back

let one=(()=>{
  console.log("One")
})
one()

setTimeout(()=>{
  console.log("Two")
},2000)

let three=(()=>{
  console.log("Three")
})

three()

setTimeout(()=>{
  console.log("Four")
},4000)

let five=(()=>{
  console.log("Five")
})
five()
*/

//#30)This is why js is synchronous and asynchronous in  nature .

/*

>Synchronous 

console.log("Hi I am a one");

for (let a=0; a<=10; a++){
    console.log(a);
}

console.log("Hi I am a Two ")

>Asynchronous 

console.log("Hi I am a one");

for (let a=0; a<=10; a++){
    setTimeout(()=>{
      console.log(a);
    })
}

console.log("Hi I am a Two ");

*/

//#31)Event Loop
/*
--1.Event Loop Overview

   - **Single-threaded:** JavaScript runs one task at a time in the call stack.
   - **Asynchronous Capabilities:** Handles tasks without blocking the main thread using async operations like `setTimeout`, promises, etc.

---2.Key Components

   - **Call Stack:** Stores the currently executing function. Tasks are pushed to the stack when called and popped off when completed.
   - **Web APIs:** Provided by the environment (browser/Node.js) to handle asynchronous tasks (e.g., `setTimeout`, HTTP requests).
   - **Task Queue (callback queue):** Stores callbacks from Web APIs like `setTimeout`, `setInterval`, and I/O tasks.
   - **Microtask Queue:**
     - Handles microtasks like promise callbacks (`.then()`, `.catch()`).
     - **Priority:** Microtasks are executed immediately after the current stack is cleared, before any task in the Task Queue.

--3. How the Event Loop Works

   1. Executes the code in the **Call Stack**.
   2. When the Call Stack is empty:
      - Processes all tasks in the **Microtask Queue** first.
      - If the Microtask Queue is empty, moves to the **Task Queue**.
   3. The loop continues, ensuring both synchronous and asynchronous tasks are handled.

-- 4. Execution Example

   console.log("Start");

   setTimeout(() => console.log("Timeout callback"), 1);

   Promise.resolve().then(() => console.log("Promise callback"));

   console.log("End");
   
   **Output Order:** Start → End → Promise callback → Timeout callback

   - Explanation:The promise callback (Microtask) runs before the `setTimeout` callback (Macrotask) because Microtasks have higher priority.

-- 5. Key Takeaways

   - **Microtask Queue** is not a Web API but part of the JavaScript runtime.
   - Microtasks are processed before macrotasks, ensuring high-priority operations like promises are handled promptly.
   - The Event Loop is what enables JavaScript to manage asynchronous operations in a non-blocking manner.

*/

//#32)Call Back
/*
> Callback Functions - Quick Notes 📜

1. **Definition**: A callback function is a function passed as an argument to another function, and it's
 executed **after** the main function completes its task, either immediately or at a later time.

2. **Types of Callbacks**:
   - **Synchronous Callbacks**: Executed right after the main function completes its task (typically 
   in simple operations like calculations).
   - **Asynchronous Callbacks**: Executed after a delay or once a specific task (like an API request or 
   file read) is finished.

3. ommon Use Cases:
   - **API requests** and **database queries** that are time-dependent.
   - **Event handling**, such as responding to button clicks.
   - **Timers**, using `setTimeout` or `setInterval`.

4. **Example of Synchronous Callback**:

   function calculate(a, b, callback) {
       let sum = a + b;
       callback(sum);  // Executes immediately after sum is calculated
   }
   calculate(3, 5, (result) => {
       console.log('Sum:', result); // Output: 'Sum: 8'
   });


5. **Example of Asynchronous Callback**:

   function fetchData(callback) {
       setTimeout(() => {
           console.log('Data fetched');
           callback();  // Executes after 2 seconds
       }, 2000);
   }
   fetchData(() => {
       console.log('Processing data after fetching');  // Output after 2 sec
   });
   

6. **Importance**:
   - Callbacks allow for **non-blocking operations**, meaning they let code run while waiting for 
   time-consuming tasks (like fetching data).
   - Vital in **JavaScript** for managing **asynchronous tasks**, such as API calls, file handling, 
   and user interactions.

7. **Drawbacks**:
   - Using too many callbacks or nesting them deeply can result in **callback hell**, making your 
   code hard to read and maintain.
   - You can avoid callback hell by using **promises** or **async/await**, which provide a 
   cleaner way to handle asynchronous code.
*/

//#33)Callback Hell
/*
Callback Hell is a situation in programming, especially in JavaScript, 
where multiple nested callbacks make the code difficult to read, maintain, and debug so it happens
when callbacks are nested within each other, leading to deeply indented code.It occurs when asynchronous operations are performed one after another, and each step depends on the
completion of the previous one

>Explanation

1. **Concept**:
   - **Callback Hell** happens when callbacks are nested within each other, leading to deeply
    indented code.
   - This nesting can make the code look like a pyramid (often called the "Pyramid of Doom"), 
   making it harder to follow and manage.

2. **Why It Happens**:
   - Asynchronous operations (like reading files, making network requests, or waiting for timers) 
   often use callbacks to handle their results.
   - When multiple asynchronous operations are chained together, the need for callbacks in each 
   operation can lead to deep nesting.

3. **Example**:
 
   let stepOne = (callme) => {
  setTimeout(() => {
    console.log("One");
    callme();
  }, 1000);
};

let stepTwo = (callme) => {
  setTimeout(() => {
    console.log("Two");
    callme();
  }, 1000);
};

let stepThree = (callme) => {
  setTimeout(() => {
    console.log("Three");
    callme();
  }, 1000);
};

let stepFour = (callme) => {
  setTimeout(() => {
    console.log("Four");
    callme();
  }, 1000);
};

let stepFive = () => {
  setTimeout(() => {
    console.log("Five");
  }, 1000);
};

let stepSequence = () => {
  stepOne(() => {
    stepTwo(() => {
      stepThree(() => {
        stepFour(stepFive);
      });
    });
  });
};

stepSequence();
function start() {
  stepOne()
    .then(stepTwo)
    .then(stepThree)
    .then(stepFour)
    .then(stepFive)
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

start();

   
- In the example above, each function relies on the completion of the previous function, 
 resulting in nested callbacks.

4. **Problems with Callback Hell**:

   - **Readability**: Deeply nested callbacks make it hard to read and understand the code.
   - **Maintenance**: Adding new features or debugging becomes challenging.
   - **Error Handling**: Managing errors in nested callbacks can be cumbersome.

5. **Solutions**:

   - **Promises**: Flatten the code structure by chaining `.then()` calls.
   - **Async/Await**: Write asynchronous code in a more synchronous-looking style, improving readability and maintainability.

>Summary

In summary, **callback hell** is the challenge of managing deeply nested callbacks in asynchronous code.
it can make the code hard to read and maintain. Modern solutions like **Promises** and **async/await**
provide cleaner, more manageable ways to handle asynchronous operations, reducing the problems
associated with callback hell.

*/

//#34)Promise in JS
/*
A Promise is a special JavaScript object. It produces a value after an asynchronous operation completes
successfully, or an error if it does not complete successfully due to time out, network error, and 
so on.

>Syntax -

let promise = new Promise (function (resolve, reject) {

// Make an asynchronous call and either resolve or reject

});

>>>Example of Promises 

let dataOne=(()=>{
  return new Promise ((resolve ,reject)=>{
    setTimeout(()=>{
      console.log("One")
      resolve("I am a Dataone");
    },2000)
  })
  
})

let dataTwo=(()=>{
  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      console.log("Two")
      resolve("I am a Datatwo")
    },1000)
  })
})

let dataThree=(()=>{
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Three");
      reject("Error hai Three me");
      // resolve("I am a dataThree");
    },1000)
  })
  
})

let dataFour=(()=>{
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Four")
      resolve("I am a dataFour");
    },1000)
  })
})


let start=(()=>{
  dataOne()
  
  .then(dataTwo)
  .then(dataThree)
  .then(dataFour)
      
  .catch((error)=>{
    console.log("Error : ",error)
  })
  .finally(()=>{
    console.log("Program End")
  })
  
})

start();

// console.log(dataOne())
// console.log(dataThree())

>>Async await ,try catch

/*
async and await are used together to handle asynchronous code in a more readable and 
synchronous-looking way. They are part of ES2017 (ES8) and provide an alternative to 
using Promises with .then() chains.

Error Handling: try/catch is used to handle errors that may occur during the execution 
of code. When you use await in an async function, you can use try/catch to handle any 
errors that might occur when the promise is rejected.

>Key Points to Remember:

-`async` functions:Always return a `Promise`.
- `await`:** Pauses the execution of the function until the promise resolves/rejects.
- `try/catch`:Helps in handling errors gracefully in an `async` function.

*/

/*

let dataOne=(()=>{
  return new Promise ((resolve ,reject)=>{
    setTimeout(()=>{
      console.log("One")
      resolve("I am a Dataone");
    },2000)
  })
  
})

let dataTwo=(()=>{
  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      console.log("Two")
      resolve("I am a Datatwo")
    },1000)
  })
})

let dataThree=(()=>{
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Three");
      reject("Error hai Three me");
      // resolve("I am a dataThree");
    },1000)
  })
  
})

let dataFour=(()=>{
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Four")
      resolve("I am a dataFour");
    },1000)
  })
})


let start =(async ()=>{
  try{
    await dataOne()
    await dataTwo()
    await dataThree()
    await dataFour()
  }
  catch(error){
    console.log("Error aaya bro : ",error)
  }
  finally {
    console.log("Program End");
  }

})

start()

*/

//#35
/*
Sure! Here's a brief overview of the main methods used with JavaScript Promises:

>> 1. `Promise.resolve(value)`
- **Description**: Returns a promise that is resolved with the given value. If the value is a promise, that promise is returned; if the value is a thenable (i.e., has a `then` method), the returned promise will "follow" that thenable, adopting its eventual state.
- **Usage**: Useful for wrapping a value into a promise.

>> 2. `Promise.reject(reason)`
- **Description**: Returns a promise that is rejected with the given reason.
- **Usage**: Useful for creating a promise that is immediately rejected, often used for error handling.

>> 3. `Promise.all(iterable)`
- **Description**: Takes an iterable of promises and, once all the promises in the iterable have resolved, returns a single promise that resolves with an array of the resolved values. If any promise in the iterable rejects, the returned promise is rejected with the reason from the first promise that was rejected.
- **Usage**: Useful for running multiple promises in parallel and waiting for all of them to complete.

>> 4. `Promise.allSettled(iterable)`
- **Description**: Similar to `Promise.all`, but instead of waiting for all promises to resolve, it waits for all promises to either resolve or reject. Returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.
- **Usage**: Useful for when you need to know the result of all promises, regardless of whether they succeed or fail.

>> 5. `Promise.any(iterable)`**
- **Description**: Takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (i.e., all of them are rejected), then it rejects with an AggregateError, a new subclass of Error that groups together individual errors.
- **Usage**: Useful when you want to get the result of the first promise that resolves successfully.

>> 6. `Promise.race(iterable)`**
- **Description**: Returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.
- **Usage**: Useful for situations where you need the result from the first promise to settle.

>> 7. `Promise.finally(onFinally)`**
- **Description**: Adds a handler to be invoked regardless of the promise's outcome (fulfilled or rejected). The `onFinally` callback is called when the promise is settled, but it does not receive the promise's result or reason.
- **Usage**: Useful for performing cleanup actions or other operations that need to occur after the promise settles, no matter the outcome.

>> 8. `Promise.prototype.then(onFulfilled, onRejected)`
- **Description**: Adds fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler.
- **Usage**: The primary method for defining what to do when a promise resolves or rejects.

>> 9. `Promise.prototype.catch(onRejected)`
- **Description**: Adds a rejection handler callback to the promise and returns a new promise resolving to the return value of the callback if it is called or to its original promise if the promise was not rejected.
- **Usage**: Used for handling errors that occur in promise chains.

*/

//#36)Kya hai isska outpu 🤔💭

/*

let set=(()=>{
  setTimeout(()=>{
    console.log("I am setTime out")
  },1000)
})

set();


let action=(()=>{
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },1000)
  })
})

let pro=(()=>{
  console.log("I am promise")
})

action().then(pro)

*/

/*
>Acc to me , Chat gpt , Node environement and as per Javascrpt Rules.

I am promise
I am setTime out

>But acc to replit (Brave Browser is used), vs code (chrome) and one compiler.

I am setTime out
I am promise

*/

//#37) Not defined vs undefined vs null

/*
> undefined: This occurs when a variable or function is declared, but no value is assigned. When we try to access that variable, it gives us "undefined."
Example:

console.log(a); // Logs "undefined" because 'a' is hoisted but not initialized yet.
var a = 10;

console.log(b); // Hoisting applies here as well, so it logs "undefined."
var b = 10;

function c() {
}

console.log(c()); // 'c()' returns undefined because the function has no return statement.

> Not defined / ReferenceError: This happens when a variable or function is not declared, and we try to access it. If `let` or `const` is used, it throws a "ReferenceError: variable is not defined." Since the declaration is missing, we can't initialize it either.

var b = 20;

console.log(a); // Throws " ReferenceError: a is Not defined " because 'a' is never declared.

function x() {
  return "Hi";
}
console.log(value()); // Throws " ReferenceError: value is Not defined " because 'value' is not declared or defined.

> null: "null" is explicitly assigned to a variable (We need to explicitly assign "null"). It represents the intentional absence of any object value. It’s a bit strange 😂, but it’s true.

let info = {
  name: "Rahul",
  middleName: null, // We explicitly set 'middleName' to null.
  lastName: "Turkar"
};

console.log(info.middleName); // Logs "null" because we explicitly set it to null.
*/

//#38) About  Coercion (koversion) and  comparision operator
/*

>>Coercion :

- Coercion is when JavaScript **automatically** converts one data type to another during comparisons or operations. 
This is done to make different types of values comparable.

  - Example: `5 == '5'` → JavaScript converts `'5'` (a string) to `5` (a number), so the result is `true`.

>>No Coercion :

- No coercion means JavaScript **does not** automatically convert types. The values must match exactly in both
 type and value for the comparison to be true.

  - Example: `5 === '5'` → Since a number and a string are different types, the result is `false`.



>>Previous Explanation :

When I said **why they are called coercion and no coercion**, I meant:

- Coercion (`==`, `!=`) happens because JavaScript **converts** values to the same type before comparing.
- No coercion (`===`, `!==`) means JavaScript checks both the **value and type** without any conversion.


>>1. Equal (`==`) (performs type coercion).
  -- Compares values but not types (loose comparisons).  
   
   console.log(5 == '5'); // true (number and string are compared as equal)
   

>>.2. Strict Equal (`===`)  (no type coercion).
 --  Compares both values and types (strict comparisons).  

   console.log(5 === '5'); // false (number vs string, different types)


>>.3. Not Equal (`!=`)  (performs type coercion).
   Compares values but not types (performs type coercion).  

   console.log(5 != '5'); // false (values are the same after coercion)


>>.4. Strict Not Equal (`!==`)  (no type coercion).
   Compares both values **and types** (no type coercion).  
 
   console.log(5 !== '5'); // true (different types, so not equal)


>>5. Greater Than (`>`)  
   Checks if the left value is greater than the right value.  
   
   console.log(10 > 5); // true


>>6. Less Than (`<`)  
   Checks if the left value is less than the right value.  

   console.log(5 < 10); // true
   

>>7. Greater Than or Equal (`>=`)  
   Checks if the left value is greater than or equal to the right value.  
 
   console.log(10 >= 10); // true


>>8.Less Than or Equal (`<=`)  
   Checks if the left value is less than or equal to the right value.  

   console.log(5 <= 5); // true
  

These are essential in decision-making (conditions) in JavaScript, and they work with `if-else` or ternary operators.


>> Additional Tip:

Always use `===` and `!==` for strict comparisons to avoid unexpected results from type coercion! This will help you 
write more reliable and bug-free code.

*/

//#39 Truthy Values and Falsy Values
/*

let checkVaue=((value)=>{
  return value  ? console.log("True") : console.log("False")
});

checkVaue(-Infinits)


>>Truthy Values :

In JavaScript, a truthy value is any value that is considered `true` when evaluated in a Boolean context
(e.g., inside an `if` statement). Any value that is **not** falsy is considered truthy.

>>Falsy Values :

A falsy value is one that is considered `false` when evaluated in a Boolean context. JavaScript has only a 
few specific falsy values.

>> Additional Tip :

When checking for truthy or falsy values in your code, it's often a good idea to use `===` for strict comparison to 
avoid unexpected results due to type coercion. Keep an eye on `null`, `undefined`, and `NaN`— they can be tricky in 
logical conditions.

>> Falsy Values in JavaScript :

1. `false`
2. `0`
3. `-0`
4. `""` (empty string)
5. `null`
6. `undefined`
7. `NaN`
8. jjkdfjd (random text)

>> Truthy Values in JavaScript :

1. `true`
2. Non-zero numbers (e.g., `1`, `-1`)
3. Non-empty strings (e.g., `"hello"`, `"0"`)
4. Objects (e.g., `{}`, `[]`)
5. Symbols (e.g., `Symbol()`)
6. `Infinity` and `-Infinity`

*/

//#40) Destructuring , Spread Operator, Rest Operator.
/*

>>1. Destructuring

Destructuring is a JavaScript feature that allows you to **extract values** from arrays or
properties from objects assing them into variable.

>>Array Destructuring

You can extract values from arrays and assign them to variables in a simple, readable way.

--Example:

const fruits = ['Apple', 'Banana', 'Orange'];

// Array Destructuring

const [firstFruit, secondFruit] = fruits;

console.log(firstFruit);  // Output: 'Apple'
console.log(secondFruit); // Output: 'Banana'


--You can also **skip values** when destructuring:

const [first, , third] = fruits;

console.log(first);  // Output: 'Apple'
console.log(third);  // Output: 'Orange'


>>Object Destructuring

You can extract values from objects by using their **property names**.

--Example:

const user = {
  name: 'Yashu',
  age: 22,
  city: 'Nagpur'
};

// Object Destructuring

const { name, age } = user;

console.log(name); // Output: 'Yashu'
console.log(age);  // Output: 22


--You can also **rename variables** when destructuring:

const { name: userName, city: userCity } = user;

console.log(userName); // Output: 'Yashu'
console.log(userCity); // Output: 'Nagpur'


>>Default Values in Destructuring

If the property or value is `undefined`, you can assign default values.

--Example:

const { name, country = 'India' } = user;

console.log(name);    // Output: 'Yashu'
console.log(country); // Output: 'India' (default)


>>>2. Spread Operator (`...`)** 🌟

The spread operator is used to spread out the elements of an iterable (like an array or object)
into individual elements. It's useful when you need to copy, combine, or expand arrays or object.

>>Copying Arrays

You can create a shallow copy of an array using the spread operator.

--Example:

const numbers = [1, 2, 3];
const copiedNumbers = [...numbers];

console.log(copiedNumbers); // Output: [1, 2, 3]

--Merging Arrays

You can combine two or more arrays into one.

--Example:

const array1 = [1, 2];
const array2 = [3, 4];

const mergedArray = [...array1, ...array2];

console.log(mergedArray); // Output: [1, 2, 3, 4]

--Expanding Function Arguments

When passing multiple arguments to a function, you can use the spread operator to **expand** an 
array into individual values.

--Example:

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

--Copying and Merging Objects

The spread operator also works with objects to copy or merge them.

--Example:

const user = { name: 'Yashu', age: 22 };
const updatedUser = { ...user, city: 'Nagpur' };

console.log(updatedUser);

// Output: { name: 'Yashu', age: 22, city: 'Nagpur' }

---

>>>3. Rest Operator (`...`) 🛠️

The rest operator looks the same as the spread operator (`...`), but its use case is different.
It allows you to **collect** multiple elements into a single array.

>>Function Arguments

The rest operator is often used to gather all remaining function arguments into an array.

--Example:

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));  // Output: 10

>>Destructuring with Rest Operator

The rest operator can be used in **destructuring** to gather the remaining elements into an array.

--Example:

const [first, ...rest] = [1, 2, 3, 4, 5];

console.log(first);  // Output: 1
console.log(rest);   // Output: [2, 3, 4, 5]


>>Object Destructuring with Rest**

You can also gather remaining object properties into a new object using the rest operator.

--Example:

const user = { name: 'Yashu', age: 22, city: 'Nagpur' };
const { name, ...details } = user;

console.log(name);     // Output: 'Yashu'
console.log(details);  // Output: { age: 22, city: 'Nagpur' }


>>Summary:

--Destructuring
- Extract values from arrays or objects into variables.
- Can rename variables or provide default values.

--Spread Operator (`...`)
- **Expands** arrays or objects into individual elements.
- Useful for copying, merging, and passing function arguments.

--Rest Operator (`...`)
- **Collects** remaining elements into an array.
- Used in function parameters and destructuring.

*/

//#41) Shallow Copy vs Deep Copy 🧑‍💻

/*
>Shallow Copy

When you make a shallow copy, you're copying the outer layer of an object or array. If the object has 
other objects inside it, those inner objects are **not** copied. Instead, both the original and the 
copied version still share the same inner objects. So, if you change the inner objects in one, it 
affects the other.

>Deep Copy

A deep copy makes a complete copy of an object or array, including any objects inside it. The original 
and the copied version are **completely separate**, so changes to one won't affect the other at all.


--Example: Shallow Copy on Array using Spread Operator

// Shallow copy with spread operator on array

let usersName = ["Yash", "Rahul", "Trisha", { a: "Ramesh", b: "Turkar" }];

let copyName = [...usersName]; // Shallow copy

copyName[0] = "Yashu";         // Modifies the copied array's first element
copyName[3]['a'] = "test";     // Modifies the nested object in the copied array

console.log("Original", usersName);
console.log("Copy", copyName);


--Output:

Original [ 'Yash', 'Rahul', 'Trisha', { a: 'test', b: 'Turkar' } ]
Copy     [ 'Yashu', 'Rahul', 'Trisha', { a: 'test', b: 'Turkar' } ]

--Example: Deep Copy on Array using `JSON.stringify()` and `JSON.parse()`**


// Deep Copy on array

let usersName = ["Yash", "Rahul", "Trisha", { a: "Ramesh", b: "Turkar" }];

let copyName = JSON.parse(JSON.stringify(usersName)); // Deep copy

copyName[0] = "Yashu";         // Modifies the copied array's first element
copyName[3]['a'] = "Gulab";    // Modifies the nested object in the copied array

console.log("Original", usersName);
console.log("Copy", copyName);

--Output:

Original [ 'Yash', 'Rahul', 'Trisha', { a: 'Ramesh', b: 'Turkar' } ]
Copy     [ 'Yashu', 'Rahul', 'Trisha', { a: 'Gulab', b: 'Turkar' } ]

--Example: Shallow Copy on Object using Spread Operator

// Shallow copy on object

let userInfo = {
  name: "Yash",
  age: "22",
  city: "Nagpur",
  otherInfo: [ctc = "12", role = "Full Stack Developer"]
};

let updatedUserInfo = { ...userInfo }; // Shallow copy

updatedUserInfo.name = "Yashu";         // Modifies the copied object's 'name' property
updatedUserInfo.otherInfo[0] = "15";    // Modifies the nested array in the copied object

console.log("Original", userInfo);
console.log("Copy", updatedUserInfo);


--Output:

Original { name: 'Yash', age: '22', city: 'Nagpur', otherInfo: [ '15', 'Full Stack Developer' ] }
Copy     { name: 'Yashu', age: '22', city: 'Nagpur', otherInfo: [ '15', 'Full Stack Developer' ] }

---

--Example: Deep Copy on Object using `JSON.stringify()` and `JSON.parse()`

// Deep Copy on object

let userInfo = {
  name: "Yash",
  age: "22",
  city: "Nagpur",
  otherInfo: [ctc = "12", role = "Full Stack Developer"]
};

let updatedUserInfo = JSON.parse(JSON.stringify(userInfo)); // Deep copy

updatedUserInfo.name = "Yashu";          // Modifies the copied object's 'name' property
updatedUserInfo.otherInfo[0] = "15";     // Modifies the nested array in the copied object

console.log("Original", userInfo);
console.log("Copy", updatedUserInfo);


-- **Output:**

Original { name: 'Yash', age: '22', city: 'Nagpur', otherInfo: [ '12', 'Full Stack Developer' ] }
Copy     { name: 'Yashu', age: '22', city: 'Nagpur', otherInfo: [ '15', 'Full Stack Developer' ] }


*/

//#42)What is type inference in TypeScript?**
/*
Type inference in TypeScript is the ability of the compiler to automatically determine the type of a 
variable or expression based on its value or context, without needing explicit type annotations. 
This feature helps keep the code clean and reduces redundancy while still providing type safety. For example, if you write `let num = 5;`, TypeScript infers that `num` is of type `number`. 📊✨

Even with type inference, we mention types explicitly for clarity, better error checking, improved IDE 
support, and to maintain code readability, especially in larger projects and for the developers.

Example : let num = 5; // TypeScript infers that 'num' is of type 'number'

*/

//#43)Naming conventions
/*
> 1. Camel Case

- Usage: This convention is commonly used for variable names, function names and method names.
- Camel Case is a naming convention in which the first word starts with a lowercase letter, 
and all subsequent words start with an uppercase letter.
- Example: userName

  let userName = "Yashu";       // Variable
  function calculateTotal() {   // Function
      return total;
  }
  

> 2. Pascal Case

- Usage: Often used for class names and constructor functions.
- Pascal Case is a naming convention where each word starts with an uppercase letter, including 
the first word.
- Example:UserProfile

  class UserProfile {                 // Class
      constructor(name: string) {
          this.name = name;
      }
  }


> 3. Snake Case

- All letters are lowercase, and words are separated by underscores.
- Usage: This convention is frequently used in variable names in some languages, particularly Python and Ruby.

- Example:user_name

  ```python
  user_name = "Yashu"       # Variable in Python
  total_price = 100         # Another example
  ```

> 4. Kebab Case

- Definition: All letters are lowercase, and words are separated by hyphens.
- Usage: Commonly used in URLs and CSS class names.

- Example:main-header

  ```css
  .main-header {             CSS Class 
      font-size: 24px;
  }
  ```

>5. Uppercase Snake Case

- Usage: Typically used for constants.

- Example:MAX_USERS , API_URL


  const MAX_USERS = 100;     // Constant
  const API_URL = "https://api.example.com"; // Another example API_URL


> Descriptive Names

- Using full words to describe the purpose of a variable or function rather than 
abbreviations or short forms.

- Example:

  function calculateAreaOfCircle(radius) { // Descriptive function name
      return Math.PI * radius * radius;
  }

--In React and TS 

- Kebab Case for Folders: Use `kebab-case` for folder names. It’s simple, readable, and widely 
used in React and TypeScript projects.  
  Example: `user-profile`, `api-services`.

- Pascal Case for Files: Use `PascalCase` for file names, especially for React components. 
  - Example: `UserProfile.tsx`, `Header.tsx`.


> Consistency

- Whatever convention you choose, it should be used consistently across your 
entire codebase.
- Usage: Helps in understanding and maintaining the code over time.
- Example: If you start using camel case for your variable names, continue using it for all other variable 
names in the same file or project.

> Best Practices for Naming Conventions:

- Be Meaningful: Choose names that clearly convey the purpose of the variable or function. Avoid vague 
  names like `data` or `info`.
- Keep It Simple: Use simple, clear words that are easy to understand.
- Avoid Abbreviations: Unless widely accepted (like `url` or `id`), avoid abbreviations that might
  confuse readers.
- Use Context: Sometimes, providing context in the name can be very helpful. For example, `userEmail` 
  instead of just `email` can clarify which email you're referring to.

*/

//#44)What is useSate in React ?
/*
With the help of the useState hook, we can manage state in React functional components. For example, 
in the code const [initialValue, updateValue] = useState(1);, we define two items inside the array: 
the first is initialValue, and the second is updateValue. The initialValue starts with the value you
pass to useState (like 1 in this example). The updateValue is a function used to update the initialValue. 
This is how the useState hook works.
*/
