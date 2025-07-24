console.log("Working");

const usersName={
   userOneName:"Yash",
   userTwoName:"Ram"
}


const usersAge={
  userOneName:"23",
  userTwoName:"24"
}

Object.setPrototypeOf(usersAge,usersName);//Set the prototype using Object.setPrototypeOf()
console.log(Object.getPrototypeOf(usersName));//we can get the prototype of object using Object.getPrototypeOf()

console.log(usersAge.userOneName);