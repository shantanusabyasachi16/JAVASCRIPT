//objects are one of the fundamental data types used to store collections of key-value pairs.

       //object Literal: 
//The simplest way to create an object is by using object literal syntax {}:
  const mysmb = Symbol("key45")
const user = {
    name:"dugu",
    age:21,
   [ mysmb]: "key45",
    location:"cuttack",
    Email:"dugu@gmail.com",
    isLoggedIn:false,
    LastloginDays:["Monday","Wednesday","friday"]
}
// In this way the object has 2 things one is key and the other one is value.
// ex-- name is the key and "suvam" is the value
// While coding the key we can write whatever as the key name and it is saved as the String.
// And on the other side the value can be anything as we declare a value of a variable.

// So there are two ways to access the object

//console.log(user.age); // 21 
//console.log(user["name"]); // dugu (it is the most appropriate way )
//console.log(user[mysmb]);// [Symbol(key45)]: 'key45'

// We can also add the symbol variable into an object and can also access them with the bracket form.
// And we need to declare the symbol variable before we mention it in any object.


// Now let's see how we can change the value of an object.

user.email= "dugu@google.com"
Object.freeze (user)// We can also freeze or lock the value of the objects so that it can't be changed again.

user.email ="dugu@cahtgpt.com"
//console.log(user);

// to add functions in objects

const newuser1 = {
    name23:"dugu",
    gender:"Male",
    ageee:21,
}
newuser1.greeting = function(){
    console.log(`hello new user ${this.name23},How r u?`);
}

console.log(newuser1.greeting); // [Function (anonymous)], By trying  to access the value of an object like this, if the key has a function as a value then in the terminal only the type of the value will be shown just like here it is only referring an anonymous function.

// Correct way to access is 
console.log(newuser1.greeting());// hello dugu,How r u?
 

