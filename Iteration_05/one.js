//for loop

for (let index = 0; index < 12; index++) {
    const element =index;
    //console.log(element);
    
}
//console.log(element2);
// (let index = 0;  variable  declaration
//index < array.length; condition check
//   indexx++ is increment
//console.log(element2); we dont have access because it is inn block scope

/*0
1
2
3
4
5
6
7
8
9*/

for (let i = 0; i <=10; i++) {
    //console.log(`inner loop:${i}`);
    
    for (let j = 0; j <=10; j++) {
        console.log(`ourter loop:${j}and inner loop:${i}`);
        //table printing
       console.log(i +'*'+ j +'='+ i*j);
        }
    }
    //
 let myarray =["ironman","superamn","spiderman","thor"]
console.log(myarray.length);//4
    for (let index = 0; index < myarray.length; index++) {
        const element = myarray[index];
        console.log(element);
        
    }
/*
4
ironman
superamn
spiderman
thor*/

// break

for (let index = 1; index <=15; index++) {
    if (index==5) {
        console.log("5 is detected");
        break// 5 is detected
        
    }
  
    console.log(`value of i ${index} `);
    
}
 // continue
  
for (let index = 1; index <=15; index++) {
    if (index==5) {
        console.log("5 is detected");
        continue// 5 is detected 
        //continue  is used forcontinue keyword is used within loops to skip the current iteration and proceed to the next iteration of the loop.
        
    }
  
    console.log(`value of i ${index} `);
    
}
/*
value of i 1
value of i 2
value of i 3
value of i 4
5 is detected
value of i 6
value of i 7
value of i 8
value of i 9
value of i 10
value of i 11
value of i 12
value of i 13
value of i 14
value of i 15
*/
