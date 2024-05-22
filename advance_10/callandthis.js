
// call

  // The .call() method is particularly useful in scenarios where you want to reuse a function but with a different context or set of arguments.


  function setUsername (username){
    this.username = username
    console.log("called");
}

function createUser (username,gender,password){
 
// setUsername(username) //in this refrence is given but we have to call it..
//.call=

setUsername.call(this,username)//we have to call like this

this.gender = gender
this.password = password
}

const newCall = new createUser("dugu","m",78904)
console.log(newCall);

// The output is 
// called
// createUser { gender: 'm', password: 78904 }

// but to get the username in the object we need to use call and this

//createUser { username: 'dugu', gender: 'm', password: 78904 } 