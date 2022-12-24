const range = document.querySelector('#range');

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  // POINT：getComputedStyleで、実際のwidthを取得する
  const rangeWidth = getComputedStyle(e.target).getPropertyValue('width');
  const labelWidth = getComputedStyle(label).getPropertyValue('width');
  console.log(rangeWidth, labelWidth);

  const numRangeWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
  const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);

  const max = +e.target.max;
  const min = +e.target.min;

  const left = value * (numRangeWidth / max) - numLabelWidth / 2;
  label.style.left = `${left}px`;

  label.innerHTML = value;
});
