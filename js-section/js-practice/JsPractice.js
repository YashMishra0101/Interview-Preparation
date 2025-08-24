console.log("Working");
//1)
// Task: Destructure the array to get first, second, and third colors
// If third color doesn't exist, default it to 'blue'
// Expected output: first = 'red', second = 'green', third = 'blue'

//2)
// const colors = ['red', 'green',"white"];

// const [firstColor,secondColor,thirdColor="yellow"]=colors;

// console.log(firstColor); //red
// console.log(secondColor); //green
// console.log(thirdColor); //white (because the array has a third color, if third color not present then it will give yellow color)

//3)
// Task: Write a function that takes a user object and returns a formatted string
// The function should destructure name, age, and email (with default 'N/A') from parameters
// Expected: formatUser({name: 'Alice', age: 25}) should return "Alice (25) - N/A"


function userInfo({name,age,email="N/A"}){
return `User name is ${name} , Age is ${age} and email is ${email}`
}

console.log(userInfo({name:"Alice",age:"25"}));