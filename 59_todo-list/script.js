const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todos = document.querySelector('#todos');

document.addEventListener('DOMContentLoaded', () => {
  console.log('hos');
  const todosStorage = getTodosFromStorage();
  todosStorage.forEach((todo) => addTodos(todo));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTodos();
});

function addTodos(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const li = document.createElement('li');

    if (todo && todo.completed) {
      li.classList.add('completed');
    }

    li.innerText = todoText;
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
      updateStorage();
    });

    li.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      li.remove();
      updateStorage();
    });

    todos.appendChild(li);
    updateStorage();

    input.value = '';
  }
}

function getTodosFromStorage() {
  const todosStorage = localStorage.getItem('todos') || [];
  return todosStorage.length === 0 ? todosStorage : JSON.parse(todosStorage);
}

function updateStorage() {
  const todosElem = document.querySelectorAll('li');
  const todosStorage = [];

  todosElem.forEach((todoElem) => {
    todosStorage.push({
      text: todoElem.innerText,
      completed: todoElem.classList.contains('completed'),
    });
  });

  localStorage.setItem('todos', JSON.stringify(todosStorage));
}
