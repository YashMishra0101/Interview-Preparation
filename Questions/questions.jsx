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

//#Question 3 : Difference between null, undefined, and empty .

/*
Undefined means a variable has been declared but not assigned a value. Null is an explicit assignment indicating 
that a variable has no value. Empty refers to a variable that is assigned an empty string or an empty array, meaning 
it has been assigned a value, but that value is empty.
*/

// let u;
// let emptyStringExample = null;
// let emptyArrayExample = [];

// console.log(u); // Output: undefined
// console.log(emptyStringExample); // Output: (empty string)
// console.log(emptyArrayExample); // Output: []

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