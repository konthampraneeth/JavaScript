const user = {

    username:"praneeth",
    age:23,

    welcomeMessage:function(){
        console.log(`${this.username}, hello how are you !`);
        console.log(this); // prints everything in the object is only valid under this scope
    }
}

// user.welcomeMessage()
// user.username = 'Sai'
// user.welcomeMessage()
//console.log(this);


function hello(){
    console.log(this) //gives some system default info
}

//hello()

// const Arrow=() => (console.log(this)) //this function shows an empty value in arrow

// Arrow()

// const addone =(num1,num2) => (num1 + num2)

// console.log(addone(2,8))

//To immedeatly invoke function

(function dbInvoke(){
    //named IIFE
    console.log(`DB Connected`); // IIFE method to connect fast 
})();

// Another way using arrows

(()=>{
    //unnamed IIFE
    console.log("DB Disconnected")
})();

((name='Praneeth')=>{                  // using parameteres in IIFE
    console.log(`DB is Bouncing back ${name}`)
})('captain')