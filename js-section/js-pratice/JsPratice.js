console.log("JS Pratice Room Is Working");
let incrementButton = document.querySelector(".incrementButton");
let incrementNumber = document.querySelector(".incrementNumber");

incrementButton.addEventListener("click", () => {
  let convertInt = parseInt(incrementNumber.textContent);
  convertInt++;
  incrementNumber.textContent = convertInt;
});

//#constructure

//>Functional Based

function UserData(userName, userAge, userLocation) {
  this.userName = userName;
  this.userAge = userAge;
  this.userLocation = userLocation;

  this.userInfo = function () {
    console.log(
      `Functional Based : User name is ${this.userName} he is ${this.userAge} and he belong from ${this.userLocation}`
    );
  };
}

let data = new UserData("Yash", 22, "India");
data.userInfo();

//>Class Based

// class UserData {
//   constructor(userName, userAge, userLocation) {
//     this.userName = userName;
//     this.userAge = userAge;
//     this.userLocation = userLocation;
//   }

//   userInfo() {
//     console.log(
//       `Classed Based : User name is ${this.userName} he is ${this.userAge} and he belong from ${this.userLocation}`
//     );
//   }
// }
// let data = new UserData("Yash", 22, "India");
// data.userInfo();

let userData = (name, age, location) => {
  console.log(name, age, location);
};

userData("Yash", 22);

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
