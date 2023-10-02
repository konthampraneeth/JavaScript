const arr = ['1','6','8','52','45',9]

const value = arr.filter((num)=>num>10)
    //return num
//
// console.log(value)
                                                        // 2 different types of writing filter
const rem = arr.filter((num)=> {return num>10})
//console.log(rem);


const newNum=[]

arr.forEach((num)=>{                 //using for each loop (filtering array)
    if(num>10){
        newNum.push(num)
    }
})
//console.log(newNum);

const Books =[
    {
        BookName:"1" , 
        PublishDate:2012,
        Author:'Neil'
    },
    {
        BookName:"2" , 
        PublishDate:2008,
        Author:'Raman'
    },
    {
        BookName:"3" , 
        PublishDate:2023,
        Author:'Pankaj'
    },
    {
        BookName:"4" , 
        PublishDate:2001,
        Author:'Adarsh'
    }
]


 let num = Books.filter((collection)=> collection.Author==='Raman'|| collection.PublishDate>2012)

// console.log(num);


const Numbers =[1,2,3,4,5,6,7,8,9,'9']         
                                              // will add 10 for each no.
let val = Numbers.map((nums)=> nums+10)
    console.log(val)

