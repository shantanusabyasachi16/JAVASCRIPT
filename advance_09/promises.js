/ What is Promise 

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
  }).finally(() =>{ console.log("The promise is either resolved or rejected")})
 // { username1: 'shantanu ' }
 //shantanu
 // The code in the finally() defines the end message irrespective of the results.

//example = 6


// There is another way to execute the program with the promise object

// With the async and await keyword

// These are mostly used like the then() and the catch()

// But it does not have the catch() or similar type of method where it can catch the error

// These are mostly used for the backend responses

// Once the response is there the code will be executed

//diffrence   =

// Promises use .then() and .catch() methods to handle asynchronous operations.


// async/await provides a more synchronous style of coding. You use the async keyword before a function declaration to mark it as asynchronous,
//  and then use the await keyword within the function to pause execution until a promise is resolved.


const promo = new Promise(function (resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123456"})

        }else{
            reject("ERROR: js not founded")
        }
    },1000)

})
const ip = async function (){
    const response = await promo
    console.log(response);

}
ip()
//{ username: 'javascript', password: '123456' }

// there is also another way to catch the error while using async and await


const promo1 = new Promise(function (resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123456"})

        }else{
            reject("ERROR: js not founded")
        }
    },1000)

})
const ip1 = async function (){
    try{
        const response = await promo1
        console.log(response);
    } 
    catch(error){
        console.log(error);

    }
    
}
ip1()
//ERROR: js not founded

///fetch
//fetch is a modern JavaScript API for making network requests (HTTP requests) in the web browser. 
//It provides a more powerful and flexible way to fetch resources from a server compared to older techniques like XMLHttpRequest (XHR).


//example= 8
// by async function using try and catch
async function getdata (){
   try {
    const response = await fetch("https://api.github.com/users/shantanusabyasachi16")
    const data = await response.json()// to convert it into json format as it is instring format
    console.log(data);
   } catch (error) {
    console.log(error);
   }
}
getdata()

//another way using .then and .catch

fetch("https://api.github.com/users/shantanusabyasachi16")
.then((response)=>{
    return response.json()

}).then((data)=>{
    console.log(data);

}).catch((error)=>{
    console.log(error);

}).finally(()=>{
    console.log("The data is either fetch or not fetched");
})
