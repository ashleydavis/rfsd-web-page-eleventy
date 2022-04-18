---
layout: layouts/chapter.html
---

# 1 Bootstrapping Rapid Development	


## Gearing your process for rapid pace

In this chapter, you will learn:



* The who, what, why  and how of rapid development
* About the philosophy of rapid development
* About the example application we'll be building in this book

This is a book about rapid development. But it isn’t just about being a fast _coder_. By itself being able to write code quickly isn’t a worthy goal. It isn‘t even a useful goal.

As a _software developer_ you must be able to produce _working_ and _valuable_ code. 

Otherwise, there's no point being able to write code quickly. The real trick to moving quickly is to focus on the aspects of development that help you build your code the _right_ way and indeed to make sure that it is the _right_ code. 

When we create _broken_ code (it’s so easy to do) we stifle our future progress. 

When we write the _wrong_ code, the work we have done is ultimately wasted (which so often happens).

This book will help you create working and valuable code, quickly.


# 1.1 A software developer’s journey

_Rapid Fullstack Development_ is a book that gives you, a fullstack or aspiring fullstack developer, the help you need to achieve your goal of becoming a better developer, indeed a faster developer, but we’ll do it in the right way.

Well, in truth, there is no right way to do this. We are all different. We each learn in our own unique way.  There simply is no _one size fits all_ solution. Software development is too complicated for that and relies too much on situation, context,  judgment and experience. 

One thing I know for sure is that goals alone aren’t enough to achieve anything. Goals can’t be fulfilled without having the habits to back them up. Your habits will define you. Create good habits and you will become a good developer. Create bad habits and … well you get the idea.

You already have the goal of improving yourself as a developer, but you still need some help creating the habits that push you toward your goal.


# 1.2 Who is this book for?

This book is for JavaScript and/or TypeScript developers who already know the basics of their programming language and are looking for pathways to a higher level of skill.

If you don’t know JavaScript or TypeScript you can still read this book, but you will probably have to put in extra effort (using other resources) while reading to make sure you understand the code examples.


>##### Learning JavaScript
>###### Here are some recommended resources for learning JavaScript.
>###### - **You don’t know JS Yet** by Kyle Simspon
>###### - **Eloquent JavaScript** by Marjin Haverbeke
>###### - **The Modern JavaScript Tutorial** by Ilya Kantor 


# 1.3 What will I learn?

We will travel far together in this book. I will impart upon you my experience and my judgment and you will learn habits that can help you write good code, quickly.

In this chapter we start with the theory of rapid development. After chapter one though we dispense with theory and get into the practice of rapid development.

 

Together we will build an application and you will spend most of the book experiencing _how_ to be a rapid developer. 

Generally, our goals are these:

* Create a rapid, but sustainable, pace of development
* Improve our probability of producing working code
* Increase the value of the code we write
* Improve our development cadence: the rate at which we produce _working _and _valuable _code.

This book is accompanied by many working code examples for you to follow along with and a complete non-trivial example application called _Photosphere_ (more about that soon).

This doesn’t work without you trying it for yourself. Only by following along with the coding (starting in Chapter 2) can you really experience it. Then you must apply what you learn to your own development process. Take what works for you, adapt what you can and discard the rest.  That’s a winning system that  leads you to being an experienced software developer. 


# 1.4 What do I need to know?

To get the most of this book you should already know the following:

* The basics of JavaScript or TypeScript (at least being able to get the gist of code examples)
* The basics of using the command line (creating directories, changing directories, running commands, etc)
* How to use a text editor or IDE (e.g. Notepad++ or Visual Studio Code)

It will also help if you know the basics of using Git, but it’s not completely necessary because I’ll explain the commands we will use along the way.


# 1.5 The fastest way to write code

Before we really get into it, I have a question to ask you:


>###### What’s the fastest way to write code?


Think about this question as you read this chapter. I’ll give you _my_ answer soon. 

It might surprise you!


# 1.6 What is rapid development?

Producing reams and reams of code quickly isn’t necessarily _rapid development_:



* When the code produced is unreliable and causes problems, it’s counter productive.
* When the code doesn’t meet the needs of the user, your effort has been partially, and sometimes completely, wasted.

Of course, being able to write code quickly is part of it. As a professional developer you need to be able to touch type.  Ongoing effort to _master_ your programming language is time well spent. Being able to “think in code” really does help, but it takes much practice and experience.

Coding quickly is not the full story of rapid development. Your code also has to work. It has to be reliable. And most importantly your code has to be valuable. If you know how to produce working and valuable code, even slowly, you will outperform many other developers.

Rapid development needs a development process that encourages these attributes for our code:



* Working
* Reliable
* Valuable

More than anything rapid development is a state of mind. It’s a commitment to improving our productivity and effectiveness.  It’s an attitude that you can adopt to accelerate your journey toward being a better developer, progress your career and ultimately, get more satisfaction from your job.


# 1.7 Achieving rapid development

The question then, is how do we achieve rapid development?

We’ll achieve it by targeting the following areas:



* Creating a rapid pace
* Balancing value against cost
* Minimizing wasted time


## 1.7.1 Creating a rapid pace

We must adopt a streamlined process for creating and testing our code. We are looking for techniques, tools and practices that support, empower and scale us.

We aim to deliver working code at a fast pace in regular intervals, but we also need to make sure our process is sustainable. If we burn out, that’s a huge derailment. We need a routine that includes down time so that we can include periods of rest and be able to maintain a rapid pace indefinitely.


## 1.7.2 Balancing value vs cost

As a developer we aim to deliver a flow of useful code for our employer, our organization or our customer. 

We should prioritize our work based on its value. This ensures that we are always working on the most valuable code that we could be working on _right now_.  

However we must also balance the value of the code against the cost to build it.

We should prioritize our work not just by how much it is worth, but also by how much we _estimate_ it will cost to build. So code that is slightly valuable and takes a day to deliver can be a higher priority than code that is extremely valuable and takes a month to deliver.


![The trade off between value and cost](/assets/images/chapter-1/1_1-balance-value.png)
### Figure 1.1: The trade off between value and cost


Development is a balancing act that requires not only thinking about how to code something, we must also understand how the code fits into our team, our company and our product.

One big problem is that sometimes we don’t know how much something costs to build until we are building it. So we need a process that allows us to continuously re-estimate, re-evaluate and reprioritize our work.


## 1.7.3 Minimizing wasted time

Software developers are masters of wasting time. Of course we don’t do it on purpose, but the nature of the game is that there are an infinite variety of distractions vying to derail our productivity.

You have probably experienced some of these yourself:



* We automate things that don’t need to be automated;
* We adopt tools and processes that slow us down;
* We regularly create bugs that take a lot of time to find and fix; _and last but far from least -_
* We waste time on code and features that ultimately will be used infrequently and sometimes not at all;

To adopt the rapid developer mindset we must start with some honesty.  Before we can reduce or eliminate the things that slow us down we need to recognise and identify them.

Removing wasted time from our development process is fundamental to our performance as a developer.


# 1.8 A philosophy for rapid development

Before we can create a process for rapid development we need a philosophy that can help guide us in the creation of it.

Here is my philosophy:



* Nothing is created all at once
* Embed thinking in your process
* Keep your code working
* Manage complexity, avoid complications
* Know when to cut corners


## 1.8.1 Nothing is created all at once

Did you ever have the experience where you were coding for hours (or longer) and then when it came to testing your code you found that it just doesn’t work. 

Or even worse: it did work (kinda), except it had a bunch of hidden bugs that were then, rather embarrassingly, found by your users. 

Coding for a long time before testing is a terrible idea. The reality is that software doesn’t get created like that. A simple truth of software development is that nothing gets created all at once. Successful development is usually done in parts, assembling the product piece-by-piece through an iterative process.

>###### Software development is done through iterations.


By iterations I mean that we take a big complex task (like building a software product) and we break it down into smaller and more easily managed pieces. The _divide and conquer_ approach to development makes the whole job more attainable and it also means we can test our code incrementally instead of doing _big bang_ testing at the end.

![Iterations are crucial to software development](/assets/images/chapter-1/1_2-iterations.png)
### Figure 1.2:  Iterations are crucial to software development

Iterations help us to set a rapid pace. They are the beating drum that keeps us rolling forward. It’s how we make progress toward a larger goal.

By the way, the iterations I’m talking about here could be personal work iterations or they could be team-based iterations, aka Sprints. In this book we are mostly talking about coding at the individual level, but most of this also applies at the team level. The important point is that any big task should be tackled sequentially through a series of iterations.


>##### HOW IT WORKS
>###### Breaking up complex work into small pieces allows regular incremental progress towards completion.



## 1.8.2 Embed thinking in your process

Diving into coding before thinking is often a big mistake. Even though you probably know this already, it is still tempting to get straight into coding without doing any planning.

This _code first, think later_ way of working is prone to errors. The challenge we face is finding ways to break this cycle and intersperse thinking and planning in between sessions of coding.

>###### Put thinking before and after coding.


Thinking is important, because it helps us determine when we are wasting our time by moving in the wrong direction. Iterations give us natural gaps in which we can review and plan our work and reassess if we are still heading in the right direction.

I like to use the Pomodoro Technique for this. As illustrated in Figure 1.3 it gives us a cycle of personal work iterations that are each 25 minutes long and have breaks between them. The start of each Pomodoro is a natural time to rethink what we are doing.

![The Pomodoro technique provides spaces for thinking and rest](/assets/images/chapter-1/1_3-pomodoros.png)
### Figure 1.3: The Pomodoro technique provides spaces for thinking and rest

We don’t always want or need to be moving at a breakneck speed. It’s important that we can slow down when we need to and think about what we are doing.


>###### Pomodoro is the Italian word for tomato and the Pomodoro Technique is named after the ubiquitous tomato shaped kitchen timer.


Having thinking and rest embedded in our process gives us the best chance of making the best decisions whilst maintaining rapid bursts of coding activity. Regular breaks make our process sustainable, giving us the energy we need to make it through our working day.


>###### If you don’t like the 25 minute iterations, change it to another amount you feel more comfortable with.

Frequent re-evaluation supported by iterations allows us to be more dynamic and able to quickly change direction the moment we see a better option. This is especially useful, because sometimes clarity only appears when we are part way through a coding task. There may come a point where you re-estimate the current task to be more difficult than originally estimated, subsequently de-prioritizing it in favor of other tasks that are now higher priority because they are easier to deliver.


>##### HOW IT WORKS
>###### Think while working to know you are still heading in the right direction.   
>###### This avoids time wasted moving in the wrong direction. 


## 1.8.3 Keep your code working

Many developers spend much of their time debugging broken or badly behaving code. To some extent debugging is necessary, but there are many times when the problems that cause debugging can be avoided.

This boils down to what is essentially my most sacred rule of software development: _Keep your code working_. 

This is so important and so fundamental for me, that I sometimes think everyone should already know it, yet I still see other developers working on changes or refactoring without so much as a hint of testing. Why are they surprised to later find that their code doesn’t work?


>###### Don’t tolerate broken code.


Figure 1.4 shows efficient development in action. We take our code through a series of changes, repeatedly going from working state to working state. We do not tolerate broken code, whenever it is detected we fix it and return our code to a working state.

![The process of development is taking your code through a series of changes from working state to working state](/assets/images/chapter-1/1_4-working-state-to-working-state.png)
### Figure 1.4:  The process of development is taking your code through a series of changes from working state to working state


You have to understand that the natural state of code is actually a state of being broken.  It’s almost impossible for anyone to write correct code without testing it. That’s because there’s so many more ways for code to be in a broken state than there are for it to accidentally be in a working state. We must cause code to be in a working state on purpose. In fact, it takes continuous effort and discipline to maintain code in a working state.


>######  The natural state of code is to be broken.

That’s not to say that code breaks by itself. If code works and you don’t touch it, then it won’t just break by itself. It’s only when adding new code or editing existing code that we risk breaking it. It also doesn’t mean that code that seems to work now won’t be found to be broken in the future. Any code can have latent issues waiting to be discovered.

This book will show you many practical ways to avoid broken code.

>##### HOW IT WORKS
>###### Keep your code working at all times and avoid wasted time spent on unnecessary debugging.



## 1.8.4 Manage complexity, avoid complication

The inescapable destiny of modern code is complexity.  Applications are getting bigger, business requirements are growing and customers are more demanding. If we don’t find ways of managing complexity it will slow our pace of development.

>######  Complexity can’t be avoided, but we can manage it through our tools, techniques and process. 

Note that complication is different to complexity. While complexity is a fact of life, complications are usually unnecessary and conspire to slow us down. We should prefer simple solutions and avoid complicated solutions.


>######  Strive for simplicity while coding: avoid complicated tools, techniques and process.


Throughout this book we’ll talk about managing complexity and avoiding complications.


>##### HOW IT WORKS
>###### Avoid time sunk on complex and complicated code. 
>###### Complication should be avoided. 
>###### Complexity can only be managed. 

## 1.8.5 Know when to cut corners

Getting to a solution quickly, artfully avoiding wrong turns and dead ends, is  tricky to get right, but when you understand when it’s ok to take short cuts, you can create a much quicker route to the finish line.

I’m talking about things like this:



* Do you need automated testing? Often start ups can’t afford that level of investment in their code. (We’ll talk about the tradeoffs of automated testing in Chapter 5).
* Can you circumvent your company's usual traditions, process and conventions to demonstrate a groundbreaking new feature quickly? (possibly in a _testbed_ application, which we’ll see in Chapter 5).

Learn where the acceptable boundaries are in your organization. When you know what you can and can’t get away with,  you will find faster ways to deliver your code.


>##### HOW IT WORKS
>###### Understanding when it’s ok to cut corners (and still keep your job) gets you to the finish line faster and more directly.



# 1.9 The fastest way to write code - the answer

Now the answer you’ve all been waiting for… drum roll please.


>######  What’s the fastest way to write code? 


It’s simple. Just don't write the code!

That sounds crazy I know, but if we could use a crystal ball to figure out which of our code is destined for the trash heap, we could simply not write that code in the first place and save ourselves a lot of time. 

The fastest code we can write is the code that we preemptively eliminate because we realize early that we don’t even need it. A sad fact of software development is that so much of the code we write is destined to go unused.

The main problem is that code is expensive. Code is costly to create. Code is costly to maintain. Code creates baggage that we must bear going into the future.

Here’s a less crazy way to look at it: we should _choose carefully the code that we decide to write_. Be cautious where you invest your time! Decide to write code with the most obvious value and be wary of coding something with an unknown value.

I asked this question, _what’s the fastest way to write code_, because I hope it made you think and because it highlights something important about prioritization.

Finding where you can deliver the most value, finding the best place to invest your time: having these thoughts at the front of your mind puts you on a track to being a more effective developer.


# 1.10 Rapid development

We’ve talked through the goals and philosophy of rapid development. Here’s a quick summary. 

We achieve rapid development by:



* Creating a rapid pace
* Balancing the value of code against the cost to build it
* Minimizing the time we are wasting

Our philosophy of rapid development:



* Build software through iterations that include time for rest and thinking
* Always keep your code working
* Complexity is to be managed, complications are to be avoided
* Know when to cut corners

Through the book we'll implement a development process that makes our philosophy of rapid development a reality. 


# 1.11 The example app: _Photosphere_

This first chapter of Rapid Fullstack Development has been theoretical. Now I want to give you a taste of what’s coming up in the rest of the book.

The rest of the book is mostly practical, with theory interspersed.  You can follow along with the coding and together we’ll build a fullstack application while applying the principles and philosophy of rapid development. There’ll be plenty of simple examples and we are also working towards a non-trivial example application called Photosphere.

Photosphere is a photo gallery and backup tool. Initially we’ll be able to upload photos through a web portal and then browse them in the gallery. Toward the end of the book we’ll have a desktop and mobile application that can automatically find photos on our computer and phone and upload them for us. 

This isn’t going to be a blow by blow tutorial on how to create fullstack application, but it will provide plenty of demonstrations of how to implement the theory described in this chapter and build a fast pace of development.


# 1.12 Book overview

Chapter 1 has laid the theoretical  groundwork for rapid development. 

In the coming chapters we’ll implement our philosophy, build our rapid development process and get into coding.

In chapters 2 and 3 we create a simple monolithic version of Photosphere as shown in figure 1.5. I’ll be using this as a platform to explain the rapid approach to development.

![The Photosphere example application: the simple monolithic version](/assets/images/chapter-1/1_5-photosphere-example-app.png)
### Figure 1.5:  The Photosphere example application: the simple monolithic version

In chapter 4 we upgrade the Photosphere backend to support microservices.  This is illustrated in figure 1.6.

Photosphere may seem too simple to require microservices, but trust me I’ll make a good case for it in chapter 4. 

Even though I’ll give you some good reasons for the upgrade to microservices, the real reason for this is simply to demonstrate  rapid development techniques applied to microservices.

![The Photosphere example application with the slightly more complex microservices backend](/assets/images/chapter-1/1_6-photosphere-example-app.png)
### Figure 1.6:  The Photosphere example application with the slightly more complex microservices backend

In chapter 7 we’ll go beyond fullstack and extend Photosphere to have a desktop application implemented with Electron and a mobile application implemented with Ionic. All frontends will share the same backend as illustrated  in figure 1.7.

![The Photosphere example application: beyond fullstack - now supporting desktop and mobile](/assets/images/chapter-1/1_7-photosphere-example-app.png)
### Figure 1.7:  The Photosphere example application: beyond fullstack - now supporting desktop and mobile

In the chapters between building Photosphere we’ll look at automated testing in Chapter 5 and debugging  in Chapter 6. 

Chapter 8 is a walkthrough of the completed Photosphere application and a recap of the rapid development techniques that helped us create it quickly.

In Chapter 9 we’ll finish up by talking about your path forward as a developer: how to create strategies for your ongoing learning and continuous growth.


# Summary



* Rapid development prioritizes code that is working, reliable and valuable.
* We achieve rapid development by
    * Creating a rapid pace;
    * Balancing value against cost; and
    * Minimizing wasted time
* Successfully software development is done through iterations.
* Embed thinking in your process and avoid wasted time heading in the wrong direction.
* The number one rule of development: _Keep your code working_.
* Modern applications tend towards complexity, but complexity can be managed.
* Keep your code simple, try to avoid complications.
* Cut corners, but only when it’s ok to do that.