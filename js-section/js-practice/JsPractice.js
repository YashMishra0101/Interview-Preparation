// "use strict"

console.log("Working");

let person = {
  firstName: "Yash",
  lastName: "Mishra",
  seeOne: function () {
    return `My name is ${this.firstName} ${this.lastName}.`;
  },
  seeTwo: function () {
    return this;
  },
  seeThree: function () {
    let = arrowFunction = () => {
      return `My name is ${this.firstName} ${this.lastName}.`;
    };
    arrowFunction();
  },
  seeFour: function () {
    let = arrowFunction = () => {
      return `My name is ${this.firstName} ${this.lastName}.`;
    };
    return arrowFunction();
  },
  seeFive: function () {
    let arrowFunction = () => {
      return this;
    };
    return arrowFunction();
  },
};

console.log(person.seeOne());
console.log(person.seeTwo());
console.log(person.seeThree());
console.log(person.seeFour());
console.log(person.seeFive());
