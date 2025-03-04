let dataOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am a Dataone");
    }, 2000);
  });
};

let dataTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am a Datatwo");
    }, 1000);
  });
};

let dataThree = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error hai Three me");
      // resolve("I am a dataThree");
    }, 1000);
  });
};

let dataFour = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am a dataFour");
    }, 1000);
  });
};

let start = () => {
  dataOne()
    .then((result) => {
      console.log(result);
      return dataTwo();
    })
    .then((result) => {
      console.log(result);
      return dataThree();
    })
    .then((result) => {
      console.log(result);
      return dataFour();
    })

    .catch((error) => {
      console.log("Error : ", error);
    })
    .finally(() => {
      console.log("Program End");
    });
};

start();
