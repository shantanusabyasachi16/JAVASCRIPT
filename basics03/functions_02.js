//The rest operator, also known as the spread syntax in JavaScript, is represented by three dots (...). 
//It allows you to spread or gather elements in various contexts, primarily in function calls and array literals.
 //The rest operator allows you to deal with variable numbers of arguments or elements in a concise and flexible manner.
 ////Its syntax allows us to pass multiple arguments or an indefinite number of arguments as the value for a single parameter.

 function myshoppingcart(...num1){
    return num1
 }
 
 //console.log(myshoppingcart(200,400)); //200 it only prints 200 ..for solving this  we use rest operator..

//console.log(myshoppingcart(200,300,400,500,600));// The rest parameter allows functions to accept an indefinite number of arguments as an array.
 //[ 200, 300, 400, 500, 600 ] 


 //another case

 function  munum(val1,val2,...val3){
   // console.log(val1);
   // console.log(val2);
   // console.log(val3);
}
//console.log(munum(90,87,56,100,3896,377,631));
/*
value1 = 90
value2 = 87
// value. = [  56, 100, 3896, 377, 631 ] */

//object in functions 

const user = {
    myname: "dugu",
    price: 3899
}

function handelobj(anyobject){
    console.log(`username is ${anyobject.myname} and price is ${anyobject.price}`);
}


 console.log(handelobj(user));//username is dugu and price is 3899

 handelobj({
    myname:"shantanu",
    price: 4000
 });//username is shantanu and price is 4000
 
 //     how to pass arrays


 const mynewarray =[200,400,600,700];

 function newarray(getarray){
  return getarray[3]

 }
 console.log(newarray(mynewarray));//700

 console.log(newarray([200,400,500,700,800]));//700

// Or we can declare the array while executing a function.

function mynewarr2(getarray2){
   console.log(`My grandapa age is ${getarray2[4]}`);
}
console.log(mynewarr2([46,56,89,90,65]));  // My grandapa age is 65


  
