function doSomeSetup(options = {}) {
  // 左側が、null / undefined の場合のみ、代入する。
  // 左側が、0の場合、代入されない。
  options.timeout ??= 3000;
  options.retries ??= 5;

  console.log(options);
}

doSomeSetup({ timeout: 0, retries: 0 });
doSomeSetup();
