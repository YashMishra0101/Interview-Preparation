console.log("Javascript To Do");

const hamburgerBth = document.querySelector("#hamburger-btn");
const navBar = document.querySelector(".nav-bar");
const themeToggleButton = document.querySelector("#theme-toggle-button");
const wrapper=document.querySelector(".wrapper")

hamburgerBth.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

themeToggleButton.addEventListener("click", () => {
  wrapper.classList.toggle("active");
  if(wrapper.classList.contains("active")){
    themeToggleButton.innerText="Light Mode"
  }
  else{
        themeToggleButton.innerText="Dark Mode"
  }
});
