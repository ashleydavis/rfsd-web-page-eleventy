---
layout: layouts/chapter-1.html
---

<h1 id="chapter-1" class="chapter-heading">
1 Working <em>and</em> valuable
</h1>

<h2 class="chapter-sub-heading">
Gearing your process for rapid pace
</h2>

In this chapter, you will learn:

* The who, what, why and how of rapid development
* About the philosophy of rapid development
* About the example application we'll be building in this book

This is a book about rapid development. But it isn’t just about being a fast _coder_. By itself being able to write code quickly is not a worthy goal. It’s not even a useful goal.

>###### As a _software developer_ you must be able to produce _working_ and _valuable_ code.

If you can't write code that works, if you can't write code that's valuable, there's little point being able to write code quickly. The real trick to moving quickly is to focus on the aspects of development that help you build your code the _right_ way and indeed to make sure that it is the _right_ code.

When we create _broken_ code (it’s so easy to do) we stifle our future progress.

When we write the _wrong_ code, the work we have done is ultimately wasted (which so often happens).

This book will help you to create working and valuable code, quickly. But we can't do that without building a solid foundation for good coding.

# 1.1 A software developer’s journey

_Rapid Fullstack Development_ is a book that gives you, a fullstack developer (or someone working towards that) the help you need to achieve your goal of becoming a better developer, indeed a faster developer, but we’ll do it in the right way.

Well, in truth, there is no right way to do this. We are all different and there are as many different ways to _do_ software development as there are developers. We each learn in our own unique way and there simply is no _one size fits all_ solution. Software development is too complicated for that and relies too much on situation, context, judgment and experience.  The thing that makes _you_ a good software developer might very well be different to the thing that works for someone else.

One thing I know for sure is that goals alone aren’t enough to achieve anything. Goals can’t be fulfilled without having the habits to back them up. Your habits will define you. Create good habits and you will become a good developer. Create bad habits and … well you get the idea.

You already have the goal of improving yourself as a developer, but you still need some help creating the habits that push you toward that goal.


# 1.2 Who is this book for?

This book is for JavaScript and/or TypeScript developers who already know the basics of their programming language and are looking for pathways to a higher level of skill.

If you don’t know JavaScript or TypeScript you can still read this book, but you will probably have to put in extra effort (using other resources) while reading to make sure you understand the code examples.


>##### Learning JavaScript
>###### Here are some recommended resources for learning JavaScript:
>###### - **You don’t know JS Yet** by Kyle Simpson
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
* Improve our development cadence: the rate at which we produce _working_ and _valuable_ code.

This book is accompanied by many working code examples for you to follow along with and a complete non-trivial example application called _Photosphere_ (scroll down to figure 1.5 to see how it will eventually look).

This doesn’t work without you trying it for yourself. Only by following along with the coding (starting in Chapter 2) can you really experience it. Then you must apply what you learn to your own development process. Take what works for you, adapt what you can and discard the rest.  That’s a winning system that leads you to being an experienced software developer.


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

Of course, being able to write code quickly is part of it. As a professional developer it’s best if you can type quickly and without looking at the keyboard.  Ongoing effort to _master_ your programming language is time well spent. Being able to “think in code” really does help, but that takes a lot of practice and experience.

You should be pleased to realize that coding quickly is not the full story of rapid development. Your code also has to work. It has to be reliable. And most importantly your code has to be valuable. If you know how to produce working and valuable code, even slowly, you will already be able to outperform many other developers.



Rapid development needs a development process that encourages these attributes for our code:



* Working
* Reliable
* Valuable

More than anything rapid development is a state of mind. It’s a commitment to improving our productivity and effectiveness.  It’s an attitude that you can adopt to accelerate your journey toward being a better developer, progress your career and ultimately, get more satisfaction from your job.


# 1.7 Achieving rapid development

The question now is how do we achieve rapid development?

We’ll achieve it by through the following principles:



* Creating a rapid pace
* Balancing value against cost
* Minimizing wasted time


## 1.7.1 Creating a rapid pace

We must create a streamlined process for creating and testing our code. Our process should consist of techniques, tools and practices that support, empower and scale us. Elements of our process that slow us down should be jettisoned.

We aim to deliver working code at a fast pace in regular intervals, but we also need to make sure our process is sustainable. If we burn out, that’s a huge derailment of our productivity. We need a routine that includes down time so that we can include periods of rest and be able to maintain a rapid pace indefinitely.


## 1.7.2 Balancing value vs cost

As a developer we aim to deliver a flow of useful code for our employer, our organization or our customer.

We should prioritize our work based on its value. This helps to ensure that we are always working on the most valuable code that we could be working on _right now_.

But it’s not just the value of the code we need to consider, we must also balance the value of the code against the cost to build it.

We should prioritize our work not just by how much it is worth, but also by how much we _estimate_ it will cost to build. So code that is slightly valuable and takes a day to deliver can be a higher priority than code that is extremely valuable and takes a month to deliver. 

![The trade off between value and cost](/assets/images/chapter-1/1_1-balance-value.png "Figure 1.1:  The trade off between value and cost")
#### Figure 1.1:  The trade off between value and cost

Development is a balancing act that requires not only thinking about how to code something, we must also understand the value of our code and how it fits into our team, our company and our product.

One big problem is that sometimes we don’t know how much something costs to build until we are building it. So we need a process that allows us to continuously re-estimate, re-evaluate and reprioritize our work.


## 1.7.3 Minimizing wasted time

Software developers are masters of wasting time. Of course, we don’t do it on purpose, but the nature of the game is that there are an infinite variety of distractions vying to derail our productivity and we spend too much time on things that aren’t very important.

You have probably experienced some of these yourself:

* We automate things that don’t need to be automated;
* We adopt tools and processes that slow us down;
* We regularly create bugs that take a lot of time to find and fix;
* We waste time on code and features that ultimately will be used infrequently and sometimes not at all;
* And finally; we often burn time trying to get that last ounce of unnecessary perfection from our code.

To adopt the rapid developer mindset, we must start with some honesty.  Before we can reduce or eliminate the things that slow us down, we need to recognize and identify them. We should train ourselves to be wary of any task that consumes time, but is not necessary.

Removing wasted time from our development process is fundamental to our performance as a developer.


# 1.8 A philosophy for rapid development

To create a development process for rapid development, we first need a guiding philosophy. Here is the philosophy that we’ll embrace in this book:

* Nothing gets created all at once
* Embed thinking in your process
* Keep your code working
* Manage complexity, avoid complications
* Know when to cut corners


## 1.8.1 Nothing gets created all at once

Did you ever have the experience where you were coding for hours (or longer) and then when it came to testing your code you found that it just doesn’t work.

Or even worse: it did (kind of) work, except it had a bunch of hidden bugs that were then, rather embarrassingly, found by your users.

Coding for a long time before testing is a terrible idea. The reality is that software doesn’t get created like that. A simple truth of software development is that _nothing gets created all at once_. Successful development is usually done through a series of increments, assembling the product piece-by-piece through an iterative and evolutionary process.


>###### Software development is done through iterations.


By iterations I mean that we take a big complex task (like building a software product) and we break it down into smaller and more easily managed pieces. This _divide and conquer_ approach to development makes the whole job more attainable because we can see the milestones along the path. It also means we can test our code bit by bit instead of doing _big bang_ testing at the end (that usually doesn’t work out so well).

Iterations help us to set a rapid pace. They are the beating drum that keeps us rolling forward. It’s how we make incremental progress toward a larger goal.

By the way, the iterations I’m talking about here could be personal work iterations or they could be team-based iterations, aka Sprints. In this book we are mostly talking about coding at the individual level, but most of this also applies at the team level. The important point is that any big task should be tackled through a series of iterations.

![Iterations are crucial to software development](/assets/images/chapter-1/1_2-iterations.png "Figure 1.2:  Iterations are crucial to software development")

#### Figure 1.2:  Iterations are crucial to software development
>##### HOW IT HELPS
>###### Breaking up complex work into small pieces allows regular incremental progress towards completion.

## 1.8.2 Embed thinking in your process

Diving into coding before thinking is often a big mistake. Even though you probably know this already, it is still tempting to get straight into coding without doing any planning.

This _code first, think later_ way of working is prone to errors. The challenge we face is finding ways to break this cycle and intersperse thinking and planning in between sessions of coding.

>###### Put regular sessions of thinking between bursts of coding.



Thinking is important, because it helps us determine when we are moving in the wrong direction and wasting our time. Iterations give us natural gaps in which we can review and plan our work and continuously reassess if we are still heading in the right direction.

I like to use the Pomodoro Technique for this. As illustrated in Figure 1.3 it gives us a cycle of personal work iterations that are each 25 minutes long and have breaks between them. The start of each Pomodoro is a natural time to rethink what we are doing.

We don’t always want or need to be moving at a breakneck speed. It’s important that we have times when we can slow down when necessary and think about what we are doing.


>###### Pomodoro is the Italian word for tomato and the Pomodoro Technique is named after the ubiquitous tomato shaped kitchen timer.

![Figure 1.3: The Pomodoro technique provides spaces for thinking and rest](/assets/images/chapter-1/1_3-pomodoros.png "Figure 1.3: The Pomodoro technique provides spaces for thinking and rest")
#### Figure 1.3: The Pomodoro technique provides spaces for thinking and rest

Having thinking and rest embedded in our process gives us the best chance of making the best decisions whilst maintaining rapid bursts of coding activity.

Regular breaks make our process sustainable, giving us the energy we need to make it through our working day.


>###### If you dislike 25 minute iterations, change to another amount you feel more comfortable with.

Frequent re-evaluation supported by iterations allows us to be more dynamic and able to quickly change direction the moment we see a better option. This is especially useful, because sometimes clarity only appears when we are part way through a coding task. There may come a point where you re-estimate the current task to be more difficult than originally estimated, subsequently de-prioritizing it in favor of other tasks that are now higher priority because they are easier to deliver.


>##### HOW IT HELPS
>###### Thinking while working keeps you heading in the right direction.
>###### This helps avoid wasted time spent moving in the wrong direction.



>##### LEARN MORE
>###### Search for “Pomodoro Technique” and “Timeboxing”.



## 1.8.3 Keep your code working

Many developers spend much of their time debugging broken or badly behaving code. To some extent debugging is necessary, but there are many times when the problems that require debugging can be avoided.

This boils down to what is essentially my most sacred rule of software development: _Keep your code working_.

This is so important and so fundamental for me, that I sometimes think everyone should already know it, yet I still see other developers working on changes or refactoring without so much as a hint of testing. Why are they surprised to later find that their code doesn’t work?


>###### Don’t tolerate broken code.


Figure 1.4 shows efficient development in action. While working on new or updated features we take our code through a series of changes. The key milestone at each point is that we have working code. Development is taking our code through a succession of changes repeatedly going from working state to working state.

We do not tolerate broken code, whenever it is detected, we fix it and immediately return our code to a working state.

![The process of development is taking your code through a series of changes from working state to working state](/assets/images/chapter-1/1_4-working-state-to-working-state.png "Figure 1.4:  The process of development is taking your code through a series of changes from working state to working state")
#### Figure 1.4:  The process of development is taking your code through a series of changes from working state to working state

You have to understand that the natural state of code is actually a state of being broken.  It’s almost impossible for anyone to write correct code without testing it. That’s because there’s so many more ways for code to be in a broken state than there are for it to accidentally be in a working state. We must cause code to be in a working state on purpose. In fact, it takes continuous effort and discipline to maintain our code in a working state.


>######  The natural state of code is to be broken.

That’s not to say that code breaks by itself. If code works and you don’t touch it, then it isn't just going to break by itself. It’s only when adding new code or editing existing code that we risk breaking it. It also doesn’t mean that code that seems to work now won’t be found to be broken in the future. Any code can have latent issues waiting to be discovered.

One key to creating working code is getting _fast_ _feedback_. The faster we can go from making a code change, however small, to seeing it work (or not work) the more quickly we can develop working code. Through this book, especially in chapters 2, 3 and 4, we’ll create a development pipeline with almost immediate feedback, we’ll also cover many practical ways to avoid broken code.


>##### HOW IT HELPS
>###### Keep your code working at all times and avoid wasted time spent on unnecessary debugging.



## 1.8.4 Manage complexity, avoid complication

Have you ever felt overwhelmed by the complexity of your codebase? Or maybe that it has grown so complicated that it's out of control. Did you know that there is a difference between complexity and complication?

The inescapable destiny of modern software development is complexity.

Applications are getting bigger; business requirements are growing and customers are more demanding. The knock-on effect is that our software products are becoming ever more complex.

Our products have an increasing number of moving parts with exponentially growing interactions: that’s the nature of complexity.  As developers we must find ways of dealing with complexity to stop it bringing our pace of development to a crawl.


>###### Complexity can’t be avoided, but we can manage it through our tools, techniques and process.


Fortunately, we have many ways to tackle complexity while coding, including:

* Creating abstractions;
* Componentizing our code;
* Using common conventions, patterns and terminology; and
* Employing tools and processes to help us scale our development process.

Talking about complication on the other hand, it is quite different from complexity. While complexity is a fact of life, complications are usually unnecessary, but they also conspire to slow us down.

A truth that can be difficult to see is that we _can_ create complex products (products with many interacting parts) that are built from simple, not complicated, parts. Building complex products from simple parts is an ongoing theme in this book.


>###### Strive for simplicity while coding: prefer simple code and solutions over complicated ones.
>###### Avoid complicated tools, techniques and processes.


There are many benefits to writing simple code. To start, it is easier to understand. This is great when other people (or maybe your future self) have to work with your code. But the most substantial benefit of simple code is that simple code is easy to test, and code that is easy to test is easier to _keep working_.

One way that code gets complicated is through _optimization_. So don’t be too quick to optimize your code. Personally, I aim for good performance code, the best that I can achieve quickly anyway, but only when it doesn’t sacrifice simplicity. There’s a good reason Donald Knuth said that _premature optimization is the root of all evil_. Unecessary optimizations, those that can't be justified or measured, waste our time and complicate our code for no good reason.

Another way that code gets complicated is by _over engineering_, also known as _future proofing_ your code. Experienced developers recognize when they are doing this, because so often in the past they have overly-complicated their code making it flexible enough to handle situations they later realized would never happen.

It’s very liberating to understand that you should be coding for _now_ and not so much for _later_, but like anything in software development it’s a balancing act that relies on our judgment and our experience (and sometimes a bit of luck, because we won’t always get it right!).


>###### The natural state of code is to be overly complicated.


It’s important to note that writing simple code isn’t exactly easy. By default, our code seems to come out complicated and convoluted. It can take substantial effort (it gets easier with practice though) to write our code to be as simple as it can be, but still do the job it needs to do.

Throughout this book we’ll talk about ways to actively manage complexity. We’ll see how to write simpler, less complicated, code. We’ll learn how to let good design emerge naturally through continuous refactoring supported by good testing.


>##### HOW IT HELPS
>###### Avoid time sunk on complex and complicated code. 
>###### Complexity can be managed. Complications should be avoided.

## 1.8.5 Know when to cut corners

Getting to a solution quickly, artfully avoiding wrong turns and dead ends, is tricky to get right, but if you understand where shortcuts are ok, you can create a much quicker route to the finish line.

I’m talking about things like this:



* Does your code really need to be perfect? (Who even gets to decide what perfect means?) _Ok and useful_ is preferable to _almost perfect and not yet published_.
* Do you need automated testing? Often startups can’t afford this level of investment in their code. (We’ll talk about the tradeoffs of automated testing in Chapter 5).
* Can you circumvent your company's usual traditions, process and conventions to demonstrate a groundbreaking new feature quickly? (Possibly in a _testbed_ application, which we’ll see in Chapter 4).

>###### Perfection is the enemy of productivity.


Learn where the acceptable boundaries are in your organization. When you know what you can and can’t get away with, you will find faster ways to deliver your code.


>##### HOW IT HELPS
>###### Understand where  it’s ok to cut corners (and still keep your job).
>###### This gets you to the finish line faster and more directly.

# 1.9 The fastest way to write code - the answer

Now the answer you’ve all been waiting for… drum roll please.

>###### What’s the fastest way to write code?

It’s simple. Just don't write the code!

That sounds crazy I know, but if we could use a crystal ball to figure out which of our code is destined for the trash heap, we could simply not write that code in the first place and save ourselves a lot of time.

The fastest code we can write is the code that we preemptively eliminate because we realize early that we don’t even need it. A sad fact of software development is that so much of the code we write is destined to go unused.

The main problem is that code is expensive. Code is costly to create. Code is costly to maintain. Code creates baggage that we must bear going into the future.

Here’s a less crazy way to look at it:

>###### Choose carefully the code that you decide to write.

Be cautious where you invest your time! Decide to write code with the most obvious value and be wary of coding something with an unknown value.

I asked this question, _what’s the fastest way to write code_, because I hope it made you think and because it highlights something important about prioritization.

Thinking about where you can deliver the most value, thinking about the best place to invest your time - these are the kinds of thoughts that put you on track to more effective software development.


# 1.10 Rapid development

We’ve talked through the goals and philosophy of rapid development. Before we move on, here’s a quick summary.

Rapid development is not just about coding quickly, we also need to produce code that is working, reliable and valuable.

We achieve rapid development by:



* Creating a rapid pace
* Balancing the value of code against the cost to build it
* Minimizing the time we are wasting

Our philosophy of rapid development:



* Build software through iterations, including time for rest and thinking
* Keep your code working
* Manage complexity, avoid complications
* Know when to cut corners

Through this book we'll create a development process that implements our philosophy of rapid development and makes it a reality.


# 1.11 The example app: _Photosphere_

While this first chapter has been theoretical, the rest of the book is mostly practical, with some theory interspersed. Here’s a taste of what’s coming up.

You can follow along with the coding and together we’ll build a fullstack application while applying the philosophy of rapid development. There’ll be plenty of simple examples, but we are also working towards a non-trivial example application called _Photosphere_. You can see how it will eventually look in figure 1.5. A live demo is available here: https://photosphere-100k.codecapers.com.au/

![Figure 1.5: How Photosphere eventually looks](/assets/images/chapter-1/1-5-photosphere-later.jpg "Figure 1.5: How Photosphere eventually looks")

#### Figure 1.5: What the Photosphere frontend will look like later in the book

Photosphere is a photo gallery and backup tool. Initially we’ll be able to upload photos through a web portal and then browse them in the gallery. Toward the end of the book, we’ll exploring building desktop and mobile applications from a shared codebase.

Through building Photosphere we’ll learn the techniques, habits and attitude we need to create a fast pace of development.

# 1.12 Book overview

Chapter 1 has laid the theoretical groundwork for rapid development. In the coming chapters we’ll implement our philosophy, create our development process and actually build the Photosphere application.

In chapters 2 and 3 we create a simple monolithic version of Photosphere as shown in figure 1.6. We’ll use this as a vehicle through which to explain the foundations of an effective development process.

![Figure 1.6:  The Photosphere example application: the simple monolithic version](/assets/images/chapter-1/1-6-photosphere-monolithic.png "Figure 1.6:  The Photosphere example application: the simple monolithic version")

#### Figure 1.6:  The Photosphere example application: the simple monolithic version

In chapter 4 we'll explore the planning and prototyping that led to the development of Photosphere.

In chapter 5 we'll talk about testing and look at the test driven development (TDD) that created Photosphere's gallery layout algorithm.

In chapter 6 we'll talk about how to choose the right solutions to problems through the development process. 

In chapter 7 we'll learn how to be more effective at debugging and problem solving.

In chapter 8 we’ll take our first steps beyond fullstack and extend Photosphere with a desktop application implemented with Electron and a mobile application implemented with Capacitor. All frontends will share the same backend as illustrated in figure 1.7.

In Chapter 9 we'll wind up with a review, what an effective process looks like and how to scale yourself and your team.

![Figure 1.7:  The Photosphere example application: beyond fullstack - now supporting desktop and mobile frontends](/assets/images/chapter-1/1-7-photosphere-with-multiple-frontends.png "Figure 1.7:  The Photosphere example application: beyond fullstack - now supporting desktop and mobile frontends")

#### Figure 1.7:  The Photosphere example application: beyond fullstack - now supporting desktop and mobile frontends

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