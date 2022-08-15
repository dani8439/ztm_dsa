/// Exercise Implement a Hash Table 

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')

////////////////////////
// Exercise First Recurring Character 

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i;
    }
    console.log(map)
  }
  return undefined;
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

/// Solution 
// Naive approach:
function firstRecurringCharacter1(input) {
  for (let i = 0; i < input.length; i++) {
    // start at 1 to compare with the second character, skipping a loop
    // trick to always go 1 to the right of where i is in the indexes so it loops properly in the sub loop. So as the i loop shifts, so too does the j loop.
    for (let j = i+1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined
}

/// More efficient approach:
function firstRecurringCharacter3(input) {
  // lets use a hash table, or an object to do something interesting. That is to add the characters as we iterate one by one to a hash table, and while we're doing that, we can check to see if the property or key already exists. 
  let map = {};
  for (let i = 0; i < input.length; i++) {
    console.log(map[input[i]]);
    // if the property exists, return the item... stop all the looping as soon as the key exists in the map. 
    if(map[input[i]] !== undefined) {
      return input[i]
    } else {
      // if it doesn't exist, add it to our map so it's there for the next loop to check.
      map[input[i]] = i
    }
  }
  return undefined;
}