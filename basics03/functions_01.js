// Function
// Functions are blocks of code that perform specific tasks or calculations.


//A function in JavaScript is a block of code that performs a specific task. Functions are reusable, meaning that you can use the same function multiple times in your code without having to rewrite it.

// Declaring a function 
function myname(){
    console.log("dugu");
    console.log("gudu");
}
// so here we first write the function keyword, then we write the name of our function as we do to declare a variable, then the() {} syntax, and in the {} we mention what is gonna be executed.

// So now if we write only the name of the function that is 

myname();  // It is called as the reference of the function. if we wiil not give the () the output will be nothing because it is only the refernce..

//to execute the program

myname()// dugu ,gudu

// to add numbers
  function addtwonumbers( number1 , number2){
    // console.log(number1+number2);

}
  // addtwonumbers()//NaN
  // addtwonumbers(9,1) // 10
  // addtwonumbers(8,"4") // 84
  // addtwonumbers(7,"a") //7a
  // addtwonumbers(2,null) // 2

//Here the input given in the functions are called parameters.
// And the values we give while executing the functions are called arguments
 


function saynum(num1,num2 ){
  console.log(num1+num2);

}
saynum(7,8)//15
   const result=saynum(7,8)//15
  //if we console  the variable then it will not show any result 
console.log("Result",result); // Result: undefined
// Because console.log is only to print, it can't store a function's output.



// To do so use the return keyword

 function letnum(div2,div3){
  let result1 = div2+div3// apart from this we can write in thi way directly-return=div2+div3
  return result1//after return is execute nothing will excute for ex-
  //console.log("dugu"); it will not execute. but it will excute if we write above the return keyword..

 }
 const result1 =letnum(5,8)
 console.log(result1);//13
 // "return" keyword stores the value in a variable as an output of the function.

function loginuser(username){
  return `${username} just logged in`
}
 
 console.log(loginuser("dugu"))// dugu just logged in

 console.log(loginuser())//undefined just logged in ...if we will not pass any value then the output will be undefined.


  
 
