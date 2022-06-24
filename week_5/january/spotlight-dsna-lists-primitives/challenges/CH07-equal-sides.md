Equal Sides (of Array)
---

## Challenge

You are going to be given an array of integers. Your job is to take that array and find an index `N` where the sum of the integers to the left of `N` is equal to the sum of the integers to the right of `N`. If there is no index that would make this happen, return -1.

If you are given an array with multiple answers, return the lowest correct index. An empty array should return `0` in this problem.

```js
function equalSides(numbers) {
```

> **You can assume valid input**

## Big O

- What is the Big O of your solution? 
- If it is `O(n^2)`, could you solve it differently?

## Test Cases

### Input

```js
[1,2,3,4,3,2,1]
```

### Output

`3`

### Because

Your function will return the index `3`, because at the 3rd position of the array, the sum of left side of the index (`[1,2,3]`) and the sum of the right side of the index (`[3,2,1]`) both equal `6`.

### Input

```js
[1,100,50,-51,1,1]
```

### Output

`1`

### Because

Your function will return the index `1`, because at the 1st position of the array, the sum of left side of the index (`[1]`) and the sum of the right side of the index (`[50,-51,1,1]`) both equal `1`.

### Input

```js
[20,10,-80,10,10,15,35]
```

### Output

`0`

### Because

At index `0` the left side is `[]` and the right side is `[10,-80,10,10,15,35]`.
They both are equal to `0` when added. (Empty arrays are equal to `0` in this problem)
Index `0` is the place where the left side and right side are equal.
