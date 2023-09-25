let myDate = new Date()

//console.log(Date()); //Mon Sep 25 2023 15:59:02 GMT+0000 (Coordinated Universal Time)

//console.log(myDate.toDateString()) //Mon Sep 25 2023
//console.log(myDate.toJSON()); //2023-09-25T15:59:02.777Z
//console.log(myDate.toLocaleDateString()); //9/25/2023

let newDate = new Date(2023, 9, 1,12,1)

console.log(newDate.toLocaleString());  // 10/1/2023, 12:01:00 PM

console.log(newDate.toDateString()); //Sun Oct 01 2023

console.log(newDate.toTimeString().length); //12:01:00 GMT+0000 (Coordinated Universal Time)

console.log(newDate.toTimeString().split('0'));