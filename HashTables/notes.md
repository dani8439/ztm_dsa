# Hash Tables Introduction 

Hash Tables or Hash Maps/Maps/Unordered Maps/Dictionaries/Objects. Many ways to call this data structure. Different languages have different names for it and slight variations on the hash tables. 

Objects in js are a type of hash table. 

Absolute must to know. Every language has a built in type. Ruby has hashes. Very important in computer science. Extremely useful. 

But what are they? What does the name hash table even mean? Imagine you're going grocery shopping, have an object, `basket` and want to add grapes to it, `basket.grapes`. `basket.grapes = 10000`. Because we're buying 10,000 grapes. How would we store this with arrays? It would be a little more difficult. With an object, get to set a key, value pair. Lots of benefits. 

The way the hash table works is we have the key, "grape", and this key is used as the index of where to find the value in memory. With arrays, the index is the number. With hash tables, we use grabpes to find it in the memory shelf. Done using something called the hash function. We pass grapes into it, the black box will do some magic, and out of it will come a key into which an index where we want to store this value. So our 10000 grapes can be stored in the memory address 711. Technically it stores both the key, and the value. The black box/hash function gets to decide where to put the data on our memory, on our computers. But what is this black box? Why does it get to decide where to put all the information? 