// when we declare an array and use the forEach() iteration method it doesnot really return value.

const city = ['cuutack','bbsr','mumbai','pune']
city.forEach( (item) => {
  return city;
} )
// it returns nothing in the terminal.

//foreach value doest not retrun value

// ==================FILTER
// We can also use the filter iteration method which can return the values.


//const newopp =[1,2,,3,4,5,6,7,8,9,10]
 //const mynewopp =newopp.filter((num)=> num >3)
 //console.log(mynewopp);
 /*[4, 5,  6, 7,8, 9, 10]*/
 //in arrow function
 const newopp =[1,2,,3,4,5,6,7,8,9,10]
 const mynewopp =newopp.filter((num)=> {num >3
 return num>3})
 console.log(mynewopp);//[] it is innscope so we should give a RETURN KEYWORD without return keyword it would give[]
 /*[
  4, 5,  6, 7,
  8, 9, 10
]*/

 //by using ; for eachloops
const newarray = [1,4,5,6,7,9,44,55,66,44,33]
const newD = []

newarray.forEach( ((num) => {
    if (num>4) {
        newD.push(num)
    }
    
}) )
console.log(newD);

/*
[
   5,  6,  7,  9, 44,
  55, 66, 44, 33
]
*/