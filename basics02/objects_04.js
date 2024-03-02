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
  
  
