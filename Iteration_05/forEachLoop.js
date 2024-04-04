// The forEach() method of an array executes a provided function for each array element.

const coding=["js","java","c++","c"]

 //for (const i of coding) {
   // console.log(i);
    
 //}
  // for (const key in coding) {
    
    //console.log(coding[key]);
    //}

    /// for each loop

    coding.forEach(function (i) {
       // console.log(i);
        
    })
   
/*js
java
c++
c*/ 

// in arrow function ( () =>{} )
coding.forEach((i)=>{
   // console.log(i);
})
 /*js
java
c++
c*/ 
// We can also use a existing function as the parameter in the forEach iteration method od=f an array instances.

function printme(item){
  console.log(item);
}
coding.forEach(printme)
/*js
java
c++
c*/
// The function we use in forEach() itertaion method can have more than one parameter.

// the parameters can be default parameter as index and arr

coding.forEach((item , index ,arr) => {
  console.log( item, index, arr);
})
/*js 0 [ 'js', 'java', 'c++', 'c' ]
java 1 [ 'js', 'java', 'c++', 'c' ]
c++ 2 [ 'js', 'java', 'c++', 'c' ]
c 3 [ 'js', 'java', 'c++', 'c' ]*/ 

// Now let us see how we can implement the forEach() iteration method in an array of objects.
//imporrtant

const myobject = [ {
  moviename:"Dunki" ,
  starname: "srk"
},
{
  moviename:"singham" ,
  starname: "ajay"
},
{
  moviename:"kick" ,
  starname: "salman"
},

]

myobject.forEach( (index) => {
  console.log(index.moviename);
})
/*Dunki
singham
kick*/ 