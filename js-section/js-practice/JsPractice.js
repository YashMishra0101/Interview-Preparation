console.log("Working");

let apidata = async () => {
  try {
    let response = await fetch("https://fakestoreapi.com/products/1");
    let data = await response.json();
    console.log(data.price);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Api calling end");
  }
};

apidata();

fetch("https://fakestoreapi.com/products/1")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
