// Data types are of two types
// Primitive and (Reference)Non primitive

// Primitive
// 7 types : String , number , boolean , null , undefined , symbol , BigInt

// Reference type or non primitive

// Array,  objects , functions





const value = 100;


let isloggedIn= false

let outsideTemp= null;


let userEmail; 


let bignum = 475856898127565n;

const id = Symbol ("100")
const anotherid =Symbol("100")

console.log(id === anotherid);// false

//if the value is same but Symbol datatype makes the value of the variable unique...

let hero = ["dugu" ,"gudu", "rahul"];
console.log(typeof hero);




let myobj = {
    name:"dugu",
    age:21,
}
console.log(typeof obj);




const myfunction = function(){
    console.log("hello world");
}


// console.log(typeof hero);

// function or object function

// note typeof of every non primitive datatypes is an object



//Stack memory and Heap memory

//stack memory is primitive data types.In stack memory the variables we declare, we get a copy

//and Heap memory is non primitive data types.In heap memory we get the original value or (reference) 
  

let myname = "shantanu"
 
let anothername = myname
anothername = "dugu"
 console.log(myname);
 console.log(anothername);

