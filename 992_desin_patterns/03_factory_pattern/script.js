function MemberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else {
      member = new SuperMembership(name);
    }

    member.type = type;
    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member;
  };
}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = '$5';
};

const StandardMembership = function (name) {
  this.name = name;
  this.cost = '$15';
};

const SuperMembership = function (name) {
  this.name = name;
  this.cost = '$25';
};

const members = [];
const factory = new MemberFactory();
members.push(factory.createMember('Jone Doe', 'simple'));
members.push(factory.createMember('Jane Doe', 'super'));
members.push(factory.createMember('Joe Smith', 'standard'));

members.forEach((member) => member.define());
