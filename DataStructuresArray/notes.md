# Arrays Introduction

Arrays are also sometimes called lists, organize things sequentially in memory. One after the other in memory kind of like below:

0 Juice 
1 Apple 
2 Cheese
3 Kale 
4 Mango
5 Grapes
6 Eggs 
7 Bread

Arrays are the simplest and widely used Data Structure. Arrays have the least amount of rules. Stored in contiguous memory (in order), also have the smallest footprint of any data structure. If all you need is to store some data and iterate over it, arrays are the best choice. Especially if you know the indices of the items you are storing. 

lookup or access in arrays are constant time, very fast O(1)
push O(1)
insert linear time O(n)
delete O(n)

```js
//// Arrays introduction 
const strings = ['a', 'b', 'c', 'd'];
// can make a couple of assumptions. 
// 4*4 if on a 32 bit system (4 shelves) = 16 bytes of storage in our RAM. Computer now knows where to find these items

strings[2] // computer knows go to strings[2] and grab the third item from where the array is stored on your memory. 

// in JS we have a few methods we can use with arrays 
// push -- lets us add something at end of the array. 
strings.push('e'); // O(1) operation because just adding at the end, not looping through anything. 

// pop opposite of push will remove the last item off of an array 
strings.pop(); // O(1) because we're not looping, just removing the last item and computer knows where its stored
strings.pop();

// What if we want to add an item at the beginning of the array? 
// unshift 
strings.unshift('x'); // O(n) 

// what are we doing here? remember strings are stored at 0, 1, 2, 3... etc for the array. When we add x with unshift, all of a sudden adding x into the array, but we now have to shift the numbers one spot, because the indexes are still in order. 0 is now x, then 1, 2, 3, 4. Just by doing this, iterated and looped through everything, and reassigned the indexes. So it's O(n). Depending on the size of the array that's how long it will take with looping. 

// what if we wanted to add something in the middle of the array? 
// splice 
strings.splice(2, 0, 'alien'); // O(n)
// ['x', 'a', 'alien', 'b', 'c'];

// to shift, we shifted the indexes after b, and c, over. So looped through after that. So it's O(n/2) because we did half of the array. But our rule of removing constants and simplifying, it becomes O(n)

console.log(strings)
```

# Static vs Dynamic Arrays 

What is the difference between the two?

The one limitation of **static arrays** is that they are fixed in size. You need to specify the number of elements your array will hold ahead of time. Because arrays are allocated in adjacent blocks of memory when created, no guarantee that after we've allocated 7 shelves in memory we can keep adding on, especially in order. We solve this problem with static arrays, by using Dynamic arrays.

**Dynamic Arrays** allow us to copy and rebuild an array at a new location, with more memory if we wanted more memory. We copy the static array, allocate a certain amount of memory, and add the new item. 

In JavaScript you don't really allocate memory, works like dynamic arrays. Unlike C++ where you have to define right from the start. Automatic resizing too with JS. 

Dynamic arrays expand as you add more elements, so don't need to determine size ahead of time. 

May have noticed on the list there's an astrisk next to append. 

lookup O(1)
append* O(1)
insert O(n)
delete O(n)

*can be O(n)

Why? If we remember our array, and underneath the hood JS only created 4 blocks of memory for an array, and we add another letter, because it's a dynamic array, it loops over the items, copies them, moves them to a different location with now 8 blocks of space (it usually doubles the space), so we can keep adding onto it here. So because it does looping it becomes O(n). (This is with `.push()`) Can't assume it's O(1) sometimes it's O(n).

# Classes in JS 

Reference Type 

```js
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
```

Context 

```js
const object4 = {
    a: function() {
        console.log(this)
    }
}
```
Instantiation

```js
class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`WEEEEE I'm a ${this.type}`);
    }
}

const wizard = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
```

# Implementing an Array 

Now that we know how to use arrays, where they are fast and where they are slow, going to get into a part that isn't crucial for interviews. 

Arrays in JS are objects with number based keys.

# Strings and Arrays
Common interview trick. In interviews, should treat any string questions as an array question. Strings are just an array of characters. Most of the time when you get a question like reverse a string, is to convert it to an array, do some kind of operation, and then returning it as a string after you've finished the operations with them. Common interview question. 

# Exercise: Reverse a String 

```js
// Exercise Reverse a String
// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman iH'

function reverse(str) {
    const reversed =  str.split('').reverse().join('');
    return reversed;

    // or return str.split('').reverse().join('');
}
```

# Solution: Reverse a String 

In order to reverse a string, first thing need to do is a check of our input. So that it's not `undefined` or not a string. 

```js
function reverse(str) {
    // check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good';

    }
    const backwards = [];
    const totalItems = str.length -1;
    for(let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    console.log(backwards);

    return backwards.join(''); 
}

reverse('Hi My name is Andrei');
```

Better solution using built in JS methods:

```js
function reverse2(str) {
    return str.split('').reverse().join('');
}
```
Another solution, more modern way to write it: 

```js
const reverse3 = str => str.split('').reverse().join('');
```

Even fancier using the spread operator

```js
const reverse4 = str => [...str].reverse().join('');
```

# Exercise: Merge Sorted Arrays 

```js
mergeSortedArrays([0,3,4,31], [4,5,30]);
// [0, 3, 4, 4, 6, 30, 31]
```

# Solution: Merge Sorted Arrays 

```js
function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 1;
    let j = 1;

    // Check input 
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }

    while (array1Item || array2Item) {
        console.log(array1Item, array2Item);
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item)
            array1Item = arr1[i];
            i++
        } else {
            mergedArray.push(array2Item);
            array2Item = arr2[j];
            j++;
        }
    }

    return mergedArray;
}
```

# Arrays Summary 

**When you should use an array:**
1. Fast Lookups
2. Fast push/pop
3. Ordered. 

**When you shouldn't use an array:**
1. Slow insterts.
2. Slow deletes.
3. Fixed size* **if using static array*