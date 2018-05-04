// Define UI Vars
const taskForm = document.querySelector('#task-form'),      taskField = document.querySelector('#task'),
      tasksList = document.querySelector('.task-list__wrap'),
      tasksFilter = document.querySelector('#filter'),
      tasksClearBtn = document.querySelector('.btn__clear-tasks');

// Load all event listeners
loadAllEventListeners();

// Load all event listeners function
function loadAllEventListeners() {
  // Add task to the tasks list
  taskForm.addEventListener('submit', addTask);


};

// Add task to the tasks list function
function addTask(e) {
  e.preventDefault();
  // Check task field for its value
  if (taskField.value === '') {
    alert('Type a task');
  };

  // Create li element
  const li = document.createElement('li');
  li.className = 'collection-item';

  console.log(li);
}