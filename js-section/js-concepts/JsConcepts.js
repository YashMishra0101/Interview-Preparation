console.log("JS Concepts Is Working");

//#2)IIFE (Immediately Invoked Function Expression): An IIFE is a function that is executed immediately after it is defined.

//--It is a common JavaScript pattern used to create a new scope and avoid polluting the global namespace.

//--Uses :-

//>Avoid polluting the global namespace
//>Execute an async function
//>The module pattern

//   (function abc () {
//     console.log("Helo Guys I am a iffi");
// }());

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


//#36)Kya hai isska outpu 🤔💭

/*

let set=(()=>{
  setTimeout(()=>{
    console.log("I am setTime out")
  },1000)
})
`
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
