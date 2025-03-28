let patternSeven = (value) => {
  let store = "";
  let space="";
  for (let a = 1; a <= value; a += 2) {
    for(let a=1; a<value-1;a++){
         space+="";
         for (let b = 1; b <= a; b++) {
          store += " *";
        }
        store += "\n";
    }
    
    store += "\n";
  }
  return store;
};

console.log(patternSeven(9));
