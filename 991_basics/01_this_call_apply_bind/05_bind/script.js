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

// bindは事前にbindしたfunctionを作ってくれるところが、call/applyとの違い。
const blueDance = blue.dance.bind(blue, 'jazz');

blueDance();
blueDance();
blueDance();

///// functionをbindする使い方
function applySalesTax(taxRate, price) {
  return price + price * taxRate;
}

// bind(null)は、thisがなんでもよい(関係ない)場合。
const applyJASalesTax = applySalesTax.bind(null, 0.01);
console.log(applyJASalesTax(100));
console.log(applyJASalesTax(1000));
