const getUser = () => {
  if (Math.random() * 10 > 5) {
    return {
      name: {
        first: 'Steph',
        last: 'Curry',
      },
      greet: () => {
        return 'Swish!';
      },
    };
  }

  return {};
};

const user = getUser();

// nameがない場合、firstにアクセスしない
const firstName = user.name?.first || 'Jone';

// greet()がない場合、greet()にアクセスしない
const greet = user.greet?.();

console.log('firstName', firstName);
console.log('greet', greet);

console.log(Math.random() * 10);
