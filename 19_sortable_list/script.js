const draggaleList = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page',
];

const listItems = [];

let dragStartIndex;

createList();

function createList() {
  [...richestPeople]
    .map((person) => {
      return {
        name: person,
        sort: Math.random(),
      };
    })
    .sort((a, b) => {
      return a.sort - b.sort;
    })
    .forEach((person, index) => {
      const listItem = document.createElement('li');
      listItem.setAttribute('data-index', index);
      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
            <p class="person-name">${person.name}</p>
            <i class="fas fa-grip-lines"></i>
        </div>
    `;

      listItems.push(listItem);
      draggaleList.appendChild(listItem);
    });

  addEventListeners();
}

function dragStart() {
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const drapEndIndex = +this.getAttribute('data-index');

  swapItems(dragStartIndex, drapEndIndex);
  this.classList.remove('over');
}

function dragEnter() {
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');

  // TODO：appendChildすると、二重になってしまいそうだが、なぜか問題なし。
  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

function checkOrder() {
  listItems.forEach((item, index) => {
    const personName = item.querySelector('.person-name').innerText.trim();

    if (personName !== richestPeople[index]) {
      item.classList.add('wrong');
    } else {
      item.classList.remove('wrong');
      item.classList.add('right');
    }
  });
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
}

check.addEventListener('click', checkOrder);
