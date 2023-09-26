const tinderUser = {};

tinderUser.name='Sai'
tinderUser.age=24

//console.log(tinderUser) //{ name: 'Sai', age: 24 }

let obj1= {1:'a',2:'b'}
let obj2 = {3:'c',4:'d'}
const obj4 = Object.assign({},obj1,obj2) //to combine objects
let obj3={...obj1,...obj2}

//console.log(obj3); //to combine objects simple way
//console.log(obj4);


const data = [
    {
        name : 'sai',
        age :24,
        Ismarried:false
    },
    {
        name : 'vikas',
        age:24,
        Ismarried:true
    }
]

// console.log(data[1].Ismarried);
// console.log(Object.keys(data[0])) // to get all keys from an object
//console.log(Object.values(tinderUser)) // to get all Values

//console.log(Object.entries(data)); // to get all arrays in object

//console.log(tinderUser.hasOwnProperty('age'));

let course ={
            courseName:'JS',
            price:999,
            Instructor:'Hitesh'

        }
        const {courseName:Name}= course //New method to call key values also can change the name for output
        console.log(Name);