const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-task');

loadEventListeners();

function loadEventListeners() {
  // POINT：DOMContentLoaded
  document.addEventListener('DOMContentLoaded', getTasks);

  form.addEventListener('submit', addTask);

  // POINT：liではなく、ulにイベントを仕込む
  taskList.addEventListener('click', removeTask);

  clearBtn.addEventListener('click', clearTasks);

  filter.addEventListener('keyup', filterTasks);
}

function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task) => {
    const li = createTask(task);
    taskList.appendChild(li);
  });
}

function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
    return;
  }

  e.preventDefault();

  const li = createTask(taskInput.value);
  taskList.appendChild(li);

  storeTaskInLocalStorage(taskInput.value);

  taskInput.value = '';
}

function createTask(value) {
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(value));

  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = "<i class='fas fa-trash'></i>";
  li.appendChild(link);

  return li;
}

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
  // ゴミ箱をクリックすると、i が取れる。
  // console.log(e.target);

  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  const newTasks = tasks.filter((task) => task !== taskItem.textContent);

  localStorage.setItem('tasks', JSON.stringify(newTasks));
}

function clearTasks() {
  // https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements
  // taskList.innerHTML = '';

  // POINT：removeChildの方が速いらしい。
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  localStorage.removeItem('tasks');
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  console.log(text);

  document.querySelectorAll('.collection-item').forEach((task) => {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
