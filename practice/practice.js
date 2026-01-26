console.log("working");

// let a=5;
// let b="10";

// let c=b-a; //5 number
// let c=b*a;//50 number
// let c=b/a;//2 number
// let c=b+a//105 string

// console.log(c);
// console.log(typeof(c));

// let a = 9;
// let b = 9;
// let c = "5";
// let d = "3";
// let e = undefined;
// let f = null;
// let g = true;
// let h = false;

// console.log("a+b", a + b, typeof (a + b)); //18 , number
// console.log("c+d", c + d, typeof (c + d)); //53 , string
// console.log("a+c", a + c, typeof (a + c)); //95 , string
// console.log("e+a", e + a, typeof (e + a)); // NaN, number
// console.log("e+d", e + d, typeof (e + d)); //undefined3, string
// console.log("a+f", a + f, typeof (a + f)); //9, number
// console.log("d+f", d + f, typeof (d + f)); //3null , string
// console.log("d-f", d - f, typeof (d - f)); //3, number
// console.log("a+g", a + g, typeof (a + g)); //10,number
// console.log("a-g", a - g, typeof (a - g)); //8,number
// console.log("b-h", b - h, typeof (b - h)); //9,number
// console.log("b+h", b + h, typeof (b + h)); //9, number

// console.log("Sum of a + b = " + a + b, typeof ("Sum of a + b = " + a + b)); //Sum of a + b =99 , string
// console.log(
//   a + b + " is a sum of a + b",
//   typeof (a + b + " is a sum of a + b"),
// ); //18 is a sum of a + b , string

//  Implement callback function in JavaScript by passing one function into another , then print it's value?

// function a(parameter) {
//   console.log(parameter());
// }
// function b() {
//   return 3 + 2;
// }

// a(b);

// #3) Tells the output without running the code.
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

// First Function Start
// Second Function Start
// Third Function
// Second Function End
// First Function End

// // #4)Tells the output without running the code in the proper sequence.

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

// console.log("line number 6", varName);

// fn();

// line number 1, undefined
// line number 3, 10
// line number 6, 10
// line number 4, undefined
// line number 2, 10
// line number 5, 20

// #5)Tells the output without running the code in the proper sequence.

// var a = 10;
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

// console.log("line number 6", varName);

// fn();

// line number 1: 10
// line number 6: 10
// line number 2: undefined
// line number 3: 29
// line number 4: 31
// line number 5: 31

// #6) Tells The output

// let letFruit = "orange";
// var varFruit = "orange";
// console.log("letFruit", letFruit, "varFruit", varFruit);
// {
//   let letFruit = "apple";
//   varFruit = "apple";
//   console.log("letFruit", letFruit, "varFruit", varFruit);
// }
// console.log("letFruit", letFruit, "varFruit", varFruit);

//letFruit, orange, varFruit, orange
//letFruit, apple, varFruit, apple);
//letFruit, orange, varFruit, apple)

// let person = {
//   firstName: "Yash",
//   lastName: "Mishra",
//   age: 22,
//   fullName: function () {
//     let greeting = "Hello, my name is ";
//     return `${greeting} ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
//   },
// };

// console.log(person.fullName());

// Hello, my name is Yash Mishra. I am 22 years old

// let a=[1,2,3,4,5];

// for(let i of a){
//     console.log(i);
// }

// let b={
//     name:"Yash",
//     age:"24"
// }

// for(let a in b){
//     console.log(b[a]);
// }

// console.log(b[2]);

// let userInfo = {
//     name: "Yash",
//     age: 23
// }

// for (let b in userInfo) {
//     console.log(userInfo[b]); // ✅ now it will gives values
// }

// const user = { name: "Yashu" };

// function show() {
//   console.log(this.name);
// }

// show.call(user);

// // output:Yash

// const obj = { x: 50 };

// function print() {
//   console.log(this.x);
// }

// print();
// print.call(obj);

// // output:
// // undefined
// // 50

// let userInfo = {
//   name: "Yash",
//   age: "23",
// };

// function a(post) {
//   console.log(`${this.name},${this.age},${post}`);
// }

// a.call(userInfo,"Full Stack Developer")

// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(add.apply(null, [2, 4, 6]));

// const person = { age: 25 };

// function getAge() {
//   console.log(this.age);
// }

// const bound = getAge.bind(person);
// // bound();

// let userInfo = {
//   name: "Yash",
//   age: 23,
// };

// const person = { age: 25 };

// function getAge() {
//   console.log(this.age);
// }

// const bound = getAge.bind(person);
// bound.call({ age: 40 });

// const car1 = {
//   brand: "BMW",
//   getBrand() {
//     console.log(this.brand);
//   }
// };

// const car2 = { brand: "Audi" };

// car1.getBrand.call(car2);

// let person = {
//   firstName: "Yash",
//   lastName: "Mishra",
//   age: 22,
//   regularFunction: function () {
//     return `Regular: My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
//   },
//   arrowFunction: () => {
//     return `Arrow: My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
//   },
//   arrowFunctionTwo: () => {
//     return this;
//   },
// };

// console.log(person.regularFunction());

// console.log(person.arrowFunction());

// console.log(person.arrowFunctionTwo());
