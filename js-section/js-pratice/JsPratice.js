let patternSeven = (value) => {
  let store = "";
  let space = "";
  let star="";
  for (let a = 1; a <= value; a++) {
    for (let b = 1; b <= value - a; b++) {
      space+=" ";
    }
    for(let c=1; c<=2*a-1;c++){
      star+="*";
    }
    store+=space+star+"\n"
  }
  return store;
};

console.log(patternSeven(5));
