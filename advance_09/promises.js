// What is Promise 

// "Producing code" is code that can take some time

//"Consuming code" is code that must wait for the result

// A promise is an object that links the producing code and  consuming code.

// A javascript promise is an object of 3 states

// ===> Pending --> While a Promise object is "pending" (working), the result is undefined. then()
// ===> Fulfilled ---> When a Promise object is "fulfilled", the result is a value. finally()
// ===> Rejected ---> When a Promise object is "rejected", the result is an error object. catch()

// There was a library called Bluebird which was composed of promises and other asynchronous features and it was integrated with ES6 later on.

// let us see some examples of promises

// Example = 1


// there are basically two parts in promises --->>> Resolve and reject

const promiseone = new Promise((resolve,reject)=>{
//do an an asyn task
//database call , cryptography
setTimeout(()=>{
    console.log("db task is completed");
    resolve()
},1000)
})
//how to consume
// >>>++ promiseone.then() have the connection with resolve
 promiseone.then(()=>{ // the is consuming part of promises
    console.log('promise is consumed');
 })
//setTimeout is completed but to properly consume the promises we have to call the resolve()
  // resolve() is directly connected to .then so we have to call it then the .then() will execute..


  //output= 
  //db task is completed // 
 // promise is consumed

 //example = 2
 //we can also write it with  without giving a varibale
     new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log("asyn code number 2 ");
        resolve()
    },2000)
 })
 .then(function(){
    console.log('asyn code is completed');
 })
 //asyn code number 2 
// asyn code is completed

//exaple = 3

// Now we can also pass the pre-created object or ready-made object in the resolve()

const promisethree = new Promise (function(resolve,reject){
    setTimeout(function(){
       resolve({username : "shantanu" ,email: "js@gmail.com"})
    
    },1000)
})
promisethree.then(function(user){
    console.log(user);
})
//{ username: 'shantanu', email: 'js@gmail.com' }

//example =4
const promisefour = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "dugu", password:"1233445678"})
            
        }else{
            reject("ERROR :NOT FOUND")

        }
    },1000)
})
promisefour.then((user)=>{
    console.log(user);
    return user.username

})
.then((username)=>{
    console.log(username);

})
.catch((error)=>{
    console.log(error);
})
//ERROR :NOT FOUND

 //example = 5

  const promisefive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if (!false) {
            resolve({username1: "shantanu "})

            }else{
                reject({ERROR:"SOMETHING WENT WRONG"})
            }
     
    },1000)
  })
  promisefive.then((user1)=>{
    console.log(user1);
    return user1.username1

  })
  .then((username1)=>{
    console.log(username1);

  })
  .catch((error)=>{
    console.log(error);
    log
  })
 // { username1: 'shantanu ' }
 //shantanu
 




