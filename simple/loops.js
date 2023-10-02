// for (let i = 1; i<=10; i++) {
//     console.log(`Multiple of ${i}`)
//     for (let j = i; j<=10;  j++) {
//         console.log(`${j}x${i}`,'=',j*i);
        
//     }
// }

let Arr = ['Hi','Praneeth',"Vikas",'Revan']
let i =1
while (i<Arr.length) {
    let element = Arr[i]
    //console.log(element);
    // console.log(`Value is ${i}`);
    // i=i+2
    i++
}

let greet = "HI PRANEETH"

for(const i of greet){
    if(i==' '){
        continue
    }
    //console.log(i);
}

let users = ['rakesh','sai','12','praneeth','sairaj']

for(let j of users){
  //  console.log(j);
}

const abbr = new Map()

abbr.set("IN",91)
abbr.set("USA",90)
abbr.set("JPN",65)
abbr.set("CND",90)

console.log(abbr)

for(let [key,value] of abbr){
    console.log(key,':',value);
}
