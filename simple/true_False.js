let userEmail = 'hiteh@gmai.com'  //true
      userEmail = '' //false
      userEmail = [] //true
      userEmail = 'false' //true
      userEmail = 0 //false
       

if(userEmail){
    console.log("valid account");
}

const empObj={}

if(Object.keys(empObj).length==1){ //to compare an obj based on length
    console.log("Object is Empty");
}

// Null Coalesance Operator 

let val1 = null ?? 5
val1 = 10 ?? 55 ?? 4
val1 = undefined ?? null ?? 77

console.log(val1);