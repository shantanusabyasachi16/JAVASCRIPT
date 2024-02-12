const score = 200
console.log(score);
 
//We can also define a variable storing numbers by specifically casting this with a number.
const balance = new Number(300)
console.log(balance);


console.log(balance.toString().length); // it will become string. it adds additional properties..of strings
console.log(balance.toFixed(3));
 

const othernumber = 23.9876
   
console.log(othernumber.toPrecision(2)); // it will return string type value
   
const rate =1000000
 console.log(rate.toLocaleString());



 //+++++++++++++++++    MATH   ++++++++++++++++++++++//


console.log(Math);// it is an object with many properties and methods are present.

console.log(Math.abs(-4)); //4
// .abs() method converts the negative number into a positive one.

 console.log(Math.round(5.9));//6
 // .round() converts a decimal number into an round figured integer.

 console.log( Math.ceil(8.2));//9
 // .ceil() method will always round up decimal number with upper value.

 console.log(Math.floor(8.9));//8
// .floor(0) method will always chhose the lower value to round up the decimal number.


console.log(Math.min(2,6,9));//2 is the minimum value...
console.log( Math.max(456.4789,38990,9988));//38990 is the maximum  value...


