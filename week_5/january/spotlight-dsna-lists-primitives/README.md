DS&A: Primitives (and Lists of Primitives)
===

## Today's Challenges:

| person         | challenge          |
| -------------- | ------------------ |
| partner 1      | `reverse words`    |
| partner 2      | `title case words` |
| partner 1      | `oddish-evenish`   |
| partner 2      | `at`               |
| partner 1      | `fizz-buzz`        |
| partner 2      | `anagrams`         |
| pair stretch 1 | `equal-sides`      |
| pair stretch 2 | `happy-numbers`    |

## Tooling

For today's work, create a github repo and work in VSCode

Let's take a couple of minutes to get your document ready!

## Strings

String code challenges usually are array challenges and involve changing the string into an array of letters or words (or both).

Go ahead and look these methods up on MDN if you need them today!

### Splitting strings

* array of letters
  ```js
  const letters = word.split('');
  ```
* sentence into an array of words
  ```js
  const words = sentence.split(' ');
  ```

### Accessing characters by index

Strings are "array like" in that you can access by index:
```js
const firstLetter = word[0];
```

**However**, you _cannot_ assign a letter:
```js
word[0] = word[0].toUpperCase();
```

There are code challenges problems specifically design to trip you up on this.

Instead, use `.slice(startIndex, endIndex)` to make new string from pieces.

### Array to String

Join the elements of an array to make a string, use join:
```js
const word = letters.join('');
const sentence = words.join(' ');
```

### Using Array Methods

While you can use loops to manage things, often using `.map` after `.split` is just the thing you need

### Other String Tools

* `toUpperCase`
* `toLowerCase`
* `padLeft`
* `padRight`

### And...regex

The other thing that crops up with string challenges is using regex. This is its own topic and we won't see regex today

## Chaining

Leverage chaining to write clean easy to "see" code:

```js
function doString(str) {
    return str
        .split('')
        .map(letter => {

        })
        .join('');
}
```

## Challenge:

`reverse sentence words` and `title case words`

## Numbers

Number problems typically involve word-problem type math, **or** splitting numbers into digits.

* The use of modulo (remainder) is prevalent ("evenly divisible"):
  ```js
  const isEven = x % 2 === 0
  ```
* Call `toString` before attempting to `split` a number into digits:
  ```js
  const digits = number.toString().split('');
  ```
* Conversion problems are common (how many seconds in year)

### Ternary Expressions

Handy way to return one of two options based on a condition:

```js
return x < 0 ? 'negative' : 'positive';
```

## Challenge!

`oddish-evenish` and `at`

## Other Common Themes

### Control Flow & Scope

Most `string` and `number` problems are usually control flow problems, applying conditional logic _in the right order_ and managing looping and lists of things.

They also require declaring variables in the correct scope in relation to any loops and conditional statements. Scope is entirely dependent on code blocks.

### Input of single number, return list

Some problem say "go up to `n`". Typically best to use a classic `for` loop and set the limit at `n`. Then you can count to `n` from `0` (or `1` or whatever)

### Ordering and Uniqueness

There are classes of problems that benefit from `sort`ing and/or having a unique set of things (de-duplication).

#### Sort Order

The default `sort()` in JavaScript provides lexical (dictionary) sorting by default.

## Challenge!

`fizz-buzz` - classic code challenge problems with an "order matters" twist

`anagram` - making hard problems easy by using the built-in methods

## Compare to adjacent array members

Sorting can make hard problems easier. By having ordered content, you can loop through an array and look for matching values between adjacent elements.

## Deduplication
By passing an array into a `Set` constructor, and then spreading back into an array, you can get a unique list of things (and then maybe back to a string if needed):

```js
const set = new Set(numbers);
const unique = [...set];

// or
const unique = [...new Set(numbers)];
```

## Challenge!

`unique-string` - classic code challenge problems with an "order matters" twist

`unique-char` - making hard problems easy by using the built-in methods

## Putting it All Together

These problems combine control flow, number and string manipulation. Take your time on problem definition and design to break down the steps

## Stretch Challenge!

`equalSides`
`happyNumbers` (see next section)

## Using `while(true)`

Sometimes a problem will require successive iterations, but you don't really know when it is going to end until a certain condition is met. You can use the following construct, leveraging `break` or `return`:

```js
// notice this is declared and initialized
// before the loop
let x = 0;
let y = 100;

while(true) {
  if(y === x) return true;
  if(y < 0) return false;
  x = x + 2;
  y = y - 1;
}

```
