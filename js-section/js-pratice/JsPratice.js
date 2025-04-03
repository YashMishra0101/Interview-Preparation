console.log("Working");

let patternThritheen = (n) => {
  let store = "";
  let i=1
  for (let a = 1; a <= n; a++) {
    for (let b = i; b < a*2; b++) {
      store += b + " ";
    }
    store += "\n";
  }
  return store;
};

console.log(patternThritheen(5));
