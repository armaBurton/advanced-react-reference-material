function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

reverseWords('alchemy rocks gold');

function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

titleCase('aLcHeMy RoCkS gOlD');

function isNegative(number) {
  return number < 0 ? 'negative' : 'positive';
}

isNegative(1);

function oddishOrEvenish(number) {
  const sum = number
    .toString()
    .split('')
    .reduce((total, n) => {
      total += Number(n);
      return total;
    }, 0);

  return sum % 2 === 0 ? 'Evenish' : 'Oddish';
}

oddishOrEvenish(121);
oddishOrEvenish(41);

function at(arr, index) {
  return index >= 0 ? arr[index] : arr[arr.length + index];
}

at(['a', 'b', 'c'], 1);
at(['a', 'b', 'c'], -1);

function fizzBuzz(n) {
  const list = [];

  for (let i = 1; i <= n; i++) {
    // if (i % 3 === 0 && i % 5 === 0) {
    //   list.push('FizzBuzz');
    // } else if (i % 3 === 0) {
    //   list.push('Fizz');
    // } else if (i % 5 === 0) {
    //   list.push('Buzz');
    // } else {
    //   list.push(i);
    // }

    let result = '';
    if (i % 3 === 0) result += 'Fizz';
    if (i % 5 === 0) result += 'Buzz';
    list.push(result || i);
  }

  return list;
}

fizzBuzz(16);

function anagrams(wordOne, wordTwo) {
  const sortLetters = (word) => word.split('').sort().join('');
  return sortLetters(wordOne) === sortLetters(wordTwo);
}

anagrams('superintended', 'unpredestined');
anagrams('pictorialness', 'documentarily');
