{
  const nums = Array.from({ length: 100 }, (el, idx) => idx + 1);
  console.log(nums);
}

{
  const nums = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  console.log(Array.from(nums, (i) => i * 2));
}

{
  const map = new Map();
  map.set(1, { firstName: 'John', lastName: 'Doe' });
  map.set(2, { firstName: 'Jane', lastName: 'Doe' });
  console.log(Array.from(map, (e) => e[1]));
}
