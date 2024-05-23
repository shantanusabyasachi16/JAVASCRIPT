// Getters

//A getter is a method that gets called when you try to access a property of an object.

//It allows you to execute some code before returning the property value.

// Getters are defined using the get keyword followed by the property name.

// Setter

// A setter is a method that gets called when you try to assign a value to a property of an object.

// It allows you to execute some code before setting the property value. Setters are defined using the set keyword followed by the property name.


class user {
    constructor(email, password){
        this.email = email
        this. password = password

    }
    //when use get method we have to return the value
    //by applying the properties/variable... the getters and setters automatically  became mathods
    //to get the value of the class fom outside
    get password(){
        return this.password.toUpperCase()
    }
    //we have to setter  method once we use getter
    //to set the value of class
    //in setters we have to pass a parameter=Set password(value)

   set password(value){
        this.password= value
    }
    
}
const dugu = new  user ("dugu@gmail.com","12345678")

//output=
//RangeError: Maximum call stack size exceeded
//it is happening because  both class and set are trying to set the value
//to overcome this we have to do add an underscore to this._password in both getters and setters

class user {
    constructor(email, password){
        this.email = email
        this. password = password

    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
   
    get password(){
        return this._password.toUpperCase()
       //return`${this._password}gudu`
    }
    
   set password(value){
        this._password= value
    }
    
}
//const dugu = new  user ("dugu@gmail.com","12345678")
//console.log(dugu.password);//12345678


const dugu = new user ("dugu@gmail.com","abc")
console.log(dugu.password); //ABC
console.log(dugu.email);//DUGU@GMAIL.COM

//return`${this._password}gudu` = output=abcgudu  it is bascically use if we dont want to give the real acess to anyone
