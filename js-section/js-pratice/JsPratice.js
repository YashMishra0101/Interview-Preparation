let print = (value) => {
  let store = "";
  for (let a = 1; a <= value; a++) {
    for (let b = 1; b <= a; b++) {
      store += " * ";
    }
    store += "\n";
  }
  return store;
};

console.log(print(5));
