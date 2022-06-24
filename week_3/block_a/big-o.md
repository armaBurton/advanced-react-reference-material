# Big O Notation

> Big O notation is special notation that tells you how fast an algorithm is. Who cares? Well, it turns out that you’ll use other people’s algorithms often—and when you do, it’s nice to understand how fast or slow they are.

[Grokking Algorithms](https://livebook.manning.com/book/grokking-algorithms/chapter-1/93)
[Khan Academy - Logarithms](https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs/x2ec2f6f830c9fb89:log-intro/v/logarithms)

### Dani's Intro to Big-O

`Big-O` can be tricky to understand. In short, Big-O asks: "does your function become more and more expensive when you feed it larger inputs (i.e. bigger arrays or data structures)?" In other words, to dramatically and unfairly oversimplify things: `Big-O` is just a measure of _how many times your function loops through an array_.

 That means you can often eyeball a function's `Big-O` by looking whether your function has _loops inside loops_.

I will describe three kinds of Big-O:
1) Constant time: `O(1)`
2) Linear Time: `O(n)`
3) Quadratic Time: `O(n^2)`

If you are presented with a Big O question, chances are it will be one of these three.

To determine which of these three it is, here are some questions to ask:

1) Does your function contain ZERO loops or does it loop the same number of times regardless of the input size?
    - Then your function probably is `Big-O(1)`.
    - No loops means the "operations" in your function only happens once.
    - Constant loops (such as doing something exactly 5 times) means that even if your array gets huge, the loop will still only happen 5 times.
    - We call this `constant time`, since no matter what you throw at your function, it will always trigger the same number of operations.


2) Does your function loop through an array once?
    - If so, that's `Big-O(n)`.
    - That is to say, we do `n` operations, where `n` is the length of the array.
    - In an array of 5 things, a loop will do 5 operations. In an array of 8 things, a loop will do 8 operations.
    - We call this `linear time`.

Here's an example of `Big-O(n)`. Paste it in your browser console and count how many names log out.

```js
const dogs = ['jeep', 'spot', 'rover', 'spike', 'happy'];

for (let dog of dogs) {
    console.log(dog);
}
```

3) Does your function have a _loop inside your loop_?
    - If so, that might be `Big-O(n^2)`. Uh oh!
    - Loops inside loops are a classic Big-O red flag, and probably the most iconic Big-O no-no.

Here's an example of `Big-O(n^2)`. Paste it in your browser console and count how many names log out.:

```js
const dogs = ['jeep', 'spot', 'rover', 'spike', 'happy'];

for (let dog of dogs) {
    for (let dog of dogs) {
        // Notice that, for each item in the array, we loop through the whole array an additional time.
        // In `Big-O notation, this is called 'quadratic time'.
        // In big arrays, these extra start to really pile up!
        console.log(dog)
    }
}
```

Why is it called `Big-O(n^2)`? That sounds like math! I hear you. But let's break it down:
- In the `Big-O(n)` example, if you paste it in the console, you will see 5 dog names log out.
- In the `Big-O(n^2)` example, if you paste it in the console, you will see 25 dog names log out.
- Notice, that 5^2 (or 5 * 5) is 25.
- Now, go back a few lines and wherever I said 5, replace it with `n`. That's where `n` and `n^2` come from!

If you can understand and describe these three Big-Os (`constant`, `linear`, and `quadratic`), you stand a good shot of nailing a Big-O question on an interview.
