function sayMyName(){
    console.log('Pr');
    console.log('an');
    console.log('ee');
    console.log('th');
}

// sayMyName //Reference
// sayMyName() //Execute

function addNumbers(num1 , num2){
    //console.log(num1+num2)
    return num1+num2 //will take anything either no. or string or null
}
const res = addNumbers(2,5)
//console.log(res);

function userStatus(username='Sai'){ //default value can be overridden
    if(username===undefined){
        return `${username} is Inactive`
    }
    return `${username} is Active`
}

// console.log(userStatus('Praneeth'))

function handleCartPrice(...items){ //rest operator takes n no. of values
 return items
}

// console.log(handleCartPrice(200,500,4546,'pop'));

function returnObjects(...obj){
    return obj
}
const newObj ={ // can take objects
    name:'ram',
    job:'coder'
}
// console.log(returnObjects(newObj))

function myArr(values){ //can take arrays
    return values
}

console.log(myArr([22,25,556,'pop']))