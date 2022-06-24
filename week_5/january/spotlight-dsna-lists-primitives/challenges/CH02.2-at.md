Implement `at`
---

JavaScript has a new array method `at`. It's not yet available in all browsers, but you can write your own!

## Rules

You can't use `array.at`, implement your own using:

Property | Example
---|---
Read element by index | `const item = arr[i];`
Read array length | `const length = arr.length;`

## Challenge

Write a function `at` that takes an array and an index and returns the item at corresponding index. **However**, negative indices should work _from the back of the array_.

```js
function at(arr, index) {
```

> **You can assume valid inputs**

## Test Cases

Input | Output 
---|---:
`['a', 'b', 'c', 'd', 'e']`, `1` | `'b'` 
`['a', 'b', 'c', 'd', 'e']`, `-2` | `'d'` 