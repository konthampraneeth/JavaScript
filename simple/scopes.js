let a=30;
//var b= 60;
//const c=90;

if (true){
    let a=52
    const b=25
    var c=60
}

// console.log(b);

function one(){
    name="Sai"
    //console.log(uname)
    function two(){
        uname="Praneeth"
        //console.log(uname)
    }
    two()
}
one()

if(true){
    name="Praaneeth"
    if(name != null){
        website='google.com'
       // console.log(name + website);
    }
    //console.log(website);
}

addOne(5)
function addOne(num){
    console.log(num+1); 
}                                 //different methods to write this function
addtwo(5) // cannot call a function before it is declared while using a variable
const addtwo = function(num){
        console.log(num+2)
}


