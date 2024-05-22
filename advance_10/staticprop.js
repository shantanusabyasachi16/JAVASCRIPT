// the static keyword is used in classes to define methods and properties that belong to the class itself, not to instances of the class. 
class user {
    constructor( username){
        this.username= username
    }
    logme(){
        console.log(`username: ${this.username}`);
    }
    //createid (){

    static createid(){
    return`123`
    }

}

const letyyy = new user("dugu")

//console.log(letyyy.createid())//123


//after using static

//letyyy.createid is not a function

class  teacher extends user {
    constructor(useranme , password){
        super(useranme)
        this.password = password

    }
}

const  keyyy = new  teacher ("dugu","123456789")
 
console.log(keyyy.logme());

//username: dugu

console.log(keyyy.createid());

// keyyy.createid is not a function

// static keywoard doest not access any child or any class is inheriting
//sc
