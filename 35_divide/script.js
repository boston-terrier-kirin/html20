const save = document.querySelector('#save');
const group1 = document.querySelector('#group-1');
const group2 = document.querySelector('#group-2');
const moveToRight = document.querySelector('#move-to-right');
const moveToLeft = document.querySelector('#move-to-left');

updateChildrenCount();

save.addEventListener('click', () => {
  // 毎回消しているつもりでも、2回目以降のanimationが効かない
  // https://stackoverflow.com/questions/36187393/css-animation-wont-apply-for-the-second-time
  clearAlert();

  for (const child of group1.children) {
    console.log(child.textContent.trim());
  }
  console.log('----------');
  for (const child of group2.children) {
    console.log(child.textContent.trim());
  }

  // 【解決】
  // 毎回消しているつもりでも、2回目以降のanimationが効かない
  // clearAlert でやっているdomのクリアが非同期っぽく、setTimeoutで後回しになれば、domのクリアを待ってから処理できる。
  // 結果としてanimationが効く。
  setTimeout(() => {
    if (group1.children.length === 0) {
      showAlert('Group#1が0件になっています。');
      return;
    }

    if (group2.children.length === 0) {
      showAlert('Group#2が0件になっています。');
      return;
    }

    showSuccess('保存しました。');
  }, 0);
});

group1.addEventListener('click', (e) => {
  const elem = e.target;
  elem.classList.toggle('selected');
  elem.querySelector('i').classList.toggle('invisible');
});

group2.addEventListener('click', (e) => {
  const elem = e.target;
  elem.classList.toggle('selected');
  elem.querySelector('i').classList.toggle('invisible');
});

moveToRight.addEventListener('click', () => {
  moveChildren(group1, group2, 'move-to-right');
});

moveToLeft.addEventListener('click', () => {
  moveChildren(group2, group1, 'move-to-left');
});

function moveChildren(from, to, className) {
  const selectedChildren = Array.from(from.children).filter((child) =>
    child.classList.contains('selected')
  );

  if (selectedChildren.length === 0) {
    return;
  }

  selectedChildren.forEach((child) => {
    const newChild = child.cloneNode(true);
    newChild.classList.remove('selected');
    newChild.querySelector('i').classList.add('invisible');
    newChild.classList.add(className);
    to.appendChild(newChild);
  });

  selectedChildren.forEach((child) => child.remove());
  updateChildrenCount();

  // 念のためcssを消す
  setTimeout(() => {
    for (const child of to.children) {
      child.classList.remove(className);
    }
  }, 750);
}

function updateChildrenCount() {
  const group1Count = document.querySelector('#group-1-count');
  const group2Count = document.querySelector('#group-2-count');

  group1Count.textContent = group1.children.length;
  group2Count.textContent = group2.children.length;

  group1Count.classList.add('bump');
  group2Count.classList.add('bump');

  // 削除しないと2回目以降にbumpしなくなる
  setTimeout(() => {
    group1Count.classList.remove('bump');
    group2Count.classList.remove('bump');
  }, 300);
}

function showSuccess(message) {
  const success = document.createElement('div');
  success.className = 'alert alert-success';
  success.textContent = message;

  const successContainer = document.querySelector('#success-container');
  successContainer.className = 'show';
  successContainer.appendChild(success);

  setTimeout(() => {
    success.remove();

    // ここでクリアしないと2回目以降、効かなくなる。
    successContainer.className = '';
  }, 5000);
}

function clearAlert() {
  // 2回目以降のanimationが効かない
  // https://stackoverflow.com/questions/36187393/css-animation-wont-apply-for-the-second-time

  const alert = document.querySelector('.alert.alert-danger');
  if (alert) {
    alert.remove();
  }

  const alertContainer = document.querySelector('#alert-container');
  alertContainer.className = '';
}

function showAlert(message) {
  const alert = document.createElement('div');
  alert.className = 'alert alert-danger';
  alert.textContent = message;

  const alertContainer = document.querySelector('#alert-container');
  alertContainer.className = 'show';
  alertContainer.appendChild(alert);
}
