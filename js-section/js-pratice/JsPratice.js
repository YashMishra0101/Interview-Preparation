console.log("Js Practic is working");

let partternTwentyThree = (n) => {
  let size = 2 * n - 1;
  let store ="";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let minimumNumber = Math.min(i, j, size - i - 1, size - j - 1);
      print = n - minimumNumber;
      store += print + " ";
    }
    store+="\n";
  }
  return store.trim();
};

console.log(partternTwentyThree(4));
