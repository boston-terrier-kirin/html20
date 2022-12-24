class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  receive(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

class Chatroom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.chatroom = this;
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      for (const key in this.users) {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from);
        }
      }
    }
  }
}

const brad = new User('brad');
const jeff = new User('jeff');
const sara = new User('sara');

const chatroom = new Chatroom();
chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send('Hi Sara!', sara);
jeff.send('Hi Brad!', brad);
sara.send('Hi all!');
