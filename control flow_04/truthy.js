const useremail = "dugu@gmail.com"
if (useremail) {
    console.log("user have email" );//user have email
}
else{
    console.log("user dont have email");
}

//truthy value - we asuume that  "dugu@gmail.com" is a true value

//IF THER IS A EMPTY STRING  ""

const useremail1 = ""
if (useremail1) {
    console.log("user have email" );
}
else{
    console.log("user dont have email");
}
    //user dont have email
//if there is a empty string it asume that it is a false value

// IF THERE IS ARRAY[]
const useremail2 = []
if (useremail2) {
    console.log("user have email" );
}
else{
    console.log("user dont have email");
}//user have email
//if there is a empty array it assume it to be true

//FALSY VALUE=

//false, 0 ,-0 , BigInt 0n , "" , null, undefined, NaN

//TRUTHY VALUE=

//"0", "false", "  ", [], {}, function(){}


// How to check if the array is empty or having some value


const useremail3 = [345.678]
if (useremail3.length===0) {
    console.log("arry is empty" );//array is not empty
}
else{
    console.log("array is not empty");
}
 // How to check wheather an object is empty or not 

const heelo={}
if (Object.keys(heelo).length===0){
    console.log("object is empty");
}

//object.keys is used for making the object into array
//after that we know in array we use .length property


//+++++++++++++IMPORTANT+++++++++//

const myname= 0
if (myname==0) {
    console.log("hi"); //hi it is true
    
}


const area =""
if (area=="") {
    console.log("hello");//hello it is true
}

