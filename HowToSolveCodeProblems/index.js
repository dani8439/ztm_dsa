// Give 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items 
// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false 
// -------------------
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x']
// should return true

// Brute force solution
// function matchingArrays(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 return true 
//             } 
//         }
//     }
//     return false
// }

// O(a*b)
// O(1) - Space Complexity as it's constant. Not adding new variables

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

// O(a + b) better in time complexity, but heavier in space complexity (using more memory)
// O(a) Space complexity creating a new object


containsCommonItem(array1, array2)

// cleaner way of writing the code

function containsCommonItem2(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}