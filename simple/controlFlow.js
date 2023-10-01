

// if (2!==3){
//     console.log("Hi Praneeth")
// }

// === checks the data type equality too

let balance = 28000
if(balance <25000){
    const Energy = 'low'
    console.log(Energy)
}
else if (balance >30000){
    console.log('High')
}
else {console.log("Medium"); } //we don't use any statement for else 

// multi condition loop

const isValidUser = true;
const hasDebitCard = false;

if(isValidUser && hasDebitCard && 2==2){  //&& and
    console.log("Happy Shopping")
}else if (isValidUser || hasDebitCard){ // || or
    console.log("Thank you")
}

let month =3
switch (month) {
    case 1:console.log("Jan");
        break;
    case 2:console.log("feb");
        break;
    case 3:console.log("Mar");
        break;
    case 4:console.log("Apr");
        break;

    default: console.log('No Match');
        break;
}