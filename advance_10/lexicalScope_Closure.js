// Lexical scope

// It refers to how variables are accessible within nested functions i.e between the parent function , child child function.

// JavaScript uses lexical scoping, which means that functions create a scope chain based on where they are defined, not where they are executed.

// example
function outer(color){

    let username = "dugu"

    function inner (){

        let mysecret = "123"

        console.log("to inner",username);

    }
    function innertwo(){

        console.log("to innertwo",username);//innertwo dugu

     console.log(mysecret);//error it cannot access
    }

    inner()// inner dugu
    
      
   }
   outer()
   console.log("to outter",username);//erorr

  
  // NOTE that inner functions can access the values and properties of outer functions.
  // But outer functions  cannot access the values and properties of its inner function.
  // And two inner functions cannot share their values and properties as well.


     // CLOSURE

     
     //  A closure "encloses" the environment in which it was created, retaining access to variables in that environment.

      function outerFunction() {
          const name ="dugu";
  
         function innerFunction() {
            console.log(name); // Accessible via closure //dugu
     }
  
          return innerFunction;
       }

  const closure = outerFunction();
   closure(); // Output: "dugu"