console.log("Working");

let fiboNumber = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let print = fiboNumber(n - 1);
  print.push(print[print.length - 2] + print[print.length - 1]);
  return print;
};

console.log(fiboNumber(10));