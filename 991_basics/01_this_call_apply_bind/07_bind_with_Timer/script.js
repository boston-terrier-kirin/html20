class Counter {
  constructor(startingNum = 0, incrementAmt = 1) {
    this.startingNum = startingNum;
    this.incrementAmt = incrementAmt;
  }

  // start() {
  //   setInterval(function () {
  //     // functionを使った場合、thisはWindowになっている。
  //     console.log('THIS IS', this);
  //     console.log(this.startingNum);
  //     this.startingNum += this.incrementAmt;
  //   }, 1000);
  // }

  start() {
    setInterval(this.incrementAndPrint.bind(this), 1000);
  }

  // 解決方法その1
  incrementAndPrint() {
    console.log('THIS IS', this);
    console.log(this.startingNum);
    this.startingNum += this.incrementAmt;
  }

  // 解決方法その2
  start2() {
    setInterval(() => {
      console.log('THIS IS FROM ARROW', this);
      console.log(this.startingNum);
      this.startingNum += this.incrementAmt;
    }, 1000);
  }
}

const counter = new Counter(1, 100);

// 解決方法その1
// counter.start();

// 解決方法その2
counter.start2();
