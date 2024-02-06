class Circle {
  // private field
  #radius;

  // static initialization blocks
  static {
    console.log('CLASS IS LOADED');
  }

  constructor(radius) {
    this.#radius = radius;
  }

  // private method
  #privateMethod() {
    console.log('This is private');
  }
}

const c = new Circle(10);

// script.js:11 Uncaught SyntaxError: Private field '#radius' must be declared in an enclosing class
// console.log(c.#radius);

// Uncaught SyntaxError: Private field '#privateMethod' must be declared in an enclosing class
// c.#privateMethod();
