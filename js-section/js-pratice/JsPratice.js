console.log("Working");


let patternSevenTeen = (n) => {
    let store = "";
    for (let a = 1; a <= n; a++) {
      let alphabet = 65;
      for (let space = 1; space <= n - a; space++) {
        store += " ";
      }
      for (let b = 1; b <= 2 * a - 1; b++) {
        if (b > a) {
          store += String.fromCharCode(alphabet-2);
        } else {
          store += String.fromCharCode(alphabet);
          alphabet++;
        }
      }
      store += "\n";
    }
    return store;
  };
  
  console.log(patternSevenTeen(5));
