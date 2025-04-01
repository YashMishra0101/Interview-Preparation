console.log("Working");

let printSeven = (value) => {
  let store = "";

  for (let a = 1; a <= value; a++) {
    let space = "";
    let stars = "";

    // Adding spaces before stars
    for (let b = 1; b <= value - a; b++) {
      space += " ";
    }

    // Adding stars
    for (let c = 0; c < 2 * a - 1; c++) {
      stars += "*";
    }

    // Concatenating spaces and stars, then adding a new line
    store += space + stars + "\n";
  }

  return store;
};

console.log(printSeven(5));
