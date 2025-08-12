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

const inputTask = document.querySelector("#input-task");
const addTask = document.querySelector("#add-task");
const showTask = document.querySelector(".show-saved-task");

let displayAllTask = () => {
  let tasksInfo = JSON.parse(localStorage.getItem("tasks") || '["No Tasks"]');
    if (tasksInfo.length === 0) {
    showTask.innerHTML = "<p>No Tasks</p>";
    return;
  }
  let tasks = tasksInfo
    .map((task,index) => {
      return `
        <div class="task-card">
          <h3>${task.name}</h3>
          <p><strong>Date:</strong> ${task.date}</p>
          <p><strong>Day:</strong> ${task.day}</p>
        </div>
      `;
    })
    .join("");

  showTask.innerHTML = tasks;
};

window.addEventListener("DOMContentLoaded", () => {
  displayAllTask();
});

addTask.addEventListener("click", () => {
  let taskName = inputTask.value.trim();
  if (taskName === "") {
    alert("Please enter a task");
  }
  let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  let date=new Date();
  let taskInfo={
    name:taskName,
    date:date.toLocaleDateString,
    day:date.toLocaleString('en-US',{weekDay:'long'})
  }
  tasks.push(taskInfo);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  inputTask.value = "";
});
