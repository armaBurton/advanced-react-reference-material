require('colors');

//* Big O Notation Examples *//

// O(1) -> Constant Time
function constantOperations(input) {
  let operations = 0;

  const lastElement = input.at(-1); // same as: input[input.length - 1]
  input[0] = lastElement;
  operations++;

  return operations;
}

// O(log n) -> Logarithmic Time
function logOperations(input) {
  let operations = 0;
  let i = 1;

  while (i < input.length) {
    i = i * 2;
    operations++;
  }

  return operations;
}

// O(n) -> Linear Time
function linearOperations(input) {
  let operations = 0;

  for (let i = 0; i < input.length; i++) {
    // Do something with input[i]...
    operations++;
  }

  return operations;
}

// O(n^2) -> Quadratic Time
function quadraticOperations(input) {
  let operations = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      operations++;
    }
  }

  return operations;
}

// The input to use for all of our examples:
const input = [1, 2, 3, 4, 5, 6, 7, 8];

// ...formatted for easier display in a console.log
const inputColorized =
  '['.white + input.map((v) => `${v}`.yellow).join(', '.white) + ']'.white;

console.log('\n\t\t === Function Input ===');
console.log('\t       ', inputColorized);
console.log('\t\t\t n'.blue, '=', `${input.length}`.yellow);

console.log('\n\t   === Time complexities compared ===');

// ...formatted for use in a console.table
const results = {
  'Constant Time': {
    notation: 'O(n)',
    'number of operations': constantOperations(input),
  },

  'Logarithmic Time': {
    notation: 'O(log n)',
    'number of operations': logOperations(input),
  },

  'Linear Time': {
    notation: 'O(n)',
    'number of operations': linearOperations(input),
  },

  'Quadratic Time': {
    notation: 'O(n^2)',
    'number of operations': quadraticOperations(input),
  },
};

console.table(results);
