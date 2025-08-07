console.log("Javascript To Do");

const hamburgerBth = document.querySelector("#hamburger-btn");
const navBar = document.querySelector(".nav-bar");
const themeToggleButton = document.querySelector("#theme-toggle-button");
const wrapper = document.querySelector(".wrapper");

hamburgerBth.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

themeToggleButton.addEventListener("click", () => {
  wrapper.classList.toggle("active");
  if (wrapper.classList.contains("active")) {
    themeToggleButton.innerText = "Light Mode";
  } else {
    themeToggleButton.innerText = "Dark Mode";
  }
});

const taskInput = document.getElementById("task-name");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

// Load tasks from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => renderTask(task));
});

// Add new task
addTaskButton.addEventListener("click", () => {
  const taskName = taskInput.value.trim();
  if (taskName === "") return;

  const task = {
    id: Date.now(),
    name: taskName,
    completed: false,
  };

  // Save to localStorage
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTask(task);
  taskInput.value = "";
});

// Render task in UI
function renderTask(task) {
  const taskItem = document.createElement("div");
  taskItem.className = "task-item";
  taskItem.textContent = task.name;
  taskList.appendChild(taskItem);
}
