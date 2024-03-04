const cousre ={
    coursename: "javascript",
    price: "1999",
    courseinstrutor:"hitesh"
}
 cousre.courseinstrutor()//
   const { courseinstrutor} = cousre
   console.log(courseinstrutor);//hitesh
   
   //or by this method
   //// But we can also access the value of the object by destructuring it

    const { courseinstrutor: instuctor} = cousre //destructuring
    console.log(instuctor);//hitesh

    
// Now we will have a little bit of conversation about APIs.



// So API stands for Application Programming Interface, which is basically the way for communication between two computers over a network.



// Before the Api value came up with a .xml structure which was complex then, but now Api comes up with a JSON structure.



// JSON is basically an object without any name,

// EXAMPLE>>


{

    "Name":"shantanu",

    "coursename":"JS in hindi",

    "price":"free"

}





// In JSON structure both value and keywords are written between "".

// SOmetimes JSON values don't come up within an object necessarily, they also come up in an array



 [

    {},

    {},

    {}
]