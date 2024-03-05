// Function


//A function in JavaScript is a block of code that performs a specific task. Functions are reusable, meaning that you can use the same function multiple times in your code without having to rewrite it.

// Declaring a function 
function myname(){
    console.log("dugu");
    console.log("gudu");
}
// so here we first write the function keyword, then we write the name of our function as we do to declare a variable, then the() {} syntax, and in the {} we mention what is gonna be executed.

// So now if we write only the name of the function that is 

myname;  // It is called as the reference of the function. if we wiil not give the () the output will be nothing because it is only the refernce..

//to execute the program

myname()// dugu ,gudu

// to add numbers
  function addtwonumbers( number1 , number2){
    console.log(number1+number2);


  }
  addtwonumbers()//NaN
  addtwonumbers(9,1) // 10
  addtwonumbers(8,"4") // 84
  addtwonumbers(7,"a") //7a
  addtwonumbers(2,null) // 2

//Here the input given in the functions are called parameters.
// And the values we give while executing the functions are called arguments