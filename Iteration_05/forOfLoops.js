// for of 

// These are array specific loops

// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more

/*
for (const iterator of object) { 
    
}*/ //iterator is noting but the  the i value   and object is  what object we want do add in the loop

const arry=[1,2,3,4,5,6,7]
for (const num of arry) {
    console.log(num);
    
}//it will print the value  from 1 to 7


// WE can also use in string

const greet ='pranam'

for (const i of greet) {
    console.log(`messages are ${i} `);
    
}

/*

>> messages are a
>> messages are m
>> messages are a
>> messages are s
>> messages are t
>> messages are e
>>

*/