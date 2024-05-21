const user = {
    username: "dugu",
    signedIn :  "true",
    sec : "B",

getuserdata:()=>{
    console.log("got the user data from database");

}
}
//console.log(user.signedIn);//true
//console.log(user.username); //dugu
//console.log(user.sec);//B


//function refrence = 
//console.log(user.getuserdata());
//got the user data from database

 const capital = {
    odisha : "Bbsr",
    westbengal : " kolkata",
    Bihar: "Patna",
    Haryana: "Chandigarh",
    


    getuserdetails: function(){
        console.log(`The capital of odisha is:${this.odisha}`);
         // So here the current context is defined with "this".

        //The capital of odisha is:Bbsr

    }


 }
 console.log(capital.getuserdetails());
 
const mark = {
    math : "97",
    physics : "87",
    chemistry :"79",
    getdata: function(){
        console.log(this);
    }
}
//console.log(mark.getdata());
/*{
    math: '97',
    physics: '87',
    chemistry: '79',
    getdata: [Function: getdata]
  }*/ 
  //console.log(this); //{}  empty object but
  // we wiil get window object in browser which have many prototypes


  function user1 (username, logincount, isloggedIn){
    this.username = username, //this is used for current context..
    this.logincount = logincount,
    this.isloggedIn = isloggedIn 
    return this
  }
 const userone = user1("virat", "38","true")
 //console.log(userone);
 /*username: 'virat',
  logincount: '38',
  isloggedIn: 'true'*/
  const userTwo = user1("sai",99, true)
  console.log(userone);
  /*username: 'sai',
  logincount: 99,
  isloggedIn: true*/ // it wiill override the previous value

  //new keyword  = it will always give a new instance

  const userthree = new user1 ("rami",59, false)
  console.log(userthree);
  //user1 { username: 'rami', logincount: 59, isloggedIn: false }
  const userFour = new user1("shnatnu",22,true)
  console.log(userFour);
  console.log(userFour instanceof user1);  //true
  //user1 { username: 'rami', logincount: 59, isloggedIn: false }
//user1 { username: 'shnatnu', logincount: 22, isloggedIn: true }// it is not overridding

// is function is an object?
//function is a function  and also technically an object


function addby5 (num){
    return num+5
}
addby5.power = 5
console.log(addby5(5)); //10
console.log(addby5.power);//5
console.log(addby5.prototype); //{}

//new keyword===

function createuser (username, score){
    this.username = username
    this.score =  score
}
createuser.prototype.increment = function(){
this.score++
}

createuser.prototype.print = function(){
    console.log(`price is ${this.score}`);
}
const chai = new createuser("chai",20)
const coffee = new createuser("coffee",40)


chai.print( )
coffee.print()
//price is 20
/*
 new =

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/



