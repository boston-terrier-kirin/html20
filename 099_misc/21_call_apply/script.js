'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flight, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flight}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flight}`, name });
  },
};

const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

// callとapplyの違いは、パラメータのわたし方だけ。
// func.call(thisArg, arg1, arg2, ...)
// func.apply(thisArg, [argsArray])

// callとapplyは呼び出した時点で関数が実行されるのに対して、
// bindは新しい関数が戻ってくる。

console.log('----- call -----');
// bookのthisをeuroWingsに指定することができる。
const book = lufthansa.book;
book.call(euroWings, 23, 'kirin');

console.log('----- apply -----');
const flightData = [45, 'kirin'];
book.apply(euroWings, flightData);

console.log('----- call -----');
// 最近はcall＋...を使う
book.call(euroWings, ...flightData);
