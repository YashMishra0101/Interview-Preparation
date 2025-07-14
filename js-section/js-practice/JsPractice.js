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
    arrowFunction: () => {
      return `Arrow: My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
    };
    arrowFunction();
  },
};

console.log(person.regularFunction());

console.log(person.see());
