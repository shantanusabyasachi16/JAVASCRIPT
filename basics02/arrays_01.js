//An array is a data structure used to store multiple values within a single variable. 
//Arrays can contain various types of data, including numbers, strings, objects, or even other arrays. They are one of the fundamental data structures in JavaScript and are very flexible. 
const myarray = [1,2,3,4,4,6,7 ]
 const myheros = ["dugu"]
 
//Javascript array can be resizeable and it can store different types of elements.

  const myarray2 = new Array(1,2,3,4,)//  square [] will added automatically
   
  console.log(myarray[2]);
//By declaring this way we can enable various prototype methods 
 

//array methods
  myarray.push(8) //[ 1,2,3,4,5,6,7,8] it adds the value as the last element.

  myarray.pop() //[1,2,3,4,5,6,7] ...it removes the last elements
  
  myarray.unshift(77) // [77,1,2,3,4,5,6,7]it adds the value  in starting of an array  which involves the shifting positions of every existing element.
  myarray.shift() //[1,2,3,4,5,6,7] it removes the 1st element
  

  console.log(myarray);

  