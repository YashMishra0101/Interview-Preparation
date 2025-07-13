console.log("Working");

let normalFunction = (a) => {
  return function (b) {
    return function (c) {
      return function (d) {
        return a+b+c+d;
      };
    };
  };
};

console.log(normalFunction(1)(2));
