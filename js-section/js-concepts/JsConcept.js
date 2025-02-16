/*
#1)Three way to declared variable in javascript (Var,let,Const)

>In var, we can redeclared and reassing them and Var is function scope.

var a = 10;
var a = 20;
console.log("In Var:", a);
a=30;
console.log("In Var:", a);

>In let, we cannot redeclared the variable but we can reassign them and let is block scoped.

let b = 30;
    b = 32;
console.log("In let:", b);

let b = 40; (not valid)
console.log("In let:", b);

>>>In const we cannot redeclared or reassign the variable and const is also a block scoped.

const c = 50;
console.log("In Const:", c);

>>Extra Info

🤚👉-When we use var and let, we can assign a variable's value After Declaration, but during
const, it is necessary to define the value during declaration.(🔥V.Imp)

- var is function scope and let and const are block scoped

-Using let and const is generally better because they avoid problems caused by var's function scope 
and hoisting and let and const are block scope.


--Example:function scope using var

function one() {
    if(true){
        var a=10;
    }
        console.log(a) //output:10
    }
    one()
        
--Example:Block scoped using let
        
    function one() {
    if(true){
    let a=10;
    }
    console.log(a)//refrence error
}

one()

?? Identifiers: Names given to variables, functions, properties, etc, to uniquely identify them.


#2)Functions in Javascript, There are Three way :-

--1)Normal function

function naam() {
  console.log("Hi I am a normal Function");
}

naam();

function naamTwo(num1, num2) {
  console.log(num1 + num2);
}

naamTwo(5, 2);

function naamThree(add) {
  console.log(add);
}

naamThree(3 + 7);

--2)Anonymous Function (If a function doesn’t have a name,So we store it in a variable.)

  const ano = function () {
    console.log("Hello Ji I am a Anonymous Function");
 };

ano()

--3)Arrow Function

const arrow =(print,printTwo)=>{
    console.log(print,printTwo);
}

arrow ("I am a arrow Fucntion", "✋Two");

>If there is a single Parameter in arrow function

const arrowTwo=(value)=>console.log(value);

arrowTwo("I a Value");

--> Reference Assignment (The reference of one variable is given to another variable).

let a = [1, 2, 3, 5];

let b = a;

console.log(b);

>Function Expression (Store function into a variable called Function Expression)

  const fExpress = function ex() {
    console.log("I am a Function Expression");
  };

fExpress();

#3)Parameter and Argument

/*
Parameter and argument are both part of a function. When we call a function and pass a value inside it, we use an argument to send
that value. The parameter, on the other hand, receives the value sent by the argument and handles it within the function. So, when 
we call a function and try to pass a value, that value is called an argument. Then, inside the function, that value is received 
and handled by the parameter.

#4)About Call Back :-

When "A function" is passed as an argument into "Another function", then it is called a callback function.
(It executed either immediately, after the main function completes its task, or at a later time, depending on how the callback is used.

1. Types of Callbacks:
   - Synchronous Callbacks: Executed right after the main function completes its task (typically 
   in simple operations like calculations).
   - Asynchronous Callbacks: Executed after a delay or once a specific task (like an API request or 
   file read) is finished.

2. Common Use Cases:
   - API requests and database queries that are time-dependent.
   - Event handling, such as responding to button clicks.
   - Timers, using `setTimeout` or `setInterval`.

3. Example of Synchronous Callback:

   function calculate(a, b, callback) {
       let sum = a + b;
       callback(sum);  // Executes immediately after sum is calculated
   }
   calculate(3, 5, (result) => {
       console.log('Sum:', result); // Output: 'Sum: 8'
   });


4. Example of Asynchronous Callback:

   function fetchData(callback) {
       setTimeout(() => {
           console.log('Data fetched');
           callback();  // Executes after 2 seconds
       }, 2000);
   }
   fetchData(() => {
       console.log('Processing data after fetching');  // Output after 2 sec
   });
   

5. Importance:
   - Callbacks allow for **non-blocking operations**, meaning they let code run while waiting for 
   time-consuming tasks (like fetching data).
   - Vital in **JavaScript** for managing **asynchronous tasks**, such as API calls, file handling, 
   and user interactions.

6. **Drawbacks**:
   - Using too many callbacks or nesting them deeply can result in **callback hell**, making your 
   code hard to read and maintain.
   - You can avoid callback hell by using **promises** or **async/await**, which provide a 
   cleaner way to handle asynchronous code.


#5)About Callback Hell :

Callback Hell is a situation in programming, especially in JavaScript, where multiple nested callbacks make the code difficult to read, 
maintain, and debug so it happens when callbacks are nested within each other, leading to deeply indented code, each step depends 
on the completion of the previous one.


>Explanation

1. Concept:
   - Callback Hell happens when callbacks are nested within each other, leading to deeply
    indented code.
   - This nesting can make the code look like a pyramid (often called the "Pyramid of Doom"), 
   making it harder to follow and manage.

2. Why It Happens:
   - Asynchronous operations (like reading files, making network requests, or waiting for timers) 
   often use callbacks to handle their results.
   - When multiple asynchronous operations are chained together, the need for callbacks in each 
   operation can lead to deep nesting.

--- Example:
 
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

-- In the example above, each function relies on the completion of the previous function, resulting in nested callbacks.

 Problems with Callback Hell:

   - Error Handling: Callback functions don't have built-in error handling like Promises or async/await. That's one of their 
    biggest weaknesses.There’s no structured way like .catch() in Promises or try...catch in async/await to handle errors.

   - Readability: Deeply nested callbacks make it hard to read and understand the code.

--Solutions:

  - Promises: Flatten the code structure by chaining `.then()` calls.
  - Async/Await: Write asynchronous code in a more synchronous-looking style, improving readability and maintainability.

>Summary

In summary, **callback hell** is the challenge of managing deeply nested callbacks in asynchronous code.
it can make the code hard to read and maintain. Modern solutions like **Promises** and **async/await**
provide cleaner, more manageable ways to handle asynchronous operations, reducing the problems
associated with callback hell.

#6)Promises

Promises are a better alternative to callbacks for handling code. If our code is successful, it resolves with 
the help of the resolve function. If our code fails, we can handle it with the help of the reject function,
and we can use catch for handling errors in promises.

--A promise can have three states:

.Pending: The work is still happening.
.Resolved (Fulfilled): The work is done successfully.
.Rejected: The work failed, and there’s an error.

--We also have catch and finally  👇👇

.catch(()=>{

})

.finally(()=>{

})

--Why are Promises Used?

.To avoid callback hell: Writing a lot of nested callbacks makes code hard to read. Promises simplify that.
.Better error handling: Promises handle errors in a clear way using .catch().
.Easier chaining: You can run tasks one after another using .then().

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



#7)Asyn await

Async/await is a better option compared to simple Promises and callbacks. It works with Promises and provides 
additional functionality. With the help of async, a Promise is created automatically. 

The resolved and rejected 
states are handled using try and catch blocks. When the code is resolved, it is executed inside the try block, 
and if the code is rejected, it is handled with the help of the catch block.

async: It is a keyword that you place in front of a function. It tells JavaScript that this function will 
contain asynchronous code and will return a Promise.

await: It is used inside an async function. It makes JavaScript wait for a Promise to resolve (or reject) 
before moving to the next line of code.

>>Example of async/await

async function fetchUserData() {
  try {
    --await waits for the Promise to resolve
    const response = await fetch('https://api.example.com/user');
    
    --await waits for the response to be converted to JSON
    const data = await response.json();
    
    console.log(data);  --> Now you have the user data, and you can use it
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

fetchUserData();


>>A small comparison:


--Using Promises (then/catch):

fetch('https://api.example.com/user')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

--Using Async await (try/catch):

async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    console.log(data);
  } 
  catch (error) {
    console.error('Error:', error);
  }
}

--The async/await version is cleaner and easier to understand, right.


#8)What is closer

A closure in JavaScript means that an inner function has access to the outer function’s variable and even after 
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


#9)Scope chain, Lexical Scope (Closer)

>Scope Chain

--Simple Explanation:

Scope Chain: When the JavaScript engine needs to find a variable, it starts looking in the current scope. 
If it doesn't find it, it moves to the outer scope, and keeps going up the chain until it reaches the global scope.

--Example:

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


> Lexical Scope

Definition: Lexical scope means that a inner function can access variables that are defined in its outer scope.

-- Simple Explanation:

Lexical Scope:If you have a function inside another function (nested function), 
the inner function can access variables from the outer function.

--Example:

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

-- Summary In simple terms:

-The scope chain is the path JavaScript follows to find a variable if it's not in the current box. (Because)
-Lexical scope is like a nested set of boxes. The inner box (function) can look into the outer box (function) to find variables. 


#12)Tempory Dead Zone (TDZ)

The Temporal Dead Zone (TDZ) refers to the period of time during which a variable declared with let or const is
hoisted but cannot be accessed until the code execution reaches its declaration.

In the TDZ, attempting to access the variable will result in a ReferenceError, because the variable is not yet
initialized.

--Simple Explaination

Temporal Dead Zone (TDZ) means you cannot access a variable declared with let or const before its declaration. If you try, 
it throws a ReferenceError. 
(On the other hand, variables declared with var are hoisted and automatically initialized to undefined, 
so you can access var before declaration, but it just return undefined.)

--Example

console.log(myVar); // Output: undefined (because of hoisting)
var myVar = 10;

console.log(myLet); // Uncaught ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;

console.log(myConst); // Uncaught ReferenceError: Cannot access 'myConst' before initialization
const myConst = 30;


#11) Hoisting Explained

Hoisting means that during the compile phase (before code execution), variable and function declarations are 
moved to the top of their containing scope. This is called hoisting.

Explanation:

- During the compile phase : It's important to note that hoisting occurs during the compile phase, not during code execution.
- Variable and function declarations : Both variables and functions are hoisted, 
  But :-
->Function declarations are fully hoisted (name and body).
->Variable declarations are hoisted, but their values are not, only the declarations, not the initializations.

>>Hoisting In Function

--Function Declarations

Function Declarations: Are hoisted completely (both the name and body), so they can be called before they are 
defined in the code.


Example:
hoistedFunction(); // This works because hoistedFunction is hoisted

function hoistedFunction() {
    console.log("This function is hoisted!");
}


--Function Expressions

 Function expressions, where you assign a function to a variable, are not hoisted. Only the variable declaration
 is hoisted, not the function assignment ,so calling the function before assignment results in a TypeError.

--Example:

a()  //TypeError: a is not a function

var a =function (){
 console.log("Hey I a function")
}


 b()  //ReferenceError: Cannot access 'b' before initialization

 let b =function (){
  console.log("Hey I a function")
 }


>Variable Declarations in (var, let, const) 

1. `var`:

During the compilation phase, variables declared with var are hoisted to the top of their containing scope 
and are automatically initialized to undefined."

- Variables declared with `var` are hoisted to the top of their scope.
- They are initialized with `undefined` during the hoisting phase.  
- Accessing them before declaration does not throw an error but returns `undefined`.

--Example :

console.log(hoistedVar); // Output: undefined (hoisted but not initialized)

var hoistedVar = 5;

console.log(hoistedVar); // Output: 5

2. `let` and `const`:

- Variables declared with `let` and `const` are also **hoisted**, but they are **not initialized** during the hoisting phase.  
- They remain in the "temporal dead zone" (TDZ) from the start of their scope until the code execution reaches their declaration.  
- Accessing them **before declaration** results in a `ReferenceError`.

Example with `let`:

console.log(notHoistedVar); // Throws ReferenceError: Cannot access 'notHoistedVar' before initialization

let notHoistedVar = 10;

Example with `const`:

console.log(notHoistedConst); // Throws ReferenceError: Cannot access 'notHoistedConst' before initialization

const notHoistedConst = 15;


> Key Differences Between `var`, `let`, and `const` in Hoisting:

| **Declaration Type** | **Hoisted**       | **Initialized**           | **Access Before Declaration**     |
|----------------------|-------------------|---------------------------|-----------------------------------|
| `var`                | Yes               | Initialized to `undefined`| Allowed, returns `undefined`.     |
| `let`                | Yes               | Not initialized (TDZ)     | Throws `ReferenceError`.          |
| `const`              | Yes               | Not initialized (TDZ)     | Throws `ReferenceError`.          |


> Conclusion

- Function Declarations: Hoisted entirely (both name and function body).
- Function Expressions: Only the variable declaration is hoisted, not the function assignment.
- Variable Declarations : `var` variables are hoisted and automatic initialized with `undefined`, while `let` 
and `const` variables are hoisted but not initialized (temporal dead zone) anf gives ReferenceError ( ReferenceError: Cannot access 'variable' before initialization )


#12) undefined vs Not define vs null

> undefined: This occurs when a variable or function is declared, but no value is assigned to them. When we try to access that variable, it gives us "undefined."

--->Variable or function is declared, but no value is assigned to them.

Example:

let b ;
console.log(b); -->undefined

console.log(a); -->Logs "undefined" because 'a' is hoisted but not initialized yet.
var a = 10;

function c() {
//nothing
}

console.log(c()); -->'c()' returns undefined because the function has no return statement.

> ReferenceError:Not Define :- This happens when a variable or function is not declared and we are trying to access it. Since the declaration is missing, we can't initialize it either.

var b = 20;

console.log(a); --> Throws " ReferenceError: a is Not defined " because 'a' is never declared.

function x() {
  return "Hi";
}
console.log(value()); --> Throws " ReferenceError: value is Not defined " because 'value' is not declared or defined.

> null: "null" is explicitly assigned to a variable (We need to explicitly assign "null"). It represents the intentional absence of any object value. It’s a bit strange 😂, but it’s true.

let info = {
  name: "Rahul",
  middleName: null, // We explicitly set 'middleName' to null.
  lastName: "Turkar"
};

console.log(info.middleName); // Logs "null" because we explicitly set it to null.

#13) Global Execution Context and Execution Context (In Detail)

> Global Execution Context in JavaScript:

- An Global execution context is the environment where JavaScript code is executed,This is the first execution context 
that is created when JavaScript starts running. It is the default environment where the entire JavaScript code runs.

So, the global execution context is just one type of execution context, and it is the first and main one that 
JavaScript creates before executing any other function.


>It has two main phases:


--1️⃣ Memory Allocation Phase (Hoisting Phase):  

   - Variables declared with `var` are initialized as `undefined`.  
   - Variables declared with `let` and `const` are stored in memory but remain in the "Temporal Dead Zone" until they are assigned a value.
   - Functions (declared using function declarations) are stored with their full body.  

   
---Example:Example for Better Understanding :

console.log(myVar); // Output: undefined (hoisted but not initialized)
console.log(myFunction()); // Output: "Hello, Yashu" (function is hoisted with name + body)

// Memory Allocation Phase:
// - myVar: undefined
// - myFunction: function () { return "Hello, Yashu!"; }

var myVar = 10;
function myFunction() {
   return ("Hello, Yashu")
}


---2️⃣ Code Execution Phase:
   - Code executes line by line.  
   - Variables are assigned their actual values.  
   - When a function is called, a new execution context is created and pushed into the call stack.  
   - After the function finishes execution, its execution context is popped out of the call stack.  


> Call Stack Behavior:  

  - First, the Global Execution Context (GEC) is pushed into the call stack.  
  - Then, when a function is called, a new execution context is created and **pushed** into the **call stack**.  
  - Once the function execution is **completed**, its execution context is **removed (popped out)** from the stack.  
  - This process **repeats for every function call** until all functions are executed, and finally,
   the **Global Execution Context is removed** once the program finishes.  


> Function Execution Context

- Created whenever a function is called.
- Each function call generates a new execution context.
- Function execution contexts are managed by the call stack:
  - A new execution context is pushed onto the stack when a function is invoked.
  - It is popped off the stack once the function completes execution.


-- Key Points

- Memory allocation happens before code execution.
- The call stack handles the order of execution contexts, managing function calls and returns.
- The execution context manages the flow and execution of code.


---Example to Understand

console.log("Start");  // Runs inside Global Execution Context

function sayHello() {
    console.log("Hello, Yashu!");  // New Execution Context is created
}

sayHello();  // Function call → New Execution Context created in Call Stack

console.log("End");  // Still inside Global Execution Context


--Flow of Execution Context:

1️⃣ Global Execution Context is created first.  
2️⃣ `console.log("Start")` runs inside the GEC.  
3️⃣ `sayHello()` is called → A new execution context is created inside the Call Stack.  
4️⃣ `console.log("Hello, Yashu!")` runs inside this new execution context.  
5️⃣ After execution, the function’s execution context is removed from the stack.  
6️⃣ `console.log("End")` runs inside the Global Execution Context.  
7️⃣ Once all code is executed, the Global Execution Context is removed from the call stack.  

*/
