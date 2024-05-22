//Inheritance in JavaScript allows one class to inherit properties and methods from another class, enabling code reuse and the creation of a hierarchical class structure.
// JavaScript uses prototype-based inheritance, but with the introduction of ES6, class-based syntax was introduced, making it easier to work with inheritance.
class user {
    constructor(username){
        this.username = username
    }

   //for calling the class
    logMe(){  
        console.log(`USERNAME ${this.username}`);
    }
}


//how to acesses the user =
//extends= 

class teacher extends user {
    constructor(username, email, password){

        //setUsername.call(this,username) wee have to call like this but in  classes there is a keyword  called super()

        super(username)
        this.email= email
        this .password = password
    }
//for calling the clasxs
    addcousre(){
        console.log(`New Course is Added ${this.username}`);

    }
}

const js = new teacher("dugu"," @gmail.com", "12345678")


js.addcousre()

// New Course is Added dugu


const newjs = new teacher ("youtube")
//newjs.addcousre() //dont have access
newjs.logMe()//USERNAME youtube

console.log(js===newjs);//false

console.log(js instanceof teacher); //true
console.log( teacher instanceof user);// false