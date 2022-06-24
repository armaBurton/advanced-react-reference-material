React Application Architecture
===

Structure of a React App:

1. Components + Routing
2. Actions
3. State Management
4. Services

## Component Hierarchy

- The DOM is a tree,
- Components render DOM,
- ergo Components are a tree

But what about state?

- Props get passed through the tree
- Is that necessary? Is it helpful?
- Let's explore...

## Flow Architecture

Flow architecture upended the multidirectional mess that was state management. It is the basis of all modern
component based UI web architectures

1. Uni-directional data flow
1. "Data down, events up"
1. Events become actions
1. Actions
    - ~~modify state~~ 
    - request modification to state 
    - optionally call services
1. State modification rules
1. State changes cause #1

## State Ownership

- Where should state live?
- Single source of truth
- Rules of thumb:
    - Push state down
    - Shared state must be owned by common ancestor
- When is state created and destroyed?

## Global State

You can divorce state from the component hierarchy (and still follow Flow architecture)

- State and actions are attached and injected into the component tree
- React Context (+ hooks) do this (though it still actually uses the tree under the covers)
- Context is really about avoiding prop-drilling, not global state (consider a `useState` at `App` level)
- Reducers are a way to have rules about the specific modifications that can be made to state

In practice, the built-in React state management makes it easy to choose where your state lives, which is very helpful.

Sometimes, it is more convenient to have state destroyed and recreated, **it depends on your application usage patterns!**

- Infrequently re-visited data can be let go
- Frequently visited data can be stored "more globally"

## Actions (Hooks)

The real magic happens in (custom) hooks 

- Custom hooks orchestrate service calls and state changes
- Present simplified interfaces to components for consuming state and calling actions

Simplified access to state includes providing derived data where it makes sense (**not** presentation logic)

## Components

Components:

- specify how data should be integrated into presentation
- Setup subscriptions to user events (which can call actions)



