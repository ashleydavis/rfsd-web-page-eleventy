---
layout: layouts/outline.html
---

# Book outline

In this new book from <a href="https://www.codecapers.com.au/about">Ashley Davis</a>, learn the tricks of the trade for writing <em>reliable</em> and <em>valuable</em> code, <strong>quickly</strong>.

### Notes

- This outline will change during development of the book.
- I'm not yet sure how TypeScript is going to fit in to this book yet. These are the options I'm considering:
  - Adding a bonus chapter that argues how TypeScript can improve your development process; or
  - Later, issuing a separate TypeScript version of the book where all code is presented as TypeScript instead of JavaScript.

Please give feedback to <a href="mailto://ashley@codecapers.com.au">ashley@codecapers.com.au</a>

# 1. Working **and** valuable

## The theory of rapid development

Learn the theory and philosophy of rapid development. 

What it is? Why do we need it? And, how it can help you be a faster developer.

[Chapter 1 is free to read online](/chapter-1) 

# 2. From little things, big things grow

## Backend development

First up, we build the backend for the [Photosphere example application](/example-application).

We start coding from nothing, and then code and test Photosphere's Node.js REST API. 

Learn techniques for rapid iterations of coding with fast feedback, refactoring to let an elegant design emerge by itself and testing to make sure our code works.

# 3. The other side of the equation
 
## Frontend development

Next we build the frontend for Photosphere. 

We'll start with nothing and construct a browser-based user interface from the ground up. Along the way we'll learn how we can bring forth an elegant design through continuous refactoring of our code.


Learn techniques for building and testing a frontend and connecting it to the backend. We'll quickly build out our frontend using live reload for fast feedback and refactor as we go to let clean code emerge on it's own.

### Notes

- Previously named: The twisted path of development

# 4. The twisted path of development

## Planning, prototyping and navigating the changing path of development

Development is rarely a straightline from start to product and in this chapter we explore the the iterative and evolutionary planning process we must engage in as we navigate the uncertain path building a new product. 

Understand how prototyping, planning and estimation fit together to answer questions, improve our understanding of what we are building and help set the direction of development. 

Learn how to continuous reassessment,  replanning and restimation help us make the right course corrections thorugh our development journey.

We'll explore the prototypes created before development of Photosphere started and see how we can prototypes to resolve ambiguity, reduce uncertainy and mitigate risk for our software projects.

### Notes

- A new chapter on Planning and prototyping.
- Previously named: Throwing out the rule book

# 5. Your own personal testing robot 

## Automated testing

In this chapter we use test driven development (TDD) to build the gallery layout algorithm for the Photosphere frontend.

Learn how to create automated tests, how TDD can make you a better developer and more importantly learn to recognise when automated testing and TDD are worthwhile investments of your time.

### Notes

- A new chapter just on automated testing, focusing on test driven development (TDD).
- The previous incarnation of this chapter was going to be more generally about testing, but I may now have enough content to justify an enitire chapter on automated testing. I may later add a chapter on general testing, I might still wrap that up into this chapter or I might include more on testing in the debugging and problem solving chapter.
- Still want to find a home for these topics:
  - Stress testing the photo gallery with 1k photos
  - Testing the backend with Supertest
  - Mocking the backend with test data
  - Mocking the backend with mock-api
  - Manual TDD
  - Output driven testing
  - Cypress ?

# 6. Growing pains

## Scaling up

Now we scale up our development process to handle a backend with multiple services. 

We'll add some microservices to Photosphere, but the techniques presented in this chapter aren't just for microservices. Using Docker Compose we'll create a convenient setup for fast development and testing of our fullstack application, including the integration of a database (or other services).

Learn how to scale our application to support a development team. Discuss mono-repos vs meta-repos, when to publish a package and how to share code between our projects.

### Notes

- Was previously chapter 4.

# 7. Being the detective

## Debugging and problem solving

Learn strategy and techniques for merciless bug hunting and effective problem solving with real examples from the Photosphere application.

### Notes

- Was previously chapter 5.
- I may expand on (manual) testing techniques here if I can fit it.

# 8. We are not in Kansas anymore

## Beyond the stack: Desktop and mobile apps with JavaScript

Now we go beyond fullstack! 

We extend our development process and build desktop and mobile applications for Photosphere.

### Notes

- Was previously chapter 7.
- Previously named: Beyond the stack

# 9. Just ship it!

## A tour of the example application

Next we revisit the tools, techniques and development process we have learned so far, while taking a tour of the completed Photosphere application.

We'll also add some basic styling to our application, just enough to get by. Covering Less and Tailwind.

Finally we'll learn the basics of what's required in the future to take this application to production.

### Notes

- Was previously chapter 8.
- Previously named: Photosphere walkthrough

# 10. Mindset is a starting point

## Scaling yourself

We wrap up the book with an exploration of how to take your own learning as a developer to the next level. 

Learn strategies to be better at learning and accelerate your experience.

### Notes

- Was previously chapter 9.
