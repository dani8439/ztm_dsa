const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

const large = new Array(100).fill('nemo');

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
    let t1 = performance.now();
    console.log('Call to find Nemo took ' + (t1-t0) + ' milliseconds');
}

findNemo(everyone); // Found Nemo!
findNemo(large); // Found Nemo! 

////// O(n)

/// 0(1)

const boxes = [0,1,2,3,4,5];
function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2)

// 0
// 1

// Big O exercise 

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;
  a = 50 + 3; // 53

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}

// O(n) ? Don't know the complexity of anotherFunction() and what it's doing? 

// Big O Exercise 2

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // assignment O(1)
  let b = 10; // assignment O(1)
  let c = 50; // assignment O(1)
  for (let i = 0; i < input; i++) { // loop O(n) runs based on the input 
    let x = i + 1; // O(n) ? O(1) -- O(n) because run however many times input is, not just once.
    let y = i + 2; // O(n) ? O(1)
    let z = i + 3; // O(n) ? O(1)

  }
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2; // O(n) ? O(1) 
    let q = j * 2; // O(n) ? O(1)
  }
  let whoAmI = "I don't know"; // O(1)
}

// 4 + 7n = O(n)

// O(n^2)
const boxes2 = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}
logAllPairsOfArray(boxes2);

// Space Complexity Exercise 
function boooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('booooo! 👻')
  }
}

boooo([1,2,3,4,5]) // O(1)

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

arrayOfHiNTimes(6)

