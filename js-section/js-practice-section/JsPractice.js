console.log("Working");
// 'use strict'
console.log("Start");

let loopDuration = async (para) => {
  for (let a = 1; a <= para; a++) {
    await new Promise((res, rej) => {
      setTimeout(() => {
        res();
        console.log(`Loop Duration is ${a}`);
      }, 1000);
    });
  }
};

loopDuration(6).then(() => {
  console.log("End");
});
