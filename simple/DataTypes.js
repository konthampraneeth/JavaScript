//Primitives are stored in stack 
const name = "Praneeth"
const num = 22
const boolean = true
let isEmpty = null
let score;
let id = Symbol('123') // unique even though you copy it 

const BigNum= 7987654345789097776n

// Non Primitive are stored in Heap
// Arrays, Object , Functions
const Heroes = ['SuperMan', 'HanuMan'] //arrays

let myObj={
    name : 'praneeth', // objects
    age : 23
}

 function pop(){
    console.log('Hello Bhai');
}
console.log(pop)
console.log(myObj.name)

console.log(typeof pop)