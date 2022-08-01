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

# O(1)

```js
function compressFirstBox(boxes) {
    console.log(boxes[0]);
}
```

A function that's logging out the first item in the box. What's the Big O of this function? How many steps or operations does it take if the boxes are increased from 0 to 10, to 10000.

**O(1) - Constant Time** an O of 1. No matter how many times the boxes increase, we're always just grabbing the first item in the array. 

If we had an array of boxes, and run it through the function that just takes the first item, the number is always 1. It is a *constant time*. Look at it on a graph, it's constant. 1 operation every time. Same number of operations every time, just constant time. Number of operations stays flat. 

What if we do something different? 

```js
function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // 0(1)
    console.log(boxes[1]); // 0(1)
}

logFirstTwoBoxes(boxes);

// 0
// 1
```

How do we measure the Big O of this? It's an O(1) for both. Each time the function runs two operations. The function in total is running 0(2) everytime. Always 2 for the function. If we had 3 operations, it would be O(3). But overall it's still a flat line. When it comes to constant time, we don't care about the nitty-gritty O(1), O(2), O(100). We round it down to O(1), so that we have **Constant Time**. It's a flat line. In terms of scalability, doesn't matter how many inputs we have, it's always constant.

**Keep in mind: Inputs can be any type of data. Not just arrays.**

If we look at it on a graph, O(1) is in the dark green excellent area of the graph. Always runs the same. Predictibility is very very nice. 

# Exercise: Big O calculation

```js
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}

// O(n) ? Don't know the complexity of anotherFunction() and what it's doing? 
```

# Solution Big O Calculation
Meant to be difficult. Will never be asked to do something like this in an interview. 

```js
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
   // input doesn't really matter. 
   // assign variable a as 10. Based on convention some people say assignment shouldn't go to big O, others do.
  let a = 10; // O(1) only running once 
  a = 50 + 3; // reassigning a. Once again O(1)

  // a loop, looping over length of input. 
  for (let i = 0; i < input.length; i++) { // O(n) n is the input
  // loops are linear time. 
  // no idea what anotherFunction() is. 
    anotherFunction(); // being called, depends on how big our input is, so O(n)
    let stranger = true; // random assignment. Runs as many times as the loop happens. // O(n)
    a++; // a+1 incrementing whatever number a is. 53/54/55/56, etc runs O(n) times. Depends how many times by the input.
  }
  return a; // O(1) run just once. 
}

funChallenge()

// 3 + n + n + n + n (4n) 
// Big O(3 + 4n) answer
```

# Big O Exercise 2

```js
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5;
  let b = 10;
  let c = 50;
  for (let i = 0; i < input; i++) {
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2;
    let q = j * 2;
  }
  let whoAmI = "I don't know";
}

// 4 + 7n
```

# Solution Big O Calculation 2

```js
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// BIG O(4 + 7n)
```

# Simplifying Big O

In the previous exercise, we had to do some calculation, kind of annoying, add things up, `Big O(4 + 5n)`. In interviews you're never going to do this. In interviews there are sets of rules to follow. Can just look at a function and figure out what type of big O it is. Exercise 2 just turns into `Big O(n)`. The first exercise also just turns into `Big O(n)`. 

It's a nifty little trick. 

**Rule Book**
Rule 1: Worst Case 
Rule 2: Remove Constants 
Rule 3: Different terms for inputs 
Rule 4: Drop Non Dominants

# Big O Rule 1: Worst Case

When calculating Big O we always think about worst case. What do we mean by that? Going back to the `findingNemo()` example, may have been screaming at me that the code is not efficient. If you look at the function, we're looping at the entire array to find nemo. 

With the `everyone` array, nemo was only 4th. But we still ran the loop 10 times and ran through the entire array. Not efficient. Should have stopped once we found Nemo. All the other runs are pretty wasteful. 

Can have a break. So just add a `break` after condition was met that we found nemo. Then if we do that and click run, once we found nemo, we're done. 

When it comes to Big O, Big O only cares about the wort case. Worst case is that Nemo is at the very end instead of being hte 4th item. So even if we have the break statement, still going to run it ten times. Best case is nemo is at the beginning. Always Big O(n). 

Very first rule, we always care about what is the worst case scenario. When we talk about scalability, can't assume things are going well. 

Even though `findNemo(everyone)` might be O(1) if Nemo is first in the array, it doesn't matter. Instead going to assume that O is big O (n) linear time. Have to iterate through all of it. Big O doesn't really care. When we talk about Big O we're talking about worst case. 

# Big O: Rule 2 Remove Constants

```js
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}
```

Written the most ridiculous function ever. Useless function. Big O is O(1 + n/2 + 100) (Half of whatever the items are so it's n/2). Trick is not looping over items array, just 100 always 100. 

Rule 2 states we want to drop the constants. Don't want to care that the big O is O(n/2 + 101). We only care about what we saw on the chart. So it turns into O(n/2 + 1). As n gets larger and larger, dividing by 2 has a decreasingly signficant effect. So we drop the constant. And it becomes O(n + 1). And 1 is insignificant, just becomes O(n).

What if we had a function of O(a + 50000000). Doesn't matter, drop the constants and it becomes O(a).

What if we have this function here? 

```js
function compressBoxesTwice(boxes) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes.forEach(function(boxes) {
        console.log(boxes);
    });
}
```

2 For loops. Both O(n). 2 separate steps. So we add them together and it becomes `O(2n)`. In an interview, this doesn't really matter because we drop the constants, so it just becomes O(n).

Just remember to drop the constants. Makes life easier. Only see numbers in a few caes on the chart. 

# Big O Rule 3: Different terms for inputs

A tricky one.

```js
function compressBoxesTwice(boxes) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes.forEach(function(boxes) {
        console.log(boxes);
    });
}

// O(2n) but because we drop the constants it becomes O(n)
```
Third rule states different terms for inputs. What if we had `boxes, boxes2` as the 2 parameters? And the second for loop loops over the 2nd boxes? What happens for this? What is the big O? 

```js
function compressBoxesTwice(boxes, boxes2) {
    // depends on how big first input is
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    // depends on how big 2nd boxes is.
    boxes2.forEach(function(boxes) {
        console.log(boxes);
    });
}

// a is for first for loop
// b is for the second loop.
//O(a + b)  
```
O of boxes 1 + boxes 2. `O(a + b)`. Not looping over the same items, so different "n". 

What happens if the loops are nested though? 

# O(n^2)

```js
// Log all pairs of an array 
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}

// a a
// a b
// a c
// a d
// a e
// b a
// b b
// b c
// b d
// b e
// c a
// c b
// c c
// c d
// c e
// d a
// d b
// d c
// d d
// d e
// e a
// e b
// e c
// e d
// e e
```
What is the Big O of this? Good rule of thumb, if you see nested loops, instead of having two for loops one after the other, when you see loops that are nested, we use multiplication. 

So it becomes:
`O(n * n)`, which when we multiply becomes `O(n^2)` (O to the power of 2)

```js
// ES5
function logAllPairsOfBoxes(boxes) {
    boxes.forEach(function(firstBox) {
        boxes.forEach(function(secondBox) {
            console.log(firstBox, secondBox)
        })
    })
}
// O(n^2) O of Quadratic time. 
```

**O(n^2) O of Quadratic time** Means every time the number of elements increases, we have 4 operations we do. If we have 3 elements, it increases quadratically, meaning we have 9 operations (3 elements to the power of 2). Line is bent and increases quite fast. 

O of n squared, it's pretty sloped. 

If we go back to our Rule 3 that we were discussing, different terms for inputs, we had the example of `compressBoxes()` and `O(a + b)` because we had two different inputs. If they were nested instead, then the Big O would have been O(a*b). 

Different arrays, means different notations for each array as we don't know the lengths. Any step that happens in the same indentation (one after the other), you add. Whereas with nesting indentation, you mutliply. Different inputs should have different variables.

# Big O Rule 4: Drop Non dominants 

Or drop non dominant terms. 

What do we mean? 

```js
function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
        // adding each number one after the other
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1,2,3,4,5])
```

First for loop is O(n + O^2)

Rule 4 means we want to drop the non dominant terms. So we drop the `n` and it's just `O(n^2)`, because the power of 2 is more important than just the n. 

Say for example we have one that's:

O(x^2+3+100+x/2)

Based on Rule 4, it becomes O(x^2) because that's the most significant. It grows more than the others. We're only worrying about scale. Going back to past examples, make sense to drop the extraneous and only use the most important. 

If we had another loop buried within, it would become O(n^3), and so on for each loop, although bad idea to have more than 3 nested loops. Scales poorly.

# Big O Cheatsheet - see attached pdf. 

# What does this all mean?
May have noticed something when talking about Big O. Scalable means we worry about large input. What does the end of the graph look like? 

If our function is only worried about small inputs, Big O won't matter as much. All the lines are kind of bunched up together the same. Is that real life? No. 

Never know, when we write code, want to write code that can scale rather than going back and fixing things when it scales and code gets out of hand. Thinking about code long term means thinking to scale and the big picture. 

Graph we've talked about is part of (https://www.bigocheatsheet.com/)[https://www.bigocheatsheet.com/].

If you scroll down see different Big O notations for different data structures depending on what we're doing. 

**Data Structures + Algorithms = Programs**

Data structures are simply ways to store data.

Algorithms are simply functions or ways to use the DS to write our programs. Our instructions for machines/computers are our programs. 

Remember 2 rules of good code, readable and scalable. 

# O(n!)
Most likely won't encounter it. The most expensive one, the steepest of them all. **Factorial time**. Or "Oh no!" 

With O and factorial (!), with this it means that we're adding a nested loop for every input we have. 

# 3 Pillars of Programming 

*What is good code?*

1. Readable

2. Scalable 

Two things that we want to consider as engineers for scalable. One is Speed. How fast is our runtime on the code. How much time does it take for a function to run, how many operations does it cost? Another aspect when it comes to machines. The other one is Memory.

Computers have limited memory. Back in the day, we had much less memory, now we have more, but it's not infinite. 

3 Pillars of code: Readable code 💎 Memory 💾 (Space Complexity) Speed ⏲️ (Time Complexity)

# Space Complexity 🚀

When a program executes, it has 2 ways to remember things. The heap & the stack. The heap is where we store variables. The stack is the call stack, where we keep track of our function calls. Sometimes we want to optimize for using less memory instead of less time. 

Talking about memory or Space Complexity is similar to looking at time costs. We simply look at the total size relative to the total input and see what new variables or memory has been allocated. 

Up until now, we've just talked about how long something would take. But there's also the fact of memory. How much input the function can take. Might have limited capacity and might overflow. 

What causes this space complexity? Adding Variables, Adding Data Structures, Function Calls, Allocations 