// Define UI Vars
const taskForm = document.querySelector('#task-form'),
      taskField = document.querySelector('#task'),
      tasksList = document.querySelector('.task-list__wrap'),
      tasksFilter = document.querySelector('#filter'),
      tasksClearBtn = document.querySelector('.btn__clear-tasks');

// Load all event listeners
loadAllEventListeners();

// Load all event listeners function
function loadAllEventListeners() {
  //Load tasks from Local Storage
  document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
  // Add task to the tasks list
  taskForm.addEventListener('submit', addTask);
  // Remove task from the task list
  tasksList.addEventListener('click', removeTask);
  // Clear tasks
  tasksClearBtn.addEventListener('click', clearTasks);
  // Filter tasks
  tasksFilter.addEventListener('keyup', filterTasks)

};

// Load tasks from Local Storage function
function loadFromLocalStorage() {
  let tasks;
  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach(function(task) {
        // Create li element
      const li = document.createElement('li');
      li.className = 'collection-item';

      // Add text to li
      li.appendChild(document.createTextNode(task));

      // Create delete btn
      const deleteBtn = document.createElement('a');
      deleteBtn.className = 'btn__delete secondary-content';

      //Add icon to delete btn
      deleteBtn.innerHTML = '<i class="fa fa-remove"></i>';

      //Append delete btn to li
      li.appendChild(deleteBtn);

      //Append li to tasks list
      tasksList.appendChild(li);
    });
  };
};

// Add task to the tasks list function
function addTask(e) {
  // Check task field for its value
  if (taskField.value === '') {
    alert('Add a task');
  } else {

    // Create li element
    const li = document.createElement('li');
    li.className = 'collection-item';

    // Add text to li
    li.appendChild(document.createTextNode(taskField.value));

    // Create delete btn
    const deleteBtn = document.createElement('a');
    deleteBtn.className = 'btn__delete secondary-content';

    //Add icon to delete btn
    deleteBtn.innerHTML = '<i class="fa fa-remove"></i>';

    //Append delete btn to li
    li.appendChild(deleteBtn);

    //Append li to tasks list
    tasksList.appendChild(li);

    // Add task to Local Storage
    addTaskToLocalStorage(taskField.value);

    // Clear task field
    taskField.value = '';
  }

  e.preventDefault();
};

// Add task to Local Storage function
function addTaskToLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } 
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Remove task from tasks list function
function removeTask(e) {
  if (e.target.parentNode.classList.contains('btn__delete')) {
    e.target.parentNode.parentNode.remove();
  }

  // Remove from Local Storage
  removeTaskFromLocalStorage(e.target.parentNode.parentNode);
};

// Remove from Local Storage function
function removeTaskFromLocalStorage(item) {
  let tasks;
  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(function(task, i) {
      if (task === item.textContent) {
        tasks.splice(i,1);
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

// Clear tasks function
function clearTasks() {
  while (tasksList.firstChild) {
    tasksList.firstChild.remove();
  }
  localStorage.clear();
};

// Filter tasks function
function filterTasks(e) {
  const text = e.target.value.toLowerCase(),
        tasks = document.querySelectorAll('.collection-item');
  tasks.forEach(function(task) {
    if (task.textContent.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
};