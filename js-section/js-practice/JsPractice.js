// "use strict"

console.log("Working");

let person = {
  firstName: "Yash",
  lastName: "Mishra",
  age: 22,
  regularFunction: function () {
    return `Regular: My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
  },
  see: function () {
    let = arrowFunction = () => {
      return `Arrow: My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
    };
    arrowFunction();
  },
  seeTwo: function () {
    let = arrowFunction = () => {
      return this;
    };
    arrowFunction();
  },
};

console.log(person.regularFunction());

console.log(person.see());
console.log(person.seeTwo());
