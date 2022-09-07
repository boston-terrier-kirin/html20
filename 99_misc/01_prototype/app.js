function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

/**
 * this は呼び出しもとになるので、john.getFullName() で john の値が取れる。
 */
console.log(john.getFullName());
console.log(john.calculateAge());
console.log(john);
