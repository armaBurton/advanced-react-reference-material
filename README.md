# Advanced React

## Class Structure

Each week, lecture & deliverable topics will be divided into two "blocks": Block A & Block B. Each block has two deliverables that will need to be turned in, in addition to a Spotlight topic assignment and weekly retrospective.

Here is a breakdown of the different types of deliverables/assignments:
* 🚧 &nbsp;"Half-Baked" app
  * This is an app that has some code written for it, but is incomplete.
  * It may require adding a feature, fixing a bug, writing a test, or refactoring.
  * You will be practicing reading code and working in an existing codebase for this deliverable.
  * These deliverables are generally smaller in scope and more focused.
* 🏗 &nbsp;"Build from Scratch" app
  * This is an app where little or no starting code will be provided.
  * You will be responsible for creating this app from scratch, meaning that you'll have to run `npm init @alchemycodelab/app@latest` to get started (unless starting code has been provided).
* 🔦 &nbsp;Spotlight Deliverable
  * This is a task or assignment your spotlight presenters may require you to submit.
  * These vary from week to week and are focused on technical and professional development.
* 📓 &nbsp;Weekly Retrospective
  * This serves as a way to journal about what you've learned during the week.

## React Architecture

[https://github.com/alchemycodelab/react-architecture](https://github.com/alchemycodelab/react-architecture)

## Making a Plan

If you're unsure where to start on a deliverable, try walking through the process of making a plan:

1. Make a drawing of your app. Simple "wireframes"
1. Once you have a drawing, name the HTML elements you'll need to realize your vision
1. For each HTML element ask: Why do I need this?
1. Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
1. Is there some state we need to initialize?
1. Find all the 'events' (user clicks, form submit, page loads, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
1. Think about how to validate each of your steps.
1. Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage/a database?
1. Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model.
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
  - What are the key/value pairs?
  - What arrays might you need?
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

Or, more concisely:

1. Think about what’s happening
1. Think what I want to happen
1. Think about how to make that happen
1. Implement & Test
