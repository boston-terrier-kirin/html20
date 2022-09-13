const group1 = document.querySelector('#group-1');
const group2 = document.querySelector('#group-2');
const moveToRight = document.querySelector('#move-to-right');
const moveToLeft = document.querySelector('#move-to-left');

updateChildrenCount();

group1.addEventListener('click', (e) => {
  const elem = e.target;
  elem.classList.toggle('selected');
});

group2.addEventListener('click', (e) => {
  const elem = e.target;
  elem.classList.toggle('selected');
});

moveToRight.addEventListener('click', () => {
  moveChildren(group1, group2);
});

moveToLeft.addEventListener('click', () => {
  moveChildren(group2, group1);
});

function moveChildren(from, to) {
  let moveCount = 0;
  const childrenToRemove = [];
  for (const child of from.children) {
    if (child.classList.contains('selected')) {
      const newChild = child.cloneNode(true);
      newChild.classList.remove('selected');
      newChild.classList.add('added');
      to.appendChild(newChild);

      childrenToRemove.push(child);
      moveCount++;
    }
  }

  if (moveCount === 0) {
    return;
  }

  childrenToRemove.forEach((child) => child.remove());
  updateChildrenCount();

  setTimeout(() => {
    for (const child of to.children) {
      child.classList.remove('added');
    }
  }, 1000);
}

function updateChildrenCount() {
  const group1Count = document.querySelector('#group-1-count');
  const group2Count = document.querySelector('#group-2-count');

  group1Count.textContent = group1.children.length;
  group2Count.textContent = group2.children.length;

  group1Count.classList.add('bump');
  group2Count.classList.add('bump');

  setTimeout(() => {
    group1Count.classList.remove('bump');
    group2Count.classList.remove('bump');
  }, 300);
}
