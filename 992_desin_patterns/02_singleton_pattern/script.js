const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ date: Date.now() });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const aaa = Singleton.getInstance();
const bbb = Singleton.getInstance();

console.log(aaa === bbb);
console.log(aaa);
console.log(bbb);
