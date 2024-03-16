/// arrow function
//Arrow functions are a shorter and more concise way to write functions in JavaScript. 
//They use the arrow (=>) syntax to define functions, making them particularly useful for short, one-line functions or for preserving the context of this from the surrounding code.

const kkr= function(){
    let user ="ipl"
   console.log(this .user);
}
kkr()  //undefined as we know that in function "this" keyword doesnt't execute
//but  inn arrow function(=>)
const kkr1 = ()=>{
     let user1 ="ipl"
    console.log(this.user1);
//console.log(this);//{} empty space but in function it will assign the values
}
//kkr1()// undefined it will not execute

//core arrow function 

// There are 2 types of basic ways where we can declare an arrow functions.

// Explicit or Regular arrow function

//+++++++++explicit

const addtwonumber=(num1,num2) => {
    return num1+num2
}
console.log(addtwonumber(2,3));//5

//++++++++++implicite return
//another way without using return //==== implicite return
//It is an arrow fucntion where "return" keyword is removed with the curly braces and paranthesis are used instead of them.


//const addtwonumber1=(num1,num2) => num1+num2
const addtwonumber1=(num1,num2) => (num1+num2)//12 
 //{}is used we have to use return keyword but () we don't
console.log(addtwonumber1(9,3));//12

//() why we used?
// because it can retrun values in an function weather we use () or return key word
//but in object  we will return like this {}
//for ex-
const addtwonumber2=(num1,num2) => ({user23: "dugu"}) //we have to wrap like this

console.log(addtwonumber2());//{ user23: 'dugu' }