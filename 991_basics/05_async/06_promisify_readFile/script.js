const fs = require('fs');

function asyncReadFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        console.log('ERR', err);
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function getHaikus() {
  try {
    const haiku1 = await asyncReadFile('./haiku1.txt');
    console.log('-- haiku1');
    console.log(haiku1);

    const haiku2 = await asyncReadFile('./haiku2.txt');
    console.log('-- haiku2');
    console.log(haiku2);

    const haiku3 = await asyncReadFile('./haiku3.txt');
    console.log('-- haiku3');
    console.log(haiku3);
  } catch (e) {
    console.log(e);
  }
}

getHaikus();
