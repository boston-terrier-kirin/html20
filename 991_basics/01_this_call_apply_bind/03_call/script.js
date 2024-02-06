class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  dance(style = 'tango') {
    console.log('THIS IS', this);
    console.log(`Meow I am ${this.firstName} and I like to ${style}`);
  }
}

const blue = new Cat('blue');
const blueDance = blue.dance;

// Uncaught TypeError: Cannot read properties of undefined (reading 'firstName')
// blueDance();

// callとapplyの違いは、パラメータのわたし方だけ。
// func.call(thisArg, arg1, arg2, ...)
// func.apply(thisArg, [argsArray])

// blueインスタンスの、blueDanceを'jazz'で呼び出す。
blueDance.call(blue, 'jazz');
