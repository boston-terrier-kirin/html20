function wait(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('RESOLVED');
    }, duration);
  });
}

async function demo() {
  console.log('START');
  await wait(3000);
  console.log('END');
}

demo();
