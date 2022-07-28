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