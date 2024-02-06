const conan = {
  name: 'Conan',
  city: 'Los Angels',
  sing: function () {
    console.log('THIS IS', this);
    console.log(`${this.name} sings LA LA LA`);
  },
};

const btn = document.querySelector('#clickMe');

// この場合、thisがbuttonになっている。
// btn.addEventListener('click', conan.sing);

// これでthisをconanにできる。
btn.addEventListener('click', conan.sing.bind(conan));

// call/applyを使ってしまうと、即時に実行されてしまうので、bindを使う。
// btn.addEventListener('click', conan.sing.call(conan));
