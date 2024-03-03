//singleton or through a construtor
 //const newapp = new Object()// it is a singleton object

  const newapp1 ={} // it is a non-singleton object
  newapp1.id= "123@abc"
  newapp1.name="dugu"
  newapp1.isloggedIN= false


  console.log(newapp1);//{ id: '123@abc', name: 'dugu', isloggedIN: false }
  
  //// We can add an object in the object 

  const regularuser ={
    email: "dugu@gmail.com",
     fullname : {
        username :{
            firstname : "shantanu",
            lastname : "swain",

        }
     }
    
  }
  console.log(regularuser.fullname.username.firstname); 

  // We can join the two different objects into one object
  
  
   const obj1 ={
      1: "a" , 2: "b"
   }
   const obj2 ={
      3:"c", 4:"d"
   } 
     
   const obj3 = { obj1,obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
   const obj3 = Object.assign(obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
    
   console.log(obj3);
  
  
// And the appropriate way is

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// The assign() is used to join two elements of different objects in a single object.

// We can also use the spread operator to combine different objects.

const obje1 = {1:"dugu",2:"gudu"}
const obje2 = {3:"cuttack",4:"dhoni"}
  
const obje3 ={...obje1,...obje2} //commonly used method
console.log(obje3);//{ '1': 'dugu', '2': 'gudu', '3': 'cuttack', '4': 'dhoni' }

//While retrieving data from the database the objects come up in the array

 const user =[{
   id:34,
   email: "s@gamail.com "
 },
   {
      id:56,
      email:"gdg@gmail.com",
   }
 
]

console.log(user[1].email);//gdg@gmail.com... we access those values like this...
 
