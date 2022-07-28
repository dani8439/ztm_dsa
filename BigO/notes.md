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

# O(n)

What is the Big O of the function `findingNemo()`? A runtime is simply how long it takes something to run. With an array of 4, it's 4 operations. With 5 it's 5, and so on and so on. The more items in the array, the more operations. Linear. 

The `findingNemo()` function has a Big-0 notation of `O(n)`. Big O of (n) or of **Linear Time**. It takes linear time to find Nemo. 

Where does this `(n)` come from? The `n` can be anything, can be x, fish, etc. Just an arbitrary letter. Usually give `n` when it comes to Big O. `n` simply means that the Big-O depends on the number of inputs. The number of fish. If we just had the nemo array, it would be `O(1)`, the `everyone` array it would be `O(10)`, the large array `O(10000)`. As we increase the operations we see it increases linearly. 

`O(n)` is the most common notation you'll find. It's in the yellow region of the chart that says **Fair.** Just a straight line. Operations increases by same amount. Big O focuses on how quickly runtime grows. That's what scalability means. As the function grows larger and larger, does it scale? Another way to think about it is this, if we had a compression algorithm, the funciton is the compression, the input is the box, what's the Big O notation of the function. If we had one element, it'll just compress 1 item, if we had multiple, we have to run each box. 

```js
// ES5
function compressAllBoxes(boxes) {
    boxes.forEach(function(item) {
        console.log(item);
    });
}

// ES6
const compressAllBoxes = boxes => {
    boxes.forEach(box => console.log(box));
}
```
As the input increases, the number of boxes increases linearly. That is **O(n) - Linear Time** *Proportionally*. 