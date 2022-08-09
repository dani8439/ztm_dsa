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