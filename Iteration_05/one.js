//for loop

for (let index = 0; index < 12; index++) {
    const element =index;
    console.log(element);
    
}
// (let index = 0;  variable  declaration
//index < array.length; condition check
//   indexx++ is increment
//console.log(element); we dont have access because it is inn block scope

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
    console.log(`inner loop:${i}`);
    
    for (let j = 0; j <=10; j++) {
        console.log(`ourter loop:${j}and inner loop${i}`);
       
        
        
    }
    
    
}

