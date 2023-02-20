// Select DOM elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Define tasks array
let tasks = [];

// Function to render tasks to the DOM
function renderTasks() {
  // Clear task list
  taskList.innerHTML = "";
  
  // Loop through tasks and create li elements for each
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// Function to add task to the tasks array
function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    taskInput.value = "";
    renderTasks();
  }
}

// Function to delete task from the tasks array
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Add event listener to the add task button
addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});

// Add event listener to the task input for the "Enter" key
taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});

// Render initial tasks on page load
renderTasks();
