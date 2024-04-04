/*MAPS


// The Map object holds key-value pairs and remembers the original insertion order of the keys.

// Any value like all the primitive datatypes and object can be the value of the "valu"e and "key" keyword.

// It doesnot store repeated values .

// Essential map methods to perform

// We can create a javascript map by passing an array to new Map()

new Map()	Creates a new Map object
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
clear()	Removes all the elements from a Map
delete()	Removes a Map element specified by a key
has()	Returns true if a key exists in a Map
forEach()	Invokes a callback for each key/value pair in a Map
entries()	Returns an iterator object with the [key, value] pairs in a Map
keys()	Returns an iterator object with the keys in a Map
values()	Returns an iterator object of the values in a Map*/
 
// 1.new Map()

// The new Map() method creates a new map object.
 const  mymap = new Map()
 mymap.set('in' , "India")
 mymap.set('UK' , "United kingdom")
 mymap.set('fr' , " france")
 
 
 console.log(mymap);//{ 'in' => 'India', 'UK' => 'United kingdom', 'fr' => ' france' }
 
 //if there is a another samekey with same value
 /*const  mymap = new Map()
 mymap.set('in' , "India")
 mymap.set('UK' , "United kingdom")
 mymap.set('fr' , " france")
 mymap.set('in' , "India")
 console.log(mymap);// it will not print because it doest not  print the duplicate value*/


//  if there is a same key with difrrent value then it will print the recent value

/* const  mymap = new Map()
 mymap.set('in' , "India")// it will not print
 mymap.set('UK' , "United kingdom")
 mymap.set('fr' , " france")
 mymap.set('in' , "Indiaaaaa")//the new value will print
 console.log(mymap);*/

 /* if we change the key   then it will print the new value
 const  mymap = new Map()
 mymap.set('in' , "India")
 mymap.set('UK' , "United kingdom")
 mymap.set('fr' , " france")
 mymap.set('inggg' , "India")
 
 console.log(mymap);/*{
    'in' => 'India',
    'UK' => 'United kingdom',
    'fr' => ' france',
    'ing' => 'India'
  }*/

  // every key has a unique value but the value can be dupilcate

  // how to use loop
   //for (const key of mymap) {
   // console.log(key);}
    
   
   /*[ 'in', 'India' ]
[ 'UK', 'United kingdom' ]
[ 'fr', ' france' ]
[ 'ing', 'India' ]*/

// it comes in array but we want diffent values so to overcome this

for (const [key ,value] of mymap) {
    
    console.log(key,':-', value);
}

/*in :- India
UK :- United kingdom
fr :-  france*/

// if there is a object
 const myobject={
  game1: "NFS",
  game2: "bgmi"
 }
  for (const [key , value] of myobject) {
    console.log(key,':-', value);//TypeError: myobject is not iterable
   
    
  }
