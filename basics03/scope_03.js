// SCOPE

//a scope is a context in which variables, functions, and objects are accessible. 

// Scope determines the accessibility (visibility) of variables.

// Javascript has 3 types of scopes those are Block scope, Function scope, and global scope.

// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These 2 keywords provide Block Scope in Javascript.

 //scope is {} in all programming languages


                // Block Scope//

//  variables declared inside a {} can't be accessed from outside of the block by using these keywords as let and const.
let a = 20;
const b = 50;
var c = 70;
 
//console.log(a);//20
//console.log(b);//50
//console.log(c);//70


/*if (true){
let d = 20
const e = 50;
var f = 70;
}*/
//console.log(d);// not defined because it is defined inside the scope.
//console.log(e); //not defined because it is defined inside the scope.
console.log(f);//70  var can be accesible outdide the scope so it is not used..

var f = 300 //if we use let it will give the outpit

if (true){
    let d = 20
    const e = 50;
    var f = 70;
    }//// While declaring a variable with var keyword inside a {} can be accessed from outside the block.
    console.log(c); //70 it becomes an problem if we add another var it will print the scope valu3{} 
       
              // global scope//
    
// Variables declared globally or outside any function have global scope.

// Global variables can be accessed from anywhere in a javascript program.

// var, let, const all have a global scope if they get declared outside the function scope.


let  d = 300 // f value totaly independent from scope function (if)

if (true){
    let d = 20
    const e = 50;
    var f = 70;
    console.log("inner:",d);// inner:20
    }
    console.log(d);//300