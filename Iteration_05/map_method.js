 const newnumber =[ 1,2,3,4,5,6,7,8,9,10]
const newnum= newnumber.map((num) => num+10)
//const newnum= newnumber.map((num) => { return num+10})
 //console.log(newnum);
 /*[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]*/

// method chainning

// we can use two three methods at same time

const avgnum =[ 1,2,3,4,5,6,6,7,8]
const newavg = avgnum
                .map((num)=> num *10)

/* [10, 20, 30, 40, 50,  60, 60, 70, 80]*/
                  
                  
                .map((num) => num+2)

/*[12, 22, 32, 42, 52,62, 62, 72, 82]*/

                .filter((num => num>30))

/*[32, 42, 52, 62, 62, 72, 82]*/

                console.log( newavg);

 

 
 