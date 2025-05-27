console.log("Js Practic is working");


let str = "zZabcdedcjbA";

let count = {};

for (let a = 0; a < str.length; a++) {
  let char = str[a].toLocaleLowerCase();

  if (count[char]) {
    count[char]++;
  } else {
    count[char] = 1;
  }
}

console.log(count);