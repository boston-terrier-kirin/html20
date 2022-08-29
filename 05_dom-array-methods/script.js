const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByMoney);
showMillionairesBtn.addEventListener('click', filterMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);

async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });

  updateDom();
}

function sortByMoney() {
  data = data.sort((a, b) => {
    return b.money - a.money;
  });

  updateDom();
}

function filterMillionaires() {
  data = data.filter((user) => {
    return user.money > 1000000;
  });

  updateDom();
}

function calculateWealth() {
  const sum = data.reduce((acc, user) => {
    return (acc += user.money);
  }, 0);

  const elem = document.createElement('div');
  elem.innerHTML = `<h3>Total Wealth: ${formatMoney(sum)}</h3>`;

  main.appendChild(elem);
}

function addData(obj) {
  data.push(obj);

  updateDom();
}

function updateDom(providedData = data) {
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach((item) => {
    const elem = document.createElement('div');
    elem.classList.add('person');
    elem.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
    main.appendChild(elem);
  });
}

function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
