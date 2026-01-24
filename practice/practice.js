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

