---
layout: layouts/outline.html
---

# Book outline

In this new book from <a href="https://www.codecapers.com.au/about">Ashley Davis</a>, learn the tricks of the trade for writing <em>reliable</em> and <em>valuable</em> code, <strong>quickly</strong>.

### Notes

- This outline will change during development of the book.
- I've decided to include TypeScript in the book through chapter 6 "Just ship it!". I have good reason to convert to TypeScript at this point in the book so it's a good excuse to introduce it and how it can help your development process.
- The scaling chapter is gone! I've decided this book mostly isn't about scaling the product. Due to certain design decisions I've made for Photosphere (which will be full explained in chapter 6) the "Scaling up" chapter doesn't feel relevant any more. Of course, I've already written about performance and scaling in my book [Bootstrapping Microservices](https://www.bootstrapping-microservices.com/) if you want to learn more about that.

Please give feedback to <a href="mailto://ashley@codecapers.com.au">ashley@codecapers.com.au</a>

# 1. Working **and** valuable

## The theory of rapid development

Learn the theory and philosophy of rapid development. 

What it is? Why do we need it? And, how it can help you be a faster developer.

[Chapter 1 is free to read online](/chapter-1) 

# 2. From little things, big things grow

## Backend development

First up, we build the backend for the Photosphere example application.

We start coding from nothing, and then code and test Photosphere's Node.js REST API. 

Learn techniques for rapid iterations of coding with fast feedback, refactoring to let an elegant design emerge by itself and testing to make sure our code works.

# 3. The other side of the equation
 
## Frontend development

Next we build the frontend for Photosphere. 

We'll start with nothing and construct a browser-based user interface from the ground up. Along the way we'll learn how we can bring forth an elegant design through continuous refactoring of our code.


Learn techniques for building and testing a frontend and connecting it to the backend. We'll quickly build out our frontend using live reload for fast feedback and refactor as we go to let clean code emerge on it's own.

# 4. The twisted path of development

## Planning, prototyping and navigating the changing path of development

Development is rarely a straightline from start to product and in this chapter we explore the the iterative and evolutionary planning process we must engage in as we navigate the uncertain path building a new product. 

Understand how prototyping, planning and estimation fit together to answer questions, improve our understanding of what we are building and help set the direction of development. 

Learn how to continuous reassessment,  replanning and restimation help us make the right course corrections thorugh our development journey.

We'll explore the prototypes created before development of Photosphere started and see how we can prototypes to resolve ambiguity, reduce uncertainy and mitigate risk for our software projects.

# 5. Your own personal testing robot 

## Automated testing

In this chapter we use test driven development (TDD) to build the gallery layout algorithm for the Photosphere frontend.

Learn how to create automated tests, how TDD can make you a better developer and more importantly learn to recognise when automated testing and TDD are worthwhile investments of your time.

### Notes

- Still want to find a home for these topics:
  - Stress testing the photo gallery with 1k photos
  - Testing the backend with Supertest
  - Mocking the backend with test data
  - Mocking the backend with mock-api
  - Manual TDD
  - Output driven testing
  - Playwright ?

# 6. Just ship it!

## Finishing the example application

Now we take Photosphere to production!

Along the way we'll create a monorepo and convert our code to TypeScript.

We'll also revisit refactoring, update our code to upload multiple photos at once, and finally we'll implement pagination.

We'll also make a surprising design decision. It suprised even me!
  
# 7. Being the detective

## Debugging, problem solving and preventing bugs

Learn strategy and techniques for merciless bug hunting and effective problem solving with real examples from the Photosphere application.

We'll also learn numerous techniques to help us find and fix bugs during development, because it's much cheaper and more effective to fix bugs before they get to production.

### Notes

- I may expand on (manual) testing techniques here if I can fit it.

# 8. We are not in Kansas anymore

## Beyond the stack: Desktop and mobile apps with JavaScript

Now we go beyond fullstack! 

We extend our development process and build desktop and mobile applications for Photosphere.

# 9. Mindset is a starting point

## Scaling yourself

We wrap up the book with an exploration of how to take your own learning as a developer to the next level. 

Learn strategies to be better at learning and accelerate your experience.

