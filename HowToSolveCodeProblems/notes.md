# What are companies looking for?

1. Analytic Skills - How can you think through problems and analyze things?
2. Coding Skills -  Do you code well, by writing clean, simple, organized, readable code? 
3. Technical Skills - Do you know the fundamentals of the job you're applying for?
4. Communication Skills - Does your personality match the companies' culture?

# What we need for coding interviews 

**Data Structures**
- Arrays 
- Stacks 
- Queues 
- Linked Lists 
- Trees 
- Tries 
- Graphs
- Hash Tables 

**Algorithms** 
- Sorting 
- Dynamic Programming 
- BFS + DFS (Searching)
- Recursion

# Exercise: Google Interview 
Matching pair, that is equal to a sum given. Array. 

`[1, 2, 3, 9] Sum = 8`
`[1, 2, 4, 4] Sum = 8`

Ordered in ascending order, in an array. Can't repeat same element at same index twice. Always numbers, negatives and positives. Time complexity? 

# Exercise: Interview Question 

```js
// Give 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items 
// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false 
// -------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x']
// should return true
```

2 parameters - arrays - no size limit
return true or false 
Might ask how big the array is going to get, because if it's never bigger than 4 or 5 items, don't need to worry about space or time complexity. 

Looks like 2 nested loops, right away O(n^2). Interviewer might say no, not best solution. This is the brute force/easy/naive solution that might not be the most efficient. 

Why would it not be the best? The code might not be efficient. or might not be readable. 

Brute force solution:

```js
function matchingArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true 
            } 
        }
    }
    return false
}
```

2 nested for loops, with a Big O(a*b) Time complexity. 2 arrays can have different sizes. If the array sizes were the same, then O(n^2) which is pretty slow. 

Could use hash tables or objects in JS to speed things up. 

What if we had a function that takes the first array, and converts it to an object. Will contain:

`array1 => obj { a: true, b: true, c: true, x: true }`. If we create an object like this we can now use this object with our array2, to say, can we compare and see if a property exists to array2. `array2[inded] === obj.properties`. '

Common pattern when it comes to improving time complexity. 

function containsCommonItem(arr1, arr2) {
    // loop through first array and create object where properties === items in teh array 
    // loop through second array and check if item in second array exists on created object. 
    // two loops but not nested, so better performance right away. 
    Big O will become O(a + b) because it's not nested and two steps
}

# Exercise: Interview Question 2

This solution when it comes to time complexity is better. It's O(a + b) rather than being O(n^2)

```js
function containsCommonItem(arr1, arr2) {
    // loop through first array and create object where properties === items in teh array 
    // loop through second array and check if item in second array exists on created object. 
    // two loops but not nested, so better performance right away. 

    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        // if map.a exists it will return true, if it doesn't, it will say false
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
            // by the end we'll have an object that will have property { a: true } on the first loop, will loop through until we have a map object that has all the items of hte first array equal to true
        }
    }
    console.log(map);
    // loop through second array and check if item in second array exists on created object 
    for (let j = 0; j < arr2.length; j++) {
        if (map[array2[j]]) {
        // will return undefined if it doesn't exist
            return true

        }
    }
    return false
}

containsCommonItem(array1, array2)
```
Okay it works, but does it work if the array is different? What if it's a number, or null, or empty? (Yes). What if there's not two arrays? Uh oh. It breaks. Want to think about an discuss with interviewer how to break the function and what checks to do, such as making sure what inputs you're getting are right. 

Can just tell the interviewer what you would do to code to check input is correct, don't have to write the code, will get points for that. Can talk about renaming the values of map, i, j, etc, thinking about it so they have more meaning. But i and j are standard for for loops and indexes. 

How would you test the function that it gives the expected result of true or false. Might say run some unit tests.

Downside to this solution is only numbers, strings and booleans can be used correctly. Object properties, especially the way we're using a js object, might not work if we're using non literal values. Code could be a bit more readable. There is a cleaner way of doing this in js. 

```js
function containsCommonItem2(arr1, arr2) {
    // check the first array, iterate over the items in it. If some of the items include items in array 2, just return true or false
    return arr1.some(item => arr2.includes(item))
}
```

Might want to change second solution to two separate functions instead of two separate loops to make clean, modular code. Because function might be doing too many things. Might just mention that in the interview to show you're thinking about it. 

# Review Google Interview

```js
```