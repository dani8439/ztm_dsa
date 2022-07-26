# Hash Tables Introduction 

Hash Tables or Hash Maps/Maps/Unordered Maps/Dictionaries/Objects. Many ways to call this data structure. Different languages have different names for it and slight variations on the hash tables. 

Objects in js are a type of hash table. 

Absolute must to know. Every language has a built in type. Ruby has hashes. Very important in computer science. Extremely useful. 

But what are they? What does the name hash table even mean? Imagine you're going grocery shopping, have an object, `basket` and want to add grapes to it, `basket.grapes`. `basket.grapes = 10000`. Because we're buying 10,000 grapes. How would we store this with arrays? It would be a little more difficult. With an object, get to set a key, value pair. Lots of benefits. 

The way the hash table works is we have the key, "grape", and this key is used as the index of where to find the value in memory. With arrays, the index is the number. With hash tables, we use grabpes to find it in the memory shelf. Done using something called the hash function. We pass grapes into it, the black box will do some magic, and out of it will come a key into which an index where we want to store this value. So our 10000 grapes can be stored in the memory address 711. Technically it stores both the key, and the value. The black box/hash function gets to decide where to put the data on our memory, on our computers. But what is this black box? Why does it get to decide where to put all the information? 

# Hash Function
What is a hash function? It's something that's used all across computer science. A hash function that generates a value of fixed length for each input that it gets. What does that mean? 

There's a md5 Hash Generator. Can go to the website and play around (also SHA-1, SHA-256 generators). We give it an input, and the function generates a random pattern.

It's one way. If you give someone the hash, they have no idea what the input is. 
Second is, no matter how many time we put `hello` in there, it's the same hash. But as soon as you change it, it's a different output. This is what we call **idempotent**. It's a fancy way of saying that a function given an input always outputs the same output. One benefit and why we'd want to use this in a data structure is we get really fast data access.

All we have to do to find grapes, or `basket.grapes` is pass `grapes` in, it generates the number, and we immediately know where it is in memory on our computer. 

It takes `grapes` converts it to some gibberish where it's an index space for this number. With hash tables, all we need to do is give it a key and we know exactly where it is in our memory. Doesn't the hash function slow things down? Every time we want to add a property and a value to a hash table, we have to run it through the hash function, so we can decide where to put it in memory? That is a big factor. Don't want it to take a long time. Every time you add a property to memory we need it to be really fast. Underneath the hood, they're implemented with an optimum hashing function that's really really fast. 

Hash functions like `SHA-256` take a really long time. You want it to take longer when it's used with cryptogrophy. 

To review, we have a key that is grapes, send it through a hash function that will hash something really fast, then map whatever it should be in the memory address where we want to store our data. We typically leave it to whatever framework or language we're using. Usually assume a Big O of `O(1)` as it happens really fast. 

# Hash Collisions 

Looking at hash functions we can think about what actions they perform and how fast it can be done. 

`insert O(1)` we hash the key such as `.grapes` through the hash function and places it automatically into the address space.
`lookup O(1)` same wasy as above. 
`delete O(1)` same thing. Use the key, know where to delete the item from. Because it's not ordered, don't have to shift indexes. Everything is nice and simple. 
`search O(1)` if we want to find something in our basket, that's easy too. Simply use hash functions. 

```js
let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('ahhhhhhh!');
    }
}

user.age // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1)
```

When we run this function above, everything gets placed in memory at different addresses. Can access everything really fast. O(1). Hash tables are amazing, we should be using them all the time! But in certain cases. Always pros and cons. 

One of the main problems with hash tables. Hash function randomly assigns a space in memory. But nothing tells the hash function to evenly distribute until everything is full. But it also matters what we put into it. Puts two things in one spot. But does something funny when it does. It's called **collision** 

**Collision** is when something gets hashed and stored in something called buckets. Goes to put something in the same address space. Need a way to store both users in the address space. Something funky is going on though. It's a new data structure (**Linked List**). With hash tables, we can't avoid this collision, especially with limited memory. 

There is a possibility that we constantly just add to the same memory space. Which slows down our ability to access or insert information because now if we want to check what's in the address space, have to traverse the linked list. 

Theoretically when you have a collision it slows down reading and writing a hash table with `O(n/k)` where `k` is the size of your hash table. And because we remove constants, it becomes an `O(n)` operation. Collision will likely happen in every hash table implementation. Not a common interview question, but do want to know abou tit so we can talk about it. 

If we go to wikipedia, and Hash tables, and look at hash collision, there's a ton of different ways to solve this. There's separate chaining, open addressing, Robin Hood hashing. All sorts of ways to fix it. There is a bit of a downside. When we talk about fast lookups in hash tables, occasionally it might take O(n) depending on the hash function.

# Hash Tables in Different Languages 

Hash tables are implemented differently in different languages. Most of the time the key and the value can be any type of data structure. Can have a function as a value. Another object if we want as a value. Can have an array. Can do this in arrays as well. Not just numbers and strings. Can also have keys that are more than just strings. Could potentially have functions as keys, and a value that is also a function. 

In JS in an object, if you pass a key that is a number or a function, it gets stringified and it only allows string keys. With ES6, you have `Map` and `Sets`. 

A `Map` is created like `const a = new Map()`. Different between an object and a map is that a map allows you to save any data type as the key. With an object you can only save the key as a string. With a map, it allows us if we want, to even have functions or arrays as keys. Another benefit of Map is that it maintains insertion order. 

With an object there is no order. Our data is inserted randomly in different places. When we grab all the values of an object, there is no order like there is with arrays. But there are some versions of hash tables like maps in JS that maintain this order of insertion, so when we loop through, we have this maintained order. 

`Set` is another feature, sort of like a Map, but it only stores the keys and no value. `const b = new Set()`. Each language comes with its own pre-built versions of data structures. At the end of the day, all of them are hash tables.

# Exercise: Implement a Hash Table

```js
class HashTable {
  constructor(size){
    this.data = new Array(size);
    // [['grapes', 10000]]
    set = function(key, value) {
        this.data[this._hash(key)] = value
    };
    get = function(key) {
        console.log(this.data[this._hash(key)])
    }
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
```

# Solution: Implement a Hash Table
The underscore `_` is to implement private properties that can't be accessed from the outside. With JS ES6, put in the underscore to say it's a private property. Developer standard to let other people you shouldn't be accessing it, even though you technically can. 

If we enter in `myHashTable._hash('grapes')`, creates a new variable with hash = 0. Key grabs the length of grapes, which is 6, add 0, which comes from the `let hash` and `key.charCodeAt()` gives us in interger between 0 and 65535 representing the UTF-16. Just an encoding. Saying give me a character code, because in memory a string or a letter is represented as a number. So we'll get the character code for g, multiply it, modulo operator to make sure it stays within the length of 50, the size of our data. Then return the hash. 

Easiest way to see what's happening is to add in a `console.log(hash)` and watch it loop through `grapes` character by character. Generates a hash. Keeps going until we get 23 at the end. 

Using our hash function, do our first method, lets create the set method. Recieves a key and a value.

```js
class HashTable {
  constructor(size){
    this.data = new Array(size);
    // [['grapes', 10000]]
}

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
        console.log(hash)
    }
    return hash;
  }

  // O(1)

  set(key, value) {
    // store the data we're inserting, the key and value, in this address space that is created by our hash function. Give it the key of grapes. 
    let address = this._hash(key);
    // if this.data[address] doesn't exist and there's nothing there, because of hash collisions, in that case, add that data
    if (!this.data[address]) {
        this.data[address] = [];
        // this.data[address].push([key, value])
        // console.log(this.data)
    } // otherwise if there is nothing in that address space, simply add onto that array this is nicer and cleaner so that when we run this 
    // else {
    this.data[address].push([key, value])
    return this.data;
  }
  // O(1)

  get(key) {
    // going to the exact same thing, of running it through the black box hash function to get the address of where we want to go. 
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket);
    // if current bucket has something in it, we'll do something, otehrwise return undefined because there's nothing in the bucket/array
    if (currentBucket.length) {
        for(let i = 0; i < currentBucket.length; i++) {
            // apples, grapes, etc. If grapes matches with the key, in that case, return ...
            if(currentBucket[i][0] === key) {
                // because we want the 10000 number. It will be 54 if we switch to apples. 
                return currentBucket[i][1];
            }
        }
    } // O(1) or can become O(n) in our bad example. 
    return undefined
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
```

# Keys()
Keys allows us to iterate or loop through all the keys of our hash table (grapes and apples). If we run `key()` ideally it will iterate and spit out grapes, apples and oranges for us. 

```js
keys() {
  const keysArary = [];
  for (let i = 0; i < this.data.length; i++) {
    if (this.data[i]) {
      // gotcha need the [0] to remove outer array, and another [0] to get the actual element of grapes, apples, oranges
      console.log(this.data[i][0][0]);
      keysArray.push(this.data[i][0][0])
    }
  }
  return keysArray;
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
myHashTable.keys();
```

Downside is we have to loop through the entire memory space in order to find our keys. So much easier with arrays. Imagine if we had a hash table of 500, huge amount of looping! Maybe if we're using this type of method with `keys()` objects might not be the best idea. 

Can use `for in` loops in js to loop over items in an object. It's very very slow. No guaranteed order. Putting items randomly in a shelf but when we retrieve them they are randomly unordered. 

# Extra: keys() Without Collision

Enhanced `keys()` method to include hash collision prevention.

```js
 keys() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0])
            }
          } else {
            result.push(this.data[i][0])
          } 
        }
    }
    return result; 
  }
```

# Hash Tables VS Arrays 

**Arrays**                **Hash Tables**
search O(n)    |        search O(1)
lookup O(1)    |        insert O(1)
push* O(1)     |        lookup O(1)
insert O(n)    |        delete O(1)
delete O(n)    |

Why Hash Tables? They're great when you want quick access to certain values. Searching through an array for an item takes a long time, have to loop through the entire array. With hash tables it's really fast. It's why you see Hash tables in places like databases. Similarly, inserting items in a hash table, unlike an array that might shift indexes, is typically O(1). Simply have to hash and create the key. Although we have those cases of collision, most of the time we don't have to worry about it too much and have an insert of O(1). Arrays let you look up the value for a given key. Keys are called indexes in an array, don't get to pick them. In hash tables we can pick them. So hash tables is kind of like a hack on top of an array to let us use flexible keys instead of being stuck with 1, 2, 3. A problem with hash tables is that is the idea of no concept of order. In arrays each item is placed next to each other in memory. Hash tables are kind of placed all over in memory. 

# Exercise: First recurring CHaracter 

```js
//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
```

# Solution: First Recurring Character


Naive approach. Nested for loop. O(n^2)
```js 
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    // start at 1 to compare with the second character, skipping a loop
    // trick to always go 1 to the right of where i is in the indexes so it loops properly in the sub loop. So as the i loop shifts, so too does the j loop.
    for (let j = i+1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined
}
```

This works. Nice and simple. But we're not being very efficient. Have nested loops, so it's O(n^2) which is O(n). Although technically we're always looping more efficient because if i+1, in the end, when you remove the constants and simplify, still O(n^2).

How can we simplify it using hash tables?

```js
function firstRecurringCharacter2(input) {
  // lets use a hash table, or an object to do something interesting. That is to add the characters as we iterate one by one to a hash table, and while we're doing that, we can check to see if the property or key already exists. 
  let map = {};
  for (let i = 0; i < input.length; i++) {
    // console.log(map[input[i]]);
    // if the property exists, return the item... stop all the looping as soon as the key exists in the map. 
    // but we need to specify we don't want it equal to undefined because otherwise js coerces 0 to falsey and causes all sorts of isssues. 
    if(map[input[i]] !== undefined) {
      return input[i]
    } else {
      // if it doesn't exist, add it to our map so it's there for the next loop to check.
      map[input[i]] = i
    }
  }
  console.log(map) // to see the actual iteration happening until it stops when it encounters a character again.
  return undefined;
}
```

This version is way faster using hash tables than our first version. O(n) time complexity, with 1 downside of increasing the space complexity (memory) by O(n) because we're creating a new object (the map) that needs to keep track of the array. First one has space complexity of O(1), but this one in return we have a faster function. 

Challenge, what if there's a duplicate before 2,2? Second version, we'd get 5. First function, we'd get 2. `[2,5,5,2,3,5,1,2,4]` In 1st solution, it'll detect 2 first before comparing 5 with 5. Where in the second version, our hash table, we have all the items and compare them once we grab all of them. Might have a wrong answer depending on what the interviewer asks. 

Bonus (converting first solution to second solution) to find 5 first and not the 2:

```js
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 1; j < input.length; j++) {
      if ((input[j] === input[j+i]) && ((j+i) <= input.length)) {
        return input[j]
      }
    }
  }
  return undefined
}
```

# Hash Tables Review 

Should love them because they have fast lookups*, fast inserts, and flexible keys. *Good collision resolution needed. Pattern comes up again of shifting things from O(n^2) to linear time. Comes up frequently. Often don't have to worry about collision resolution as the language we use takes care of it underneath the hood.

Downside is that they are unordered. And slow key iteration (If you want to grab all the keys from the hash table, have to go through the entire memory space).

Looking through the cheat sheet, most is O(1), but some O(n) operations that can happen. Can understand with collisions might want to use linked lists. 

Hash tables in interviews are usually useful for improving time complexity. Trade off is fast access, but more memory.