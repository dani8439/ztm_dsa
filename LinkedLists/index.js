///////////////////
/// What are linked lists? 

const basket = ['apples', 'grapes', 'pears'];

// psuedo code linked list: apples --> grapes --> pears

// apples 
// 8946 --> grapes 
//             8742 --> pears 
//                         372 --> null

///////////////////////
/// What is a pointer?

const obj1 = { a: true};
const obj2 = obj1;

console.log('1', obj1);
console.log('2', obj2);


const obj3 = { a: true};
const obj4 = obj1;
obj1.a = 'booya';
console.log('3', obj1);
console.log('4', obj2);

// 1 {a: 'booya'}
// 2 {a: 'booya'}

////////////////////////
// My First Linked List 

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        // Code here
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList)