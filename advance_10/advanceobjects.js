// Object.getOwnPropertyDescription

// The Object.getOwnPropertyDescriptor() static method returns an object describing the configuration of a specific property(hidden properties of an object) on a given object 
// And these property of an object are not in the object's prototype chain.


console.log(Math.PI);//3.141592653589793 is a constan value

// let us change the Math.PI value

 Math.PI = 67
 console.log(Math.PI);//3.141592653589793 same value

 // So let us check why it cant be changed

 const descripter =Object.getOwnPropertyDescriptor(Math,"PI")

 console.log(descripter);

 /*
 {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

// As we can see there are some of the hard coded property of the object is there.
// Which is writable,enumerable,configurable all set to false
// So we cant change the value of that object due to those unchangable property.

*/ 


const website = {
    name:"chaicode.com",
    price: "5000",
    isAvailable:" true",

}
console.log(website);
/*{ name: 'chaicode.com', price: '5000', isAvailable: ' true' } */

//let us see is this object has descripter property

console.log(Object.getOwnPropertyDescriptor(website, "isAvailable"));

/*
{
  value: ' true',
  writable: true,
  enumerable: true,
  configurable: true
} 
*/

 // As we can see those hidden property and all are set to true.

 // Can we change the properties value of our customized object?

 // Here comes Object.defineProperty(){}

 // The Object.defineProperties() static method defines new or modifies existing properties directly on an object.

 // so it takes three parameters such as object, its property and it modifications

 console.log(Object.getOwnPropertyDescriptor(website, "name"));
 Object.defineProperty(website,"name",{
    writable: false,
  enumerable: false,

  })
  console.log(Object.getOwnPropertyDescriptor(website, "name"));

/*
{
  value: 'chaicode.com',
  writable: false,
  enumerable: false,
  configurable: true
}
 */

//let us iterate is
/*
for ( let [key,value] of website) {
    console.log(`${key} : ${value}`);
 }*/
 
// It says object is not iterable , the reason can be of many reasons
// So to iterate it we have to use Object.entries() instead of the object

for ( let [key,value] of Object.entries(website) ) {
  console.log(`${key} : ${value}`);
}
/*
price : 5000
isAvailable :  true*/

 

