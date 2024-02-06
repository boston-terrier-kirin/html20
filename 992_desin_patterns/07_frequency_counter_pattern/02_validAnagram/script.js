// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('aaz', 'zza') // false

function validAnagram(word1, word2) {
  if (!word1 && !word2) {
    return true;
  }

  const freqCounter1 = {};
  for (const char of word1) {
    let cnt = freqCounter1[char] || 0;
    cnt += 1;

    freqCounter1[char] = cnt;
  }

  const freqCounter2 = {};
  for (const char of word2) {
    let cnt = freqCounter2[char] || 0;
    cnt += 1;

    freqCounter2[char] = cnt;
  }

  for (const key in freqCounter1) {
    const value1 = freqCounter1[key];
    const value2 = freqCounter2[key];

    if (!value2) {
      return false;
    }

    if (value1 !== value2) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('qwerty', 'qeywrt'));
