///////////////////
/// What are linked lists? 

const basket = ['apples', 'grapes', 'pears'];

// psuedo code linked list: apples --> grapes --> pears

apples 
8946 --> grapes 
            8742 --> pears 
                        372 --> null

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