console.log("Working");

// let employeeOne = {
//   name: "Yash",
//   role: "Full Stack",
// };

// let employeeTwo = {
//   name: "Ram",
//   role: "Cyber security - Red Team",
// };

// let employeeThree = {
//   name: "Sam",
//   role: "Cyber security - Green Team",
// };

// let developerInfo=function(age,salary){
// return `${this.name} , ${this.role} , ${age} age , ${salary} salary`
// }

// console.log(developerInfo.call(employeeOne,"23","80k"));
// console.log(developerInfo.apply(employeeTwo,["24","85k"]));
// let info=developerInfo.bind(employeeThree,"25","85k");

// console.log(info());


// let main=(a)=>{
//  function inner (b){
//   return a+b;
//  }
//  return inner;
// }

// let info=main(5);
// console.log(info(10));

let incre=document.getElementById('increment');
let decre=document.getElementById("decrement")
let num=document.getElementById("number");


function pluss(){
    num.innerText++;
}

function minus(){
    num.innerText--;
}

incre.addEventListener("click",pluss)


decre.addEventListener("click", minus)