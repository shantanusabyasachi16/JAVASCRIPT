// A switch statement is a control flow statement used to perform different actions based on different conditions.
/*The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.

Example*/

 //basic syntax-
/*switch (key) { //key value which i have to check
    case value:
        
        break;

    default:
        break;
}*/

const month =3
switch (month) { /// month is key
    case 1: 
        console.log("january");
        break;
    case 2: 
        console.log("february");
        break;
    case 3: 
        console.log("march");//march
        break;
    case 4: 
        console.log("april");
        break;
    case 5: 
        console.log("may");
        break;

    default: 
    console.log( "default case load");////  if any of this case is not true then the default value will execute
        break;
}

//IMPORTANT.......
//IF ANY OF THIS CONDITION IS MATCHED THEN ,EVERY CODE IS EXECUTED AFTER THAT EXPECT THE DEFAULT VALUE
// THATSWHY BREAK  IS IMPORTANT

//IF THERE IS A STRING VALUE
   
const mon= "april"
switch (mon) {
    case "jan":
        console.log("januaary");
        break;
    case "feb":
        console.log("february");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default not loading");
        break;
}
