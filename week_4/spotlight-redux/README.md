# Redux

## Getting Started

Use [this template](https://github.com/alchemycodelab/react-base-template) to get started.

Then do:

```
npm install @reduxjs/toolkit react-redux
```

### Learning Objectives

1. React-Redux
1. Redux Toolkit
1. Redux DevTools

### Description

[Redux](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) is a popular global state management library that is used in mid-sized to large applications.

We'll be looking into `redux`, the redux `store` and `redux-toolkit`. the modern way to build applications with react-redux.

### Acceptance Criteria

- Create a counter using `redux`

### Rubric

| Task        | Points |
| ----------- | ------ |
| Show effort | 10     |

### Terminology

Action
: A regular javascript object that has a required `type` property and an optional `payload`

```js
//the type of action will always be a string the payload can be anything
const action1 = {type: String, payload: {name: 'Vonta', age: 30}};
const action2 = {type: String, payload: [1, 2, 3]};
const action3 = {type: String, payload: 9};
const action4 = {type: String, payload: true};
const action5 = {type: String, payload: 'Nice Day out!'};
```

Reducer : A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState

Store : The current Redux application state lives in an object called the store

Dispatch : he only way to update the state is to call `dispatch()` and pass in an action object

Selector : Selectors are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data
