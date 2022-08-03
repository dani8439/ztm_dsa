// Give 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items 
// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false 
// -------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x']
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

function containsCommonItem(arr1, arr2) {
    // loop through first array and create object where properties === items in teh array 
    // loop through second array and check if item in second array exists on created object. 
    // two loops but not nested, so better performance right away. 
}