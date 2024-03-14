 //nested scope  

function one(){
    const myname ="dugu";

    function two(){
        const website= "youtube"
        console.log(myname);
    }
    //console.log(website); //it is not in scope

     two()
}
one()

 // From the above example we learned that in a nested function, the child function can have access to the variables of its parent function.
 // But the parent function can not have the accessibility for the variables of its child function.
  

 //if else

 if(true){
    const username = "gudu"
    if(username === "gudu"){
       const website = " youtube"
       console.log(username + website); //gudu youtube
    }
    //console.log(website); it is not in inside the scope
    

 }
 //console.log(username); it is not in inside the scope

 //+++++++++++++++++++++let us dicuss about hosting 
 
 function addOne(num){
    return num+1
  }
 
  console.log(addOne(8)); // 9
 
  // What if we declare the function as it is and call or execute the function above the function?
 
  console.log(addOne(8)); // 9
  
  function addOne(num){
     return num+1
   }
   // it can execute above the function.
 
   // Let us store function into a variable and then execute
   console.log(addtwo(3)); // error 
   const addtwo = function(num){
    return num+1
   }
   
 // This code will through an error as we are storing a function in a variable.
 // If we do so the variable becomes or is also called an expression.
 // Although it is an expression it is also a variable and we know variables are not recognized before its declaration.
 