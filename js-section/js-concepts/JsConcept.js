/*

#1)Three way to declared variable in javascript (Var,let,Const)

>In var we can redecared and reassing the the var variable and var is function scope.

var a = 10;
console.log("In Var:", a);
var a = 20;
console.log("In Var:", a);

>In let we cannot redecared the variable but we can reassign them and let is block scoped.

let b = 30;
    b = 32;
console.log("In let:", b);

let b = 40; (not valid)
console.log("In let:", b);

>>>In const we cannot redecared or reassign the variable and const is also a block scoped.

const c = 50;
console.log("In Const:", c);

>>Extra Info

🤚👉-When we use var and let, we can assign a variable's value After Declaration, but during
const, it is necessary to define the value during declaration.(🔥V.Imp)

- var is function scope and let and const are block scoped

-Using let and const is generally better because they avoid problems caused by var's function scope 
and hoisting and let and const are block scope.


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

?? Identifiers: Names given to variables, functions, properties, etc, to uniquely identify them.

#2)How to decalare function in Javascript

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

>If there is a single Parameter

const arrowTwo=(value)=>console.log(value);

arrowTwo("I a Value");

> Reference Assignment (The reference of one variable is given to another variable).

let a = [1, 2, 3, 5];

let b = a;

console.log(b);

>Function Expression (Store function into a variable called Function Expression)

  const fExpress = function ex() {
    console.log("I am a Function Expression");
  };

fExpress();
    */
