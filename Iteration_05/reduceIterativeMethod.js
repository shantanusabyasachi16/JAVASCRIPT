// Reduce Method


// The reduce() method is iterative.

//The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step until there are no more elements to add.


const  Mynew = [ 1,2,3,4]
 const mytotal = Mynew.reduce(function(acc, currval){

    //console.log(`acc:${acc} and currval:${currval}`);
    /*
    
acc:0 and currval:1
acc:1 and currval:2
acc:3 and currval:3
acc:6 and currval:4
10
*/
    return acc + currval
 },0) 
 // here 0 is the initial value for accumulator
 //console.log(mytotal);//10

 // how to write in arrow function

 const mytotal1 = Mynew.reduce((acc, currval)=> acc+currval,0)
 console.log(mytotal1);//10

  //examples


   
const shoppingCart = [
    {
        itemName: "js course",
        price: 3999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "devoops course",
        price: 6999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

 const price=shoppingCart.reduce((acc ,item)=> acc+ item.price,0)
console.log(price);//24996