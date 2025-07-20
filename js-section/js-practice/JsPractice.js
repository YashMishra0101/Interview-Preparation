console.log("Working");

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   })
//   .finally(() => {
//     console.log("Code End");
//   });

let info = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data);
  } catch {
    console.log(error);
  } finally {
    console.log("Code End");
  }
};
info();
