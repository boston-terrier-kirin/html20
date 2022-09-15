const ItemCtrl = (function () {
  const data = [];

  const add = (item) => {
    data.push(item);
  };

  const get = (id) => {
    return data.find((item) => item.id === id);
  };

  return {
    add,
    get,
  };
})();

ItemCtrl.add({ id: 1, name: 'John' });
ItemCtrl.add({ id: 2, name: 'Jane' });

console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));
