class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`Subscribe to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((observer) => {
      if (observer !== fn) {
        return observer;
      }
    });
    console.log(`Unsubscribe to ${fn.name}`);
  }

  fire() {
    this.observers.forEach((observer) => observer.call());
  }
}

const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', () => {
  click.subscribe(getCurrentMsec);
});

document.querySelector('.unsub-ms').addEventListener('click', () => {
  click.unsubscribe(getCurrentMsec);
});

document.querySelector('.fire').addEventListener('click', () => {
  click.fire();
});

const getCurrentMsec = function () {
  console.log(`Current msec: ${new Date().getMilliseconds()}`);
};
