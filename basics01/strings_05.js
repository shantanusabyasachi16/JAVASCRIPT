const name = "dugu"
 const repocount = 30
//   console.log( name+repocount+"value");
// concatenation means to link together. we often use it programming  to concatenation to combine strings , arrays,and other data structures

console.log(`Hello my name ${name} and my repocount is ${repocount}`);

//It is knows as strings interpolation. It is concept to embed variables or expressions within a strings.


const gameName = new String('shantan-u- com')
console.log(gameName);

// The advantage of declaring a string ina objective way is
//there are some predefined prototype functions or method are available.
//ex-


 console.log(gameName[1]);//h
 console.log(gameName.length);//14
  console.log(gameName.toUpperCase()); //SHANTAN-U-COM

  //it doesn't change the original value

  console.log(gameName.charAt(4)); //T
  console.log( gameName.indexOf('h'));//1

  
 
 const newstring = gameName.substring(0,5)
  console.log(newstring);//shant
  //it can't take negative values.
    
  const anotherstring =gameName.slice(-9,3)
  console.log(anotherstring);//sha

   const newstring0ne = "   my name   "
   console.log(newstring0ne);
   console.log(newstring0ne.trim());//   my name
   my name
   //it removes the white space characters.

   const url = "https://dugu.com/duguguu%20off"//https://dugu.com/duguguu-off
   console.log(url.replace('%20','-'));

   console.log(url.includes('dugu'));//true
   console.log(url.includes('myname'));//false

   console.log( gameName.split('-'));//[ 'shantan', 'u', ' com' ]
//It splits the string on the basis of a particular parameter here it is "-"





 
