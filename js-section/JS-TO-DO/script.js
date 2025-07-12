const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-bar");
const darkMode = document.querySelector("#theme-toggle-button");
const wrapper = document.querySelector(".wrapper");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

darkMode.addEventListener("click", () => {
  wrapper.classList.toggle("active");
   darkMode.textContent = wrapper.classList.contains("active") ? "Light Mode" : "Dark Mode";

});
