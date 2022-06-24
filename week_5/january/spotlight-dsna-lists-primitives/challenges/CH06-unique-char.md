Unique Char
---

## Challenge

Write a function that takes a string and finds and returns the any (STRETCH: first) instance of a non-repeating character in it. If there is no such character, return '_'.

```js
function uniqueChar(string) {
```

> **You can assume valid input**

## Test Cases

Input | Output | Notes
---|---:|---
`'abdacabad'` | `'c'`
`'abacabaabacaba'` | `'_'`
`'abacabad'` | `'c'` (not `'d'` because it occurs second)
