# Section Intro
What is a data structure? A data structure is a collection of values. 
Algorithms are the steps or processes we put in place to manipulate these collections of values. 

These two things are what allow us to write programs. 

# What is a Data Structure? 

A Data Structure is a collection of values. The values can have relationships among them and they can have functions applied to them. Each one is different in what it can do and what it is best used for. Each DS is good and specialized for its own thing. 

Can think of DS's as any sort of container. It's simply a file cabinet of different types. Have a backpack, drawers, fridge, folder, box. Put different things in each container. Wouldn't put my food in the drawer as it'll go bad. Wouldn't put all my files or a toy box it'll get crumpled up. Each container is specific to one thing, and that's what data structures are. A way for us to organize data so that we can go into the backpack and retrieve that data easily. Go into the fridge and get the popsicle fast. Can get something and retrieve something from the data structures. 

In programming we have a ton of data structures. Wikipedia article, can see loads. 

Blockchain at the end of the day is simply a data structure. A way to hold info. 

Can store numbers, strings, boolean types. Arrays and objects are types of data structures. 

Always trade offs every programming question has tradeoffs. Readability, memory and speed? Same thing with Data structures, one is better than the other, each one for its own specific case. Two parts to understanding data structures.

1. How to build one. 
2. How to use it. 

# How Computers Store Data 

In order for code to work, variables are stored in Random Access Memory (RAM). Also have storage where have documents, music, files, etc. Data on storage is permanent/persistant. When you turn off your laptop or computer, it's there when you turn it back on. With RAM, it's gone once you turn it off. Persistent storage is slow. 

A computer is run by its CPU, the little worker that does all the calculations. Does the actual work inside our computer. CPU needs access to the RAM and the storage. Can access the RAM a lot faster. 

In order to run Google Chrome, run the CPU to do so. When a variable is run in Chrome, it's run in RAM. Once we close Chrome, want to be able to reopen it. That's what we do when we save an application on our computer. We save it to storage, so next time we open up Chrome, the CPU will grab the program from storage and use it again. And to keep things fast, it'll keep the info in RAM. 

RAM in the computer is a massive storage area, kind of like a data structure. Has shelves that are numbered, call these addresses. Allows us to run programs. Each of these shelves holds 8 bits 1s and 0s. Each number is a Bit. A bit is a tiny electrical switch that can be turned on and off. Instead of calling it on or off, we call it 1 or 0. A bit is called a Byte. Each shelf has 1 Byte of storage. 

Memory controller has connections to all of the shelves individually. Can access different ones immediately. That's what RAM means, can access all the shelves quickly, and right away. Even though the memory controller can access far apart, prefer to do so close to each other. Faster to access 0, and 1, than 0 and 1000. To further optimize this, also have a CPU cache. Where the CPU has a tiny memory where it stores a copy of stuff that's really really recent. 

Why is this important for Data Structures? Data Structures are ways for us to store information. Something about bits of information ehre I didn't catch. 

8-bit(11111111) - 255
16-bit -65,536
32-bit - 2,147,483,647
64-bit (8 shelves instead of 4) - 9,223,372,036,854,775,807

Can store a ton of info in 32 bits. Even more in 64-bit

Something called integer overflow. JS technically doesn't have intergers, it has 64-bit floats. Can create really huge numbers using `Math.pow()`. 

```js
Math.pow(5, 100);
// 7.888609052210118e+69

Math.pow(6, 1000);
// Infinity
```

As the number becomes too large to store in our RAM, need to represent it in something that's tangible, in JS's case, it's `Infinity`. 

Each data type has a number of bits associated with it, so it can be stored in the system. The system allocates that storage and the CPU reads that storage. A data structure is this, an arrangement of data. Can define way you interact with the data and how it's arranged in RAM. Some are organized right next to each other, some are apart, have pros and cons in terms of access and right. Our goal is to minimize the operation that we need to do for the CPU to write information. That's why Data Structures are so powerful. We have a way now to think how Data Structures effect the process of our computers. 

# Data Structures in Different Languages

**Data Structures** 
- Arrays
- Stacks
- Queues 
- Linked Listes
- Trees
- Tries 
- Graphs 
- Hash Tables 

**Algorithms**
- Sorting 
- Dynamic Programming
- BFS + DFS (Searching)
- Recursion

Each language has its own data type. JS has numbers, strings, booleans, undefined. Each language has data structures to organize these data types. In JS we have Arrays and Objects that we use. They are data types. Allows us to structure and organize information. 

Most languages have enough data structures and data types for us to build and create our own data structures. If JS doesn't have stacks, we can build one. 