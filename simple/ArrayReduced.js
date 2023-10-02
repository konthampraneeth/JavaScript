const arr = [1,2,3,4]

let total = arr.reduce((acc,currVal)=>acc+currVal,0.5)
//console.log(total);

const ShoppingCart = [
    {
        name:"Mobile",
        price:25000
    },
    {
        name:'TWS',
        price:3499
    },
    {
        name:'TV',
        price:50000
    }
]

let price = ShoppingCart.reduce((acc,item)=>acc+item.price,0)

//console.log(price);


let multimap = arr.map((num)=>num+1).map((num=>num*10)).filter((num)=>num>2)
console.log(multimap);
