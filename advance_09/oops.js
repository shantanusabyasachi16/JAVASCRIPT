const user = {
    username: "dugu",
    signedIn :  "true",
    sec : "B",

getuserdata:()=>{
    console.log("got the user data from database");

}
}
//console.log(user.signedIn);//true
//console.log(user.username); //dugu
//console.log(user.sec);//B


//function refrence = 
//console.log(user.getuserdata());
//got the user data from database

 const capital = {
    odisha : "Bbsr",
    westbengal : " kolkata",
    Bihar: "Patna",
    Haryana: "Chandigarh",
    


    getuserdetails: function(){
        console.log(`The capital of odisha is:${this.odisha}`);
         // So here the current context is defined with "this".

        //The capital of odisha is:Bbsr

    }


 }
 console.log(capital.getuserdetails());
 
const mark = {
    math : "97",
    physics : "87",
    chemistry :"79",
    getdata: function(){
        console.log(this);
    }
}
//console.log(mark.getdata());
/*{
    math: '97',
    physics: '87',
    chemistry: '79',
    getdata: [Function: getdata]
  }*/ 
  //console.log(this); //{}  empty object but
  // we wiil get window object in browser which have many prototypes


  function user1 (username, logincount, isloggedIn){
    this.username = username,
    this.logincount = logincount,
    this.isloggedIn = isloggedIn 
    return this
  }
 const userone = user1("virat", "38","true")
 //console.log(userone);
 /*username: 'virat',
  logincount: '38',
  isloggedIn: 'true'*/
  const userTwo = user1("sai",99, true)
  console.log(userone);
  /*username: 'sai',
  logincount: 99,
  isloggedIn: true*/ // it wiill override the previous value

  //new keyword  = it will always give a new instance

  const userthree = new user1 ("rami",59, false)
  console.log(userthree);
  //user1 { username: 'rami', logincount: 59, isloggedIn: false }
  const userFour = new user1("shnatnu",22,true)
  console.log(userFour);
  console.log(userFour instanceof user1);  //true
  //user1 { username: 'rami', logincount: 59, isloggedIn: false }
//user1 { username: 'shnatnu', logincount: 22, isloggedIn: true }// it is not overridding
