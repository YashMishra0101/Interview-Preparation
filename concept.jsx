//#Three Type Of Function

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

//#IIFE (Immediately Invoked Function Expression): An IIFE is a function that is executed immediately after it is defined. It is a common JavaScript pattern used to create a new scope and avoid polluting the global namespace.

//   (function abc () {
//     console.log("Helo Guys I am a iffi");
// }());

//#Parameter and Argument

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

//# What is first class citizen in javascript ?

/*

1.Assign to Variables: Functions can be assigned to variables, just like any other value.

const sayHello = function() {
  console.log("Hello!");
};

2.Pass as Arguments: Functions can be passed as arguments to other functions.

function greet(fn) {
  fn();
}

greet(sayHello); // Output: Hello!

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

//#Three way to declared variable in javascript (Var,let,Const)

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


//#What is Array in Javascript ?
/*
An array in JavaScript is a type of object that allows us to store multiple values in a single variable. 
We use square brackets ([]) to define an array, and the values inside the array are separated by commas.

Arrays are zero-indexed, which means the first element of an array is at index 0.
*/

// let array=["Yash","Jeet","Aman","Rahul"];
// console.log(typeof(array));//object
// console.log(array[1]);

//#What is object is Javascript ?

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