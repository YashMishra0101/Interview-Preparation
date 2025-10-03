console.log("Javascript To Do");

const wrapper = document.querySelector(".wrapper");
const hamburgerBth = document.querySelector("#hamburger-btn");
const navLinks = document.querySelector(".nav-links");
const navLinkslia = document.querySelectorAll(".nav-links li a");
const navBar = document.querySelector(".nav-bar");
const themeToggleButton = document.querySelector("#theme-toggle-button");

const taskInputField = document.querySelector("#task-input-field");
const addTaskBtn = document.querySelector("#add-task-btn");
const displayTasks = document.querySelector("#display-tasks");
const searchFiled = document.querySelector("#search-box");

const taskImageInput = document.querySelector("#task-image-input");

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

let renderTask = (navOption = "All") => {
  let allTasks = JSON.parse(localStorage.getItem("allTasksInfo") || "[]");

  let filterTaskData = allTasks.filter((task) => {
    if (navOption === "All") return true;
    return task.status === navOption;
  });

  if (filterTaskData.length === 0) {
    displayTasks.innerHTML = `<div id="task-card"> <p class="task-text">No Tasks</p> </div>`;
    return;
  }

  let allTaskData = filterTaskData
    .map((task, index) => {
      return `<div class="task-card"> 
    <p class="task-text task-name">Task name : ${task.name}</p>
    <p class="task-text task-image"> <img src="${task.image}" alt="Task Image" width="100"></p>
    <p class="task-text">Date : ${task.date}</p>
    <p class="task-text-status">Status : ${task.status}</p>
    <button class="edit-task-name" data-index="${index}">Edit Task Name</button>
    <button class="Completed" data-index="${index}">Completed</button>
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
  const file = taskImageInput.files[0];

  if (taskName === "") {
    alert("Please enter the task");
    return;
  }
  if (!file) {
    alert("Please select an image first!");
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    const base64Image = e.target.result;
    let date = new Date();
    let taskObj = {
      name: taskName,
      image: base64Image,
      date: date.toDateString(),
      status: "Pending",
    };
    existingTasks.push(taskObj);
    localStorage.setItem("allTasksInfo", JSON.stringify(existingTasks));
    taskInputField.value = "";
    taskImageInput.value = "";
    renderTask();
  };
  reader.readAsDataURL(file);
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
    tasks.splice(index, 1);
    localStorage.setItem("allTasksInfo", JSON.stringify(tasks));
    alert("Delete the task");
    renderTask();
  }
});

displayTasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("Completed")) {
    let index = e.target.dataset.index;
    let tasksCompleted = JSON.parse(localStorage.getItem("allTasksInfo"));
    tasksCompleted[index].status = "Completed";
    localStorage.setItem("allTasksInfo", JSON.stringify(tasksCompleted));
    alert("Task Completed");
    renderTask();
  }
});

navLinks.addEventListener("click", (e) => {
  e.preventDefault();
  navLinkslia.forEach((link) => {
    link.classList.remove("active");
  });

  e.target.classList.add("active");

  if (e.target.textContent.includes("All")) {
    renderTask("All");
  }
  if (e.target.textContent.includes("Completed")) {
    renderTask("Completed");
  }
  if (e.target.textContent.includes("Pending")) {
    renderTask("Pending");
  }
});

searchFiled.addEventListener("input", () => {
  const searchData = searchFiled.value.toLowerCase().trim();

  const taskCards = document.querySelectorAll(".task-card");

  taskCards.forEach((card) => {
    const taskName = card.querySelector(".task-name").textContent.toLowerCase();

    if (taskName.includes(searchData)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});
