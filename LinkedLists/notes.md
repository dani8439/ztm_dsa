# Linked Lists Introduction 

3rd Data Structure. Two types of linked lists. Singly and Doubly linked lists. What problem do we encounter with arrays? With static arrays we only have a certain amount of data or memory that can be allocated. Dynamic arrays and static can increase their memory once it hits a certain limit and double up in another location. That operation once in a while of doubling up the array in memory has a performance implication, that costs us O(n). Also arrays had bad performance for insert and delete that have to shift indexes over, especially if you deleted or inserted anywhere that wasn't at the end of the array.

And then came hash tables. They were great. Could store wherever we wanted in memory and hash tables would take care of it for us. Didn't have to worry about problems we had with arrays. Unfortunately, they weren't ordered. How can we solve this problem? Linked lists to the rescue. 

Are Linked lists the best data structures? No. There are tradeoffs as always when it comes to data structures. 