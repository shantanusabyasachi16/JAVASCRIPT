let myname = "dugu     "
let myname1 = "shantanu     "

//console.log(myname.length);//9 becouse of space occupied
//console.log(myname.truelenghth); undefined

let myhero = ["thor","spiderman"]

let heropower ={
    thor: "hammer",
    spiderman: "sling",


    getheropower : function(){
        console.log(`spidy power is ${this.thor} `);
    }
}

Object.prototype.dugu = function(){
    console.log(`dugu is present in all objects`);
}
//heropower.dugu()//dugu is present in all objects
myhero.dugu()//dugu is present in all objects

//here we created ontop level hirarchy so we can access the prrperty of both array and object i


//let see if we can inject the power in array itself 

Array.prototype.arraydugu = function(){
    console.log(`hi dugu`);
}

myhero.arraydugu()//hi dugu we have the acess

//at last if we give the power to the object we can acces the both array and object but if
// but if we inject the power to array it only inject the power to array not the object      


//inheritance=

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

/*
ChaiAurCode
True length is: 11
hitesh
True length is: 6
iceTea
True length is: 6*/