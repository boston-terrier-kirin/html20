const StorageCtrl = (function () {
  const getItemsFromStorage = function () {
    const items = localStorage.getItem('items');
    return items ? JSON.parse(items) : [];
  };

  return {
    storeItem: function (item) {
      const items = getItemsFromStorage();
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));
    },
    getItems: function () {
      return getItemsFromStorage();
    },
    updateItem: function (itemToUpdate) {
      const items = getItemsFromStorage();
      const updatedItems = items.map((item) => {
        if (item.id === itemToUpdate.id) {
          return itemToUpdate;
        }
        return item;
      });

      localStorage.setItem('items', JSON.stringify(updatedItems));
    },
    deleteItem: function (idToDelete) {
      const items = getItemsFromStorage();
      const updatedItems = items.filter((item) => item.id !== idToDelete);

      localStorage.setItem('items', JSON.stringify(updatedItems));
    },
    clearAll: function () {
      localStorage.removeItem('items');
    },
  };
})();

const ItemCtrl = (function () {
  class Item {
    constructor(id, name, calories) {
      this.id = id;
      this.name = name;
      this.calories = calories;
    }
  }

  const data = {
    items: StorageCtrl.getItems(),
    currentItem: null,
    totalCalories: 0,
  };

  return {
    getItems: function () {
      return data.items;
    },
    addItem: function (name, calories) {
      let id = 0;
      if (data.items.length > 0) {
        id = data.items[data.items.length - 1].id + 1;
      }

      const newItem = new Item(id, name, parseInt(calories));
      data.items.push(newItem);

      return newItem;
    },
    getItemById: function (id) {
      return data.items.find((d) => d.id === id);
    },
    updatedItem: function (name, calories) {
      const item = data.items.find((d) => d.id === data.currentItem.id);
      item.name = name;
      item.calories = parseInt(calories);

      return item;
    },
    deleteItem: function (id) {
      data.items = data.items.filter((d) => d.id !== id);
    },
    clearAllItems: function () {
      data.items = [];
    },
    getTotalCalories: function () {
      data.totalCalories = data.items.reduce((acc, value) => {
        return acc + value.calories;
      }, 0);

      return data.totalCalories;
    },
    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    getCurrentItem: function () {
      return data.currentItem;
    },
    logData: function () {
      return data;
    },
  };
})();

const UICtrl = (function () {
  const UISelectors = {
    clearBtn: '.clear-btn',
    itemName: '#item-name',
    itemCalories: '#item-calories',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemList: '#item-list',
    listItems: '#item-list li',
    totalCalories: '.total-calories',
  };

  return {
    getSelectors: function () {
      return UISelectors;
    },
    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    populateItemList: function (items) {
      const listItems = items
        .map(
          (item) => `
            <li class="collection-item" id="item-${item.id}">
                <strong>${item.name}</strong>: <em>${item.calories}</em> Calories
                <a href="#" class="secondary-content">
                    <i class="edit-item bi bi-pencil-fill"></i>
                </a>
            </li>
            `
        )
        .join('');

      document.querySelector(UISelectors.itemList).innerHTML = listItems;
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemName).value,
        calories: document.querySelector(UISelectors.itemCalories).value,
      };
    },
    addListItem: function (item) {
      document.querySelector(UISelectors.itemList).style.display = 'block';

      const li = document.createElement('li');
      li.className = 'collection-item';
      li.id = `item-${item.id}`;
      li.innerHTML = `
        <strong>${item.name}</strong> : <em>${item.calories}</em> Calories
        <a href="#" class="secondary-content">
            <i class="edit-item bi bi-pencil-fill"></i>
        </a>
      `;

      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement('beforeend', li);
    },
    updateListItem: function (item) {
      const listItems = Array.from(
        document.querySelectorAll(UISelectors.listItems)
      );

      listItems.forEach((listItem) => {
        const id = listItem.getAttribute('id');

        if (id === `item-${item.id}`) {
          listItem.querySelector('strong').innerText = item.name;
          listItem.querySelector('em').innerText = item.calories;
        }
      });
    },
    deleteListItem: function (id) {
      const itemId = `#item-${id}`;
      document.querySelector(itemId).remove();
    },
    showTotalCalories: function (total) {
      document.querySelector(UISelectors.totalCalories).innerText = total;
    },
    addItemToForm: function () {
      document.querySelector(UISelectors.itemName).value =
        ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCalories).value =
        ItemCtrl.getCurrentItem().calories;

      UICtrl.showEditState();
    },
    clearItems: function () {
      document.querySelector(UISelectors.itemList).innerHTML = '';
    },
    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    clearEditState: function () {
      UICtrl.clearInput();

      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    clearInput: function () {
      document.querySelector(UISelectors.itemName).value = '';
      document.querySelector(UISelectors.itemCalories).value = '';
    },
  };
})();

const App = (function (itemCtrl, storageCtrl, uiCtrl) {
  const loadEventListeners = function () {
    const selectors = uiCtrl.getSelectors();

    document.addEventListener('keypress', (e) => {
      // POINT：エンターでsubmitが走るのを防止
      if (e.keyCode === 13) {
        e.preventDefault();
        return false;
      }
    });

    document
      .querySelector(selectors.clearBtn)
      .addEventListener('click', clearAllItemsClick);

    document
      .querySelector(selectors.addBtn)
      .addEventListener('click', itemAddSubmit);

    document
      .querySelector(selectors.itemList)
      .addEventListener('click', itemEditClick);

    document
      .querySelector(selectors.updateBtn)
      .addEventListener('click', itemUpdateSubmit);

    document
      .querySelector(selectors.deleteBtn)
      .addEventListener('click', itemDeleteSubmit);

    document
      .querySelector(selectors.backBtn)
      .addEventListener('click', uiCtrl.clearEditState);
  };

  const itemAddSubmit = function (e) {
    e.preventDefault();

    const input = uiCtrl.getItemInput();
    if (input.name === '' || input.calories === '') {
      return;
    }

    const newItem = itemCtrl.addItem(input.name, input.calories);
    uiCtrl.addListItem(newItem);

    const totalCalories = itemCtrl.getTotalCalories();
    uiCtrl.showTotalCalories(totalCalories);

    storageCtrl.storeItem(newItem);

    uiCtrl.clearInput();
  };

  const itemEditClick = function (e) {
    e.preventDefault();

    const item = e.target;
    if (item.classList.contains('edit-item')) {
      const id = parseInt(item.parentElement.parentElement.id.split('-')[1]);
      const itemToEdit = itemCtrl.getItemById(id);
      itemCtrl.setCurrentItem(itemToEdit);

      uiCtrl.addItemToForm();
    }
  };

  const itemUpdateSubmit = function (e) {
    e.preventDefault();

    const input = uiCtrl.getItemInput();
    const updatedItem = itemCtrl.updatedItem(input.name, input.calories);

    uiCtrl.updateListItem(updatedItem);
    storageCtrl.updateItem(updatedItem);

    const totalCalories = itemCtrl.getTotalCalories();
    uiCtrl.showTotalCalories(totalCalories);

    uiCtrl.clearEditState();
  };

  const itemDeleteSubmit = function (e) {
    e.preventDefault();

    const item = itemCtrl.getCurrentItem();
    itemCtrl.deleteItem(item.id);

    uiCtrl.deleteListItem(item.id);
    storageCtrl.deleteItem(item.id);

    const totalCalories = itemCtrl.getTotalCalories();
    uiCtrl.showTotalCalories(totalCalories);

    uiCtrl.clearEditState();
  };

  const clearAllItemsClick = function () {
    itemCtrl.clearAllItems();
    uiCtrl.clearItems();
    uiCtrl.hideList();

    storageCtrl.clearAll();

    const totalCalories = itemCtrl.getTotalCalories();
    uiCtrl.showTotalCalories(totalCalories);
  };

  return {
    init: function () {
      uiCtrl.clearEditState();

      const items = itemCtrl.getItems();
      if (items.length === 0) {
        uiCtrl.hideList();
      } else {
        uiCtrl.populateItemList(items);

        const totalCalories = itemCtrl.getTotalCalories();
        uiCtrl.showTotalCalories(totalCalories);
      }

      loadEventListeners();
    },
  };
})(ItemCtrl, StorageCtrl, UICtrl);

App.init();
