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
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-flat btn__delete secondary-content';

    //Add icon to delete btn
    deleteBtn.innerHTML = '<i class="fa fa-remove"></i>';

    //Append delete btn to li
    li.appendChild(deleteBtn);

    //Append li to tasks list
    tasksList.appendChild(li);

    // Clear task field
    taskField.value = '';
  }

  e.preventDefault();
}