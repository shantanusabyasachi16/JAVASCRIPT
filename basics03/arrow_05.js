                         //this keyword
//The "this" keyword in JavaScript refers to the object that is currently executing the function or code. 
//It's a special keyword that is automatically defined within the scope of every function.

 const user ={
    username: "dugu",
    price: 999,
    welcome: function(){
        console.log(`${this.username}, welcome to website`);
    }
 }
 console.log(user.welcome())//dugu, welcome to website

 //let's change the value of the property

 user.username = "gudu"
 user.welcome()//gudu, welcome to website
 console.log(this);//{} i
 // now we know that the "this" keyword refers to the current context of the scope.

//  so we can say "In an object method, this refers to the object."

// In a function, this refers to the global object.
