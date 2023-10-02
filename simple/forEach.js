const arr = ['sai', 'praneeth','super']

arr.forEach(function(i){
    console.log(i);
})

arr.forEach((a,index)=> {
    console.log(a,index);          // another way using arrays
})


const Data = [
    {
        name:"Praneeth",
        phone:'6300387'
    },
    {
        name:"Sai",
        phone:95456741
    },
    {
        name:"vikas",
        phone:546578522
    }

]

Data.forEach(function (i){
    console.log(i.phone);           // To fetch data from an object inside array
})