# Big O 

What are we talking about here? Big O asymptotic analysis. Can tell us how well a problem is solved. 

# What is good code? 

1. Readable (can others read it)
2. Scalable (Code that can scale, Big O notation allows us to read this sort of thing).

# Big O and Scalability 

JS lets us measure the performance of a function. Built into the browser. Can do this by saying: 

```js
const nemo = ['nemo'];

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
    let t1 = performance.now();
    console.log('Call to find Nemo took ' + (t1 - t0) + 'milliseconds');
}

findNemo(nemo); // Found NEMO!
```


`performance.now()` is built into the browser. Takes very little time for above. But what if we had a bigger array? 

Takes longer. Computers are very fast, but we need bigger and bigger arrays for it to take longer, say Arrays with 100000 Nemo's. Runtime takes longer. 

Problem is if we take the code and run on my computer, my runtime will be different than his. All depends on how powerful the CPU in the computer is, what language you're using, what programs are running, etc. All these factors influence runtime. 

How do we determine who has better code? (Faster runtime?) What's good code, what's bad, and what can scale? How can we determine that/ 

`Big O` notation is the language we use when determining how long a language takes to run. Can take algorithms using Big O, saying which one is better than the other in terms of scale, regardless of computer differences? (Big-O complexity chart). 

When we talk about Big-O and scalability of our code, what we mean is that as we grow bigger and bigger with our input how much does the algorithm or the function slow down. 

If the list of characters in finding nemo increases, how many more operations do we have to do. That's all it is. This is what we call **algorithmic efficiency**. Big-O explains this concept. Remember the array that just had Nemo? As we increased that array to have more characters, and then we created the massive array of 100000, the number of operations, the number of things we had to do in the loop increased over and over. Different functions have different Big-O complexities. The number of operations can increase really fast, and others don't. 

Just remember when we talk about Big O and scalability of code we simply mean when we grow bigger and bigger with our input, how much does the algorithm slow down? The less it slows down, or the slower it slows down, the better it is. 

Instead of using `performance.now()` and using time to measure the efficiency of our function, we can just calculate how many operations our computer has to perform, because each operation takes time on the computer. Big O allows us and concerns us with how many steps it takes in a function. 