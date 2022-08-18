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
