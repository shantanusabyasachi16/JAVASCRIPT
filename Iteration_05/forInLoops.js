// FOR IN LOOP

//The JavaScript for in statement loops through the properties of an Object.

// This loops iterates through an object to acces its keys and their values

const myobject={
    vk: "viart",
    dk: " dinesh",
    gg: "gautam",
}
for (const key in  myobject) {
   // console.log(key);
    
//it only the key value
/*vk
dk
gg*/

/*to get the values =
for (const key in  myobject) {
    console.log(myobject[keys]);
    
}

viart
 dinesh
gautam*/
console.log(`${key}  shortcut is for ${myobject[key]} `);}

/*vk  shortcut is for viart 
dk  shortcut is for  dinesh
gg  shortcut is for gautam*/


// can we forinloops in array
 
const ipl= ["kkr","rcb","csk","mi"]
 for (const key in ipl) {
    console.log(ipl[key]);
    
 }
 /*kkr
rcb
csk
mi*/