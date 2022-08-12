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