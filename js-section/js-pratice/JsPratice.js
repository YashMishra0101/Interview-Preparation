console.log("JS Practice Room");

// 1)
// let reverseString=(str)=>{
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("Yash"));

// 2) Palindrome

let isPalindrome=(naam)=>{
   let check=naam.split('').reverse().join('');
   return check===naam;
}

console.log(isPalindrome("madam"));