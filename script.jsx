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

//#Question

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

//>How can you pass one function into another function and print its value in JavaScript ?

// const one = (parameter) => {
//   console.log(parameter());
// };

// const two = () => {
// return("I am Two")
// };

// one(two)
