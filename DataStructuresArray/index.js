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
