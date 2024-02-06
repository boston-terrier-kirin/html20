function Dog(name, breed) {
  console.log('THIS IS', this);
  this.name = name;
  this.breed = breed;
}

// newがない場合、thisはWindowになっているし、何も戻ってこないので、d1はundefinedになる。
const d1 = Dog('Wyatt', 'Boston');
console.log('d1', d1);

// newがあると
// (1) thisを作って
// (2) thisをreturnしてくれる
const d2 = new Dog('Wyatt', 'Boston');
console.log('d2', d2);
