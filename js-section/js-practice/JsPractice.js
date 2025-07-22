console.log("Working");

// let userInfoOne={
//   name:"Ram",
//   age:23,
//   info:function(){
//     console.log(`My name ${this.name} and my age is ${this.age}`);
//   }
// }

// console.log(userInfoOne);

// class UserInfo {
//   constructor(name,role){
//     this.name=name;
//     this.role=role;
//   }
//   showInfo(){
//     console.log(`User name is ${this.name} and User is a ${this.role}`);
//   }
// }

// const userOne=new UserInfo("Yash","Software Developer");
// console.log(userOne);
// userOne.showInfo();
// const userTwo=new UserInfo("Vani","Backend Developer");
// console.log(userTwo);
// userTwo.showInfo();
// const userThree=new UserInfo("Gaurav","Frontend Developer");
// console.log(userThree);
// userThree.showInfo();

// class BankAccount {
//   #balance = 100;

//   deposit(amount) {
//     if (amount <= 0) {
//       console.log("Amount must be greater than 0.");
//       return;
//     }

//     this.#balance += amount;
//     console.log(
//       `₹${amount} deposited successfully. Your current balance is ₹${this.#balance}.`
//     );
//   }

//   withdraw(amount) {
//     if (amount > this.#balance) {
//       console.log("Insufficient balance available.");
//       return;
//     }

//     this.#balance -= amount;
//     console.log(
//       `₹${amount} withdrawn successfully. Your current balance is ₹${this.#balance}.`
//     );
//   }

//   checkBalance() {
//     console.log(`Your current balance is ₹${this.#balance}.`);
//   }
// }

// const userOne = new BankAccount();
// userOne.checkBalance();
// userOne.deposit(1500);
// userOne.withdraw(500);
