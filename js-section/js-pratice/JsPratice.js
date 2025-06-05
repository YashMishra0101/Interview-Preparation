console.log("Js Practic is working");

// let checkAge=prompt("Please enter your age");

// if(checkAge>=18){
//     console.log("Your are Eligible")
// }else{
//     console.log("Sorry you are not eligible")
// }

// console.log(typeof(null))
// console.log(typeof(Object))
// console.log(typeof(Array))

// let abc=[1,2,3]
// console.log(typeof(abc))

// let userName={
//     naam:"Yash"
// }

// console.log(userName.naam);

// console.log(typeof(userName));

//Create a for loop that calculate the factorial of 5

// let factorial = 1;
// for (let a = 5; a > 0; a--) {
//   factorial *= a;
// }
// console.log(factorial);

// let gridPattern=(value)=>{
//    let pattern="";
//    let count=1;
//    for(let a=1; a<=value; a++){
//     for(let b=1; b<=value; b++){
//         pattern+=count+" ";
//         count++;
//     }
//     pattern+="\n";
//    }
//    return pattern;
// }

// console.log(gridPattern(3));

let arr=[1,2,3,4,78,9,2,3];

// let rev=arr.reverse();
// console.log(rev);

// let revArr=[];
// for(let a=arr.length-1; a>=0; a--){
//   revArr.push(arr[a])
// }
// console.log(revArr);
// let naam={
//     name:"yash",
//     age:23,
//     role:"full stack"

// }

// for(let key in naam){
//     console.log(key);
// }

// arr.pop()
// arr.push(0,9)
// console.log(arr);

for(let a of arr){
    console.log(a);
}