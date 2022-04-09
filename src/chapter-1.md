---
layout: layouts/chapter.html
---
# 1 Bootstrapping Rapid Development	


## Gearing your process for rapid pace

In this chapter, you will learn:



* The who, what, why  and how of rapid development
* How to structure your development process
* About the example application

This book isn’t just about being a fast _coder_. By itself being able to write code quickly isn’t a worthy goal. It isn‘t even a useful goal.

As a _software developer_ you must be able to produce _working_ and _valuable_ code. There's no point writing code quickly otherwise. The real trick to moving quickly is to focus on the aspects of development that help you build your code the _right _way and indeed to make sure that it is the _right _code. 

When we create _broken_ code (it’s so easy to do) we stifle our future progress. 

When we write the _wrong_ code, well then the work we have done will ultimately be wasted (which so often happens).


# 1.1 A software developer’s journey

_Rapid Fullstack Development_ is a book that gives you, a fullstack or aspiring fullstack developer, the help you need to become a better developer, indeed a faster developer, but in the right way.

Well, in truth, there is no right way to do this. We are all different. We each learn in our own unique way. Hopefully though, most of what I teach you is obviously good (in hindsight at least). 

There simply is no one size fits all solution. Software development is too complicated for that and relies too much on situation, context,  judgment and experience. 

We will travel far together in this book. I will impart to you my experience and my judgment. But that won’t always be correct for your situation or context.

All I can say is this: please learn what you can and try it out for yourself. Then take what works for you, adapt what you can and discard the rest. That’s the system that leads you to being an experienced software developer. 

=TODO(Can I fit this somewhere):



* Your habits will define you
* Goals can’t be fulfilled without habits
* Constantly work on good habits and you will be a good developer


# 1.1 Who is this book for?

This book is for JavaScript and/or TypeScript developers who already know the basics of their programming language and are looking for a pathway to a higher level of experience.

If you don’t already know JavaScript or TypeScript you can still read this book, but you will probably have to put in extra effort (using other resources) while you read this book to make sure you understand the code examples presented here.


##### Learning JavaScript


###### =TODO(List JS learning resources here)


# 1.1 What will I learn?

This book starts with theory in this chapter, but most of the rest of the book is very practical.  

In this chapter you learn the theory of rapid development, but we will spend the rest of the book experiencing _how_ to be a rapid developer. 

Our general goals are:



* Create a rapid, but sustainable, pace of development
* Improve our probability of producing working code
* Increase the value of the code we write
* Improve our development cadence: the rate at which we produce _working _and _valuable _code.

This book is accompanied by many working code examples and a complete and non-trivial example application called _Photosphere_ (more about that soon).

You can follow along with the coding, sometimes by coding from scratch and sometimes just by looking at the code that I have already completed. 

=TODO(Might be a good location to insert a link to the GitHub repo)


# 1.1 What do I need to know?

To get the most of this book you should already know the following:



* The basics of JavaScript or TypeScript (you at least should be able to get the gist of code examples)
* The basics of using the command line (creating directories, changing directories, running commands, etc)
* How to use a text editor or IDE (e.g. Notepad++ or Visual Studio Code)

It will also help if you know the basics of using Git, but it’s not necessary because I’ll explain the commands we will use along the way.


# 1.1 The fastest way to write code

Before we really get into it, I have a question to ask you:


###### What’s the fastest way to write code? \


Think about this question as you read this chapter. I’ll give you _my_ answer soon. It might surprise you!


# 1.1 What is rapid development?

Producing reams and reams of code quickly isn’t necessarily _rapid development_. 

When the code produced is unreliable and causes problems, it’s counter productive.

When the code doesn’t meet the needs of the user, your effort has been partially, and sometimes completely, wasted.

Of course being able to write code quickly is part of it. As a professional developer you need to be able to touch type.  Ongoing effort to _master_ your programming language is time well spent. Being able to “think in code” really helps, but it takes time and experience.

Coding quickly is not the full story of rapid development.

Your code also has to work. It has to be reliable. And most importantly it has to be valuable. 

Rapid development needs a development process that supports these priorities for our code:



* Working
* Reliable
* Valuable

More than anything rapid development is a state of mind. It’s a commitment to improving our productivity and effectiveness.  It’s an attitude that you can adopt to accelerate your journey toward being a better developer, progressing your career and ultimately, getting more satisfaction from your job.


# 1.1 Achieving rapid development

The question now is, how do we achieve rapid development?

We’ll achieve it by targeting the following areas:



* Creating a rapid pace
* Balancing value vs cost
* Minimizing wasted time


## 1.1.1 Creating a rapid pace

We must create a streamlined process for creating and testing our code. We are looking to find and employ techniques, tools and practices that enable, empower and scale us.

We want to deliver working code at a fast pace in regular intervals, but we also need to make sure it’s sustainable. If we burn out, that’s really going to derail our work.

We must create a routine that includes down time so that we can include periods of rest so that we can maintain a fast pace indefinitely.


## 1.1.1 Balancing value vs cost

As a developer we aim to deliver a flow of useful code for our employer, our organization or our customer. 

We must prioritize our work based on its value. This ensures that we are always working on the most valuable code that we could be working on _right now_.  

However we must also balance the value of the code against the cost to build it. We should prioritize our work not just by how much it is worth, but also by how much we _estimate_ it will cost to build. So code that is slightly valuable and takes a day to deliver is higher priority than code that is extremely valuable and takes a month to deliver.

=FIG(balance-value.png, balance-value, The trade off between value and cost)


![alt_text](/assets/images/placeholder.png "image_tooltip")


Development is a balancing act that requires not only thinking about how to code something. We also must understand how the code fits into our team, our company and our product.

One big problem is that sometimes we don’t know how much something costs to build until we are building it. So we need a process that allows us to continuously re-estimate, re-evaluation and reprioritize our work.


## 1.1.1 Minimizing wasted time

Software developers are masters of wasting time. We don’t do it on purpose of course: the nature of the game is that there are an infinite variety of distractions that can derail our productivity.

You have probably experienced some of these yourself:



* We automate things that don’t need to be automated;
* We adopt tools and processes that slow us down;
* We regularly create bugs that take a lot of time to find and fix; _and last but far from least -_
* We waste time on code and features that ultimately will be used infrequently and sometimes not at all;

To adopt the rapid developer mindset we must start with some honestly.  Before we can reduce or eliminate the things that slow us down we need to recognise and identify them.

Removing wasted time from our development process is a fundamental part of gaining performance as a developer.


# 1.1 A philosophy for rapid development

Now we need a philosophy to guide the creation of our development process.

This is my philosophy for rapid development:



* Nothing is created all at once
* Build thinking into your process
* Keep your code working
* Manage complexity, avoid complications


## 1.1.1 Nothing is created all at once

=TODO(Iterations set at a rapid pace. It’s the pace/beat of the drum that keeps you moving forward! It’s how you know you are making progress towards completion!)

Did you ever have the experience where you were coding for hours (or longer) and then when it came to testing your code you found that it just doesn’t work. Or even worse: it did work (kinda), except it had a bunch of hidden bugs that you put out in front of your users and they found them!

Coding for a long time before testing is a terrible idea. The reality is that software doesn’t get created like that. A simple truth of software development is that nothing gets created all at once. Successful development is usually done in pieces before assembling the whole. This is another way of saying that software development is done in iterations.


###### Software development is done through iterations \


=FIG(iterations.png, iterations, Iterations are crucial to software development)


![alt_text](images/image2.png "image_tooltip")


By iterations I mean that we take a big complex task (like building a software product) and we break it down into smaller and more easily managed pieces. This _divide and conquer_ approach makes the whole job more manageable (=TODO(accessible? approachable?)) and it also means we can test our code incrementally instead of doing _big bang_ testing at the end.

By the way, the iterations I’m talking about here could be personal coding iterations or they could be team-based iterations, aka Sprints. The important point is that any big task should be tackled sequentially through a series of iterations.


##### HOW IT WORKS


###### Breaking up complex work into small pieces means we can make regular incremental progress towards completion. \



## 1.1.1 Build thinking into your process

=TODO(Thinking helps you avoid wasting time moving in the wrong direction, also helps you know you are working on the most valuable code)

Coding before thinking is a big mistake. Even though you probably know this already, it is always tempting to dive into coding without doing any planning.

This c_ode first, think later_ way of working is prone to errors. The challenge we face is finding ways to break this cycle and put the thinking before and after the coding.


###### Put thinking before and after coding \


Iterations help us structure our process with natural gaps to review and plan our work. I use the Pomodoro Technique for this. As illustrated in =LFIG(pomodoros) it gives us a cycle of personal work iterations that are each 25 minutes long and have breaks between them where we can rest.

=TODO(Diagram should say 25 minutes per iteration)

=FIG(pomodoros.png, pomodoros, The Pomodoro technique provides spaces for thinking and rest)


![alt_text](images/image3.png "image_tooltip")


We don’t always want or need to be moving at a rapid pace and it’s important that we are able to slow down so we can think about what we are doing. Having thinking and rest embedded in our process gives us the best chance of making the best decisions whilst maintaining rapid bursts of coding activity.

Then in-between coding iterations we review and re-prioritize our work. Regular breaks make the process sustainable, giving us the energy we need to continue throughout our working day.


###### Pomodoro is the Italian word for tomato and the Pomodoro Technique is named after the ubiquitous tomato shaped kitchen timer \
 \
If you don’t like the 25 minute iterations, change then to whatever amount you feel more comfortable with

Frequent re-evaluation supported by iterations allows us to be more dynamic and able to quickly change direction the moment we see a better option. This is especially useful, because sometimes clarity only appears when we are part way through a coding task. So there may come a point where you re-estimate the current task to be more difficult than originally estimated, subsequently de-prioritizing it in favor of other tasks that are now higher priority because they are easier to deliver.

You might think that breaking our work into small pieces like this would break our _flow_ state and that would be bad =TODO(another word?). I have actually found it to be the opposite. 


##### Flow 


###### =TODO(Flow definition) \


The problem with flow is that once you are in it you can work for many hours without realizing it, much later _waking up_ to the fact that you have been coding the wrong thing for far too long. 

Breaking flow and reassessing your situation is the only way to know if you are still heading in the right direction. I’ve also found, after much practice in breaking flow and establishing it, that I am now very successful in being able to break and restart my flow state.


##### HOW IT WORKS


###### Think carefully while working to know that you are still heading in the right direction and avoid time wasted moving in the wrong direction. \



## 1.1.1 Keep your code working

=TODO: Many developers spend much of their time debugging broken or badly behaving code. Debugging is sometimes necessary, but many times it can be avoided. Avoid wasted time debugging.

This almost seems so obvious that it should need to be said. For me this is a fundamental, almost sacred rule of development that I sometimes think everyone should already know, yet I still see other developers working on changes or refactoring without so much as a hint of testing. Why are they surprised to later find their code doesn’t work?


######  \
Don’t tolerate broken code \


Figure X shows how efficient development works. We take our code through a series of steps, repeatedly going from working state to working state. We do not tolerate broken code, whenever it is detected it is fixed and returned to the working state.

=FIG(placeholder)


![alt_text](images/image4.png "image_tooltip")



### Figure 1.1: The process of taking your code from working state to working state

You have to understand that the natural state of code is to be broken.  It’s almost impossible for anyone to write correct code without testing it. That’s because there’s so many more ways for code to be in a broken state than there are for it to accidentally be in a working state. We must cause code to be in a working state on purpose. In fact, it takes continuous effort and discipline to maintain code in a working state.


######  \
The natural state of code is to be broken

 \
That’s not to say that code breaks by itself. If code works and you don’t touch it, then it won’t just break by itself. It’s only when adding new code or editing existing code that we risk breaking it. It also doesn’t mean that code that seems to work now won’t be found to be broken in the future. 

=TODO(This book will show you many practical ways to avoid broken code)


##### HOW IT WORKS


###### Keep your code working at all times and avoid wasted time spent on unnecessary debugging. \



## 1.1.1 Manage complexity, avoid complication

=TODO(Complexity/complication can slow our pace.)

The inescapable destiny of modern code is complexity.  Applications are getting bigger, business requirements are growing and customers are more demanding.

Complexity can’t be avoided, but we can work with it and manage it through our tools, techniques and process. We’ll talk about how to manage complexity while coding throughout the book.


######  \
Complexity can’t be avoided, but it can be managed \


Note that complication is different to complexity. While complexity is a fact of life, complications are usually unnecessary and conspire to slow us down. We should prefer simple solutions and avoid complicated solutions.


######  \
Strive for simplicity while coding, avoid complicated tools, techniques and process =TODO(needed?) \


=TODO(We’ll talk about this in the book!)


##### HOW IT WORKS


###### Avoid time sunk on complex and complicated code. Complexity can be managed. 


###### Complication should be avoided. \



# 1.1 The rapid development process

We have addressed the issue which slows us down, now let’s create a development process whose goal is to reduce or eliminate these issues.


## 1.1 Outcome: working code

Our number one goal, through our process, is to keep our code working. But what does _working code_ actually mean?

Here’s a definition of working code:



* Code that is free of syntax errors;
* Runs without significant error; and
* Passes the tests we throw at it.


## 1.1 The coding cycle

At the heart of our personal work iterations is the coding cycle. This loop is the engine that drives development.  =TODO(make sure I define “personal work iterations” earlier).

=TODO(Point out “the loop” in the diagram.)

=TODO(Probably remove the tight feedback part of the loop… that can go in the minimize the distance part)

=FIG(coding-cycle.png, coding-cycle, The coding cycle is a loop that drives our development process)


![alt_text](images/image5.png "image_tooltip")


=TODO(The part about small increments could be moved to “minimized the distance”. Not sure though)

Each small trip around our coding loop produces working code. We code a bit, we check the result. We code a bit, we check the result. And so on. Each time through the cycle we are adding new code or editing existing code.

We are coding in small increments, then testing and assessing the result each time.  Why are the increments small? It’s because small increments of code are easy to achieve, easy to test and easy to prove correct. 


######  \
??? \


How small are the increments? That’s really up to you and might depend on how you work and your situation. But the key is that they really should be very small. Often I’m only coding for a few minutes or writing/editing a few lines of code before I test. Sometimes I code for tens of minutes before I test, but that’s fairly rare. If you are coding for hours before you test, I would say that’s too long. Keep your increments as small as you can, whatever seems sensible to you and fits nicely the way that you like to work.


## 1.1 Testing is not optional

How do we know that our code is working? Because we test it. We test that it compiles and then we exercise it to make sure there are no significant errors. 

Here’s your new mantra: If something is worth coding, it also has to be worth testing.  

Testing is a non-negotiable part of development.  If you aren’t testing your code, that just means your customers are testing it - and depending on what awful bugs they find on your behalf, they might not be _your customers_ for very long.


######  \
Testing your code is your responsibility. \


Coding and testing are supposed to be done together in a tight loop. Testing is not something you can bank up and leave until later. This doesn’t mean your company shouldn’t have testers or QA, they fulfill an important function testing the overall product and integrated output of the development team, but you must test the code you produce to ensure that it works and is reliable.

When coding is done in small increments, the testing is easy. If you only write a few lines of code, then you only have to test those few lines of code. When coding and testing are done in tandem like this, testing is never onerous. This is how testing is meant to be, it shouldn’t be difficult. It only becomes difficult if you bank it up to do later (at which point much of the testing you were supposed to do is forgotten).


## 1.1 The coding cycle unfolded

It’s only when you unfold the coding cycle over a longer period of time that you can really see the power of this process. Imagine this sequence stretched out over hours, days or even months. 

We start from such simple beginnings. Possibly just a single line of code (which is where we’ll start coding the example project in =ELINK(chapter-2). Then we work through a series of code changes.

=FIG(coding-cycle-unfolded.png, coding-cycle-unfolded, The coding cycle rolled out over many iterations)


![alt_text](images/image6.png "image_tooltip")


Each code change is small, simple and easy to test. At no point in this sequence is testing difficult or overwhelming. We have baked testing into the heart of our coding cycle.


######  \
Start simple, each step is simple, progress toward complexity \


Through this series of simple changes we accumulate a large body of working code, starting from simple beginnings and building up to a complex application. 

The key idea is that the starting point is simple and that each subsequent step is simple. It’s really hard to go off the rails when you build software through many small increments of well tested coding.

The duration of the coding cycle is usually shorter than the duration of your personal work iteration. You can see in =FLINK(many-iterations) that multiple trips around the coding loop can be included in each Pomodoro.

=FIG(many-iterations.png, many-iterations, Working and reliable code accumulates over numerous iterations)


![alt_text](images/image7.png "image_tooltip")



##### TODO


###### HOW IT CONTRIBUTES


## 1.1 Capturing working code

The natural state of code is to be broken and it requires constant attention to be sure that it is working. Given this, how do we reliably capture working code? How do we preserve the output of our coding cycle?

The answer is version control software, which you most likely know as _Git<sub>,</sub>_ the modern version control software of choice.

=FIG(version-control.png, version-control, Working code is captured in version control)


![alt_text](images/image8.png "image_tooltip")


We use Git or some other version control software to capture the state of our code after we have tested it. This software has much utility to developers, like enabling collaboration within the development team, but here I’m really only concerned with its ability to track versions of working code. This has important ramifications to our development process for finding bugs and getting ourselves out of trouble, which we’ll talk about later in the book.


######  \
Version control software, ala Git, is how we _capture working code._ \


For now, just know that the right time to use version control is at the end of every small increment of coding, if possible _commit your code_ on every trip through your coding loop. At this point you have made a code change, you have tested it and you know it works. _Commit your code_ now before you break it.

This might seem excessive, but it is the most reliable way to put working code in the _bank_. This gives you a lot of freedom. At any point where you have identified that you have got into a bad situation, e.g. you are staring down the barrel of a bug you can’t fix, you have a way to back out of that situation quickly by resetting to the latest commit, which you _know _is working code. When you do this you won’t lose much code because you have been doing small increments of coding, so there simply isn’t much to lose. 

=TODO(Be nice to have a diagram of getting into trouble, then resetting to an older commit)

The problem, when you have coded for hours without committing, and it can be quite stressful, is that when you hit a bad situation you have two equally bad ways to get out of it:



1. Code your way out of it - which could take hours and who knows if it will work; or
2. Reset to the last commit and losing the recent hours of work that you put in.

Of course you will now be using small well-tested increments of coding with frequent commits to version control. So you’ll be able to use the _get out of jail free card_ that is the _Git reset_. Later in the book we’ll simulate this situation and I’ll show you how to use that.


##### TODO


###### HOW IT CONTRIBUTES


## 1.1 The key to reliable code and a fast process

The most important idea for producing reliable code is this:

Development should be done by taking the code through a series of changes.

We start with working code. We make a change. We test and fix issues. We end with working code. Repeat.

With each code change, we should aim to bring the code back to a working state as quickly as possible.  Working code should be an output of your coding cycle. It is what defines the end of one cycle and the beginning of the next.

To optimize this process, speed up our development process and accumulate working code more quickly, we should aim to reduce the distance between working states. We can achieve this in two ways:



1. Minimize the size of the change (breaking large changes up into series of small changes); and
2. Minimize the time it takes to test the change and verify working code.

=FIG(working-state.png, working-state, Minimize the distance between working states)


![alt_text](images/image9.png "image_tooltip")


This simple idea is so powerful and so easy to bring into your own development process: the faster you can see that your code is working, the faster your pace can be.

Create a tight feedback loop with good testing and you will create a rapid pace of development. We’ll look at techniques for achieving this throughout the book.

=TODO(Think of development as a game… you make a change then the goal is to return the code base to working state. Congress you just achieved an iteration of the coding cycle. Start again!)


##### TODO


###### HOW MINIMIZING THE DISTANCE CONTRIBUTES


## 1.1 Automate your testing

We’ve talked a lot about testing and you might naturally have assumed that I meant automated testing. You might be surprised to learn that I actually use both manual testing and automated testing in my own development process.

The real question is not _is automated testing worthwhile _but _when is automated testing worthwhile?_ 

The answer is, it depends on what you are doing and how you are doing it. We’ll talk in depth about this in =ELINK(chapter: automated testing)

The simple answer is that automated testing is often very worthwhile for code that is evolving and hence needs frequent retesting or code that needs to be very secure or very reliable. 

Automated testing is a big investment in your code. It can pay off big time by saving you many countless and tedious hours of manual testing. Is your code worth the investment? Only you can decide that, but in =ELINK(chapter: automated testing) I’ll help you understand how to make the decision.

The next question you might have could be _is test driven development (TDD) worthwhile? _My answer is _who cares?  _Test first or test last. What matters is that you automated your testing. In =ELINK(chapter: automated testing) we’ll talk about how TDD can really improve your process and how you can learn to cheat and emulate TDD after the fact.

=FIG(automated-testing.png, automated-testing, Automated testing removes time consuming and tedious manual testing)


![alt_text](/assets/images/placeholder0.png "image_tooltip")



##### TODO


###### HOW AUTOMATED TESTING CONTRIBUTES


## 1.1.1 Rapid development: a summary

We’ve talked through the philosophy and process of rapid development. Here’s a summary.

=TODO(Should I call this next bit the principles of rapid development?)

To achieve rapid development we aim to:



* Create a rapid pace
* Balance the value of code against the cost to build it
* Minimize the time we are wasting

Our philosophy of rapid development:



* Build software through iterations that include time for rest and thinking
* Always keep your code working
* Complexity is to be managed, complications are to be avoided

We implement our principles and philosophy through our development process:



* Write code in small well-tested increments
* Capture working code in version control, ala Git

The key to creating reliable code _and _having a fast process is:



* Your code should always be in a working state or you should in the process of returning it to a working state
* Work to minimize the distance between working states and your process will become faster.


# 1.1 The fastest way to write code - the answer

TODO: GOT HERE

Now the answer you’ve all been waiting for… drum roll please.



* Spoiler: There really isn’t a right answer, but I’ll give you my opinion anyway.
* Just don't write it!
* If only we could look ahead, decide what code wasn’t going to be important in the future and just not write it in the first place!
*     - The fastest code you can write is the code that you preemptively eliminate because you realize you don’t even need it.
*     - The fact is that so much of the code we write ends up becoming redundant.
*     - The problem is that code is expensive.
*       - If we were able to could predict what code was redundant or what experiments were going to fail,
*     - We could simply not write that code and then save on everything that it’s going to cost you.
*     - So just keep that in mind.
* Code costs. The cost to write it and the cost to maintain it.
* Code creates baggage that we must bear going into the future.
* - Another way to look at this, we should choose carefully the code that we decide to write.
* Be careful where you invest your time.
*  You should choose to write code with the most obvious value and be wary of coding something with an unknown value.
* I asked this question because I hope it made you think and because it highlights something important about prioritization.
* Finding where you can deliver the most value, finding the best place to invest your time.
* This will make you a more effective developer.


# 1.1 The example app: _Photosphere_

THIS CHAPTER HAS BEEN THEORETICAL, THE REST OF THE BOOK WILL BE PRACITCAL

TOGETHER WE WILL BUILD A FULLSTACK APPLICATION (i’m literally creating this software while I”m writing the book)

THIS IS JUST A QUICK TASTE, JUST A PARA



* What it is, how it works, how we will develop it.
* I’m developing this app as I write this book. So you’ll see it unfold as we progress through the chapters.
* Photo star is the app we'll make through out the book. I'm actually developing the app as I write the book so you can follow along. This won't be a blow by blow tutorial on how to develop a fullstack app, but it will provide plenty of examples for all the rapid dev techniques I want to teach you.

=FIG(placeholder)


![alt_text](/assets/images/placeholder1.png "image_tooltip")



### Figure 1.1: An overview of the example application, Photosphere


# Summary



* Item
* Item
* Item
* Item
* Item
* Item