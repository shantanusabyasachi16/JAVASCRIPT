                         //this keyword
//The "this" keyword in JavaScript refers to the object that is currently executing the function or code. 
//It's a special keyword that is automatically defined within the scope of every function.

 const user ={
    username: "dugu",
    price: 999,
    welcome: function(){
        console.log(`${this.username}, welcome to website`);
       // console.log(this);{ username: 'dugu', price: 999, welcome: [Function: welcome] } it refers to current context or function
       
 }
}
console.log(user.welcome())//dugu, welcome to website

 //let's change the value of the property

 user.username = "gudu"

user.welcome()//gudu, welcome to website

// now we know that the "this" keyword refers to the current context of the scope.

//  so we can say "In an object method, this refers to the object."

// In a function, this refers to the global object.

// using this key word in global scope

 console.log(this);//{}  emty space
 //  (it shows empty. because we are in the node js environment where there is no object means empty object)

 
//++++++++++++++important+++++++++++++++//

// If  we console.log "this" keyword in the browser it will show "window" as the object.


// let us see "this" keyword in a function
 
 function hi(){
    console.log(this);
 }
 //hi() // important==== in function if we execute "THIS" keyword  then it wiil give many values and we can acces

 // but 
 function ipl(){
     let username1="kkr"
    console.log(this.username1);
 }
 ipl()
 //if without declareing the variable i.e let var and const then......
 // her if we when you assign a value to a variable without using let, const, or var, 
 //and if the variable is not found within the local scope, it implicitly becomes a property of the global object 
 //so it will execute this.username e.i (kkr) 
 // but if we will declare the variable  it will not execute...as inn function this keyword doesn't execute
