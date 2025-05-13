/*
### What’s This Section About ? 

  This section is mainly for revising JavaScript from the basics, Even though it starts from scratch, BUT you should already know a JavaScript,
  It's not for complete beginners.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#0)Basic Info

JavaScript was developed by Brendan Eich in just 10 days in 1995 while he was working at Netscape Communications Corporation.
Initially named Mocha, it was later called LiveScript before adopting the name JavaScript. It's an interpreted language,
meaning it executes code line by line and is single-threaded.

JavaScript can be run in browsers and Node.js. Browsers use Javascript Enging for running js code like.

JavaScript Engine : A JavaScript engine is responsible for executing JavaScript code in the browser. 
It processes JavaScript, optimizes it, and runs scripts efficiently.

Rendering Engine: A Rendering engine (also called a layout engine) is responsible for converting 
HTML, CSS, and images into what you actually see on the screen. It determines how the webpage 
looks and is displayed.

Chrome use          : V8 engine      (Rendering - Blink),
Microsoft Edge uses : V8 engine      (Rendering - Blink),
Brave also use      : V8 engine      (Rendering - Blink),
Safari uses         : JavaScriptCore (Rendering - Webkit),
Firefox             : SpiderMonkey   (Rendering - Gecko), 

-Node.js, on the other hand, is not a framework or language but a software platform. It uses the V8 engine, the same one used by Google Chrome, to run JavaScript 
code in any terminal or command-line prompt.

JavaScript is fundamentally an interpreted language because it executes source code directly without 
a separate compilation step before runtime. However, modern JavaScript engines like V8 use JIT (just-in-time) compilation 
to optimize performance by compiling JavaScript code into machine code at runtime. So, while JavaScript remains an 
interpreted language, it benefits from JIT compilation in engines like V8, which significantly improves its performance. 

V8 uses just-in-time (JIT) compilation to translate JavaScript into optimized machine code at runtime, which speeds up
execution. So, while JavaScript benefits from improved performance with V8, it remains rooted in its interpreted nature.

-JavaScript is a synchronous single-threaded language means it excute code line by line.

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

🤚🔥V.Imp👉-When we use var and let, we can assign a variable's value After Declaration, but during
const, it is necessary to define the value during declaration

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

Example: 

let abc=(name)=>{
    return name;
}

console.log(abc("Yashu"))

-->Yashu ->Argument
-->name  ->Parameter

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

let dataOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am a Dataone");
    }, 2000);
  });
};

let dataTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am a Datatwo");
    }, 1000);
  });
};

let dataThree = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error hai Three me");
      // resolve("I am a dataThree");
    }, 1000);
  });
};

let dataFour = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am a dataFour");
    }, 1000);
  });
};

let start = () => {
  dataOne()
    .then((result) => {
      console.log(result);
      return dataTwo();
    })
    .then((result) => {
      console.log(result);
      return dataThree();
    })
    .then((result) => {
      console.log(result);
      return dataFour();
    })

    .catch((error) => {
      console.log("Error : ", error);
    })
    .finally(() => {
      console.log("Program End");
    });
};

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

#10) Static Languages vs Dynamic Languages

--Static Languages:

Static programming languages, such as Java, C++,Kotlin etc require the developer to explicitly declare the data type of
variables at the time of declaration. For example, in Java, you would write `int number = 10;`, where the type `int` must 
be mentioned. These languages use a **compiler** to convert the entire source code into machine code before execution. The 
compiler scans the whole codebase during this compilation phase, and this process happens **before** the program is run.

If there are any syntax errors, type mismatches, or other issues, they are reported during compilation—before the program 
even starts executing. This early error detection makes static languages highly suitable for large-scale applications, as
many problems can be caught early, reducing runtime failures and improving overall code safety and reliability.


--Dynamic Languages:

Dynamic programming languages, such as Python, JavaScript, PHP etc do **not** require developers to explicitly specify variable 
types during declaration. For instance, you can simply write `number = 10` in Python or JavaScript without mentioning the type. 
These languages use an **interpreter**, which reads and executes the code **line by line** during runtime, unlike static languages
where code is compiled beforehand.

In dynamic languages, code is interpreted **at runtime**, so errors are only detected when the interpreter reaches the specific
line causing the issue. This means the program may execute partially before throwing an error. While dynamic languages offer more
flexibility, quicker prototyping, and faster development cycles, they can also introduce unexpected bugs that are harder to trace,
specially in larger codebases.


#11) Hoisting Explained

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during 
the compile phase, which happens before code execution begins. This means that function declarations are fully hoisted, including 
their function body, allowing them to be invoked even before their actual declaration appears in the code. In the case of variables 
declared with var, only the declaration is hoisted—not the initialization—so they are initialized with the value undefined until the 
line of code where the assignment actually happens. On the other hand, variables declared with let and const are also hoisted, 
but unlike var, they remain uninitialized and enter a state known as the Temporal Dead Zone (TDZ). Accessing them before their 
declaration line results in a ReferenceError. This entire compile-time process of moving declarations to the top is known as
hoisting, and understanding it helps prevent unexpected behaviors in JavaScript execution.


Quick Points:

- During the compile phase : It's important to note that hoisting occurs during the compile phase, not during code execution.
- Variable and function declarations : Both variables and functions are hoisted, means moved to the top of their containing scope.
  But :-
->Function declarations are fully hoisted (name and body).
->Variable declarations are hoisted, but their values are not, only the declarations, not the initializations.

>Hosting with variable (var, let, const) 

1. `var`:

During the compilation phase, variables declared with var are hoisted to the top of their containing scope 
and are automatically initialized to undefined.

- Variables declared with `var` are hoisted to the top of their scope.
- They are initialized with `undefined` during the hoisting phase.  
- Accessing them before declaration does not throw an error but returns `undefined`.

--Example :

console.log(hoistedVar); // Output: undefined (hoisted but not initialized)

var hoistedVar = 5;

console.log(hoistedVar); // Output: 5

2. `let` and `const`:

- Variables declared with `let` and `const` are also hoisted, but they are **not initialized** during the hoisting phase.  
- They remain in the "temporal dead zone" (TDZ) from the start of their scope until the code execution reaches their declaration.  
- Accessing them **before declaration** results in a `ReferenceError`.

Example with `let`:

console.log(notHoistedVar); // Throws ReferenceError: Cannot access 'notHoistedVar' before initialization

let notHoistedVar = 10;

Example with `const`:

console.log(notHoistedConst); // Throws ReferenceError: Cannot access 'notHoistedConst' before initialization

const notHoistedConst = 15;

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
and `const` variables are hoisted but not initialized (temporal dead zone) and gives ReferenceError ( ReferenceError: Cannot access 'variable' before initialization )


#12)Tempory Dead Zone (TDZ)

The Temporal Dead Zone (TDZ) refers to the period in which variables declared with let or const are hoisted but 
cannot be accessed until the code execution reaches their declaration. If we try to access them before declaration,
 it results in a ReferenceError. This is known as the Temporal Dead Zone.

--Simple Explaination

Temporal Dead Zone (TDZ) means you cannot access a variable declared with let or const before its declaration. If you try, 
it throws a ReferenceError. (Uncaught ReferenceError: Cannot access 'variableName' before initialization)

(On the other hand, variables declared with var are hoisted and automatically initialized to undefined, 
so you can access var before declaration, but it just return undefined instead of throwing a ReferenceError)

--Why Does This Happen?

-var is hoisted and initialized with undefined, so you can access it before declaration.
-let and const are also hoisted, but they are not initialized immediately, This means they exist in a "Temporal Dead Zone" from the start of the block until the
execution reaches the declaration.
-TDZ only happen with let and const not with var.

--Example

console.log(myVar); // Output: undefined ( it hoisted but initialized with `undefined`)
var myVar = 10;

console.log(myLet); // Uncaught ReferenceError: Cannot access 'myLet' before initialization (it also hoisted but not initialized with `undefined and goes into TDZ))
let myLet = 20;

console.log(myConst); // Uncaught ReferenceError: Cannot access 'myConst' before initialization  (it also hoisted but not initialized with `undefined and goes into TDZ)
const myConst = 30;


#13) undefined vs Not define vs null

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

#14) Global Execution Context and Execution Context/Function Execution Context (In Detail)

> Global Execution Context in JavaScript:

- An Global execution context is the environment where JavaScript code is executed,This is the first execution context 
that is created when JavaScript starts running. It is the default environment where the entire JavaScript code runs.

So, the global execution context is just one type of execution context, and it is the first and main one that 
JavaScript creates before executing any other function.

First Global Execution Context is created then other Execution Context is created inside the Global Execution Context.


>It has two main phases:


--1️⃣ Memory Allocation Phase (Hoisting Phase):  

   - Memory allocation for variables and funtions.
   - Variables declared with `var` are initialized as `undefined`.  
   - Variables declared with `let` and `const` are stored in memory but remain in the "Temporal Dead Zone" until they are assigned a value.
   - Functions are stored with their full body.  

   
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
   - When a function is called, a new execution context is created and pushed into the call stack(Upon Global Execution Context).  
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
  - A new execution context is pushed onto the stack when a function is invoked, It is popped outr from the stack once the function completes execution.


---Example for better Understand

_-_--------Global Execution Context is created.

console.log("Start");  // Runs inside Global Execution Context

function sayHello() {
    console.log("Hello, Yashu!");  // New Execution Context is created
}

sayHello();  // Function call → New Execution Context created in Call Stack

console.log("End");  // Still inside Global Execution Context

_-_--------Global Execution Context is removed/end.

--Flow of Execution Context:

1️⃣ Global Execution Context is created first.  
2️⃣ `console.log("Start")` runs inside the GEC.  
3️⃣ `sayHello()` is called → A new execution context is created inside the Call Stack.  
4️⃣ `console.log("Hello, Yashu!")` runs inside this new execution context.  
5️⃣ After execution, the function’s execution context is removed from the stack.  
6️⃣ `console.log("End")` runs inside the Global Execution Context.  
7️⃣ Once all code is executed, the Global Execution Context is removed from the call stack. 


>>Key Points (Short & Simple):

- Global Execution Context (GEC) is the first environment where JavaScript code runs.  

- Phases of Execution Context:  
  1️⃣ Memory Allocation Phase:  
    - `var` is hoisted as `undefined`, while `let` and `const` stay in the Temporal Dead Zone (TDZ).  
    - Function declarations are hoisted with their full body.  

  2️⃣ Code Execution Phase: 
    - Code runs line by line.  
    - Variables get actual values.  
    - Function calls create new execution contexts inside the call stack but first global execution context 
      enter in call stack then function execution context.

    -  Call Stack:
      - GEC enters first, functions get **pushed in** when called and **popped out** when done.  
     - The process repeats until all code executes and GEC is removed.  

- Function Execution Context:
  - Created whenever a function is called.  
  - Manages function execution using the **call stack**.  

- Takeaway: 
  - Memory is allocated before execution. 
  - Call stack controls function execution. 


### #15) Event Loop

JavaScript is a **single-threaded language**, meaning it executes code **line by line**. When **asynchronous operations** are 
involved, they are managed by the **Event Loop**, which ensures **non-blocking** execution.

⚠️ Note: The Event Loop is not a feature of JavaScript itself but is provided by the **browser environment** (or **Node.js runtime**).
JavaScript doesn't have built-in asynchronous capabilities. Instead, **Web APIs**, the **Microtask Queue**, and the **Task (Callback )
Queue** are provided by the runtime environment to handle asynchronous operations efficiently.

The **browser engine** (like **V8** in Chrome or **SpiderMonkey** in Firefox) works together with JavaScript to manage asynchronous
operations such as `setTimeout`, `fetch`, and **Promises**, without blocking the main thread.


>>How the Event Loop Works:


--1️⃣ Execution of Synchronous Code

* JavaScript first executes **all synchronous code** in the **Call Stack**.
* If a function is invoked, it is **pushed into the Call Stack** and **popped out** after execution.
* JavaScript **does not process asynchronous tasks** until the Call Stack is empty.

--- 2️⃣ Asynchronous Code is Handled by Web APIs

* When the JS engine encounters an **asynchronous operation** (e.g., `setTimeout`, `fetch`, or event listeners), it offloads
 them to the **Web APIs**.
* These APIs handle the operations in the background, freeing up the Call Stack.

---3️⃣ Asynchronous Tasks Are Moved to Queues

Once the Web APIs finish their operations, their callbacks are queued in:

* **Microtask Queue** (🎯 Higher Priority)

  * Includes `Promise.then`, `Promise.catch`, `Promise.finally`, and `MutationObserver`.
  * Always executed **before** tasks in the Task Queue.

* **Task Queue (Callback Queue)** (🔁 Lower Priority)

  * Includes `setTimeout`, `setInterval`, `event listeners`, etc.
  * Executed **only after** the Microtask Queue is completely empty.


---4️⃣ Moving Tasks to the Call Stack

* The **Event Loop** checks:

  1. If the **Call Stack is empty**.
  2. If there are **Microtasks**, it pushes them into the Call Stack for execution.
  3. Once all Microtasks are done, it moves tasks from the **Task Queue** to the Call Stack.
* This cycle **repeats continuously**, ensuring smooth, non-blocking asynchronous execution.


--- 5️⃣ Role of the Event Loop

The **Event Loop** is the mechanism that:

* Monitors the Call Stack and the Queues.
* **Prioritizes Microtasks over Task Queue** items.
* Ensures that the JS engine processes events and tasks in the correct order without blocking the UI or main thread.

👉 This continuous cycle of checking the Call Stack and managing asynchronous queues is what we call the **Event Loop**.


---Example for Better Understanding

console.log("Start"); 

setTimeout(() => {
    console.log("Inside setTimeout"); 
}, 0);

Promise.resolve().then(() => {
    console.log("Inside Promise");
});

console.log("End");

---Execution Flow

1️⃣ **Synchronous Code Execution:** `"Start"` is logged first.  
2️⃣ **setTimeout(0)** goes to **Web APIs** and waits.  
3️⃣ **Promise** goes to **Microtask Queue**.  
4️⃣ **Synchronous code completes**, logging `"End"`.  
5️⃣ **Microtask Queue executes first**, logging `"Inside Promise"`.  
6️⃣ **Task Queue executes next**, logging `"Inside setTimeout"`.  

**Final Output:**  

Start
End
Inside Promise
Inside setTimeout


>Key Takeaways

- **Synchronous code runs first** in the Call Stack.  
- **Asynchronous tasks go to Web APIs and are queued**.  
- **Microtask Queue has higher priority** than the Task Queue.  
- **The Event Loop ensures tasks are executed properly** in the right order. 


#16)Primitive Data Types (Store in a Stack ) & Non-Primitive  (Store in a Heap)

--Primitive Data Types: String, Boolean, Number, etc. (immutable,values cannot be changed.)
-- Non-Primitive Data Types: Array, Object, Function, etc. (mutable,values can be changed )

- Primitive Data Types are immutable, meaning their values cannot be changed.Any modification results in the 
creation of a new value.

- Primitive Data Types are stored in the Stack. Copying these results in a new copy being created, 
so changes to the copy do not affect the original.

- Non-Primitive(Reference) Data Types are mutable, meaning their values can be changed without creating a new 
object, changing the same memory block.

-Non-Primitive Data Types are stored in the Heap. They are accessed via references,so changes to a reference will affect the original data.

- Examples :

let oldProfile = "Front End Developer";
let newProfile = oldProfile;

newProfile = "Full Stack Developer";

console.log(oldProfile); // Output: Front End Developer
console.log(newProfile); // Output: Full Stack Developer

let arr = ["HTML", "CSS", "JavaScript"];
let arr2 = arr;

arr2[1] = "Tailwind CSS";

console.log(arr[1]);  // Output: Tailwind CSS
console.log(arr2[1]); // Output: Tailwind CSS

>Summary :

- Primitive Data Types -> Store in Stack -> Immutable,values cannot be changed -> Any modification results in the 
creation of a new value -> String,numbers etc.

- Non-Primitive Data Types -> Store in Healp -> Mutable,values can be changed -> Values can be changed without creating a new 
object -> Array,objects,function etc.


#17) `Destructuring`, `Spread operator`, and `Rest operator`) 

>>1️⃣ Destructuring (Extracting Values)

--Destructuring helps you Extract values from arrays or objects easily.  

---👉 Array Destructuring Example:**

const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3

Instead of writing `numbers[0]`, `numbers[1]`, etc., **destructuring** makes it shorter and cleaner.  

--👉 Object Destructuring Example:**

const person = { name: "Yashu", age: 22 };
const { name, age } = person;

console.log(name); // "Yashu"
console.log(age);  // 22

You can directly extract values from objects without `person.name` or `person.age`.  


>>2️⃣ Spread Operator (`...`) (Expanding)

The Spread Operator **spreads elements of an array or object**. It's mostly used for **copying, merging, 
and passing values.

--👉 Copying an Array (Avoids Reference Issues)**

const arr1 = [1, 2, 3];
const arr2 = [...arr1];  // Creates a copy

arr2.push(4);
console.log(arr1); // [1, 2, 3]  (Original array remains unchanged)
console.log(arr2); // [1, 2, 3, 4]  


---👉 Merging Two Arrays**

const boys = ["Yash", "Ram"];
const girls = ["Chiku", "Priya"];
const all = [...boys, ...girls];

console.log(all); // ["Yash", "Ram", "Chiku", "Priya"]


---👉 Expanding an Object**

const user = { name: "Yash", age: 22 };
const updatedUser = { ...user, city: "Nagpur" };

console.log(updatedUser); // { name: "Yash", age: 22, city: "Nagpur" }


>3️⃣ Rest Operator (`...`) (Collecting)

The **Rest Operator** is used to **collect multiple values** into an array.  

---👉 Function with Multiple Arguments (Rest Operator)

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

Here, `...numbers` **collects** all arguments into an array `[1, 2, 3, 4]`.  

----👉 Destructuring with Rest Operator

const fruits = ["Apple", "Mango", "Banana", "Grapes"];
const [first, second, ...remainingFruits] = fruits;

console.log(first); // "Apple"
console.log(second); // "Mango"
console.log(remainingFruits); // ["Banana", "Grapes"]

Here, `...remainingFruits` **collects** all remaining elements into an array.  

>>> Simple Trick to Remember:

- **Destructuring** → **Extracting values** (`{}` or `[]`)  
- **Spread (`...`)** → **Expanding values** (used for copying & merging)  
- **Rest (`...`)** → **Collecting values** (used in function parameters or destructuring)  

#18)Naming conventions

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

#19)Loops

---1)For Loop

The for loop is used to repeat a block of code a specific number of times.

 for(let f=1;f<=10;f++){
   console.log("For Loop",f);
 }

--2)While Loop

 The while loop repeats a block of code as long as a condition is true.

 let w2=1;

 while(w2<=5){
   console.log("While Loop",w2);
   w2++
 }

--3)Do While loop

 The do while loop executes the code block once before checking the condition, then repeats as long as the condition is true.

 let d=1;

 do{
 console.log("Do While Loop",d);
 d++;
 }while(d<=8)

--4)For in loop ( For in loop for object )

 The for...in loop is used to iterate over the properties (keys) of an object.

 const info={
   name:"yash mishra",
   role:"front end developer",
   age:"21"
 }

 for (let key in info){
   console.log(key);
 }

 for (let key in info){
   console.log(info[key]);
 }

 for (let key in info){
   console.log(`${key}:${info[key]}`);
 }

>Inportant Info

??? Can we use a for in loop for an array?

If we use for in with an array, it gives us the index numbers instead of the array values. If we need array values,
we need to use it this way: console.log(arr[a]) instant of console.log(a).

--5)For of loop (use for array)

 let arr = ["Yash", 21, "Developer"];

 for (let a of arr) {
   console.log(a);
 }

??? Can we use for of loop with obejct ?

Ans=>we cannot use a for...of loop directly with objects because for...of is designed to iterate over iterable objects, like 
arrays, strings, maps, and sets. Objects are not inherently iterable.However, you can use for...of with objects indirectly 
by iterating over their properties using methods like Object.keys(), Object.values(), or Object.entries()

example : 

for (let value of Object.values(info)) {
  console.log(value);
}

>Objects: Use for...in to iterate over keys.
>Arrays/Iterables: Use for...of to iterate over values.

--6)ForEach vs forOf loop

forEach(value,index,array)

- `forEach` is specifically for arrays and uses a callback function. With `forEach`, we can access the index number, 
but we cannot use `break` or `continue` statements.

- `for...of`** is for iterables, including arrays, strings, etc. In a `for...of` loop, we can use `continue` and `break
` statements but cannot directly access the index number (unless using `Array.entries()`).

-- `forEach` is only for arrays and has a callback function. With `forEach`, we can access the index number, but we cannot use `break` 
-- or `continue` statements. `for...of` is for iterables, including arrays, strings, etc. In a `for...of` loop, 
-- we can use `continue` and `break` statements but cannot directly access the index number.

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

Output
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

Output:

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

 Output:
 Index: 0, Value: Yash
 Index: 1, Value: Ram
 Index: 2, Value: Hello


*/
