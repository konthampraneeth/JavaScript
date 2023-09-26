const mySymb = Symbol('key2')

const JsObject ={
    name : "Praneeth",
    age : 23,
    mail :'konthampraneeth22@gmail.com',
    [mySymb]:'key1', //defining sumbol with []
    'my Location': "Hyderabad",
    isLoggedIn : true,
    WorkingDays :['Monday','Tue','Wed']

}
//console.log(JsObject[mySymb])
//console.log(JsObject.mail);
//console.log(JsObject['my Location']); // Best way is to use [] to get an element from object
JsObject.hobby='coding' // To add new Values
JsObject.age=24 // To Alter values
JsObject.num = function(){
    console.log(`Here is my num 63003875 , ${this.name}`)
    
}
Object.freeze(JsObject) // restricts from doing changes
JsObject['my Location']='Banglore'
console.log(JsObject)