// Immediately Invoked Function Expression
//IIFE stands for Immediately Invoked Function Expression. 
//It is a JavaScript design pattern where a function is defined and immediately executed, all in one step. 


// named iife beacues it has name (india)
(function india(){
    console.log(`DB MERGED`);
})();
//1st- () is for function definition
// 2nd- ()is for execution
//This pattern is often used to create a new scope for variables to avoid polluting the global namespace, encapsulate code, and prevent naming conflicts.

// we can also write in arrow function
//unmamed iife
(()=>{
    console.log(`DB MERGED2`);
})();

//without semicolumn in 1st function will not end the 2nd function will not execute

// we can delacre a variable
//parameter pass
((dugu)=>{
    console.log(`myname $(dugu)`);
})("dugu")

//++++++IMPORTANT- if we write more than 1 iife we have to end the 1st iife otherwise it will not end execution it will not occur