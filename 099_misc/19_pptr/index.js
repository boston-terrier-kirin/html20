const fs = require('fs');
const pptr = require('puppeteer');

async function run() {
  const browser = await pptr.launch();
  const page = await browser.newPage();
  await page.goto('https://www.traversymedia.com');

  // await page.screenshot({ path: 'example.png', fullPage: true });

  // const title = await page.evaluate(() => document.title);
  // console.log(title);

  // const links = await page.evaluate(() => {
  //   const a = document.querySelectorAll('a');
  //   return Array.from(a, (e) => e.href);
  // });
  // console.log(links);

  const courses = await page.evaluate(() => {
    const cards = document.querySelectorAll('#courses .card');
    return Array.from(cards, (e) => ({
      title: e.querySelector('.card-body h3').innerText,
      level: e.querySelector('.card-body .level').innerText,
      link: e.querySelector('.card-footer a').href,
      promoCode: e.querySelector('.card-footer .promo').innerText,
    }));
  });

  // これでも同じ
  const courses2 = await page.$$eval('#courses .card', (elements) =>
    elements.map((e) => ({
      title: e.querySelector('.card-body h3').innerText,
      level: e.querySelector('.card-body .level').innerText,
      link: e.querySelector('.card-footer a').href,
      promoCode: e.querySelector('.card-footer .promo').innerText,
    }))
  );

  fs.writeFile('courses.json', JSON.stringify(courses2), (err) => {
    if (err) {
      throw err;
    }
    console.log('File saved');
  });

  await browser.close();
}

run();
