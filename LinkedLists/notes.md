# Linked Lists Introduction 

3rd Data Structure. Two types of linked lists. Singly and Doubly linked lists. What problem do we encounter with arrays? With static arrays we only have a certain amount of data or memory that can be allocated. Dynamic arrays and static can increase their memory once it hits a certain limit and double up in another location. That operation once in a while of doubling up the array in memory has a performance implication, that costs us O(n). Also arrays had bad performance for insert and delete that have to shift indexes over, especially if you deleted or inserted anywhere that wasn't at the end of the array.

And then came hash tables. They were great. Could store wherever we wanted in memory and hash tables would take care of it for us. Didn't have to worry about problems we had with arrays. Unfortunately, they weren't ordered. How can we solve this problem? Linked lists to the rescue. 

Are Linked lists the best data structures? No. There are tradeoffs as always when it comes to data structures. 

# What are Linked Lists?

What is a linked list? It's a list that is linked. A singly linked list contains a set of nodes. Think of them as blocks, red and green elements. The value you wish to store, and the pointer to the next node in line. Each first node is called the head, and the last node is called the tail. Some people like to call anything after the head, the tail. Preferential thing. 

Linked lists are null terminated, which signifies that it's the end of the list. Know the tail node is the end as it points to null.

Pointer - you hear it a lot in programming and computer science. To focus on linked lists, it's a very simple data structure, simply an element that links to the next element that links to the next element, keeps going until the last element that points to null. Can have them sorted, unsorted, and nodes containing any kind of data type. 

```js
const basket = ['apples', 'grapes', 'pears'];

// psuedo code linked list: apples --> grapes --> pears

apples 
8946 --> grapes 
            8742 --> pears 
                        372 --> null
```

JS doesn't come with linked lists built in. Different languages have different tools built in. JS doesn't have it. Java does. But luckily for us, we can build one! Have the building blocks to be able to build linked lists.

# Exercise: Why Linked Lists? 

Why do you think linked lists might be better than hash tables or arrays? 

Possibly that you can have more in depth lists with more space? For buried information within objects? Might make it easier to navigate. 

# Solution: Why Linked Lists? 

Linked lists have a sort of loose structure that allows you to insert a value into the middle of the list by simply resetting a few pointers. 

In an array when we wanted to insert something that wasn't at the end, had to shift all the items down which cost us a lot of time (O(n)). Main difference between arrays and linked lists, in an array, elements are indexed. In a linked list, you start at the head and traverse the list until you get to whatever item you want, O(n). Traversal is different. Keep going until you hit null. Have to use something like a while loop because don't know how long the list will be.

An array - most computers have caching systems which make reading from sequential memory faster than reading from scattered. Array items are always right next to each other in computer memory. Linked lists and nodes are scattered like hash tables. Iterating over linked lists are slower than arrays, even though both are technically O(n). The inserts you can do in the middle of a linked list are easier than with arrays. What about hash tables? When we insert, scatter all over memory and keep adding it. No unshifting as we do with arrays, which is really really nice. Can also delete nodes very easily versus with an array. One advantage that it has over hash tables is there's some kind of order in linked lists. Each node points to the next node. So can have sorted data, unlike hash tables. 

Big O of linked lists:
**prepend O(1)**
**append O(1)**
**lookup O(n)** have to go one by one. 
**insert O(n)** have to go one by one. 
**delete O(n)** have to go one by one. 
