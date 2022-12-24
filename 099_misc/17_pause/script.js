const p = document.querySelector('#p');

document.querySelector('#btn-1').addEventListener('click', () => {
  pause_1(3000);
  p.innerHTML = 'END_BTN-1';
});

document.querySelector('#btn-2').addEventListener('click', async () => {
  await pause_2(3000);
  p.innerHTML = 'END_BTN-2';
});

function pause_1(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {}
}

function pause_2(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
