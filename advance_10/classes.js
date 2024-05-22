//classes provide a way to create objects with a defined structure and behavior. 
//They were introduced in ECMAScript 2015 (ES6) and are essentially syntactic sugar over JavaScript's existing prototype-based inheritance.
class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptpassword(){
        return `${this.password}abc`
    }
    chnageusername(){
        return`${this.username.toUpperCase()}`
    }

}
const user1 = new user ("dugu","shantanu@gmail.com","123")
console.log(user1.encryptpassword());
console.log(user1.chnageusername());//DUGU

//123abc

//   behind the scene

function user11(username, email, password){
    this.username = username
    this.email = email
    this.password = password
  
  }
  user11.prototype.encryptpassword = function(){
    return `${this.password}abc`
  }
  user11.prototype.chnageusername = function(){
    return `${this.username.toUpperCase()}`
  }
  const user23 = new user11 ("gudu","dugu@gmailcom","123355")
  console.log(user23.encryptpassword());//123355abc
  console.log(user23.chnageusername());//GUDU