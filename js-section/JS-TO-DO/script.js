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

const taskInputField = document.querySelector("#task-input-field");
const addTaskBtn = document.querySelector("#add-task-btn");
const displayTasks = document.querySelector("#display-tasks");

let renderTask = () => {
  let allTasks = JSON.parse(localStorage.getItem("allTasksInfo") || "[]");
  if (allTasks.length === 0) {
    displayTasks.innerHTML = `<div id="task-card"> <p class="task-text">No Tasks</p> </div>`;
    return;
  }
  let allTaskData = allTasks
    .map((task, index) => {
      return `<div id="task-card"> 
    <p class="task-text">Task name : ${task.name}</p>
    <p class="task-text">Date : ${task.date}</p>
    <button class="edit-task-name" data-index="${index}">Edit Task Name</button>
    <button class="completed" data-index="${index}">Completed</button>
    <button class="delete" data-index="${index}">Delete</button>
    </div>`;
    })
    .join("");
  displayTasks.innerHTML = allTaskData;
};

document.addEventListener("DOMContentLoaded", () => {
  renderTask();
});

addTaskBtn.addEventListener("click", () => {
  let existingTasks = JSON.parse(localStorage.getItem("allTasksInfo") || "[]");
  let taskName = taskInputField.value.trim();
  if (taskName === "") {
    alert("Please enter the task");
    return;
  }
  let date = new Date();
  let taskObj = {
    name: taskName,
    date: date.toDateString(),
  };
  existingTasks.push(taskObj);
  localStorage.setItem("allTasksInfo", JSON.stringify(existingTasks));
  taskInputField.value = "";
  renderTask();
});

displayTasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-task-name")) {
    let index = e.target.dataset.index;
    let taskName = JSON.parse(localStorage.getItem("allTasksInfo"));
    let editName = prompt(taskName[index].name);
    if (editName.trim() !== "") {
      taskName[index].name = editName.trim();
      localStorage.setItem("allTasksInfo", JSON.stringify(taskName));
      renderTask();
    } else {
      alert("Failed");
    }
  }
});

displayTasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let index = e.target.dataset.index;
    let tasks = JSON.parse(localStorage.getItem("allTasksInfo"));
    tasks.splice(index,1)
    localStorage.setItem("allTasksInfo", JSON.stringify(tasks));
    alert("Delete the task");
    renderTask();
  }
});
