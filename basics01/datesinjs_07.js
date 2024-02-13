//date
 let mydate = new Date()
 console.log(mydate.toString());//Tue Feb 13 2024 09:47:19 GMT+0530 (India Standard Time)
 console.log(mydate.toDateString());//Tue Feb 13 2024
 console.log(mydate.toLocaleString());//13/2/2024, 9:47:19 am
 console.log(typeof mydate);//object

  //let mynewdateone = new Date( 2024,1,23,5,3)    //23/2/2024, 5:03:00 am
  let mynewdateone = new Date("02,13,2023") //13/2/2023, 12:00:00 am
  console.log( mynewdateone.toLocaleString());
    

   //timestamp = This is something by which we can get the particular time from start.
    let mytimestamp =Date.now()
    console.log(mytimestamp);