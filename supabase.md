# Supabase

## What is Supabase?

- Supabase is an open-source SQL database in the cloud
- Instead of storing data in localStorage like we were doing in our first course, we will be using a real database, hosted in Supabase
- For the first several labs, your data will be pre-built, you'll start building out your own databases later in the course

## Why use Supabase?

- Because its pretty freaking cool - with just a few clicks you have a full Postgres database available for your application
- We often talk about "front end" development versus "back end" development -- front end refers to the browser, the backend refers to the server and database -- Supabase is like getting a backend pre-built and configured, ready to receive your requests
- In other words, we can start to persist data in our front end applications without needing to also teach you about backend technologies like Express and Postgres (you'll learn these technologies during Module 4, but for now we can remain focused on front end)

## Supabase Details

- Supabase gives you access to a Postgres database which is a **SQL database**.
- SQL stands for Structured Query Language and there are lots of different SQL databases -- you may have heard of MySQL, SQLite or Microsoft SQL Server.
- All of these database solutions allow to use SQL to query your data. SQL is a standardized programming language. There are some minor differences between the different database types but in general, if you know SQL for Postgres you'll know SQL for the others.
- Supabase has a Javascript client that will allow us to query and update our databases using Javascript instead of SQL
- Eventually you will learn about how to write SQL, but for this course, we are focused on using the Javascript client

## IMPORTANT

- Supabase functions are _asynchronous_ which means they return a special Javascript object called a `Promise`
- For Promises to act like they are syncronous, we must use special keywords async and await

  ```js
  export async function getAnimals() {
    const response = await client.from("animals").select(`*`);
    return checkError(response);
  }
  ```
