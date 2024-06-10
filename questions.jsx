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

//#Three way to declared variable in javascript (Var,let,Const)

//>In var we can redecared and reassing the the var vriable.

var a = 10;
console.log("In Var:", a);
a = 20;
console.log("In Var:", a);

//>In let we cannot redecared the variable but we can reassign them.

let b = 30;
console.log("In let:", b);
b = 40;
console.log("In let:", b);

//>In const we cannot redecared or reassign the variable.

const c = 50;
console.log("In Const:", c);

//> If we use var so we can acces the var value in side the funtion in any places ,
//> but in let and const we can access the value on nearest braces

function abcd() {
  if (true) {
    const yash = "Developer";
  console.log(yash);
    }
}

abcd();
