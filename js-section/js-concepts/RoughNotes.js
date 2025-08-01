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
